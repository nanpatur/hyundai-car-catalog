import {
  Box,
  Button,
  Center,
  Container,
  Grid,
  GridItem,
  HStack,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { FaPercentage } from "react-icons/fa";

// export const getStaticProps: GetStaticProps = async (ctx) => {
//   const carList = await axios.get(
//     "https://script.google.com/macros/s/AKfycbwe60nOzNUO6ahyonnHUQH_CfqKp54fjJH6gVQ9ZP7kt8ylaClkr0CuHltZBx6UBUPD/exec?action=read&table=mobil&id=1"
//   );
//   console.log(carList.data);
//   return {
//     props: {
//       carList: carList.data,
//     },
//   };
// };

export default function CarListPage({ carList }: any) {
  const items = [1, 2, 3, 4, 5, 6];
  const router = useRouter()

  return (
    <Container maxW="container.lg" py="24px">
      <Stack spacing='32px'>
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          {items.map((item) => (
            <GridItem
              key={item}
              w="100%"
              bg="#fff"
              _hover={{ bg: "#eee" }}
              shadow="sm"
              overflow="hidden"
              cursor="pointer"
              onClick={() => router.push("/daftar-mobil/1")}
            >
              <Stack spacing="0" direction="row" align="flex-start">
                <Box
                  backgroundImage="url(https://static.carmudi.co.id/2BxyntZMoHlURLmF1Soq35vHLIs=/900x405/http://trenotomotif.com/ncs/images/honda/CityHatchbackRS/Honda-City-Hatchback%20RS.jpg)"
                  backgroundSize="cover"
                  backgroundPosition="center"
                  backgroundRepeat="no-repeat"
                  width="200px"
                  height="150px"
                  alt="car"
                />
                <Spacer />
                <HStack>
                  <Text fontSize="16px" fontWeight="bold" pl="12px" noOfLines={2}>
                    CITY HATCHBACK
                  </Text>
                  <Spacer />
                  <Box
                    color="#fff"
                    p="8px"
                    position="relative"
                    overflow="hidden"
                    width=""
                    h="60px"
                    minW="120px"
                  >
                    <Center
                      h="full"
                      w="full"
                      position="absolute"
                      zIndex="9"
                      p="12px"
                      top="0"
                      right="0"
                    >
                      <Box align="right" w="full">
                        <Text fontSize="10px">Mulai dari</Text>
                        <Text fontSize="16px" fontWeight="bold">
                          Rp 333 Juta
                        </Text>
                      </Box>
                    </Center>
                    <Box
                      bg="#ec162b"
                      transform="skewX(-15deg)"
                      h="full"
                      w="full"
                      position="absolute"
                      top="0"
                    ></Box>
                  </Box>
                </HStack>
              </Stack>
            </GridItem>
          ))}
        </Grid>
        <Center bg='#ec162b' w='100%' py={{base: '12px', lg: '16px'}}>
        <Container maxW='container.lg'>
          <Stack direction={{ base: 'column', lg: 'row' }} spacing={{ base: '8px', lg: '24px' }} align='center'>
            <Box display={{ base: 'none', lg: 'block' }}>
              <FaPercentage size='60px' color='#fff' />
            </Box>
            <Box>
              <Text color='#fff' fontSize='24px' fontWeight='bold' align={{ base: 'center', lg: 'left' }}>Promo 2022</Text>
              <Text color='#fff' fontSize='12px' align={{ base: 'center', lg: 'left' }}>Pajak PPnBM 0 persen, turun harga mobil baru hingga Rp 21 juta. DP & angsuran ringan FREE Test Car & Free konsultasi simulasi kredit</Text>
            </Box>
            <Spacer />
            <Button variant='solid' bg='#fff' color='#ec162b' size='lg' borderRadius='full'>Ambil Promo</Button>
          </Stack>
        </Container>
      </Center>
      </Stack>
    </Container>
  );
}
