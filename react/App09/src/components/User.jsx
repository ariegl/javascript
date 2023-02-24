import React, { useContext } from "react";
import { UserContext } from "./UserContext";

function User() {
  const {counter,setCounter,dataUser,updateUserData} = useContext(UserContext);

  return (
    <div className="m-auto">
      <h1>USER COMPONENT</h1>
      <h2>username: {dataUser?.username}</h2>
      <button onClick={updateUserData}>ESTABLECER</button>
    </div>
  );
}

export default User;
