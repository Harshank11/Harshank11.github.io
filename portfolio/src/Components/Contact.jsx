import React from "react";
import {
  Box,
  Image,
  Center,
  Link,
  Text,
  Flex,
  Heading,
} from "@chakra-ui/react";
import mypic from "./images/272A2504.JPG";
import { drawContributions } from "github-contributions-canvas";


const Contact = () => {
  return (
    <Box mt={"3%"}>
      <Center justifyContent={"space-evenly"}>
        <Box>
          
        <Image w={"100%"} src="https://github-readme-streak-stats.herokuapp.com/?user=harshank11&" />
        </Box>
        <Box w="20%" mb={"100px"}>
          <Text color={"white"}>Email :- hrsk321@gmail.com</Text>
          <Text color={"white"}>Phone:- +918459583374</Text>
          <Link href="https://www.instagram.com/hrsk_photography/">
            {" "}
            <Image
              w={"25%"}
              m={"10px"}
              src="https://cdn.pixabay.com/photo/2016/08/09/17/52/instagram-1581266__340.jpg"
            ></Image>
          </Link>
          <Link href="https://www.linkedin.com/in/harshank-patel/">
            {" "}
            <Image
              w={"25%"}
              m={"10px"}
              src="https://static.vecteezy.com/system/resources/previews/009/097/186/original/blue-color-white-background-linkedin-design-logo-sign-symbol-free-vector.jpg"
            ></Image>{" "}
          </Link>
        </Box>

        <Image w={"20%"} borderRadius={"50%"} src={mypic} mb={"100px"}></Image>
      </Center>

      <hr />
      <br />
    </Box>
  );
};

export default Contact;
