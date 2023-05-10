import { redirect } from "next/dist/server/api-utils";
import connect from "../../../lib/mongodb";
import User from "../../../models/user"

connect();

export default async function handleLogin(req, res) {

    const {username, password} = req.body;

    const user = await User.findOne({username,password});

    if (!user) return res.json({message: "No hay datos"})

    console.log("data:",user);
    res.redirect("/home")
} 