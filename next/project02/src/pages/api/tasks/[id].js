import { dbConnect } from "@/utils/mongoose";
import Task from "@/models/Task";

dbConnect();

export default async function (req,res) {
    console.log(req.query)
    const {method, body, query: {id}} = req;

    switch(method){
        case "GET":
            try {
                const task = await Task.findById(id);
                if(!task) return res.status(404).json({msg: "La tarea no fue encontrada"});
                return res.status(200).json(task);
            } catch (error) {
                return res.status(500).json({msg: error.message})
            }
        case "PUT":
            try {
                const task = await Task.findByIdAndUpdate(id, body, {
                    new: true,
                });
                if (!task) return res.status(500).json({msg: error.message})
                return res.status(200).json(task);
            } catch (error) {
                return res.status(500).json({msg: error.message})
            }
            break;
        case "DELETE":
            try {
                const deleteTask = await Task.findByIdAndDelete(id);
                if (!deleteTask) return res.status(404).json({msg: "La tarea no fue eliminada"});
                return res.status(204).json();
            } catch (error) {
                return res.status(500).json({msg: error.message})
            }
        default:
            return res.status(400).json({msg: "Metodo no soportado"});
    }

    return res.status(200).json("recibido");
}