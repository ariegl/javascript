import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import { useEffect, useState } from 'react';
import axios from "axios";
import Loader from './Loader';

function BaseLayout({children}) {
    const [loaded, setLoaded] = useState(false);

    const [user, setUser] = useState({
        username: "",
        auth: false,
    });

    const getProfile = async () => {
        const profile = await axios.get("../api/profile");
        setUser(profile.data);
    };

    useEffect(() => {
        getProfile();
        loadedSuccess();
    }, [])

    const loadedSuccess = () => {
        setLoaded(true);
    }

  return (
    <div className="w-full h-screen bg-gray-700 text-white flex justify-start items-start">

        {loaded ? 
            <>
                <Sidebar user={user.username}/>
                <div className="bg-gray-200 w-full h-screen text-black flex justify-start items-start">
                    {children}
                </div>
            </>
        : (
            <Loader/>
        )
        }
    </div>
  )
}

export default BaseLayout