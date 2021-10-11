<template>
  <div class="login">
    <div class="login-box">
      <img src="../assets/logo_avatar2.jpg" class="avatar" alt="Avatar Image">
      <h1>Welcome back</h1>
      <form @submit.prevent="buscarUsuario()">
        <!-- USERNAME INPUT -->
        <label for="username">Username</label>
        <input type="email" v-model="form.email" placeholder="Enter Username" required>
        <!-- PASSWORD INPUT -->
        <label for="password">Password</label>
        <input type="password" v-model="form.password" placeholder="Enter Password" required>
        <input type="submit"  value="Log In">
        <a href="">Forgot password?</a><br>
        <a href="" @click="CreteAccount()">Don't have an account yet?</a><br><br>
        <v-flex class="red--text">
          <div v-if="message">{{message}}</div>
        </v-flex>
      </form>
      
  </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data(){
    return{
      form:{
          email:'',
          password:'',
          
          }, 
          message:'',
      users:[]
    }
  },
  state:{
    token: null,
  },
  methods:{
    irAHome(){
      this.$router.push('/Home');
     },
    CreteAccount(){
      this.$router.push('/signUp');
     },
     buscarUsuario(){
     //  console.log("Funciona");
       
       this.axios.get('usuario/list').then( res => {
         
     //    console.log(this.users);

         this.users = res.data;
         this.users.forEach((value,) => {

          if(this.form.email === value.email){

          //    console.log("Usuario si existe");

              if(this.form.password === value.password){
                window.localStorage.setItem('AUTH', 'ok');
                this.$router.push({path: '/Home'});
                
              }if(this.form.email !== value.email || this.form.password !== value.password){
                this.message= '*Correo o Contraseña incorrecta *';
              }
          }
        
         });

       });
     }
    },
    beforeCreate(){
    var auth = window.localStorage.getItem('AUTH');
    console.log("AUTH start the BC -> " +auth);
    if(auth === 'ok'){
      this.$router.push({path: '/Home'});
    }
  },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.login {
  margin: 0;
  padding: 0;
  background: url(/assets/bg3.jpg) no-repeat center top;
  background-size: cover;
  font-family: 'Ubuntu', sans-serif;
  height: 100vh;
}
  .login-box {
    width: 320px;
    height: 500px;
    background: rgba(0, 0, 0, 0.952);
    color: #fff;
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    box-sizing: border-box;
    padding: 70px 30px;
  }
  
  .login-box .avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    position: absolute;
    top: -50px;
    left: calc(50% - 50px);
  }
  
  .login-box h1 {
    margin: 0;
    padding: 0 0 20px;
    text-align: center;
    font-size: 24px;
  }
  
  .login-box label {
    margin: 0;
    padding: 0;
    display: block;
  }
  
  .login-box input {
    width: 100%;
    margin-bottom: 20px;
  }
  
  .login-box input[type="text"], .login-box input[type="password"] {
    border: none;
    border-bottom: 1px solid #fff;
    background: transparent;
    outline: none;
    height: 40px;
    color: rgb(255, 255, 255);
    font-size: 15px;
  }
  
  .login-box input[type="submit"] {
    border: none;
    outline: none;
    height: 40px;
    background: rgb(185, 15, 35);
    color: #fff;
    font-size: 18px;
    border-radius: 20px;
  }
  
  .login-box input[type="submit"]:hover {
    cursor: pointer;
    background: rgba(185, 15, 35, 0.5 );
    color: rgb(255, 255, 255);
  }
  
  .login-box a {
    text-decoration: none;
    font-size: 12px;
    line-height: 20px;
    color: darkgrey;
  }
  
  .login-box a:hover {
    color: #fff;
  }

  
</style>
