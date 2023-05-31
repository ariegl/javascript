import User from "../../../models/user";
import connect from "../../../lib/mongodb";

connect();

export default async function signup (req,res) {
    const {
        username,
        password,
        rpassword,
        email,
        phone,
    } = req.body;

    if(password !== rpassword) return res.json({message: "Las contraseñas no coinciden", created: false, error: "password"});


    const insertUser = await User.create({username: username, password: password, email: email, phone:phone});
    if(!insertUser) return res.status(200).json({message: "Error al crear el usuario", created: false, error: "general"});
    return res.status(200).json({message: "Usuario creado",created: true});
}