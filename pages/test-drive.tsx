import { Button, Container, FormLabel, Input, Select, Stack, Text } from "@chakra-ui/react";

export default function TestDrive() {
  return (
    <Container maxW="container.lg" py="24px">
      <Stack>
        <Text fontWeight="bold" fontSize='18px'>
          Mau test drive dulu sebelum membeli?
        </Text>
        <Text>
          Silakan pilih mobil yang ingin Anda test drive dan waktunya:
        </Text>
        <Stack spacing='16px'>
          <FormLabel>
            Nama
            <Input type='text' placeholder="Masukan Nama" />
          </FormLabel>
          <FormLabel>
            No. Handphone/WhatsApp
            <Input type='text' placeholder="Masukan No. Handphone" />
          </FormLabel>
          <FormLabel>
            Pilih Unit
            <Select placeholder='Pilih Unit'>
              <option>Unit Mobil</option>
              <option>Unit Mobil</option>
              <option>Unit Mobil</option>
              <option>Unit Mobil</option>
            </Select>
          </FormLabel>
          <FormLabel>
            Pilih Tanggal
            <Select placeholder='Pilih Tanggal'>
              <option>1 Tahun</option>
              <option>2 Tahun</option>
              <option>3 Tahun</option>
              <option>4 Tahun</option>
              <option>5 Tahun</option>
            </Select>
          </FormLabel>
          <FormLabel>
            Pilih Jam
            <Select placeholder='Pilih Jam'>
              <option>1 Tahun</option>
              <option>2 Tahun</option>
              <option>3 Tahun</option>
              <option>4 Tahun</option>
              <option>5 Tahun</option>
            </Select>
          </FormLabel>
          <Button bg='#ec162b' color='#fff'>Jadwalkan</Button>
        </Stack>
      </Stack>
    </Container>
  )
}