import { sign } from "jsonwebtoken";
import { serialize } from "cookie";
import connect from "../../../../lib/mongodb";
import User from "../../../../models/user";

connect();

export default async function loginHandler(req, res) {
  const { username, password } = req.body;

  const user = await User.findOne({username,password}).lean(); //importante .lean
  //console.log(user._id);

  if (!user) return res.status(401).json({message: "error de credenciales"});

  // expire in 30 days
  const token = sign(
    {
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30,
      username: username
    },
    "secret"
  );

  const serialized = serialize("myTokenName", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 1000 * 60 * 60 * 24 * 30,
    path: "/",
  });

  res.setHeader("Set-Cookie", serialized);
  return res.status(200).json({
    message: "Login successful",
  });
  
}
