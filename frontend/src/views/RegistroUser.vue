<template>

    <div class="registro">
       <NewUser></NewUser>
      <router-view/>
    </div>
   
    
</template>

<script>
import NewUser from '@/components/NewUser.vue'


export default {
  name: 'App',
  components: {
   NewUser
  }
}
</script>

<style>
.registro {
  margin: 0;
  padding: 0;
  background: url(/assets/bg3.jpg) no-repeat center top;
  background-size: cover;
  font-family: 'Ubuntu', sans-serif;
  height: 100vh;
}
</style>
