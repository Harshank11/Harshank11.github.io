import React from 'react'
import { Box,Image,Flex,Center,Link } from '@chakra-ui/react'
import himalaya from "./images/Screenshot (1033).png"
import getRojgar from "./images/Screenshot (1034).png"
import pharmeasy from "./images/Screenshot (1035).png"
import Dice from "./images/Screenshot (1036).png"
import Movieapp from "./images/Screenshot (1037).png"


const MyProject = () => {
  return (
    <Box>
       <Center >          
            <Link w={'30%'} m={'3%'} href='https://friendly-pudding-a5d011.netlify.app/homepage/' isExternal>
                <Image w={'100%'}  src={himalaya} alt="him"></Image>
            </Link>
            <Link w={'30%'} m={'3%'} href='https://gorgeous-halva-da55a4.netlify.app/' isExternal>
                <Image w={'100%'} src={getRojgar} alt="getrojgar"></Image>
            </Link>
            
        </Center>

     <Center >
 
     <Link w={'30%'} m={'3%'}  href='https://enchanting-bonbon-ad5692.netlify.app/' isExternal >
        <Image w={'100%'} src={pharmeasy} alt="pharmeasy"></Image>
    </Link>
    <Link w={'30%'} m={'3%'}  href='https://app.netlify.com/sites/polite-empanada-4da15c/overview' isExternal>
        <Image w={'100%'} src={Dice} alt="getrojgar"></Image>
    </Link>
     
     </Center >

     <Center >
 
     <Link w={'30%'} m={'3%'}  href='https://sensational-treacle-ef9a5a.netlify.app/' isExternal>
        <Image w={'100%'} src={Movieapp} alt="him"></Image>
        </Link>
 
     </Center >
    </Box>
  )
}

export default MyProject