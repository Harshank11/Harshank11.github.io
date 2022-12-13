import React from 'react'
import { Box,Heading,Center } from '@chakra-ui/react'
import Simple from './Navbar'
import { UserProfile } from "./MySkills"
import { Head } from './Head'
import MyProject from './MyProject'
import Contact from './Contact'

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
        
      ],
    },
  ];

  return (
    <Box>
        <Simple position={"fixed"}/>

      <Head name="home"/>

      <Center>
      <Heading name="skill" color={'white'} mt={'13%'}>My Skills</Heading>
      </Center>

      <UserProfile usersData={usersdata} />

      <Center>
      <Heading name="project" color={'white'} mt={'15%'}>My Project</Heading>
      </Center>

      <MyProject/>

      <Center>
      <Heading name="contact" color={'white'} mt={'15%'} >Contact Me</Heading>
      </Center>

      <Contact />
    </Box>
  )
}


export default Main