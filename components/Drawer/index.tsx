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
        <DrawerHeader>Hyundai Gowa Bandung</DrawerHeader>

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
            <Link href="/daftar-harga" passHref>
              <Text
                onClick={onClose}
                bg={
                  router.pathname.startsWith("/daftar-harga") ? "#eee" : "transparent"
                }
                fontSize="16px"
                fontWeight="bold"
                p="16px"
                cursor="pointer"
                _hover={{ bg: "#eee" }}
              >
                Daftar Harga
              </Text>
            </Link>
            <Link href="/kontak" passHref>
              <Text
                onClick={onClose}
                bg={router.pathname.startsWith("/sparepart") ? "#eee" : "transparent"}
                fontSize="16px"
                fontWeight="bold"
                p="16px"
                cursor="pointer"
                _hover={{ bg: "#eee" }}
              >
                Kontak
              </Text>
            </Link>
            <Spacer />
            <Box
              bg="#152D67"
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
          </Stack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default MenuDrawer;
