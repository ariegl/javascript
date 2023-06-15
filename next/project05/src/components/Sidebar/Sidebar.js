import { Avatar } from "@fluentui/react-components"
import Link from "next/link";
import { useRouter } from "next/router";
import { useRef, useEffect, useState } from "react";
import axios from "axios";
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import BuildIcon from '@mui/icons-material/Build';
import LogoutIcon from '@mui/icons-material/Logout';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';


function Sidebar({user}) {

  const router = useRouter();
  const sidebarRef = useRef();
  const [sideBarIsHide, setSideBarIsHide] = useState(false);

  const logout = async () => {
    try {
      await axios.get("../api/auth/logout");
    } catch (error) {
      console.error(error.message);
    }
    router.push("/");
  };

  useEffect(() => {
    sidebarRef.current.classList?.remove("invisible");
  },[])

  return (
    <div
      id="sidebar"
      ref={sidebarRef}
      className={`${sideBarIsHide ? "w-20" : "w-56"} min-h-screen fixed flex justify-center content-start flex-wrap bg-gray-900`}
    >
      <div className="w-full flex justify-center">
        <Avatar
          initials={user}
          color="platinum"
          name="pumpkin avatar"
          size={sideBarIsHide ? 64 : 120}
          className="bg-gray-400 my-8"
        ></Avatar>
      </div>
      <div className="w-full">
        <ul className="min-w-full text-center">
          <li className="">
            <Link href="/dashboard">
              <a className="block w-full py-4 hover:underline hover:bg-gray-800">
                {sideBarIsHide ? <HomeIcon/> : "Home"}
              </a>
            </Link>
          </li>
          <li className="">
            <Link href="/about">
              <a className="block w-full py-4 hover:underline hover:bg-gray-800">
                {sideBarIsHide ? <InfoIcon/> : "About"}
              </a>
            </Link>
          </li>
          <li className="">
            <Link href="/settings">
              <a className="block w-full py-4 hover:underline hover:bg-gray-800">
                {sideBarIsHide ? <BuildIcon/> : "Settings"}
              </a>
            </Link>
          </li>
          <li className="">
            <a
              onClick={() => logout()}
              className="block w-full py-4 hover:underline hover:bg-gray-800 cursor-pointer"
            >
              {sideBarIsHide ? <LogoutIcon/> : "Logout"}
            </a>
          </li>
        </ul>
      </div>
      <div className="absolute bottom-2">
        <button className={`bg-slate-600 rounded ${sideBarIsHide ? "px-4" : "px-6"} py-2`} onClick={() => {setSideBarIsHide(!sideBarIsHide)}}>{sideBarIsHide ? <VisibilityIcon/> : <VisibilityOffIcon/>}</button>
      </div>
    </div>
  );
}

export default Sidebar;
