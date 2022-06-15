import React from "react";
import { useState } from "react";
import { createContext } from "react";


const UserContext = createContext({
  userData: [],
  addUserData: ()=>{},
});

export function UserContextProvider(props) {
  const [userData,setUserData] = useState([]);

  const addUserData=(data)=>{
      setUserData(data)
  }

  const context = {
    userData,
    addUserData
  };

  return (
    <UserContext.Provider value={context}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContext;