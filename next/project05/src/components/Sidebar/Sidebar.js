import { Avatar } from "@fluentui/react-components"
import Link from "next/link";

function Sidebar({user}) {
  return (
    <div
      id="sidebar"
      className="w-60 min-h-screen flex justify-center content-start flex-wrap bg-gray-900"
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
            <Link href="/">
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
