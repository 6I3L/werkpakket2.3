<template>
    
      <div class="container" :style="{ backgroundImage: 'url(\'/src/components/img/producten/' + product.image + '\')' }">
        <router-link :to="{ name: 'detail', params: { id: product.id } }">
        <div class="overlay">
          <div class="items"></div>
          <div class="items head">
            <p>{{ product.title }}</p>
            <hr>
          </div>
          <div class="items price">
            <p class="new">€{{ product.price.toFixed(2) }}</p>
          </div>
        </div>
      </router-link>
      </div>
    
  </template>
  
  <script>
  export default {
    props: {
      product: Object,
    },
    methods: {
    },
  };
  </script>
  
  <style scoped>
  /* Voeg hier stijlen toe die specifiek zijn voor het Product-component */
  </style>
  