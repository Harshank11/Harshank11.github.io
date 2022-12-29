import { Center,Box,Image } from "@chakra-ui/react";
import "./Head.css"

export function UserProfile(props) {
    return props.usersData.map((elem) => (
      <Center  mt={100} >
        <div className="data" >
        
            {elem.skillsets.map((elem) => (
              <Box className="skill_box"  >
                <a style={{ textDecoration: 'none',color:"black" }}  href={elem.anc} >
                <Image className="skill_image" src={elem.icon} alt=""  />
                <p className="skill_text">{elem.description}</p>
                </a> 
              </Box>
            ))}
         
        </div>
      </Center>

    ));
  }

