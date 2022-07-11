import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Icon,
  Image,
  SimpleGrid,
  Spacer,
  Stack,
  StackDivider,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import CaptionCarousel from "../components/Carousel";
import {
  FaCarSide,
  FaDollarSign,
  FaPercentage,
  FaRegHandshake,
  FaTools,
  FaWallet,
} from "react-icons/fa";
import Testimonial from "../components/Testimonial";
import axios from "axios";
import { useRouter } from "next/router";
import { openWhatsappLink } from "../utils/whatsappLink";

const SplitWithImage = () => {
  return (
    <Container maxW="container.lg" py={{ base: "40px", lg: "80px" }} px={{ base: '24px', lg: '32px' }}>
      <Stack direction={{ base: "column", md: "row" }} spacing={12}>
        <Stack spacing={0} minW="55%">
          <Heading>
            Siap Melayani Pembelian <br />
            Mobil Hyundai
          </Heading>
          <Grid templateColumns={"repeat(2, 1fr)"} gap={8} pt={8}>
            <GridItem p="16px" bg="#fff" shadow="0 10px 20px rgb(0 0 0 / 8%)">
              <Stack spacing="12px">
                <FaDollarSign size="32px" color="#152D67" />
                <Text fontWeight="bold" fontSize="18px">
                  DP Ringan
                </Text>
              </Stack>
            </GridItem>
            <GridItem p="16px" bg="#fff" shadow="0 10px 20px rgb(0 0 0 / 8%)">
              <Stack spacing="12px">
                <FaWallet size="32px" color="#152D67" />
                <Text fontWeight="bold" fontSize="18px">
                  Pembayaran Mudah
                </Text>
              </Stack>
            </GridItem>
            <GridItem p="16px" bg="#fff" shadow="0 10px 20px rgb(0 0 0 / 8%)">
              <Stack spacing="12px">
                <FaRegHandshake size="32px" color="#152D67" />
                <Text fontWeight="bold" fontSize="18px">
                  Proses Cepat
                </Text>
              </Stack>
            </GridItem>
            <GridItem p="16px" bg="#fff" shadow="0 10px 20px rgb(0 0 0 / 8%)">
              <Stack spacing="12px">
                <FaCarSide size="32px" color="#152D67" />
                <Text fontWeight="bold" fontSize="18px">
                  Free Testdrive
                </Text>
              </Stack>
            </GridItem>
          </Grid>
        </Stack>
        <Flex>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={
              "https://im.rediff.com/money/2021/jun/07how-to-buy-anew-car-9.jpg"
            }
            objectFit={"cover"}
          />
        </Flex>
      </Stack>
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const bannerList = await axios.get(
    "https://script.google.com/macros/s/AKfycbz7TJ2xY0a7cpVuptK95cza05IqYfHwFPLPQE5vpMjMS77rLYVJUJJILgAS6KYWSDlq/exec?action=read&table=banner"
  );
  const carList = await axios.get(
    "https://script.google.com/macros/s/AKfycbz7TJ2xY0a7cpVuptK95cza05IqYfHwFPLPQE5vpMjMS77rLYVJUJJILgAS6KYWSDlq/exec?action=read&table=mobil"
  );
  const testimoniList = await axios.get(
    "https://script.google.com/macros/s/AKfycbz7TJ2xY0a7cpVuptK95cza05IqYfHwFPLPQE5vpMjMS77rLYVJUJJILgAS6KYWSDlq/exec?action=read&table=testimoni"
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
            types: (objectsByKeyValue[value]?.types || []).concat(obj),
            picture_urls: obj["picture_url"]
              ? (objectsByKeyValue[value]?.picture_urls || []).concat(
                  obj["picture_url"].split(";")
                )
              : objectsByKeyValue[value]?.picture_urls || [],
            is_new: obj["is_new"] || objectsByKeyValue[value]?.is_new || false,
            is_upcoming: obj["is_upcoming"] || objectsByKeyValue[value]?.is_upcoming || false
          };
          return objectsByKeyValue;
        },
        {}
      ),
    },
  };
};

const Home: NextPage = ({ bannerList, carListGrouped, testimoniList }: any) => {
  const router = useRouter();
  const carList = Object.keys(carListGrouped)
    .map((key) => carListGrouped[key])
  const formatCurrency = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumSignificantDigits: 3,
  });

  return (
    <>
      <Head>
        <title>Hyundai Gowa Motor | Bandung</title>
        <meta
          name="description"
          content="Dapatkan informasi lengkap seputar pembelian cash dan kredit mobil Hyundai terbaru disini."
        />
      </Head>
      <Stack maxW="100%" align="center" spacing="0">
        <CaptionCarousel bannerList={bannerList} />
        <Center w="100%" py="40px" bg="#E4E5E6" p={{ base: '24px', lg: "32px" }}>
          <Container maxW="container.lg" bg='#fff' py={{ base: '24px', lg: "32px" }} px={{ base: '8px', lg: "32px" }}>
            <Stack spacing="24px">
              <Text fontSize={"32px"} fontWeight="bold" align="center">
                MODEL
              </Text>
              <Grid
                templateColumns={{
                  base: "repeat(2, 1fr)",
                  lg: "repeat(4, 1fr)",
                }}
                gap={3}
              >
                {carList.map((car) => (
                  <GridItem
                    key={car}
                    w="100%"
                    overflow="hidden"
                  >
                    <Stack spacing="0" textAlign="center">
                      <Center>
                        <Box
                          backgroundImage={`url(${car.picture_urls[0]})`}
                          backgroundSize="contain"
                          backgroundPosition="center"
                          backgroundRepeat="no-repeat"
                          width="80%"
                          height="100px"
                          position="relative"
                        >
                          {
                            car.is_new && (
                                <Text
                                  position='absolute'
                                  background='#00aad2'
                                  color='#fff'
                                  width='70px'
                                  fontSize='12px'
                                >
                                  New
                                </Text>
                            )
                          }
                          {
                            car.is_upcoming && (
                                <Text
                                  position='absolute'
                                  background='#999'
                                  color='#fff'
                                  width='70px'
                                  fontSize='12px'
                                >
                                  Upcoming
                                </Text>
                            )
                          }
                        </Box>
                      </Center>
                      <Text
                        fontSize="16px"
                        fontWeight="bold"
                        pl="12px"
                        noOfLines={2}
                      >
                        {car.name}
                      </Text>
                    </Stack>
                  </GridItem>
                ))}
              </Grid>
              <Center w="100%" pt="24px">
                <Button
                  colorScheme="black"
                  variant="outline"
                  background='#152D67'
                  color='#fff'
                  size='lg'
                  fontWeight='normal'
                  onClick={() =>
                    router.push("/daftar-harga", undefined, { scroll: true })
                  }
                >
                  Lihat Semua Model
                </Button>
              </Center>
            </Stack>
          </Container>
        </Center>
        <Center
          w="full"
          backgroundImage="url(https://smartdata.tonytemplates.com/caleader/wp-content/themes/caleader/assets/images/wrapper-section/wrapper-section-01.png)"
        >
          <SplitWithImage />
        </Center>
      </Stack>
    </>
  );
};

export default Home;
