import React from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
  HStack,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Testimonial({ testimoniList }: any) {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState<Slider | null>(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  // This list contains all the data for carousels
  // This can be static or loaded from a server

  return (
    <Box
      position={"relative"}
      width={"full"}
      overflow={"hidden"}
      backgroundImage="url(https://smartdata.tonytemplates.com/caleader/wp-content/themes/caleader/assets/images/wrapper-section/wrapper-section-01.png)"
      pt='32px'
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <Text fontWeight='bold' fontSize="32px"  align='center'>TESTIMONI</Text>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {testimoniList.map((testimoni: any) => (
          <Box key={testimoni.id} position="relative">
            {/* This is the block you need to change, to customize the caption */}
            <Container maxW="container.lg" height="400px" position="relative" p='0'>
              <Stack
                align="center"
                w={"full"}
                position="absolute"
                top="50%"
                transform="translate(0, -50%)"
                spacing={{ base: "12px", lg: "32px" }}
                direction={{ base: "column", lg: "row" }}
                px="16px"
              >
                <Box
                  backgroundImage={`url(${testimoni.picture_url})`}
                  backgroundSize="contain"
                  backgroundPosition="center"
                  backgroundRepeat="no-repeat"
                  minW={{ base: "full", lg: "400px" }}
                  height={{ base: "100px", lg: "300px" }}
                  alt="car"
                />
                <Box w='full'>
                  <Stack spacing="0">
                    <Text fontWeight='bold' fontSize="24px" align={{ base: "center", lg: "left" }}>{testimoni.name}</Text>
                    <Text fontWeight="bold" color="gray" align={{ base: "center", lg: "left" }}>
                      {testimoni.car_type}
                    </Text>
                    <Text
                      fontSize={{ base: "md", lg: "lg" }}
                      color="GrayText"
                      pt="24px"
                      align={{ base: "center", lg: "left" }}
                      noOfLines={5}
                    >
                      {testimoni.testimoni}
                    </Text>
                  </Stack>
                </Box>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
