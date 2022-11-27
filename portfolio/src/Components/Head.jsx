import { Button,Center,Heading,Text} from '@chakra-ui/react'
import React from 'react'


function Head() {
  return (
    <Center textColor={'white'}>
        <Heading>
          <Text>Hello,</Text>  
          <Text>I am, Harshank Patel </Text>
          <Text>Full Stack Web Developer</Text>
          <Text w={'50%'}>
            Passionate about Frontend Web Development & problem solving. I love building unique and cool projects and work in a team. I believe in continuous learning and growth. I believe in skillset, toolset and mindset.
          </Text>
        </Heading>
        
        <Button>Resume</Button>
    </Center>
  )
}

export default Head