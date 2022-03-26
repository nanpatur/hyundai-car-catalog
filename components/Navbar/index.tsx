import { Box, Button, Container, HStack, Image, Link, Spacer, Stack, Text } from "@chakra-ui/react"
import { useRouter } from "next/router";
import { FaBars, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { getWhatsappLink } from "../../utils/whatsappLink";

export default function Navbar() {
  const router = useRouter()

  return (
    <Stack w='100%' spacing={0}>
      <Box bg='#333'>
        <Container maxW='container.lg'>
          <HStack h='100%' py='20px' spacing='32px'>
            <Image src='/images/honda-logo.png' alt='logo' height={{ base: '40px', lg: '60px' }} />
            <Spacer />
            <HStack spacing='12px' display={{ base: 'none', lg: 'flex' }}>
              <FaMapMarkerAlt color='#fff' size='24px' />
              <Box>
                <Text fontSize='10px' fontWeight='bold' color='#fff'>ALAMAT:</Text>
                <Text fontSize='16px' fontWeight='bold' color='#fff'>Jl. Soekarno Hatta No. 368 Bandung 40235</Text>
              </Box>
            </HStack>
            <HStack spacing='12px' display={{ base: 'none', lg: 'flex' }}>
              <FaPhoneAlt color='#fff' size='24px' />
              <Box>
                <Text fontSize='10px' fontWeight='bold' color='#fff'>KONTAK:</Text>
                <Text fontSize='16px' fontWeight='bold' color='#fff'>0811-2345-6789</Text>
              </Box>
            </HStack>
            <Box display={{ base: 'block', lg: 'none' }}>
              <FaBars color='#fff' size='24px' />
            </Box>
          </HStack>
        </Container>
      </Box>
      <Box shadow='0 0 4px rgb(0 0 0 / 40%)' display={{ base: 'none', lg: 'block' }}>
        <Container maxW='container.lg'>
          <HStack h='100%' spacing='0'>
            <Box>
              <Text fontSize='16px' fontWeight='bold' p='16px' cursor='pointer' _hover={{ bg: '#eee'}} onClick={() => router.push('/')}>Beranda</Text>
            </Box>
            <Box>
              <Text fontSize='16px' fontWeight='bold' p='16px' cursor='pointer' _hover={{ bg: '#eee'}} onClick={() => router.push('/katalog-mobil')}>Katalog Mobil</Text>
            </Box>
            <Box>
              <Text fontSize='16px' fontWeight='bold' p='16px' cursor='pointer' _hover={{ bg: '#eee'}} onClick={() => router.push('/simulasi-kredit')}>Simulasi Kredit</Text>
            </Box>
            <Box>
              <Text fontSize='16px' fontWeight='bold' p='16px' cursor='pointer' _hover={{ bg: '#eee'}} onClick={() => router.push('/test-drive')}>Test Drive</Text>
            </Box>
            <Box>
              <Text fontSize='16px' fontWeight='bold' p='16px' cursor='pointer' _hover={{ bg: '#eee'}} onClick={() => router.push('/sparepart')}>Sparepart</Text>
            </Box>
            <Spacer />
            <Link href={getWhatsappLink('')} target='_blank'>
              <Box bg='#ec162b'>
                <Text fontSize='16px' fontWeight='bold' p='16px' color='#fff' cursor='pointer'>HUBUNGI KAMI</Text>
              </Box>
            </Link>
          </HStack>
        </Container>
      </Box>
    </Stack>
  )
}