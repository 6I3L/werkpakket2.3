<template>
  <article>
    <h2>Nieuwe Producten</h2>
    <section class="Producten">
       <!-- er mochten maar 3-5 producten in de kijker maar behoord dit er ook bij of alleen de PopularProductsComponent, deze stond in mijn wp1 design dus ik heb het maar toegevoegd  -->
      <div class="product-container">
        <Product v-for="product in popularProducts" :key="product.id" :product="product" />
      </div>
    </section>
  </article>
</template>

  
<script>
import Product from '@/components/Product.vue';
import productService from '@/services/productService';

export default {
  components: {
    Product,
  },
  data() {
    return {
      itemsToShow: 4, // Pas het aantal producten aan dat je wilt tonen
    };
  },
  computed: {
    popularProducts() {
      const allProducts = productService.getProducts();
      const availableProducts = allProducts.filter(product => product.stock > 0);
      const sortedProducts = availableProducts.slice().sort((a, b) => b.id - a.id);
      return sortedProducts.slice(0, this.itemsToShow);
    },
  },
};
</script>


  
  
  <style scoped>
  /* voeg hier stijlen toe die specifiek zijn voor het Producten-component */
  </style>
  