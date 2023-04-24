import { dbConnect } from "@/utils/mongoose";
import { Task } from "@/pages/models/Task.js";

dbConnect();

export default async function (req,res) {
    console.log(req.query)
    const {method, body, query: {id}} = req;

    switch(method){
        case "GET":
            const task = await Task.findById(id);
            if(!task) return res.status(404).json({msg: "La tarea no fue encontrada"});
            return res.status(200).json(task);
        case "PUT":
            break;
        case "DELETE":
            break;
        default:
            return res.status(400).json({msg: "Metodo no soportado"});
            break;
    }

    return res.status(200).json("recibido");
}