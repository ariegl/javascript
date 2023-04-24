import {dbConnect} from '../../../utils/mongoose';
import Task from '@/pages/models/Task';

dbConnect();

export default async function handler(req, res) {

    const {method, body} = req;

    switch(method){
        case 'GET':
                const tasks = await Task.find();
                return res.status(200).json(tasks); 
            break;
        case 'POST':
                const newTask = new Task(body);
                const saveTask = await newTask.save();
                return res.status(201).json(saveTask);
            break;
        default:
            return res.status(400).json({msg: "este metodo no esta soportado"});
            break;
    }

  }
  