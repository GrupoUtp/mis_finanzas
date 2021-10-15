<template>
    <div class="container">
        <br>
        
        <form @submit.prevent="listarDatos()">
            <b-button class="btn-success my-2" type="submit">Histórico de egresos</b-button>
        </form>
        

        <table class="table">
        <thead>
            <tr>
            <th scope="col">Tipo de egreso</th>
            <th scope="col">Valor del egreso</th>
            <th scope="col">Fecha del gasto</th>
            <th scope="col">Acciones</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for= "(item, index) in datosEgresos" :key="index">
                <th scope="row">{{item.tipoGasto}}</th>
                <td>{{item.valorGasto}}</td>
                <td>{{item.fechaGasto}}</td>
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
            datosEgresos:[]
        }
    },
    created(){
        
    },
    methods:{
        listarDatos(){
            this.axios.get('gasto/list')
            .then(res=>{
                this.datosEgresos= res.data;
            })
            .catch(e => {
                console.log(e.response)
            })
        },
        eliminarDato(id){
            this.axios.delete(`/gasto/remove/?_id=${id}`)
            .then(res=>{

                const index = this.datosEgresos.findIndex(item=> item._id===res.data._id);
                this.datosEgresos.splice(index, 1);
                this.mensaje.color="success";
                this.mensaje.texto="Egreso Eliminada";
                this.showAlert();
            })
            .catch(e=>{
                  console.log(e.response);
            })
        },

        
    } 

}
</script>