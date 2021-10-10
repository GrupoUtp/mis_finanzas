<template>
    <div>
        <app-header></app-header>
        <Gastos></Gastos>
    </div>

    
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import Gastos from '@/components/Salidas.vue';

export default {
    components:{
        AppHeader, 
        Gastos
    },
}
</script>