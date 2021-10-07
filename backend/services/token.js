import jwt from 'jsonwebtoken';
import { model } from 'mongoose';
import models from '../models';

async function checkToken(token){
    let __id = null;
    try {
        const {_id} = await jwt.decode(token);
        __id = _id;
    } catch (e) {
        return false;
    }
    const user = await models.Usuario.findOne({_id:__id,estadoUsuario:1});
    if (user){
        const token = jwt.sign({_id:__id},'passtokensecret',{expiresIn:'1d'});
        return {token};
    } else{
        return false;
    }
}

export default{
    encode: async (_id,rol,email) =>{
        const token = jwt.sign({_id:_id,rol:rol,email:email},'passtokensecret',{expiresIn: '1d'});
        return token;
    },
    decode: async (token) =>{
        try {
            const {_id} = await jwt.verify(token,'passtokensecret');
            const user = await models.Usuario.findOne({_id,estadoUsuario:1});
            if (user){
                return user;
            } else{
                return false;
            }
        } catch (e) {
            const newToken = await checkToken(token);
            return newToken;
        }
    }
}