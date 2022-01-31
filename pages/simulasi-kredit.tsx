import { Button, Container, FormLabel, Input, Select, Stack, Text, Textarea } from "@chakra-ui/react";

export default function SimulasiKredit() {
  return (
    <Container maxW="container.lg" py="24px">
      <Stack>
        <Text fontWeight="bold" fontSize='18px'>
          Kami bekerja sama dengan lembaga pembiayaan resmi dan terpercaya dengan suku bunga yang kompetitif. 
          Dapatkan simulasi kredit DP dan angsuran murah mobil Honda impian Anda secara gratis.
        </Text>
        <Text>
          Silakan isi formulir dibawah ini:
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
            Pilih Tenor
            <Select placeholder='Pilih Unit'>
              <option>1 Tahun</option>
              <option>2 Tahun</option>
              <option>3 Tahun</option>
              <option>4 Tahun</option>
              <option>5 Tahun</option>
            </Select>
          </FormLabel>
          <FormLabel>
            Rencana DP/Uang Muka
            <Input type='text' placeholder="Masukan Rencana DP" />
          </FormLabel>
          <FormLabel>
            Pesan
            <Textarea placeholder="Masukan Pesan" />
          </FormLabel>
          <Button bg='#ec162b' color='#fff'>Kirim</Button>
        </Stack>
      </Stack>
    </Container>
  )
}