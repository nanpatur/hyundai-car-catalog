import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Select,
  Spacer,
  Stack,
  Table,
  Td,
  Text,
  Tr,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import axios from "axios";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { FaInfoCircle, FaPercentage } from "react-icons/fa";
import Head from "next/head";
import { useEffect, useState } from "react";
import { getWhatsappLink } from "../../utils/whatsappLink";

export const getStaticProps: GetStaticProps = async (ctx) => {
  // const carList = await axios.get(
  //   "https://script.google.com/macros/s/AKfycbwVAHTmnoQ6ItpkMwysbff3khZgiBxTvS9uEQGx6xEyt7p2RBP3PFeYBGQ5tUsAU5U/exec?action=read&table=mobil&id=1"
  // );
  const carList = await axios.get(
    "https://script.google.com/macros/s/AKfycbz7TJ2xY0a7cpVuptK95cza05IqYfHwFPLPQE5vpMjMS77rLYVJUJJILgAS6KYWSDlq/exec?action=read&table=mobil"
  );
  return {
    props: {
      carListGrouped: carList.data.data.reduce(
        (objectsByKeyValue: any, obj: any) => {
          const value = obj["name"];
          objectsByKeyValue[value] = {
            ...objectsByKeyValue[value],
            name: obj["name"],
            types: (objectsByKeyValue[value]?.types || []).concat({
              ...obj,
              specification: obj.specification ? JSON.parse(obj.specification) : {}
            }),
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

export default function CarListPage({ carListGrouped }: any) {
  const carList = Object.keys(carListGrouped).map((key) => carListGrouped[key]).filter(car => !car.is_upcoming);
  const router = useRouter();
  const formatCurrency = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumSignificantDigits: 3 })
  
  const [selectedCar, setSelectedCar] = useState<any>(null); 
  const [selectedCarType, setSelectedCarType] = useState<any>(null); 
  const [selectedCarPictureIdx, setSelectedCarPictureIdx] = useState<any>(0); 

  useEffect(() => {
    if (carList.length && !selectedCar) {
      setSelectedCar(carList[0]);
    }
  }, [carList])
  
  useEffect(() => {
    if (selectedCar) {
      setSelectedCarType(selectedCar.types[0]);
    }
  }, [selectedCar])

  return (
    <>
      <Head>
        <title>Daftar Harga | Hyundai Gowa Bandung</title>
        <meta
          name="description"
          content="Katalog dan harga Mobil Hyundai terbaru dan terlengkap."
        />
      </Head>
      <Container maxW="container.lg" py="24px">
        <Stack spacing="32px" background='#fff' p={{ base: '24px', lg: "32px" }}>
          {/* <Text fontWeight="bold" fontSize='24px'>Daftar Harga</Text> */}
          <Grid templateColumns={{base: "repeat(2, 2fr)", lg: "repeat(4, 1fr)" }} gap={0}>
            {carList.map((car, i) => (
              <GridItem
                key={car.name}
                w="100%"
                overflow="hidden"
                borderRadius='8px'
                opacity={selectedCar?.name === car.name ? 1 : 0.5}
                _hover={{
                  opacity: 1,
                }}
                cursor="pointer"
                onClick={() => setSelectedCar(car)}
              >
                <Stack
                  spacing="8px"
                  alignItems='center'
                  mb='24px'
                >
                  <Box
                    backgroundImage={`url(${car.picture_urls[1] || '/images/placeholder.png'})`}
                    backgroundSize='contain'
                    backgroundPosition="center"
                    backgroundRepeat="no-repeat"
                    width="100%"
                    height={{ base: "80px", lg: "120px" }}
                  />
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
          <Divider />
          {selectedCar && selectedCarType && (
            <Box>
              <Heading size='md' mb='12px'>{selectedCar.name}</Heading>
              <Select
                w='300px'
                mb='12px'
                onClick={({ target }: any) => {
                  console.log(selectedCar.types)
                  setSelectedCarType(selectedCar.types.find((type: any) => type.id === +target.value));
                }}
              >
                {selectedCar.types.map((type: any, i: number) => (
                  <option key={i} value={type.id} selected={selectedCarType.id === type.id}>{type.name} {type.type}</option>
                ))}
              </Select>
              <Stack align='flex-start' direction={{ base: 'column', lg: 'row' }}>
                <Stack spacing={1}>
                    <Box>
                      <Text fontSize='14px'>Harga</Text>
                      <Text fontSize='18px' fontWeight='bold'>{formatCurrency.format(selectedCarType.price)}</Text>
                    </Box>
                    {Object.keys(selectedCarType.specification).map((key: string) => (
                      <Box key={key}>
                        <Text fontSize='12px'>{key}</Text>
                        <Text fontSize='16px' fontWeight='bold'>{selectedCarType.specification[key]}</Text>
                      </Box>
                    ))}
                </Stack>
                <Spacer />
                <Box width={{ base: '100%', lg: '500px' }}>
                  <Box height={{ base: 'auto', lg: '300px' }} width={{ base: '100%', lg: 'auto' }}>
                    <Image objectFit='contain' src={selectedCar.picture_urls.slice(1)[selectedCarPictureIdx]} alt='-' />
                  </Box>
                  <Wrap justify='center'>
                  {selectedCar.picture_urls.slice(1).map((picture_url: string, i: number) => (
                    <WrapItem
                      key={i}
                      onClick={() => setSelectedCarPictureIdx(i)}
                      opacity={selectedCarPictureIdx === i ? 1 : 0.5}
                      _hover={{
                        opacity: 1,
                      }}
                      cursor="pointer"
                    >
                      <Box
                        backgroundImage={`url(${picture_url || '/images/placeholder.png'})`}
                        backgroundSize='contain'
                        backgroundPosition="center"
                        backgroundRepeat="no-repeat"
                        w="100px"
                        height="80px"
                        cursor="pointer"
                        _hover={{
                          opacity: 1,
                        }}
                      />
                    </WrapItem>
                  ))}
                  </Wrap>
                </Box>
              </Stack>
            </Box>
          )}
          <Box
            bg="#152D67"
            borderRadius="8px"
            onClick={() => window.open(getWhatsappLink("Halo saya tertarik dengan " + selectedCar.name + ' ' + selectedCarType.type), "_blank")}
          >
            <Text
              fontSize="16px"
              fontWeight="bold"
              p="16px"
              color="#fff"
              cursor="pointer"
              align="center"
            >
              Pesan Sekarang
            </Text>
          </Box>
        </Stack>
      </Container>
    </>
  );
  // <Grid templateColumns={{base: "repeat(1, 1fr)", lg: "repeat(3, 1fr)" }}gap={6}>
  //   {carList.map((car: any) => (
  //     <GridItem
  //       key={car.name}
  //       w="100%"
  //       bg="#fff"
  //       // _hover={{ bg: "#eee" }}
  //       shadow='md'
  //       overflow="hidden"
  //       // cursor="pointer"
        
  //       borderRadius='8px'
  //     >
  //       <Stack spacing="12px" align="flex-start">
  //         <Center
  //           backgroundColor='gray.100'
  //           width="100%"
  //           height="200px"
  //         >
  //           <Box
  //             backgroundImage={`url(${car.picture_urls[0] || '/images/placeholder.png'})`}
  //             backgroundSize='contain'
  //             backgroundPosition="center"
  //             backgroundRepeat="no-repeat"
  //             width="80%"
  //             height="100%"
  //           />
  //         </Center>
  //         <Stack direction="row" w='full' px='12px' align='center'>
  //           <Text
  //             fontSize="18px"
  //             fontWeight="bold"
  //             noOfLines={2}
  //           >
  //             {car.name}
  //           </Text>
  //           <Spacer />
  //           <Text
  //             fontSize="14px"
  //             noOfLines={2}
  //             pl="12px"
  //           >
  //             {car.types.length} Varian
  //           </Text>
  //           <Popover>
  //             <PopoverTrigger>
  //               <Button bg='transparent' p='0' h='16px' m='0' minW='16px'>
  //                 <FaInfoCircle />
  //               </Button>
  //             </PopoverTrigger>
  //             <PopoverContent shadow='lg'>
  //               <PopoverArrow />
  //               <PopoverCloseButton />
  //               <PopoverHeader>
  //                 <Text fontSize='14px' fontWeight='bold'>Varian Mobil {car.name}</Text>
  //               </PopoverHeader>
  //               <PopoverBody>
  //                 <Stack>
  //                   {car.types.map(({ id, name, type }: any) => (
  //                     <Stack key={id} direction='row'>
  //                       <Text fontSize='14px'>{name} {type}</Text>
  //                     </Stack>
  //                   ))}
  //                 </Stack>
  //               </PopoverBody>
  //             </PopoverContent>
  //           </Popover>
  //         </Stack>
  //         <Stack direction="row" w='full' p='12px' align='center' borderTop='1px solid #edebeb'>
  //           <Box align="left" w="full" >
  //             <Text fontSize="14px">Mulai dari</Text>
  //             <Text fontSize="16px" fontWeight="bold">
  //               {formatCurrency.format(car.types[0].price_mt || car.types[0].price_cvt)}
  //             </Text>
  //           </Box>
  //           <Button bg='#ec162b' colorScheme='red' w='150px' onClick={() => router.push(`/katalog-mobil/${car.name}`)} borderRadius='12px'>Lihat Detail</Button>
  //         </Stack>
  //       </Stack>
  //     </GridItem>
  //   ))}
  // </Grid>
}
