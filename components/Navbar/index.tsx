import { Box, Button, Container, HStack, Spacer, Stack, Text, useDisclosure } from "@chakra-ui/react"
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { getWhatsappLink } from "../../utils/whatsappLink";
import DrawerMenu from "../Drawer";

export default function Navbar() {
  const { isOpen: isOpenMenu, onOpen: onOpenMenu, onClose: onCloseMenu } = useDisclosure()

  return (
    <Stack w='100%' spacing={0}>
      <Box bg='#fff' shadow='sm'>
        <Container maxW='container.lg'>
          <HStack h='100%' py='20px' spacing='32px'>
            <Image src='/images/hyundai-logo.png' alt='logo' height={48} width={300} />
            <Spacer />
            <HStack spacing='0' display={{ base: 'none', lg: 'flex' }}>
              <Link href='/' passHref>
                <Text fontSize='16px' fontWeight='bold' p='16px' cursor='pointer' _hover={{ bg: '#eee'}}>Beranda</Text>
              </Link>
              <Link href='/daftar-harga' passHref>
                <Text fontSize='16px' fontWeight='bold' p='16px' cursor='pointer' _hover={{ bg: '#eee'}}>Daftar Harga</Text>
              </Link>
              <Link href='/kontak' passHref>
                <Text fontSize='16px' fontWeight='bold' p='16px' cursor='pointer' _hover={{ bg: '#eee'}}>Kontak</Text>
              </Link>
            </HStack>
            <Box display={{ base: 'block', lg: 'none' }}>
              <FaBars size='24px' onClick={onOpenMenu} />
            </Box>
          </HStack>
        </Container>
      </Box>
      <DrawerMenu isOpen={isOpenMenu} onClose={onCloseMenu} />
    </Stack>
  )
}