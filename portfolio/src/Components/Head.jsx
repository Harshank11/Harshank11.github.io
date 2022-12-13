import { Button, Center, Heading, Text, Flex, Image,Box } from "@chakra-ui/react";
import React from "react";
// import "./Head.css";

export function Head() {
 
  return (
    <Center textColor={"white"} mt={'10%'} >
      <Flex width={"85%"}>
        <Heading >
          <Text w={"80%"} >Hello,</Text>
          <Text w={"80%"}>I am, Harshank Patel </Text>
          <Box w={"80%"}>Full Stack Web Developer</Box>
          <Text w={"80%"}>
            Passionate about Frontend Web Development & problem solving. I love
            building unique and cool projects and work in a team. I believe in
            continuous learning and growth. I believe in skillset, toolset and
            mindset.
          </Text>
        </Heading>
        <Image 
          id="image"
          src="https://i.pinimg.com/originals/81/17/8b/81178b47a8598f0c81c4799f2cdd4057.gif"
        />
      </Flex>
    </Center>
  );
}
