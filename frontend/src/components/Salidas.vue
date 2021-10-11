<template>
    <div>
        <form style="margin: auto; width: 300px">
            <h1 style="
                margin: 0;
                padding: 20px 0 20px; 
                text-align: center; 
                font-size: 24px">
                Registra tu gasto
            </h1>
            <div class="form-group">
                <label for="TipoGastos">Escoge el tipo de gasto</label>
                <select class="form-control" id="ListaGastos">
                    <option value="TR">Transporte</option>
                    <option value="ED">Educación</option>
                    <option value="SP">Servicios Públicos</option>
                    <option value="EN">Entretenimiento</option>
                    <option value="AL">Alimentación</option>
                    <option value="SA">Salud</option>
                    <option value="GA">Gastos Personales</option>
                    <option value="OT">Otro</option>
                </select>
            </div>
            <div class="form-group">
                <label for="ValorGasto">Valor del gasto</label>
                <input type="int" class="form-control" id="Gasto" placeholder="Ingrese el valor del egreso">
            </div>
            <div>
                <label for="example-datepicker">Escoge una fecha</label>
                <b-form-datepicker id="example-datepicker" v-model="value" class="mb-2"></b-form-datepicker>
            </div>
            <button type="submit" class="btn btn-primary" style="
                margin: 10px 75px 0">
               Registrar egreso
            </button>
        </form>
  </div>
</template>

<script>
export default {
  name: 'Gastos',
  
}
</script>