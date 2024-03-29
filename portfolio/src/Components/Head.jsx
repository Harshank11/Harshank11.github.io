import { Button, Center, Heading, Text, Flex, Image,Box } from "@chakra-ui/react";
import React from "react";
import "./Head.css";

export function Head() {
 
  return (
    <Center textColor={"white"} mt={['10%']} borderColor={"1px solid white"} padding={"3%"}>
      
        <Heading >
          <Text w={"80%"} className='animatedetail'>Hello,</Text>
          <Text w={"80%"} className='animatetitle'>I am, Harshank Patel </Text>
          <Box w={"80%"} className='animatetitle' >Full Stack Web Developer</Box>
          <Text w={"80%"} className='animatedetail'>
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
      
    </Center>
  );
}
