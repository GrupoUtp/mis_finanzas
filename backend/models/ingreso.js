import mongoose, {Schema} from "mongoose";

const ingresoSchema = new Schema({
    valorIngreso:  {type:Number,required:true},
    estadoIngreso: {type:Number,default:1},
    fechaIngreso:  {type:Date, default:Date.now}
});

const ingreso = mongoose.model('ingreso', ingresoSchema);

export default ingreso;