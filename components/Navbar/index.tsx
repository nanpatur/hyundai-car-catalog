import { Box, Button, Container, HStack, Image, Spacer, Stack, Text } from "@chakra-ui/react"
import Link from "next/link";
import { FaBars, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { getWhatsappLink } from "../../utils/whatsappLink";

export default function Navbar() {
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
            <Link href='/' passHref>
              <Text fontSize='16px' fontWeight='bold' p='16px' cursor='pointer' _hover={{ bg: '#eee'}}>Beranda</Text>
            </Link>
            <Link href='/katalog-mobil' passHref>
              <Text fontSize='16px' fontWeight='bold' p='16px' cursor='pointer' _hover={{ bg: '#eee'}}>Katalog Mobil</Text>
            </Link>
            <Link href='/simulasi-kredit' passHref>
              <Text fontSize='16px' fontWeight='bold' p='16px' cursor='pointer' _hover={{ bg: '#eee'}}>Simulasi Kredit</Text>
            </Link>
            <Link href='/test-drive' passHref>
              <Text fontSize='16px' fontWeight='bold' p='16px' cursor='pointer' _hover={{ bg: '#eee'}}>Test Drive</Text>
            </Link>
            <Link href='/sparepart' passHref>
              <Text fontSize='16px' fontWeight='bold' p='16px' cursor='pointer' _hover={{ bg: '#eee'}}>Sparepart</Text>
            </Link>
            <Spacer />
            <Box bg='#ec162b' onClick={() => window.open(getWhatsappLink(''), '_blank')}>
              <Text fontSize='16px' fontWeight='bold' p='16px' color='#fff' cursor='pointer'>HUBUNGI KAMI</Text>
            </Box>
          </HStack>
        </Container>
      </Box>
    </Stack>
  )
}