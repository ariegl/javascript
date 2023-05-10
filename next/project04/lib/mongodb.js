import mongoose from "mongoose"

const connection = {};

async function connect() {
    if(connection.isConnected) return;

    try{
        const db = await mongoose.connect("mongodb://127.0.0.1:27017/test");
        //const db = await mongoose.connect(process.env.MONGO_URI);
        
        connection.isConnected = db.connections[0].readyState;
    } catch (error) {
        console.log("error en conexion:",error);
    }

}

export default connect;

