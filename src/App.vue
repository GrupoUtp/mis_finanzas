<template>

    <div>
      <Login></Login>
      <!-- <NewUser></NewUser> -->
    </div>
   
    
</template>

<script>
import Login from '@/components/Login.vue'
// import NewUser from '@/components/NewUser.vue'


export default {
  name: 'App',
  components: {
    Login
    // NewUser
  }
}
</script>

<style>
#app {
  margin: 0;
  padding: 0;
  background: url(./assets/bg3.jpg) no-repeat center top;
  background-size: cover;
  font-family: 'Ubuntu', sans-serif;
  height: 100vh;
}
</style>
