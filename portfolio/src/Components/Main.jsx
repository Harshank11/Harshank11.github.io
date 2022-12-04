import React from 'react'
import { Box,Flex } from '@chakra-ui/react'
import { UserProfile } from "./MySkills"
import { Head } from './Head'

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
        
      ],
    },
  ];

  return (
    <Box>
      <Head/>
     <UserProfile usersData={usersdata} />
     {/* <UserProfile usersData={usersdata} /><UserProfile usersData={usersdata} /><UserProfile usersData={usersdata} /><UserProfile usersData={usersdata} /> */}
    </Box>
  )
}


export default Main