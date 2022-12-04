import { Center } from "@chakra-ui/react";

export function UserProfile(props) {
    return props.usersData.map((elem) => (
      <Center className="flex" style={{ display: "flex" }} mt={100} >
        <div className="data" >
          <div className="skills" >
            {elem.skillsets.map((elem) => (
              <button className="skill_box" style={{ margin: 10 }}  >
                <a href={elem.anc} style={{ display: "flex" }}>
                <img width="45px" src={elem.icon} alt="" className="icon" />
                <p className="skill_text">{elem.description}</p>
                </a> 
              </button>
            ))}
          </div>
        </div>
      </Center>

    ));
  }

