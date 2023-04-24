import {Schema, model ,models} from 'mongoose';

const taskSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        unique: true,
        trim: true,
        maxlength: [40, 'Titulo deberia ser menora 40 caracteres'],
    },
    description: {
        type: String,
        required: true,
        trim:true,
        maxlength: [200, 'Maximo 200 caracteres'],
    }
}, {
    timestamps:true,
    versionKey: false,
})

export default models.Task || model('Task',taskSchema)