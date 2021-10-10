import mongoose, { Schema} from "mongoose";

const gastoSchema = new Schema({
    nombreGasto: {type: String, maxlength:70, required:true},
<<<<<<< HEAD
 // descripcionGasto: {type:String, maxlength:255},
 // estadoGasto: {type:Number,default:1},
=======
    descripcionGasto: {type:String, maxlength:255},
    estadoGasto: {type:Number,default:1},
>>>>>>> bec785443fde5d7e62d54c5025c7c3a379264973
    totalGasto:  {type:Number,required:true},
    fechaGasto:  {type:Date, default:Date.now}
});

const gasto = mongoose.model('gasto', gastoSchema);

export default gasto;
