import React from 'react'
import {verify} from "jsonwebtoken"

export default function verifyLogged(req, res) {
    const {myTokenName} = req.cookies

    if(!myTokenName) return res.status(200).json({auth: false}); 

    try{
        const user = verify(myTokenName, 'secret');
        return res.status(200).json({auth: true});
    } catch (error){
        return res.status(200).json({auth: false});
    }
}