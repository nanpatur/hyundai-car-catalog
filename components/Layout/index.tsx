import { Container, Spacer, Stack } from "@chakra-ui/react";
import Footer from "../Footer";
import Navbar from "../Navbar";

export default function Layout({ children }: any) {
  return (
    <Stack w='100%' maxW='100%' minH='100vh' bg='#E4E5E6' spacing={0} align='center' overflow='auto'>
      <Navbar />
      {children}
      <Spacer />
      <Footer />
    </Stack>
  )
}