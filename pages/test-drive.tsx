import { Box, Button, Center, Container, Flex, FormControl, FormLabel, Heading, Input, Select, Stack, Text, Textarea, useColorModeValue } from "@chakra-ui/react";
import axios from "axios";
import { GetStaticProps } from "next";
import Head from "next/head";

export const getStaticProps: GetStaticProps = async (ctx) => {
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

export default function TestDrive({ carListGrouped }: any) {
  return (
    <>
      <Head>
        <title>Test Drive | Hondaku</title>
        <meta name="description" content="Dapatkan informasi lengkap seputar pembelian mobil Honda terbaru disini." />
      </Head>
      <Container maxW="container.lg" py="24px">
        <Center>
          <Stack minH={"100%h"} w={{base: 'full', lg: "75%"}} spacing={{ base: '14px', lg: '24px' }}>
            <Heading fontSize={"2xl"} align='center'>Mau test drive dulu sebelum membeli?</Heading>
            <Text align='center'>
              Silakan pilih mobil yang ingin Anda test drive dan waktunya
            </Text>
            <Flex px={{ base: 0, lg: 8 }} flex={1} align={"center"} justify={"center"}>
              <Box
                rounded={"lg"}
                bg={useColorModeValue("white", "gray.700")}
                boxShadow={"lg"}
                p={8}
                w='full'
              >
                <Stack spacing={4} w={"full"}>
                  <FormControl id="name">
                    <FormLabel>Nama</FormLabel>
                    <Input type="text" placeholder="Masukan nama Anda" />
                  </FormControl>
                  <FormControl id="car_type">
                    <FormLabel>Unit Mobil</FormLabel>
                    <Select placeholder="Pilih Unit">
                     {
                        Object.keys(carListGrouped)?.map((car: any, i: number) => (
                          <option key={i}>{car}</option>
                        ))
                      }
                    </Select>
                  </FormControl>
                  <FormControl id="date">
                    <FormLabel>Pilih Tanggal</FormLabel>
                    <Select placeholder="Pilih Tanggal">
                      <option>1 Tahun</option>
                      <option>2 Tahun</option>
                      <option>3 Tahun</option>
                      <option>4 Tahun</option>
                      <option>5 Tahun</option>
                    </Select>
                  </FormControl>
                  <FormControl id="date">
                    <FormLabel>Pilih Jam</FormLabel>
                    <Select placeholder="Pilih Jam">
                      <option>08:00</option>
                      <option>09:00</option>
                      <option>10:00</option>
                      <option>11:00</option>
                      <option>12:00</option>
                      <option>13:00</option>
                      <option>14:00</option>
                      <option>15:00</option>
                      <option>16:00</option>
                      <option>17:00</option>
                    </Select>
                  </FormControl>
                  <FormControl id="message">
                    <FormLabel>Pesan Tambahan</FormLabel>
                    <Textarea placeholder="Masukan pesan tambahan" />
                  </FormControl>
                  <Stack spacing={6}>
                    <Button colorScheme={"red"} variant={"solid"} bg="#ec162b">
                      Kirim
                    </Button>
                  </Stack>
                </Stack>
              </Box>
            </Flex>
          </Stack>
        </Center>
      </Container>
    </>
  )
}