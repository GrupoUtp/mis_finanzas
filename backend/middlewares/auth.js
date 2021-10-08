import tokenService from '../services/token';

export default {
    verifyUsuario: async (req, res, next) =>{
        if (!req.headers.token){
            return res.status(404).send({
                message: 'No token'
            });
        }
        const response = await tokenService.decode(req.headers.token);
        if (response.rol == 'user' || response.rol == 'admin'){
            next();
        }else{
            return res.status(403).send({
                message: 'No autorizado'
            });
        }
    },
    verifyUser: async (req, res, next) =>{
        if (!req.headers.token){
            return res.status(404).send({
                message: 'No token'
            });
        }
        const response = await tokenService.decode(req.headers.token);
        if (response.rol == 'user'){
            next();
        }else{
            return res.status(403).send({
                message: 'No autorizado'
            });
        }
    }
}