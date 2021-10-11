<template>
    <div>
        <form style="margin: auto; width: 300px">
            <h1 style="
                margin: 0;
                padding: 20px 0 20px; 
                text-align: center; 
                font-size: 24px">
                Registra tu ingreso
            </h1>
            
            <div class="form-group">
                <label for="ValorIngreso">Valor del ingreso</label>
                <input type="int" class="form-control" id="Ingreso" placeholder="Ingrese el valor del ingreso">
            </div>
            <div>
                <label for="example-datepicker">Escoge una fecha</label>
                <b-form-datepicker id="example-datepicker" v-model="value" class="mb-2"></b-form-datepicker>
            </div>
            <button type="submit" class="btn btn-primary" style="
                margin: 10px 75px 0">
               Registrar ingreso
            </button>
        </form>
    </div>
</template>

<script>
export default {
    setup() {
        
    }
}
</script>