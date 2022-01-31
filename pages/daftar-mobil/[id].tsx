import { Box, Button, Center, Container, HStack, Spacer, Stack, Table, Td, Text, Tr } from "@chakra-ui/react";

export default function DetailMobil() {
  return (
    <Container maxW="container.lg" py="24px">
      <Stack spacing='24px'>
        <HStack>
          <Text fontSize='32px' fontWeight='bold'>City Hatchback</Text>
        </HStack>
        <Stack direction={{ base: "column", lg: "row" }} spacing='24px' align='flex-start'>
          <Stack w='full' spacing='24px'>
            <Box
              backgroundImage='url(https://static.carmudi.co.id/2BxyntZMoHlURLmF1Soq35vHLIs=/900x405/http://trenotomotif.com/ncs/images/honda/CityHatchbackRS/Honda-City-Hatchback%20RS.jpg)'
              backgroundSize='cover'
              backgroundPosition='center'
              backgroundRepeat='no-repeat'
              width='100%'
              height='350px'
              alt='car'
            />
            <HStack>
              <Box
                backgroundImage='url(https://static.carmudi.co.id/2BxyntZMoHlURLmF1Soq35vHLIs=/900x405/http://trenotomotif.com/ncs/images/honda/CityHatchbackRS/Honda-City-Hatchback%20RS.jpg)'
                backgroundSize='cover'
                backgroundPosition='center'
                backgroundRepeat='no-repeat'
                width='120px'
                height='80px'
                alt='car'
                opacity='0.5'
                _hover={{ opacity: '1' }}
              />   
              <Box
                backgroundImage='url(https://static.carmudi.co.id/2BxyntZMoHlURLmF1Soq35vHLIs=/900x405/http://trenotomotif.com/ncs/images/honda/CityHatchbackRS/Honda-City-Hatchback%20RS.jpg)'
                backgroundSize='cover'
                backgroundPosition='center'
                backgroundRepeat='no-repeat'
                width='120px'
                height='80px'
                alt='car'
                opacity='0.5'
                _hover={{ opacity: '1' }}
              />   
              <Box
                backgroundImage='url(https://static.carmudi.co.id/2BxyntZMoHlURLmF1Soq35vHLIs=/900x405/http://trenotomotif.com/ncs/images/honda/CityHatchbackRS/Honda-City-Hatchback%20RS.jpg)'
                backgroundSize='cover'
                backgroundPosition='center'
                backgroundRepeat='no-repeat'
                width='120px'
                height='80px'
                alt='car'
                opacity='0.5'
                _hover={{ opacity: '1' }}
              />   
              <Box
                backgroundImage='url(https://static.carmudi.co.id/2BxyntZMoHlURLmF1Soq35vHLIs=/900x405/http://trenotomotif.com/ncs/images/honda/CityHatchbackRS/Honda-City-Hatchback%20RS.jpg)'
                backgroundSize='cover'
                backgroundPosition='center'
                backgroundRepeat='no-repeat'
                width='120px'
                height='80px'
                alt='car'
                opacity='0.5'
                _hover={{ opacity: '1' }}
              />   
            </HStack>
            <Box>
              <Text fontWeight='bold' fontSize='18px'>Deskripsi</Text>
              <Text>
                Quisque imperdiet dignissim enim dictum finibus. Sed consectetutr convallis enim eget laoreet. Aenean vitae nisl mollis, porta risus vel, dapibus lectus. Etiam ac suscipit eros, eget maximus
              </Text>
              <Text>
                Etiam sit amet ex pharetra, venenatis ante vehicula, gravida sapien. Fusce eleifend vulputate nibh, non cursus augue placerat pellentesque. Sed venenatis risus nec felis mollis, in pharetra urna euismod. Morbi aliquam ut turpis sit amet ultrices. Vestibulum mattis blandit nisl, et tristique elit scelerisque nec. Fusce eleifend laoreet dui eget aliquet. Ut rutrum risus et nunc pretium scelerisque. Fusce viverra, ligula quis pellentesque interdum, leo felis congue dui, ac accumsan sem nulla id lorem. Praesent ut tristique dui, nec condimentum lacus. Maecenas lobortis ante id egestas placerat. Nullam at ultricies lacus. Nam in nulla consectetur, suscipit mauris eu, fringilla augue. Phasellus gravida, dui quis dignissim tempus, tortor orci tristique leo, ut congue diam ipsum at massa. Pellentesque ut vestibulum erat. Donec a felis eget
              </Text>
            </Box>
          </Stack>
          <Stack w='250px' align='flex-start' spacing='24px'>
            <Box
              color="#fff"
              p="8px"
              position="relative"
              overflow="hidden"
              width=""
              h="60px"
              w='full'
              bg="#ec162b"
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
                  <Text fontSize="14px">Mulai dari</Text>
                  <Text fontSize="20px" fontWeight="bold">
                    Rp 333 Juta
                  </Text>
                </Box>
              </Center>
            </Box>
            <Box>
              <Table border='1'>
                <Tr>
                  <Td fontWeight='bold'>Sistem penggerak roda</Td>
                  <Td>Penggerak roda depan</Td>
                </Tr>
                <Tr>
                  <Td fontWeight='bold'>Dimensi</Td>
                  <Td>4.557 mm P x 2.076 mm L x 1.421 mm T</Td>
                </Tr>
                <Tr>
                  <Td fontWeight='bold'>Transmisi</Td>
                  <Td>6-kecepatan manual</Td>
                </Tr>
                <Tr>
                  <Td fontWeight='bold'>Daya kuda</Td>
                  <Td>310 HP</Td>
                </Tr>
                <Tr>
                  <Td fontWeight='bold'>Mesin</Td>
                  <Td>2L 4-silinder</Td>
                </Tr>
                <Tr>
                  <Td fontWeight='bold'>Ukuran velg</Td>
                  <Td>20" diameter, 9" lebar</Td>
                </Tr>
              </Table>
            </Box>
            <Button size='lg' w="full" bg="#ec162b" color="#fff">PESAN SEKARANG</Button>
            <Button size='lg' w="full">Test Drive</Button>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  )
}