<template>
    <div class="container">
        <table class="table">
        <thead>
            <tr>
            <th scope="col">No.</th>
            <th scope="col">Tipo de egreso</th>
            <th scope="col">Valor del egreso</th>
            <th scope="col">Fecha del gasto</th>
            <th scope="col">Acciones</th>
            </tr>
        </thead>
        <tbody>
            <tr vfor= "(item, index) in datosEgresos" :key="index">
                <th scope="row">{{item._id}}</th>
                <td>{{item.tipoGasto}}</td>
                <td>{{item.totalGasto}}</td>
                <td>{{item.fechaGasto}}</td>
                <td>
                    <b-button class="btn-danger mx-2" @click="eliminarNota(item._id)">Eliminar</b-button>
                    <b-button class="btn-warning mx-2" @click="activarEdicion(item._id)">Editar</b-button>
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
        }
    } 

}
</script>