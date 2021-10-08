<template>
    <div class="gastos-box">
        <h1>Tipo de Gasto</h1>
        <form>
            <label for="Outcome">Escoja el gasto: </label>
            <select name="Outcome">
                <option value="TR">Transporte</option>
                <option value="ED">Educación</option>
                <option value="SP">Servicios Públicos</option>
                <option value="EN">Entretenimiento</option>
                <option value="AL">Alimentación</option>
                <option value="SA">Salud</option>
                <option value="GA">Gastos Personales</option>
                <option value="OT">Otro</option>
            </select>
            <input type="submit" value="Ingresar texto">
        </form>
  </div>
</template>

<script>
export default {
  name: 'Gastos',
  props: {
    
  }
}
</script>

<style scoped>
.gastos-box {
    width: 300px;
    height: 300px;
    color: rgb(0, 0, 0);
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -47.5%);
    box-sizing: border-box;
    padding: 0;
}

.gastos-box h1 {
    margin: 0;
    padding: 0 0 20px;
    text-align: center;
    font-size: 24px;
}
  
  .gastos-box label {
    margin: 0;
    padding: 0;
    display: block;
  }
  
  .gastos-box input {
    width: 100%;
    margin-bottom: 20px;
  }
  

  .gastos-box input[type="submit"] {
    border: none;
    outline: none;
    height: 40px;
    background: rgb(185, 15, 35);
    color: #fff;
    font-size: 18px;
    border-radius: 20px;
  }
  
  .gastos-box input[type="submit"]:hover {
    cursor: pointer;
    background: rgba(185, 15, 35, 0.7 );
    color: rgb(255, 255, 255);
  }
  .gastos-box select{
    border: none;
    border-bottom: 1px solid rgb(0, 0, 0);
    background: transparent;
    outline: none;
    height: 40px;
    margin-bottom: 20px;
    color: rgb(0, 0, 0);
    font-size: 15px;
  }
</style>