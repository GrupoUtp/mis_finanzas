import models from "../models";
import bcrypt from 'bcryptjs';
import token from "../services/token";

export default {
    add: async (req,res,next) =>{
        try {
            req.body.password = await bcrypt.hash(req.body.password,10);
            const reg = await models.Usuario.create(req.body);
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error'
            });
            next(e);
        }
    },
    query: async (req,res,next) =>{
        try {
            const reg = await models.Usuario.findOne({_id:req.query._id});
            if(!reg){
                res.status(404).send({
                    message: 'El registro no existe'
                });
            }else{
                res.status(200).json(reg);
            }
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error'
            });
            next(e);
        }
    },
    list: async (req,res,next) =>{
        try {
            let valor = req.query.valor;
            const reg = await models.Usuario.find({'email':new RegExp(valor,'i')}).sort({'email':-1});
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error'
            });
            next(e);
        }
    },
    update: async (req,res,next) =>{
        try {
            let pas = req.body.password;
            const reg0 = await models.Usuario.findOne({_id:req.body});
            if(pas!=reg0.password){
                req.body.password = await bcrypt.hash(req.body.password,10);
            } 
            req.body.password = await bcrypt.hash(req.body.password,10);
            const reg = await models.Usuario.findByIdAndUpdate({_id:req.body._id},
                {
                primer_nombre:req.body.primer_nombre,
                segundo_nombre:req.body.segundo_nombre,
                primer_apellido:req.body.primer_apellido,
                segundo_apellido:req.body.segundo_apellido,
                email:req.body.email,
                password:req.body.password,
                pais:req.body.pais,
                telefono:req.body.telefono,
                estadoUsuario:req.body.estado,
                });
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error'
            });
            next(e);
        }
    },
    remove: async (req,res,next) =>{
        try {
            const reg = await models.Usuario.findByIdAndDelete({_id:req.body._id});
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error'
            });
            next(e);
        }
    },
    activate: async (req,res,next) =>{
        try {
            const reg = await models.Usuario.findByIdAndUpdate({_id:req.body._id},{estadoUsuario:1});
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error'
            });
            next(e);
        }
    },
    desactivate: async (req,res,next) =>{
        try {
            const reg = await models.Usuario.findByIdAndUpdate({_id:req.body._id},{estadoUsuario:0});
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error'
            });
            next(e);
        }
    },

    login: async (req,res,next) =>{
        try{
            let user = await models.Usuario.findOne({email:req.body.email,estadoUsuario:1});
            if(user){
                let match = await bcrypt.compare(req.body.password, user.password);
                if(match){
                    let tokenReturn = await token.encode(user._id,user.rol,user.email);
                    res.status(200).json({user, tokenReturn});
                }else{
                    res.status(404).send({
                        message: 'Contraseña incorrecta'
                    });
                }
            }else{
                res.status(404).send({
                    message: 'Este usuario no se encuentra registrado'
                });
            }
        }catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error'
            });
            next(e);
        }
    }
}
