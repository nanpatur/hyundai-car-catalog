import {
  Box,
  Button,
  Center,
  Container,
  Grid,
  GridItem,
  HStack,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { FaInfoCircle, FaPercentage } from "react-icons/fa";
import Head from "next/head";

export const getStaticProps: GetStaticProps = async (ctx) => {
  // const carList = await axios.get(
  //   "https://script.google.com/macros/s/AKfycbwVAHTmnoQ6ItpkMwysbff3khZgiBxTvS9uEQGx6xEyt7p2RBP3PFeYBGQ5tUsAU5U/exec?action=read&table=mobil&id=1"
  // );
  const carList = await axios.get(
    "https://script.google.com/macros/s/AKfycbwVAHTmnoQ6ItpkMwysbff3khZgiBxTvS9uEQGx6xEyt7p2RBP3PFeYBGQ5tUsAU5U/exec?action=read&table=mobil"
  );
  return {
    props: {
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

export default function CarListPage({ carListGrouped }: any) {
  const carList = Object.keys(carListGrouped).map((key) => carListGrouped[key]);
  const router = useRouter();
  const formatCurrency = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumSignificantDigits: 3 })

  return (
    <>
      <Head>
        <title>Katalog Mobil | Hondaku</title>
      </Head>
      <Container maxW="container.lg" py="24px">
        <Stack spacing="32px">
          <Text fontWeight="bold" fontSize='24px'>Katalog Mobil</Text>
          <Grid templateColumns={{base: "repeat(1, 1fr)", lg: "repeat(3, 1fr)" }}gap={6}>
            {carList.map((car: any) => (
              <GridItem
                key={car.name}
                w="100%"
                bg="#fff"
                // _hover={{ bg: "#eee" }}
                shadow='md'
                overflow="hidden"
                // cursor="pointer"
                
                borderRadius='8px'
              >
                <Stack spacing="12px" align="flex-start">
                  <Center
                    backgroundColor='gray.100'
                    width="100%"
                    height="200px"
                  >
                    <Box
                      backgroundImage={`url(${car.picture_urls[0] || '/images/placeholder.png'})`}
                      backgroundSize='contain'
                      backgroundPosition="center"
                      backgroundRepeat="no-repeat"
                      width="80%"
                      height="100%"
                    />
                  </Center>
                  <Stack direction="row" w='full' px='12px' align='center'>
                    <Text
                      fontSize="18px"
                      fontWeight="bold"
                      noOfLines={2}
                    >
                      {car.name}
                    </Text>
                    <Spacer />
                    <Text
                      fontSize="14px"
                      noOfLines={2}
                      pl="12px"
                    >
                      {car.types.length} Varian
                    </Text>
                    <Popover>
                      <PopoverTrigger>
                        <Button bg='transparent' p='0' h='16px' m='0' minW='16px'>
                          <FaInfoCircle />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent shadow='lg'>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader>
                          <Text fontSize='14px' fontWeight='bold'>Varian Mobil {car.name}</Text>
                        </PopoverHeader>
                        <PopoverBody>
                          <Stack>
                            {car.types.map(({ id, name, type }: any) => (
                              <Stack key={id} direction='row'>
                                <Text fontSize='14px'>{name} {type}</Text>
                              </Stack>
                            ))}
                          </Stack>
                        </PopoverBody>
                      </PopoverContent>
                    </Popover>
                  </Stack>
                  <Stack direction="row" w='full' p='12px' align='center' borderTop='1px solid #edebeb'>
                    <Box align="left" w="full" >
                      <Text fontSize="14px">Mulai dari</Text>
                      <Text fontSize="16px" fontWeight="bold">
                        {formatCurrency.format(car.types[0].price_mt || car.types[0].price_cvt)}
                      </Text>
                    </Box>
                    <Button bg='#ec162b' colorScheme='red' w='150px' onClick={() => router.push(`/katalog-mobil/${car.name}`)} borderRadius='12px'>Lihat Detail</Button>
                  </Stack>
                </Stack>
              </GridItem>
            ))}
          </Grid>
          <Center bg="#ec162b" w="100%" py={{ base: "12px", lg: "16px" }}>
            <Container maxW="container.lg">
              <Stack
                direction={{ base: "column", lg: "row" }}
                spacing={{ base: "8px", lg: "24px" }}
                align="center"
              >
                <Box display={{ base: "none", lg: "block" }}>
                  <FaPercentage size="60px" color="#fff" />
                </Box>
                <Box>
                  <Text
                    color="#fff"
                    fontSize="24px"
                    fontWeight="bold"
                    align={{ base: "center", lg: "left" }}
                  >
                    Promo 2022
                  </Text>
                  <Text
                    color="#fff"
                    fontSize="12px"
                    align={{ base: "center", lg: "left" }}
                  >
                    Pajak PPnBM 0 persen, turun harga mobil baru hingga Rp 21
                    juta. DP & angsuran ringan FREE Test Car & Free konsultasi
                    simulasi kredit
                  </Text>
                </Box>
                <Spacer />
                <Button
                  variant="solid"
                  bg="#fff"
                  color="#ec162b"
                  size="lg"
                  borderRadius="full"
                >
                  Ambil Promo
                </Button>
              </Stack>
            </Container>
          </Center>
        </Stack>
      </Container>
    </>
  );
}
