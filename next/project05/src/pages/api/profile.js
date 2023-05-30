import {verify} from "jsonwebtoken"

export default function profileHandler(req, res) {

    const {myTokenName} = req.cookies

    try{
        const user = verify(myTokenName, 'secret');
        return res.status(200).json({auth:true, username: user.username});
    }catch (error){
        return res.status(200).json({auth: false,msg: "token invalido"})
    }

    return res.json({
        user: 'ariel123'
    })
}