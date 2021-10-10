<template>
    <div>
        <app-header></app-header>
        <Ingresos></Ingresos>
        
    </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import Ingresos from '@/components/Entradas.vue';

export default {
    components:{
        AppHeader,
        Ingresos
    }
}
</script>

<style scoped>
  
</style>