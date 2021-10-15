<template>
    <div>
        <form style="margin: auto; width: 300px" @submit.prevent="agregarIngreso()">
            <h1 style="
                margin: 0;
                padding: 20px 0 20px; 
                text-align: center; 
                font-size: 24px">
                Registra tu ingreso
            </h1>
            
            <div class="form-group">
                <label for="ValorIngreso">Valor del ingreso</label>
                <input type="int" class="form-control" id="Ingreso" placeholder="Ingrese el valor del ingreso" v-model="ingreso.valorIngreso">
            </div>
            <div>
                <label for="example-datepicker">Escoge una fecha</label>
                <b-form-datepicker id="example-datepicker" v-model="ingreso.fechaIngreso" class="mb-2"></b-form-datepicker>
            </div>
            <button type="submit" class="btn btn-primary" style="
                margin: 10px 75px 0">
               Registrar ingreso
            </button>
            {{mensaje.texto}}
        </form>
    </div>
</template>

<script>
export default {
    name: 'Ingresos',
  data(){
      return{
          ingresos:[],
          mensaje:{color: 'success', texto: ''},
          ingreso:{valorIngreso:"", fechaIngreso:""}
      }
  },
  methods:{
      agregarIngreso(){
          console.log('entrada-boton');
            this.axios.post('/ingreso/add',this.ingreso)
            .then(res=>{
                this.ingresos.push(res.data)
                this.ingreso.valorIngreso="";
                this.ingreso.fechaIngreso="";
                this.mensaje.color="success";
                this.mensaje.texto="Nuevo ingreso agregado";
                this.showAlert();
            })
            .catch(e=>{
                console.log(e.response);
            });
        }
    }
}
</script>