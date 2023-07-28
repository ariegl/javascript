import React from "react";
import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter();

  const handleGoHome = () => {
    router.push("/");
  };

  return (
    <nav className="min-w-full bg-black">
      <ul>
        <li>
          <button
            className="px-5 py-2 bg-black text-green-200 border-r-2 border-green-300 hover:bg-slate-700"
            onClick={handleGoHome}
            title="Go to home"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
