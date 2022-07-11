import { Box, Button, Center, Container, Grid, HStack, Spacer, Stack, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { openWhatsappLink } from "../../utils/whatsappLink";

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const carList = await axios.get(
    "https://script.google.com/macros/s/AKfycbwVAHTmnoQ6ItpkMwysbff3khZgiBxTvS9uEQGx6xEyt7p2RBP3PFeYBGQ5tUsAU5U/exec?action=read&table=mobil"
  );
  const carListGrouped = carList.data.data.reduce(
    (objectsByKeyValue: any, obj: any) => {
      const value = obj["name"];
      objectsByKeyValue[value] = {
        ...objectsByKeyValue[value],
      };
      return objectsByKeyValue;
    },
    {}
  )

  const paths = Object.keys(carListGrouped).map((key) => ({
    params: { id: `${key}` }
  }));

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  console.log(ctx.params?.id)
  const id = ctx.params?.id as string
  const carList = await axios.get(
    "https://script.google.com/macros/s/AKfycbwVAHTmnoQ6ItpkMwysbff3khZgiBxTvS9uEQGx6xEyt7p2RBP3PFeYBGQ5tUsAU5U/exec?action=read&table=mobil"
  );
  const carListGrouped = carList.data.data.reduce(
    (objectsByKeyValue: any, obj: any) => {
      const value = obj["name"];
      objectsByKeyValue[value] = {
        ...objectsByKeyValue[value],
        name: obj["name"],
        brochure_url: obj["brochure_url"] ? obj["brochure_url"] : objectsByKeyValue[value]?.brochure_url,
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
  )

  return {
    props: {
      carData: carListGrouped[id]
    },
  };
};

export default function DetailMobil({ carData }: any) {
  const [shownPictureIdx, setShownPictureIdx] = useState(0);
  const formatCurrency = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumSignificantDigits: 3 })
  const router = useRouter();
  
  return (
    <>
      <Head>
        <title>{carData.name} | Hyundai Gowa Bandung</title>
        <meta
          name="description"
          content={`Informasi lengkap mobil Hyundai ${carData.name}`}
        />
      </Head>
      <Container maxW="container.lg" py="24px">
        <Stack spacing='24px'>
          <HStack>
            <Text fontSize='32px' fontWeight='bold'>{carData.name}</Text>
          </HStack>
          <Stack direction={{ base: "column", lg: "row" }} spacing='24px' align='flex-start'>
            <Stack w='full' spacing='18px'>
              <Box
                width='100%'
                height='350px'
                alt='car'
                position='relative'
              >
                <Image src={carData.picture_urls[shownPictureIdx]} alt="car" layout='fill' objectFit='contain' />
              </Box>
              <Grid templateColumns={{base: "repeat(3, 1fr)", lg: "repeat(6, 1fr)" }} gap={2}>
                {
                  carData.picture_urls.map((url: string, idx: number) => (
                    <Box
                      position='relative'
                      key={url}
                      backgroundColor='#eee'
                      borderRadius='4px'
                      width='110px'
                      height='80px'
                      alt='car'
                      opacity={idx === shownPictureIdx ? '1' : '0.5'}
                      _hover={{ opacity: '1' }}
                      onClick={() => setShownPictureIdx(idx)}
                      cursor='pointer'
                    >
                      <Image src={url} alt="car" layout='fill' objectFit='contain' />
                    </Box>   
                  ))
                }

              </Grid>
              <Stack>
                <Text fontSize='18px' fontWeight='bold'>DAFTAR HARGA</Text>
                <Box border='1px solid #ddd' borderRadius='4px' overflow='auto'>
                  <Table border='1'>
                    <Thead>
                      <Tr>
                        <Th rowSpan={2}>
                          <Text align='left' fontSize='14px'>Tipe</Text>
                        </Th>
                        <Th colSpan={2}>
                          <Text align='center' fontSize='14px'>Harga</Text>
                        </Th>
                      </Tr>
                      <Tr>
                        <Th align='center'>
                          <Text align='center' fontSize='14px'>Manual</Text>
                        </Th>
                        <Th>
                          <Text align='center' fontSize='14px'>Matic</Text>
                        </Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {
                        carData.types.map((type: any) => (
                          <Tr key={type.type}>
                            <Td fontWeight='bold' whiteSpace='nowrap'>{type.name} {type.type}</Td>
                            <Td>
                              <Text align='center'>{type.price_mt ? formatCurrency.format(type.price_mt) : '-'}</Text>
                            </Td>
                            <Td>
                              <Text align='center'>{type.price_cvt ? formatCurrency.format(type.price_cvt) : '-'}</Text>
                            </Td>
                          </Tr>
                        ))
                      }
                    </Tbody>
                  </Table>
                </Box>
              </Stack>
              <Stack>
                <Text fontSize='18px' fontWeight='bold'>DESKRIPSI</Text>
                <Text fontSize='14px' fontWeight='bold'>-</Text>
              </Stack>
            </Stack>
            <Stack maxW={{base: 'full', lg: '250px'}} w='full' align='flex-start' spacing='14px'>
              <Box
                color="#fff"
                p="8px"
                position="relative"
                overflow="hidden"
                width=""
                h="150px"
                w='full'
                bg="#434547"
                borderRadius='4px'
              >
                <Center
                  h="full"
                  w="full"
                  position="absolute"
                  zIndex="9"
                  p="24px"
                  top="0"
                  right="0"
                >
                  <Stack spacing='14px'>
                    <Box align="center" w="full">
                      <Text fontSize="20px" display={{ base: 'block', lg: 'none' }}>{carData.name}</Text>
                      <Text fontSize="14px" display={{ base: 'none', lg: 'block' }}>Mulai dari</Text>
                      <Text fontSize="20px" fontWeight="bold" display={{ base: 'none', lg: 'block' }}>
                        {formatCurrency.format(carData.types[0].price_mt || carData.types[0].price_cvt)}
                      </Text>
                    </Box>
                    <Button size='lg' w="full" bg="#ec162b" color="#fff" colorScheme='red' onClick={() => openWhatsappLink('info ' + carData.name)}>PESAN SEKARANG</Button>
                  </Stack>
                </Center>
              </Box>
              <Button size='lg' w="full" onClick={() => router.push('/test-drive')}>Test Drive</Button>
              <Button size='lg' w="full" onClick={() => window.open(carData.brochure_url, '_blank')}>Download Katalog</Button>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </>
  )
}