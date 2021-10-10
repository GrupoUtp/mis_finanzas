<template>

    <div >
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

</style>
