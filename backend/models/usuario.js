
import moongose, {Schema} from 'mongoose';

const usuarioSchema = new Schema({
    primer_nombre: { type:String, maxlength:30, required:true},
    //segundo_nombre: {type:String, maxlength:30},
    primer_apellido: {type:String, maxlength:30, required:true},
    //segundo_apellido: {type:String, maxlength:30},
    pais: {type:String, maxlength:40},
    ciudad: {type:String, maxlength:40},
    email: {type:String, maxlength:50, unique:true, required:true},
    password: {type:String, required:true},
    telefono: {type:String, maxlength:20},
    estadoUsuario: {type:Number, default:1},
    rol: {type:String, default:'user'}
});

const Usuario = moongose.model('usuario',usuarioSchema);
export default Usuario;