/* import models from "../models";

export default {
    add: async (req,res,next) =>{
        try {
            const reg = await models.tipoGasto.create(req.body);
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
            const reg = await models.tipoGasto.findOne({_id:req.query._id});
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
            const reg = await models.tipoGasto.find({'nombreGasto':new RegExp(valor,'i')}).sort({'nombreGasto':1});
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrio un error'
            });
            next(e);
        }
    },
    update: async (req,res,next) =>{
        try {
            const reg = await models.tipoGasto.findByIdAndUpdate({_id:req.body._id},
                {
                nombreGasto:req.body.nombreGasto,
                gastoTipo:req.body.gastoTipo,
                estadoTipo:req.body.estadoGasto
                });
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrio un error'
            });
            next(e);
        }
    },
    remove: async (req,res,next) =>{
        try {
            const reg = await models.tipoGasto.findByIdAndDelete({_id:req.body._id});
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrio un error'
            });
            next(e);
        }
    },
    activate: async (req,res,next) =>{
        try {
            const reg = await models.tipoGasto.findByIdAndUpdate({_id:req.body._id},{estadoTipo:1});
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrio un error'
            });
            next(e);
        }
    },
    desactivate: async (req,res,next) =>{
        try {
            const reg = await models.tipoGasto.findByIdAndUpdate({_id:req.body._id},{estadoTipo:0});
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrio un error'
            });
            next(e);
        }
    }
}
*/
