import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
  Spacer,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function Footer() {
  const router = useRouter();
  return (
    <Box
      bg='#222'
      color={useColorModeValue('gray.700', 'gray.200')}
      w='100%'>
      <Container as={Stack} maxW={'container.lg'} py={10}>
        <Stack direction={{ base: 'column', lg: 'row' }} align={{ base: 'flex-start', lg: 'center' }}>
          <Image src='/images/hyundai-logo-trans.png' alt='logo' height={32} width={60} />
          <Spacer />
          <Stack direction={{ base: 'column', lg: 'row' }} h='100%' spacing='24px'>
            <Text whiteSpace='nowrap' color='#ddd' fontSize='16px' fontWeight='bold' cursor='pointer' _hover={{ color: '#fff'}} onClick={() => router.push('/')}>Beranda</Text>
            <Text whiteSpace='nowrap' color='#ddd' fontSize='16px' fontWeight='bold' cursor='pointer' _hover={{ color: '#fff'}} onClick={() => router.push('/daftar-harga')}>Daftar Harga</Text>
            <Text whiteSpace='nowrap' color='#ddd' fontSize='16px' fontWeight='bold' cursor='pointer' _hover={{ color: '#fff'}} onClick={() => router.push('/kontak')}>Kontak</Text>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}