<template>

    <div>
      <Login></Login>
      <!-- <NewUser></NewUser> -->
      <router-view/>
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
  background-image: url(./../assets/bg3.jpg) no-repeat center top;
  background-size: cover;
  font-family: 'Ubuntu', sans-serif;
}
</style>