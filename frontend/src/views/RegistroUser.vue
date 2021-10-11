<template>

    <div>
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
</style>
