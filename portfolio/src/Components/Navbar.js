import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
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
        <Flex border={'1px solid white'} h={50} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            w={'50px'}
            h={'50px'}
            backgroundColor={'pink.200'}
            ml={'20px'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
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
          <Flex id="navbuttons"  justifyContent={'space-between'} w={'55%'}>
              <Button >Home</Button>
              <Button>About Me</Button>
              <Button>Skill</Button>
              <Button>Project</Button>
              <Button>Contact</Button>
          </Flex>
          <Flex alignItems={'center'} mr="15px">
            <Menu>
            <MenuButton>Contact</MenuButton>
              <MenuButton
                as={Button}
                bg={'none'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar 
                width={'50px'}
                borderRadius={'50%'}
                // mt={'20px'}
                  // size={'sm'}
                  px={20}
                  py={10}
                  src={
                    'https://media-exp1.licdn.com/dms/image/C4D03AQH7FgNHTSkJWQ/profile-displayphoto-shrink_800_800/0/1658905264225?e=2147483647&v=beta&t=Q4aP0vShPwnyS3OBnS-dX7IjV9FIy4zbDl-dXxjGGcI'
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

        {isOpen ? (
          <Box >
            <Stack as={'nav'} spacing={2} >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}