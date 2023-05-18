import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";

function Home() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("/api/auth/login", credentials);
    console.log(res);

    if (res.status === 200) {
      router.push("/dashboard");
    }
  };

  return (
    <div className= "min-h-screen min-w-full flex justify-center items-center bg-gray-800">
      <div className="w-1/3 flex justify-center items-center">
        <form className=" flex justify-center content-center flex-wrap" onSubmit={handleSubmit}>
          <h1 className="w-full text-4xl text-center py-4 text-white">Login</h1>
          <div className="w-2/3">
            <input
              type="text"
              className="w-full py-2 px-4 mt-2 bg-gray-900 outline-1 text-white"
              placeholder="user"
              onChange={(e) =>
                setCredentials({
                  ...credentials,
                  username: e.target.value,
                })
              }
            />
            <input
              type="password"
              placeholder="password"
              className="w-full py-2 px-4 mt-2 bg-gray-900 outline-1 text-white"
              onChange={(e) =>
                setCredentials({
                  ...credentials,
                  password: e.target.value,
                })
              }
            />
          </div>
          <div className="mt-4 w-full flex justify-center">
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  ENTRAR
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Home;