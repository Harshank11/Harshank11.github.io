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
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import './Navbar.css'
import mypic from "./images/272A2504.JPG"
import resume from "./images/Harshank's Resume .pdf"
import { createBreakpoints } from "@chakra-ui/theme-tools"

import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const breakpoints = createBreakpoints({
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
})
const Links = ['Home','About Me', 'Projects', 'Skills'];

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={20}
    py={10}
    textDecoration= 'none'
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      color:'blue',
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box w={'100%'} >
        <Flex border={'1px solid whit'} h={50} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            w={'1px'}
            h={'1px'}
            backgroundColor={'pink.200'}
            ml={'20px'}
            // icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            // text={isOpen ? "Hello" : "world"}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
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
          <Flex id="navbuttons"  justifyContent={'space-between'} w={'55%'} >
              <Link to='home' spy={true} smooth={true} offset={100} duration={250} ><Button>Home</Button></Link>
              {/* <Button>About Me</Button> */}
              <Link to='skill'spy={true} smooth={true} offset={-230} duration={250} ><Button>Skill</Button></Link>
              <Link to='project'spy={true} smooth={true} offset={-60} duration={250} ><Button>Project</Button></Link>
              <Link to='contact'spy={true} smooth={true} offset={-30} duration={250} ><Button>Contact</Button></Link>
              <Button><a href={resume} download>Resume</a></Button>
          </Flex>
          <Flex alignItems={'center'} mr="15px">
            <Menu>
            {/* <MenuButton></MenuButton> */}
              <MenuButton
                as={Button}
                bg={'none'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar 
                width={'55px'}
                borderRadius={'50%'}
                mt={'20px'}
                  // size={'xl'}
                  px={20}
                  py={20}
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