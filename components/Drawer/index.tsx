import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
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
                  router.pathname === "/katalog-mobil" ? "#eee" : "transparent"
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
                  router.pathname === "/simulasi-kredit"
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
                bg={router.pathname === "/test-drive" ? "#eee" : "transparent"}
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
                bg={router.pathname === "/sparepart" ? "#eee" : "transparent"}
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
          </Stack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default MenuDrawer;
