import models from "../models";

export default {
    add: async (req,res,next) =>{
        try {
            const reg = await models.gasto.create(req.body);
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
            const reg = await models.gasto.findOne({_id:req.query._id});
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
            const reg = await models.gasto.find({'nombreGasto':new RegExp(valor,'i')},{fechaGasto:0}).sort({'totalGasto':-1});
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
            const reg = await models.gasto.findByIdAndUpdate({_id:req.body._id},
                {
                nombreGasto:req.body.nombreGasto,
                descripcionGasto:req.body.descripcionGasto,
                totalGasto:req.body.Totalgasto,
                fechaGasto:req.body.fechaGasto
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
            const reg = await models.gasto.findByIdAndDelete({_id:req.body._id});
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
            const reg = await models.gasto.findByIdAndUpdate({_id:req.body._id},{estadoGasto:1});
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
            const reg = await models.gasto.findByIdAndUpdate({_id:req.body._id},{estadoGasto:0});
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error'
            });
            next(e);
        }
    }
}
