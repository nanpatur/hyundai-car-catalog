import { Box, Button, Center, Container, Flex, Grid, GridItem, Heading, HStack, Icon, Image, SimpleGrid, Spacer, Stack, StackDivider, Text, useColorModeValue, useDisclosure } from '@chakra-ui/react'
import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import CaptionCarousel from '../components/Carousel'
import { FaCarSide, FaDollarSign, FaPercentage, FaRegHandshake, FaTools, FaWallet } from 'react-icons/fa';
import Testimonial from '../components/Testimonial';
import axios from 'axios';
import { useRouter } from 'next/router';

const SplitWithImage = () => {
  return (
    <Container maxW='container.lg' py={{ base: '40px', lg: '80px' }}>
      <Stack direction={{ base: 'column', md: 'row' }} spacing={12}>
        <Stack spacing={0} minW='55%'>
          <Heading>Kredit dan Cicilan</Heading>
          <Heading color='#ec162b'>Mobil Honda</Heading>
          <Grid templateColumns={'repeat(2, 1fr)'} gap={8} pt={8}>
            <GridItem p='16px' bg='#fff' shadow='0 10px 20px rgb(0 0 0 / 8%)'>
              <Stack spacing='12px'>
                <FaDollarSign size='32px' color='#ec162b' />
                <Text fontWeight='bold' fontSize='18px'>DP Ringan</Text>
              </Stack>
            </GridItem>
            <GridItem p='16px' bg='#fff' shadow='0 10px 20px rgb(0 0 0 / 8%)'>
              <Stack spacing='12px'>
                <FaWallet size='32px' color='#ec162b' />
                <Text fontWeight='bold' fontSize='18px'>Pembayaran Mudah</Text>
              </Stack>
            </GridItem>
            <GridItem p='16px' bg='#fff' shadow='0 10px 20px rgb(0 0 0 / 8%)'>
              <Stack spacing='12px'>
                <FaRegHandshake size='32px' color='#ec162b' />
                <Text fontWeight='bold' fontSize='18px'>Proses Cepat</Text>
              </Stack>
            </GridItem>
            <GridItem p='16px' bg='#fff' shadow='0 10px 20px rgb(0 0 0 / 8%)'>
              <Stack spacing='12px'>
                <FaCarSide size='32px' color='#ec162b' />
                <Text fontWeight='bold' fontSize='18px'>Free Testdrive</Text>
              </Stack>
            </GridItem>
          </Grid>
        </Stack>
        <Flex>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={
              'https://im.rediff.com/money/2021/jun/07how-to-buy-anew-car-9.jpg'
            }
            objectFit={'cover'}
          />
        </Flex>
      </Stack>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const bannerList = await axios.get(
    "https://script.google.com/macros/s/AKfycbwVAHTmnoQ6ItpkMwysbff3khZgiBxTvS9uEQGx6xEyt7p2RBP3PFeYBGQ5tUsAU5U/exec?action=read&table=banner"
  );
  const carList = await axios.get(
    "https://script.google.com/macros/s/AKfycbwVAHTmnoQ6ItpkMwysbff3khZgiBxTvS9uEQGx6xEyt7p2RBP3PFeYBGQ5tUsAU5U/exec?action=read&table=mobil"
  );
  const testimoniList = await axios.get(
    "https://script.google.com/macros/s/AKfycbwVAHTmnoQ6ItpkMwysbff3khZgiBxTvS9uEQGx6xEyt7p2RBP3PFeYBGQ5tUsAU5U/exec?action=read&table=testimoni"
  );
  return {
    props: {
      bannerList: bannerList.data.data,
      testimoniList: testimoniList.data.data,
      carListGrouped: carList.data.data.reduce(
        (objectsByKeyValue: any, obj: any) => {
          const value = obj["name"];
          objectsByKeyValue[value] = {
            ...objectsByKeyValue[value],
            name: obj["name"],
            types: (objectsByKeyValue[value]?.types || []).concat(
              obj
            ),
            picture_urls: obj["picture_url"] ? (objectsByKeyValue[value]?.picture_urls || []).concat(
              obj["picture_url"].split(';')
            ) : (objectsByKeyValue[value]?.picture_urls || [])
          };
          return objectsByKeyValue;
        },
        {}
      ),
    },
  };
};

const Home: NextPage = ({ bannerList, carListGrouped, testimoniList }: any) => {
  const router = useRouter()
  const carList = Object.keys(carListGrouped).map((key) => carListGrouped[key]).slice(0, 3);
  const formatCurrency = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumSignificantDigits: 3 })

  return (
    <>
      <Head>
        <title>Honda Indonesia The Power Of Dream | Hondaku</title>
        <meta name="description" content="Dapatkan informasi lengkap seputar pembelian mobil Honda terbaru disini." />
      </Head>
      <Stack maxW='100%' align='center' spacing='0'>
        <CaptionCarousel bannerList={bannerList} />
        <Center
          w='full'
          backgroundImage="url(https://smartdata.tonytemplates.com/caleader/wp-content/themes/caleader/assets/images/wrapper-section/wrapper-section-01.png)"
        >
          <SplitWithImage />
        </Center>
        <Center bg='#ec162b' w='100%' py={{base: '12px', lg: '16px'}}>
          <Container maxW='container.lg'>
            <Stack direction={{ base: 'column', lg: 'row' }} spacing={{ base: '8px', lg: '24px' }} align='center'>
              <Box display={{ base: 'none', lg: 'block' }}>
                <FaPercentage size='60px' color='#fff' />
              </Box>
              <Box>
                <Text color='#fff' fontSize='32px' fontWeight='bold' align={{ base: 'center', lg: 'left' }}>Promo 2022</Text>
                <Text color='#fff' fontSize='14px' align={{ base: 'center', lg: 'left' }}>Pajak PPnBM 0 persen, turun harga mobil baru hingga Rp 21 juta. DP & angsuran ringan FREE Test Car & Free konsultasi simulasi kredit</Text>
              </Box>
              <Spacer />
              <Button variant='solid' bg='#fff' color='#ec162b' size='lg' borderRadius='full'>Ambil Promo</Button>
            </Stack>
          </Container>
        </Center>
        <Center w='100%' py='40px' bg='#f7f7f7'>
          <Container maxW='container.lg'>
            <Stack spacing='24px'>
              <Text fontSize='32px' fontWeight='bold' align='center'>PILIHAN MOBIL</Text>
              <Grid templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(3, 1fr)'}} gap={3}>
                {
                  carList.map((car) => (
                    <GridItem key={car} w='100%' bg='#fff' shadow='sm' overflow='hidden'>
                      <Stack spacing='0'>
                        <Center>
                          <Box
                            backgroundImage={`url(${car.picture_urls[0]})`}
                            backgroundSize='contain'
                            backgroundPosition='center'
                            backgroundRepeat='no-repeat'
                            width='80%'
                            height='150px'
                          />
                        </Center>
                        <HStack>
                          <Text fontSize='16px' fontWeight='bold' pl='12px' noOfLines={2}>{car.name}</Text>
                          <Spacer />
                          <Box color='#fff' p='8px' position='relative' overflow='hidden' width='' h='60px' minW='150px'> 
                            <Center h='full' w='full' position='absolute' zIndex='9' p='12px' top='0' right='0'>
                              <Box align='right' w='full'>
                                <Text fontSize='10px'>Mulai dari</Text>
                                <Text fontSize='16px' fontWeight='bold'>{formatCurrency.format(car.types[0].price_mt || car.types[0].price_cvt)}</Text>
                              </Box>
                            </Center>
                            <Box bg='#ec162b' transform='skewX(-15deg)' h='full' w='full' position='absolute' top='0'></Box>
                          </Box>
                        </HStack>
                      </Stack>
                    </GridItem>
                  ))
                }
              </Grid>
              <Center w='100%' pt='24px'>
                <Button colorScheme='black' variant='outline' onClick={() => router.push('/katalog-mobil', undefined, { scroll: true })}>Lihat Semua Mobil</Button>
              </Center>
            </Stack>
          </Container>
        </Center>
        <Center
          w='full'
          h='500px'
          backgroundImage='linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ), url(https://img.freepik.com/photos-gratuite/fond-atelier-voiture_23-2147897921.jpg?size=626&ext=jpg)'
          backgroundSize='cover'
          backgroundPosition='center'
          backgroundRepeat='no-repeat'
          // backgroundAttachment='fixed'
        >
          <Container maxW='container.lg'>
            <Stack align='center' w='full' color='#fff'>
              <FaTools size='80px' />
              <Text fontWeight='bold' fontSize='40px'>Sparepart dan Aksesories</Text>
              <Text fontWeight='bold' fontSize='20px'>Menyediakan berbagai jenis Sparepart dan Aksesories mobil Honda lengkap dan berkualitas</Text>
              <Spacer />
              <Button size='lg' borderRadius='0' colorScheme={'red'}>Hubungi Kami</Button>
            </Stack>
          </Container>
        </Center>
        {testimoniList.length && <Testimonial testimoniList={testimoniList} />}
      </Stack>
    </>
  )
}

export default Home
