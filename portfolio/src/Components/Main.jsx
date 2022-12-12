import React from 'react'
import { Box,Heading,Center } from '@chakra-ui/react'
import { UserProfile } from "./MySkills"
import { Head } from './Head'
import MyProject from './MyProject'

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
        
      ],
    },
  ];

  return (
    <Box>
      <Head/>
      <Center>
      <Heading color={'white'} mt={'12%'}>My Skills</Heading>
      </Center>
     <UserProfile usersData={usersdata} />
     {/* <UserProfile usersData={usersdata} /><UserProfile usersData={usersdata} /><UserProfile usersData={usersdata} /><UserProfile usersData={usersdata} /> */}
     <Center>
     <Heading color={'white'} mt={'12%'}>My Project</Heading>
     </Center>
     <MyProject/>
    </Box>
  )
}


export default Main