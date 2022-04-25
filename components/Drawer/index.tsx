import {
  Box,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  Input,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { getWhatsappLink } from "../../utils/whatsappLink";

interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const MenuDrawer = ({ isOpen, onClose }: MenuDrawerProps) => {
  const router = useRouter();

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Hondaku</DrawerHeader>

        <DrawerBody>
          <Stack h="100%" spacing="0">
            <Link href="/" passHref>
              <Text
                onClick={onClose}
                bg={router.pathname === "/" ? "#eee" : "transparent"}
                fontSize="16px"
                fontWeight="bold"
                p="16px"
                cursor="pointer"
                _hover={{ bg: "#eee" }}
              >
                Beranda
              </Text>
            </Link>
            <Link href="/katalog-mobil" passHref>
              <Text
                onClick={onClose}
                bg={
                  router.pathname.startsWith("/katalog-mobil") ? "#eee" : "transparent"
                }
                fontSize="16px"
                fontWeight="bold"
                p="16px"
                cursor="pointer"
                _hover={{ bg: "#eee" }}
              >
                Katalog Mobil
              </Text>
            </Link>
            <Link href="/simulasi-kredit" passHref>
              <Text
                onClick={onClose}
                bg={
                  router.pathname.startsWith("/simulasi-kredit")
                    ? "#eee"
                    : "transparent"
                }
                fontSize="16px"
                fontWeight="bold"
                p="16px"
                cursor="pointer"
                _hover={{ bg: "#eee" }}
              >
                Simulasi Kredit
              </Text>
            </Link>
            <Link href="/test-drive" passHref>
              <Text
                onClick={onClose}
                bg={router.pathname.startsWith("/test-drive") ? "#eee" : "transparent"}
                fontSize="16px"
                fontWeight="bold"
                p="16px"
                cursor="pointer"
                _hover={{ bg: "#eee" }}
              >
                Test Drive
              </Text>
            </Link>
            <Link href="/sparepart" passHref>
              <Text
                onClick={onClose}
                bg={router.pathname.startsWith("/sparepart") ? "#eee" : "transparent"}
                fontSize="16px"
                fontWeight="bold"
                p="16px"
                cursor="pointer"
                _hover={{ bg: "#eee" }}
              >
                Sparepart
              </Text>
            </Link>
            <Spacer />
            <Box
              bg="#ec162b"
              borderRadius="8px"
              onClick={() => window.open(getWhatsappLink(""), "_blank")}
            >
              <Text
                fontSize="16px"
                fontWeight="bold"
                p="16px"
                color="#fff"
                cursor="pointer"
                align="center"
              >
                HUBUNGI KAMI
              </Text>
            </Box>
            <br />
            <Divider />
            <Stack p='16px'>
              <HStack spacing='12px'>
                <FaMapMarkerAlt size='16px' />
                <Box>
                  <Text fontSize='12px' fontWeight='bold'>Jl. Soekarno Hatta No. 368 Bandung 40235</Text>
                </Box>
              </HStack>
              <HStack spacing='12px'>
                <FaPhoneAlt size='16px' />
                <Box>
                  <Text fontSize='12px' fontWeight='bold'>082128798554</Text>
                </Box> 
              </HStack>
            </Stack>
          </Stack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default MenuDrawer;
