import React from "react";
import "./Head.css";
import { Box, Image, Flex, Center, Link, Text } from "@chakra-ui/react";
import himalaya from "./images/Screenshot (1033).png";
import getRojgar from "./images/Screenshot (1034).png";
import pharmeasy from "./images/Screenshot (1035).png";
import Dice from "./images/Screenshot (1036).png";
import Movieapp from "./images/Screenshot (1037).png";

const MyProject = () => {
  return (
    <Box>
      <Center  >
        <Center >
        <Link
          id="container"
          w={"50%"}
          m={"3%"}
          href="https://friendly-pudding-a5d011.netlify.app/homepage/"
          isExternal
        >
          <Image
            className="special"
            w={"100%"}
            src={himalaya}
            alt="him"
          ></Image>
          <Box className="beforetext">
            <Text id="text">View Himalaya Clone
            
            </Text>
          </Box>
          <Text color={"white"} >
          Himalaya offers a full line of clinically-studied herbal formulations, certified USDA organic Single herbs, and a full line of body care products.

            {/* <Image w={"50px"} src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/> */}
            
          </Text>
        </Link>
        <Box >
        <Image w={"50px"} src="https://chiranjeev-thapliyal.vercel.app/svg/reactjs.svg"/>
        <Image w={"50px"} src="https://chiranjeev-thapliyal.vercel.app/svg/javascript.svg"/>
        <Image w={"50px"} src="https://chiranjeev-thapliyal.vercel.app/svg/css3.svg"/>
        <Link href="https://github.com/btcpatil/handy-zipper-9467" isExternal><Image w={"50px"} src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"></Image></Link>
        </Box>
        
        
        </Center>

      <Center>
        <Link
          id="container"
          w={"50%"}
          m={"3%"}
          href="https://gorgeous-halva-da55a4.netlify.app/"
          isExternal
        >
          <Image
            className="special"
            w={"100%"}
            src={getRojgar}
            alt="getrojgar"
          >

          </Image>
          <Box className="beforetext">
            <Text id="text">View Get Rojgar</Text>
          </Box>
          <Text color={"white"}>
          It's an Employment website, inspired by Naukri.com. Made with React,Javascript and Chakra UI.
          </Text>
        </Link>
        <Box >
        <Image w={"50px"} src="https://chiranjeev-thapliyal.vercel.app/svg/reactjs.svg"/>
        <Image w={"50px"} src="https://chiranjeev-thapliyal.vercel.app/svg/javascript.svg"/>
        <Image w={"50px"} src="https://chiranjeev-thapliyal.vercel.app/svg/css3.svg"/>
        <Link href="https://github.com/Harshank11/Get-Rojgar.com" isExternal><Image w={"50px"} src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"></Image></Link>
        </Box>

        </Center>
      </Center>

      <Center>
        <Center>
        <Link
          id="container"
          w={"50%"}
          m={"3%"}
          href="https://enchanting-bonbon-ad5692.netlify.app/"
          isExternal
        >
          <Image
            className="special"
            w={"100%"}
            src={pharmeasy}
            alt="pharmeasy"
          ></Image>
          <Box className="beforetext">
            <Text id="text">View PharmEasy Clone</Text>
          </Box>
          <Text color={"white"}>
          PharmEasy is an Indian e-pharmacy company that sells medicines, diagnostics and telehealth online.
          </Text>
        </Link>
        <Box >
        <Image w={"50px"} src="https://chiranjeev-thapliyal.vercel.app/svg/html-5.svg"/>
        <Image w={"50px"} src="https://chiranjeev-thapliyal.vercel.app/svg/javascript.svg"/>
        <Image w={"50px"} src="https://chiranjeev-thapliyal.vercel.app/svg/css3.svg"/>
        <Link href="https://github.com/chinmaydonkar/PharmEasy" isExternal><Image w={"50px"} src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"></Image></Link>
        </Box>
        </Center>

<Center>
        <Link
          id="container"
          w={"50%"}
          m={"3%"}
          href="https://app.netlify.com/sites/polite-empanada-4da15c/overview"
          isExternal
        >
          <Image
            className="special"
            w={"100%"}
            src={Dice}
            alt="getrojgar"
          ></Image>
          <Box className="beforetext">
            <Text id="text">Play Dice Game</Text>
          </Box>
          <Text color={'white'}>
            A Dice Game made with HTML,CSS And Javascript. Just click and Play.
          </Text>
        </Link>
        <Box >
        <Image w={"50px"} src="https://chiranjeev-thapliyal.vercel.app/svg/html-5.svg"/>
        <Image w={"50px"} src="https://chiranjeev-thapliyal.vercel.app/svg/javascript.svg"/>
        <Image w={"50px"} src="https://chiranjeev-thapliyal.vercel.app/svg/css3.svg"/>
        <Link href="https://github.com/btcpatil/handy-zipper-9467" isExternal><Image w={"50px"} src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"></Image></Link>
        </Box>
        </Center>
      </Center>

      <Center>

        <Center>
        <Link
          id="container"
          w={"50%"}
          m={"3%"}
          href="https://sensational-treacle-ef9a5a.netlify.app/"
          isExternal
        >
          <Image
            className="special"
            w={"80%"}
            src={Movieapp}
            alt="him"
          ></Image>
          <Box className="beforetext">
            <Text id="text">View Movie Search</Text>
          </Box>
          <Text color={'white'}>
            A Movie Poster website. 
          </Text>
        </Link>
        <Box >
        <Image w={"50px"} src="https://chiranjeev-thapliyal.vercel.app/svg/html-5.svg"/>
        <Image w={"50px"} src="https://chiranjeev-thapliyal.vercel.app/svg/javascript.svg"/>
        <Image w={"50px"} src="https://chiranjeev-thapliyal.vercel.app/svg/css3.svg"/>
        <Link href="https://github.com/btcpatil/handy-zipper-9467" isExternal><Image w={"50px"} src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"></Image></Link>
        </Box>
        </Center>
      </Center>
    </Box>
  );
};

export default MyProject;
