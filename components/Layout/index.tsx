import { Container, Stack } from "@chakra-ui/react";
import Footer from "../Footer";
import Navbar from "../Navbar";

export default function Layout({ children }: any) {
  return (
    <Stack w='100%' maxW='100%' h='100vh' spacing={0} align='center' overflow='auto'>
      <Navbar />
      {children}
      <Footer />
    </Stack>
  )
}