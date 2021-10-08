<template>
    <div>
        <app-header></app-header>
        <div class="d-flex justify-content-center mt-5">
            <h2>H</h2>
            <Gastos-></Gastos->
        </div>
        
    </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import Gastos from '@/components/Gastos.vue';

export default {
    components:{
        AppHeader,
        Gastos
    }
}
</script>

<style scoped>
  
</style>

