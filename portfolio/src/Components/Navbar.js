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
// const Links = ['Home','About Me', 'Projects', 'Skills'];



export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box   >
        <Flex   justifyContent={"space-between"} >
   
          <Flex id="navbuttons"  justifyContent={'space-between'}  ml={"10px"} >
              <Link to='home' spy={true} smooth={true} offset={100} duration={250} ><Text id="navb" >Home</Text></Link>
              {/* <Button>About Me</Button> */}
              <Link to='skill'spy={true} smooth={true} offset={-230} duration={250} ><Text id="navb"  >Skill</Text></Link>
              <Link to='project'spy={true} smooth={true} offset={-60} duration={250} ><Text id="navb" >Project</Text></Link>
              <Link to='contact'spy={true} smooth={true} offset={-30} duration={250} ><Text id="hidee"  >Contact</Text></Link>
              <Button id="navb"><a href={resume} download style={{ textDecoration: 'none' }} >Resume</a></Button>
          </Flex>
          <Flex alignItems={'center'} id="mypic"
            >
              
            <Menu  >
            
              <MenuButton
        
                as={Button}
                bg={'none'}
                variant={'link'}
                cursor={'pointer'}
              
                >
                  
                <Avatar 
                width={'55px'}
                borderRadius={'50%'}
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
                <MenuItem textDecoration= {'none'}><Link href="https://www.linkedin.com/feed/" style={{ textDecoration: 'none',color:'blue' }} isExternal>Linkedin</Link></MenuItem>
                <MenuDivider />
                <MenuItem><Link href="https://www.instagram.com/hrsk_photography/" style={{ textDecoration: 'none',color:'blue'  }} isExternal>Instagram</Link></MenuItem>
              </MenuList>
            </Menu>
           
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