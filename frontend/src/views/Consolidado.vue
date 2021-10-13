<template>
    <div>
        <app-header></app-header>
        <TablaEgresos></TablaEgresos>
        
        
    </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import TablaEgresos from '@/components/TablaEgresos.vue'


export default {
    components:{
        AppHeader,
        TablaEgresos
        
    }
}
</script>

<style scoped>
  
</style>

