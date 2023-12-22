<template>
  <article>
  <div class="product-detail">
    <img :src="product.image ? getImageUrl(product.image) : defaultImage" :alt="product.title || 'Product Image'" />
    <h1>{{ product.title || 'Product Title' }}</h1>
    <p>{{ product.description || 'Product Description' }}</p>
    <p>Prijs: €{{ product.price ? product.price.toFixed(2) : 'N/A' }}</p>
    <p>
      Voorraad: {{ product.stock !== undefined && product.stock !== null ? product.stock : 'N/A' }}
      <span v-if="product.stock === 0"> - Niet op voorraad</span>
    </p>
    <button @click="addToCart" :disabled="product.stock === 0">{{ product.stock === 0 ? 'Niet op voorraad' : 'Toevoegen aan winkelwagen' }}</button>
  </div></article>
</template>

<script>
import productService from '../services/productService.js';
import defaultImage from '../components/img/producten/ocean-ring.jpg';
import { useCartStore } from '../stores/cart'; // Pas het pad aan aan je eigen structuur

export default {
  props: ['id'],
  data() {
    return {
      product: {},
      defaultImage: defaultImage,
    };
  },
  methods: {
    addToCart() {
      if (this.product.stock === 0) {
        console.log('Dit product is niet op voorraad.');
        return;
      }

      const cartStore = useCartStore();
      cartStore.addToCart(this.product);
      console.log('Product toegevoegd aan de winkelwagen:', this.product);
    },
    async getImageUrl(image) {
      if (!image) {
        return defaultImage;
      }

      const module = require(`../components/img/producten/${image}`);
      return module.default;//mijn img pad wilt hier niet werken
    },
    fetchProduct() {
      console.log('Fetching product for ID:', this.id);

      const products = productService.getProducts();
      console.log('Products in fetchProduct:', products);

      const product = products.find(p => p.id == this.id);
      console.log('Product found:', product);

      this.product = { ...product };
      console.log('Fetched product:', this.product);
    },
  },
  watch: {
    id: 'fetchProduct',
  },
  created() {
    console.log('Received productId:', this.id);
    this.fetchProduct();
  },
};
</script>

<style lang="scss" scoped>
  @import "@/assets/variables.scss";
  
  article{width: 1000px;
    img{margin-top: 25px;}

    div{
        width: 100%;
    }
    @media (min-width: 1000px) {
    margin: auto;
  }}
  </style>