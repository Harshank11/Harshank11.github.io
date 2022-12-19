import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  // Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Heading,
  Text,
  Hide
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import './Navbar.css'
import mypic from "./images/272A2504.JPG"
import resume from "./images/Harshank's Resume .pdf"
// import { createBreakpoints } from "@chakra-ui/theme-tools"

import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

// const breakpoints = createBreakpoints({
//   sm: "320px",
//   md: "768px",
//   lg: "960px",
//   xl: "1200px",
// })
const Links = ['Home','About Me', 'Projects', 'Skills'];

// const NavLink = ({ children }) => (
//   <Link
//     px={20}
//     py={10}
//     textDecoration= 'none'
//     rounded={'md'}
//     _hover={{
//       textDecoration: 'none',
//       color:'blue',
//     }}
//     href={'#'}>
//     {children}
//   </Link>
// );

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box   >
        <Flex   justifyContent={"space-between"} >
          {/* <IconButton
            size={'md'}
            w={'10px'}
            h={'10px'}
            backgroundColor={'pink.200'}
            ml={'20px'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            text={isOpen ? "Hello" : "world"}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          /> */}
          {/* <HStack spacing={8} alignItems={'center'}>
            <Box color={'white'}>Logo</Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack> */}
          <Flex id="navbuttons"  justifyContent={'space-between'} w={'55%'}   ml={"10px"}>
              <Link to='home' spy={true} smooth={true} offset={100} duration={250} ><Text id="navb" fontSize={[ '13px', '14px', '17px' ]} padding={['5px 15px' , '6px 18px', '8px 25px']} mt={['0px ' , '12px', '25px']} >Home</Text></Link>
              {/* <Button>About Me</Button> */}
              <Link to='skill'spy={true} smooth={true} offset={-230} duration={250} ><Text id="navb" fontSize={[ '13px', '14px', '17px' ]} padding={['5px 15px' , '6px 18px', '8px 25px']} mt={['10px ' , '12px', '25px']} >Skill</Text></Link>
              <Link to='project'spy={true} smooth={true} offset={-60} duration={250} ><Text id="navb" fontSize={[ '13px', '14px', '17px' ]} padding={['5px 15px' , '6px 18px', '8px 25px']} mt={['10px ' , '12px', '25px']}>Project</Text></Link>
              <Link to='contact'spy={true} smooth={true} offset={-30} duration={250} ><Text id="navb" fontSize={[ '13px', '14px', '17px' ]} padding={['5px 15px' , '6px 18px', '8px 25px']} mt={['10px ' , '12px', '25px']} >Contact</Text></Link>
              <Button fontSize={[ '13px', '14px', '17px' ]} padding={['5px 15px' , '6px 18px', '8px 25px']} mt={['10px ' , '12px', '25px']} ><a href={resume} download >Resume</a></Button>
          </Flex>
          <Flex alignItems={'center'} 
          borderColor={'white'}
            
            >
              <Hide below='sm'>
            <Menu>
            {/* <MenuButton></MenuButton> */}
              <MenuButton
            //  mt={[ "500px", "500px","25px"]}
                as={Button}
                bg={'none'}
                variant={'link'}
                cursor={'pointer'}
                // minW={10}
                >
                <Avatar 
                width={'55px'}
                borderRadius={'50%'}
                // mt={['500px ' , '200px', '25px']}
                
                  // size={'xl'}
                  // mx={-10}
                  // my={40}
                  src={
                    mypic
                  }
                />
              </MenuButton>
              <MenuList >
                <MenuItem>Contact Me</MenuItem>
                <MenuDivider />
                <MenuItem>Email:- hrsk321@gmail.com</MenuItem>
                <MenuDivider />
                <MenuItem><Link href="https://www.linkedin.com/feed/" isExternal>Linkedin</Link></MenuItem>
                <MenuDivider />
                <MenuItem><Link href="https://www.instagram.com/hrsk_photography/" isExternal>Instagram</Link></MenuItem>
              </MenuList>
            </Menu>
            </Hide>
          </Flex>
        </Flex>

        {/* {isOpen ? (
          <Box >
            <Stack as={'nav'} spacing={2} >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null} */}
      </Box>
    </>
  );
}