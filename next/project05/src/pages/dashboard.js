import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Sidebar from "../components/Sidebar/Sidebar";

function Dashboard() {
  const [user, setUser] = useState({
    username: "",
  });
  const router = useRouter();

  const getProfile = async () => {
    const profile = await axios.get("/api/profile");
    setUser(profile.data);
  };

  const logout = async () => {
    try {
      await axios.get("/api/auth/logout");
    } catch (error) {
      console.error(error.message);
    }
    router.push("/login");
  };


  useEffect(() => {
    getProfile();
  }, {})

  return (
    <div className="w-full h-screen bg-gray-700 text-white flex justify-start items-start">
      <Sidebar user={user.username}/>
      {JSON.stringify(user)}
      <button onClick={() => getProfile()}>profile</button>
      <button onClick={() => logout()}>Logout</button>
    </div>
  );
}

export default Dashboard;
