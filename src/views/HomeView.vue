<!-- src/App.vue -->
<template>
    <Banner />
    <PopularProductsComponent />
    <Roze />
    <NieuweProducten />
    <Contact />
</template>

<script>
import Banner from '../components/Banner.vue';
import PopularProductsComponent from '../components/PopularProductsComponent.vue';
import Roze from '../components/Roze.vue';
import NieuweProducten from '../components/NieuweProducten.vue';
import Contact from '../components/Contact.vue';

export default {
  components: {
    Banner,
    PopularProductsComponent,
    Roze,
    NieuweProducten,
    Contact,
  },
};
</script>

<style>
/* Voeg hier algemene stijlen toe die van toepassing zijn op de hele applicatie */
</style>