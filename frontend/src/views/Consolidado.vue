<template>
    <div>
        <app-header></app-header>
        <TablaEgresos></TablaEgresos><br>
        <TablaIngresos></TablaIngresos>
    </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import TablaEgresos from '@/components/TablaEgresos.vue';
import TablaIngresos from '@/components/TablaIngresos.vue';

export default {
    components:{
        AppHeader,
        TablaEgresos, 
        TablaIngresos
    }
}
</script>

<style scoped>
  
</style>

