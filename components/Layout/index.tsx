import { Container, Stack } from "@chakra-ui/react";
import Navbar from "../Navbar";

export default function Layout({ children }: any) {
  return (
    <Stack w='100%' maxW='100%' h='100vh' spacing={0} align='center'>
      <Navbar />
      {children}
    </Stack>
  )
}