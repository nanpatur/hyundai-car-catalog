import { Box, Button, Center, Container, Flex, Grid, GridItem, Heading, HStack, Icon, Image, SimpleGrid, Spacer, Stack, StackDivider, Text, useColorModeValue } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { ReactElement } from 'react';
import CaptionCarousel from '../components/Carousel'
import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
} from 'react-icons/io5';
import { FaCarSide, FaDollarSign, FaPercentage, FaRegHandshake, FaTools, FaWallet } from 'react-icons/fa';
import Footer from '../components/Footer';
import Testimonial from '../components/Testimonial';

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex
        w={8}
        h={8}
        align={'center'}
        justify={'center'}
        rounded={'full'}
        bg={iconBg}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

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
                <Text fontSize='14px'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Text>
              </Stack>
            </GridItem>
            <GridItem p='16px' bg='#fff' shadow='0 10px 20px rgb(0 0 0 / 8%)'>
              <Stack spacing='12px'>
                <FaWallet size='32px' color='#ec162b' />
                <Text fontWeight='bold' fontSize='18px'>Pembayaran Mudah</Text>
                <Text fontSize='14px'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Text>
              </Stack>
            </GridItem>
            <GridItem p='16px' bg='#fff' shadow='0 10px 20px rgb(0 0 0 / 8%)'>
              <Stack spacing='12px'>
                <FaRegHandshake size='32px' color='#ec162b' />
                <Text fontWeight='bold' fontSize='18px'>Proses Cepat</Text>
                <Text fontSize='14px'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Text>
              </Stack>
            </GridItem>
            <GridItem p='16px' bg='#fff' shadow='0 10px 20px rgb(0 0 0 / 8%)'>
              <Stack spacing='12px'>
                <FaCarSide size='32px' color='#ec162b' />
                <Text fontWeight='bold' fontSize='18px'>Free Testdrive</Text>
                <Text fontSize='14px'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Text>
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

const Home: NextPage = () => {
  const items = [1,2,3,4,5,6]
  return (
    <Stack maxW='100%' align='center' spacing='0'>
      <CaptionCarousel />
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
                items.map((item) => (
                  <GridItem key={item} w='100%' bg='#fff' shadow='sm' overflow='hidden'>
                    <Stack spacing='0'>
                      <Box
                        backgroundImage='url(https://static.carmudi.co.id/2BxyntZMoHlURLmF1Soq35vHLIs=/900x405/http://trenotomotif.com/ncs/images/honda/CityHatchbackRS/Honda-City-Hatchback%20RS.jpg)'
                        backgroundSize='cover'
                        backgroundPosition='center'
                        backgroundRepeat='no-repeat'
                        width='100%'
                        height='150px'
                        alt='car'
                      />
                      <HStack>
                        <Text fontSize='16px' fontWeight='bold' pl='12px' noOfLines={2}>CITY HATCHBACK</Text>
                        <Spacer />
                        <Box color='#fff' p='8px' position='relative' overflow='hidden' width='' h='60px' minW='120px'> 
                          <Center h='full' w='full' position='absolute' zIndex='9' p='12px' top='0' right='0'>
                            <Box align='right' w='full'>
                              <Text fontSize='10px'>Mulai dari</Text>
                              <Text fontSize='16px' fontWeight='bold'>Rp 333 Juta</Text>
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
              <Button colorScheme='black' variant='outline'>Lihat Semua Mobil</Button>
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
      <Testimonial />
      <Footer />
    </Stack>
  )
}

export default Home
