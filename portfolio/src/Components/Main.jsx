import React from 'react'
import { Box,Heading,Center } from '@chakra-ui/react'
import Simple from './Navbar'
import { UserProfile } from "./MySkills"
import { Head } from './Head'
import MyProject from './MyProject'
import Contact from './Contact'
import GithubCalender from './GithubCalender'

const Main = () => {
  const usersdata = [
    {
      skillsets: [
        {
          icon: "https://chiranjeev-thapliyal.vercel.app/svg/html-5.svg",
          description: "HTML",
          anc: "jobs",
        },
        {
          icon: "https://chiranjeev-thapliyal.vercel.app/svg/css3.svg",
          description: "CSS",
          anc: "jobs",
        },
        {
          icon: "https://chiranjeev-thapliyal.vercel.app/svg/javascript.svg",
          description: "Javascript",
          anc: "jobs",
        },
        {
          icon: "https://chiranjeev-thapliyal.vercel.app/svg/reactjs.svg",
          description: "React",
          anc: "jobs",
        },
        {
          icon: "https://chiranjeev-thapliyal.vercel.app/svg/nodejs.svg",
          description: "Node",
          anc: "jobs",
        },
        {
          icon: "https://chiranjeev-thapliyal.vercel.app/svg/redux.svg",
          description: "Redux",
          anc: "jobs",
        },
        {
          icon: "https://decodenatura.com/static/fb8aa1bb70c9925ce1ae22dc2711b343/4e9d0/nextjs-logo.png",
          description: "Next.js",
          anc: "jobs",
        },
        {
          icon: "https://cdn-icons-png.flaticon.com/512/5968/5968381.png",
          description: "Typescript",
          anc: "jobs",
        },
        {
          icon: "https://miro.medium.com/max/512/1*doAg1_fMQKWFoub-6gwUiQ.png",
          description: "Mongo DB",
          anc: "jobs",
        },
        {
          icon: "https://ih1.redbubble.net/image.438908244.6144/st,small,507x507-pad,600x600,f8f8f8.u2.jpg",
          description: "Express Js",
          anc: "jobs",
        },
      ],
    },
  ];

  return (
    <Box>
        <Simple />

      <Head name="home" />

      <Center>
      <Heading name="skill" color={'white'} mt={'13%'}>My Skills</Heading>
      </Center>

      
      <UserProfile usersData={usersdata} />

      <Center>
      <Heading name="project" color={'white'} mt={'15%'}>My Project</Heading>
      </Center>

      <MyProject/>

    <Center mt={"10%"} fontWeight={"bold"}   >
      <Box  backgroundColor={"rgb(211, 231, 235)"} p={"10px"}>
     <GithubCalender/>
     </Box>
     </Center>

      <Center>
      <Heading name="contact" color={'white'} mt={'12%'} >Contact Me</Heading>
      </Center>

      <Contact />
    </Box>
  )
}


export default Main