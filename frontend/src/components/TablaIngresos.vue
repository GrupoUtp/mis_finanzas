<template>
    <div class="container">
        
        <br>
        
        <form @submit.prevent="listarDatos()">
            <b-button class="btn-success my-2" type="submit">Histórico de ingresos</b-button>
        </form>
        

        <table class="table">
        <thead>
            <tr>
            <th scope="col">Cantidad ingreso</th>
            <th scope="col">Fecha del ingreso</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for= "(item, index) in datosIngresos" :key="index">
                <td>{{item.valorIngreso}}</td>
                <td>{{item.fechaIngreso}}</td>
                <td>
                    <b-button class="btn-danger mx-2" @click="eliminarDato(item._id)">Eliminar</b-button>
                </td>
            </tr>
        </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data(){
        return{
            datosIngresos:[]
        }
    },
    created(){
        
    },
    methods:{
        listarDatos(){
            this.axios.get('ingreso/list')
            .then(res=>{
                this.datosIngresos= res.data;
                console.log(this.item._id)
            })
            .catch(e => {
                console.log(e.response)
            })
        },
        eliminarDato(id){
            this.axios.delete(`/ingreso/remove/?_id=${id}`)
            .then(res=>{
                const index = this.datosIngresos.findIndex(item=> item._id===res.data._id);
                this.datosIngresos.splice(index, 1);
                this.mensaje.color="success";
                this.mensaje.texto="Ingreso Eliminada";
                this.showAlert();
            })
            .catch(e=>{
                  console.log(e.response);
            })
        },
        
    } 

}
</script>