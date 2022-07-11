import { Box, Container, HStack, Stack, Text } from "@chakra-ui/react";
import Head from "next/head";
import { FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { getWhatsappLink } from "../utils/whatsappLink";

export default function Sparepart() {
  return (
    <>
      <Head>
        <title>Kontak | Hyundai Gowa Bandung</title>
        <meta name="description" content="Dapatkan informasi lengkap seputar pembelian mobil Hyundai terbaru disini." />
      </Head>
      <Container maxW="container.lg" py="24px">
        <Text fontSize='24px' fontWeight='bold' mb='24px' textAlign='center'>Hyundai Gowa Bandung</Text>
        <Stack spacing="32px" background='#fff' p={{ base: '24px', lg: "32px" }} mb='24px'>
          <Box className="mapouter" style={{ position: 'relative', textAlign: 'right', height: '400px', width: '100%' }}>
            <div className="gmap_canvas" style={{ overflow: 'hidden', background: 'none !important', height: '400px', width: '100%' }}>
              <iframe width="100%" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=Hyundai%20Ahmad%20Yani%20Bandung&t=&z=15&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight={0} marginWidth={0}>
              </iframe>
              <a href="https://www.embedgooglemap.net/blog/divi-discount-code-elegant-themes-coupon/">divi discount</a><br/>
              <style>.mapouter</style>
              <a href="https://www.embedgooglemap.net">google map embed code generator</a>
              <style>.gmap_canvas </style>
            </div>
          </Box>
        </Stack>
        <Stack spacing='12px' align='center'>
          <Text fontSize='20px' fontWeight='bold'>Hyundai Ahmad Yani Bandung</Text>
          <HStack>
            <FaMapMarkerAlt color='#152D67' size='24px' />
            <Text textAlign='center'>Jl. Ahmad Yani No. 253 Kel. Cihapit, Kec Bandung Wetan, Kota Bandung, Jawa Barat 40271</Text>
          </HStack>
          <HStack>
            <FaWhatsapp color='#152D67' size='24px' />
            <Text><b>0821-2879-8554</b> (Resly Kausa Prima)</Text>
          </HStack>
          <Box
            bg="#152D67"
            borderRadius="8px"
            onClick={() => window.open(getWhatsappLink(""), "_blank")}
          >
            <Text
              fontSize="16px"
              fontWeight="bold"
              p="16px"
              color="#fff"
              cursor="pointer"
              align="center"
            >
              HUBUNGI KAMI
            </Text>
          </Box>
        </Stack>
      </Container>
    </>
  )
}