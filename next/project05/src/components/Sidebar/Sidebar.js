import { Avatar } from "@fluentui/react-components"
import Link from "next/link";
import { useRouter } from "next/router";
import { useRef, useEffect } from "react";
import axios from "axios";

function Sidebar({user}) {

  const router = useRouter();
  const sidebarRef = useRef();

  const logout = async () => {
    try {
      await axios.get("../api/auth/logout");
    } catch (error) {
      console.error(error.message);
    }
    router.push("/login");
  };

  useEffect(() => {
    sidebarRef.current.classList.remove("invisible");
  },[])

  return (
    <div
      id="sidebar"
      ref={sidebarRef}
      className="w-60 min-h-screen flex justify-center content-start flex-wrap bg-gray-900 invisible"
    >
      <div className="w-full flex justify-center">
        <Avatar
          initials={user}
          color="platinum"
          name="pumpkin avatar"
          size={120}
          className="bg-gray-400 my-8"
        ></Avatar>
      </div>
      <div className="w-full">
        <ul className="min-w-full text-center">
          <li className="">
            <Link href="/dashboard">
              <a className="block w-full py-4 hover:underline hover:bg-gray-800">
                Home
              </a>
            </Link>
          </li>
          <li className="">
            <Link href="/about">
              <a className="block w-full py-4 hover:underline hover:bg-gray-800">
                About
              </a>
            </Link>
          </li>
          <li className="">
            <Link href="/settings">
              <a className="block w-full py-4 hover:underline hover:bg-gray-800">
                Settings
              </a>
            </Link>
          </li>
          <li className="">
            <a
              onClick={() => logout()}
              className="block w-full py-4 hover:underline hover:bg-gray-800 cursor-pointer"
            >
              Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
