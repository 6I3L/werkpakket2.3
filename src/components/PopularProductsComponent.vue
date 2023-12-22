<template>
  <article>
    <h2>Producten in de kijker</h2>
    <section class="Producten">
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
      const sortedProducts = availableProducts.slice().sort((a, b) => b.stock - a.stock);
      return sortedProducts.slice(0, this.itemsToShow);
    },
  },
};
</script>

  
  
  <style scoped>

  </style>
  