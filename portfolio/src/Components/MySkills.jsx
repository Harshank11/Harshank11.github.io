import { Center,Button,Image } from "@chakra-ui/react";
import "./Head.css"

export function UserProfile(props) {
    return props.usersData.map((elem) => (
      <Center className="flex" style={{ display: "flex" }} mt={100} >
        <div className="data" >
          <div className="skills" >
            {elem.skillsets.map((elem) => (
              <Button className="skill_box" style={{ margin: 20 }}  >
                <a href={elem.anc} >
                <Image width="95px" height="95px" src={elem.icon} alt=""  />
                <p className="skill_text">{elem.description}</p>
                </a> 
              </Button>
            ))}
          </div>
        </div>
      </Center>

    ));
  }

