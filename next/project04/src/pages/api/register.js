import connect from "../../../lib/mongodb";
import User from "../../../models/user"

connect()

export default async function handleRegister(req, res) {
    try {
        console.log("objeto:",req.body);
        const user = await User.create(req.body);
        res.redirect("/");

        if(!user) {
            return res.json({"error": "Usuario no se ha creado"});
        }
    }catch (error){
        return res.status(400).json({error: "Error:" + error});
    }
}