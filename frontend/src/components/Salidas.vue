<template>
    <div>
        <form style="margin: auto; width: 300px" @submit.prevent="agregarGasto()">
            <h1 style="
                margin: 0;
                padding: 20px 0 20px; 
                text-align: center; 
                font-size: 24px">
                Registra tu gasto
            </h1>
            <div class="form-group">
                <label for="TipoGastos">Escoge el tipo de gasto</label>
                <select class="form-control" id="ListaGastos" v-model="gasto.tipoGasto" >
                    <option value="Transporte">Transporte</option>
                    <option value="Educación">Educación</option>
                    <option value="Servicios">Servicios Públicos</option>
                    <option value="Entretenimiento">Entretenimiento</option>
                    <option value="Alimentación">Alimentación</option>
                    <option value="Salud">Salud</option>
                    <option value="Gastos Personales">Gastos Personales</option>
                    <option value="OT">Otro</option>
                </select>
            </div>
            <div class="form-group">
                <label for="ValorGasto">Valor del gasto</label>
                <input type="int" class="form-control" id="Gasto" v-model="gasto.valorGasto" placeholder="Ingrese cantidad gastada">
            </div>
            <div>
                <label for="example-datepicker">Escoge una fecha</label>
                <b-form-datepicker id="example-datepicker" v-model="gasto.fechaGasto" class="mb-2"></b-form-datepicker>
            </div>
            <button type="submit" class="btn btn-primary" style="
                margin: 10px 75px 0">
               Registrar egreso
            </button>

            {{mensaje.texto}}
        </form>
  </div>
</template>

<script>
export default {
  name: 'Gastos',
  data(){
      return{
          gastos:[],
          mensaje:{color: 'success', texto: ''},
          gasto:{tipoGasto:"", valorGasto:"", fechaGasto:""}
      }
  },
  methods:{
      agregarGasto(){
          console.log('entrada-boton');
            this.axios.post('/gasto/add',this.gasto)
            .then(res=>{

                this.gastos.push(res.data)
                this.gasto.tipoGasto="";
                this.gasto.valorGasto="";
                this.gasto.fechaGasto="";
                this.mensaje.color="success";
                this.mensaje.texto="Nuevo egreso agregado";
                this.showAlert();
            })
            .catch(e=>{
                console.log(e.response);
            });
        }
  }
}
</script>