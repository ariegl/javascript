import React, { useState } from "react";
import { UserContext } from "./UserContext";

export function UserProvider({children}) {
  const [counter, setCounter] = useState(0);

  const [dataUser, setDataUser] = useState({});

  function updateUserData() {
    setDataUser({
      ...dataUser,
      email: 'ariel@gmail.com',
      username: 'arielink',
      age: 20,
      address: {
        country: 'Mexico',
        street: 'AV RUIZ, #459, CP 22800',
      }
    });
  }


  return (
    <UserContext.Provider value={{counter,setCounter,dataUser,updateUserData}}>{children}</UserContext.Provider>
  );
}
