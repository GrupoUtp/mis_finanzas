import mongoose, { Schema} from "mongoose";

const gastoSchema = new Schema({
    nombreGasto: {type: String, maxlength:70, required:true},
 // descripcionGasto: {type:String, maxlength:255},
 // estadoGasto: {type:Number,default:1},
    totalGasto:  {type:Number,required:true},
    fechaGasto:  {type:Date, default:Date.now}
});

const gasto = mongoose.model('gasto', gastoSchema);

export default gasto;
