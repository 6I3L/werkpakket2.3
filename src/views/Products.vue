<template>
  <article>
    <section class="product-filter">
      <p>Adore Your Jewellery staat vooral voor funky juweeltjes. Combineer met een paar basic hoops of andere funky stuks voor de perfecte earcombo!</p>
      <h2>Filter Producten</h2>
      <div class="filters">
        <div>
          <label for="category">Categorie:</label>
          <select v-model="selectedCategory" @change="applyFilters">
            <option value=" "></option>
            <option value="ring">Ring</option>
            <option value="armband">Armband</option>
            <option value="oorbel">Oorbel</option>
          </select>
        </div>
        <div>
          <label for="brand">Kleur:</label>
          <select v-model="selectedColor" @change="applyFilters">
            <option value=" "></option>
            <option value="zilver">Zilver</option>
            <option value="goud">Goud</option>
          </select>
        </div>
      </div>
    </section>

    <section class="Producten">
      <div class="product-container">
        <Product v-for="product in displayedProducts" :key="product.id" :product="product" />
      </div>
      <div v-if="displayedProducts.length === 0">
        <br><br> <br><br> <br><br>
        <p>Geen overeenkomende producten gevonden.</p>
        <br><br> <br><br> <br><br>
      </div>
    </section>

    <section class="pagination" v-if="totalPages > 1">
      <button @click="prevPage">&lt; Vorige</button>
      <span>{{ currentPage }}</span>
      <button @click="nextPage">Volgende &gt;</button>
    </section>
  </article>
</template>

<script>
import Product from '@/components/Product.vue';
import productService from '@/services/productService';

export default {
  name: 'Products',
  components: {
    Product,
  },
  data() {
    return {
      itemsPerPage: 8,
      currentPage: 1,
      selectedCategory: '',
      selectedColor: '',
    };
  },
  computed: {
    products() {
      return productService.getProducts();
    },
    filteredProducts() {
      let filtered = this.products;

      if (this.selectedCategory) {
        filtered = filtered.filter(product => product.categorie === this.selectedCategory);
      }

      if (this.selectedColor) {
        filtered = filtered.filter(product => product.kleur === this.selectedColor);
      }

      return filtered;
    },
    displayedProducts() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.filteredProducts.slice(startIndex, endIndex);
    },
    totalPages() {
      return Math.ceil(this.filteredProducts.length / this.itemsPerPage);
    },
  },
  methods: {
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    applyFilters() {
      this.currentPage = 1;
    },
  },
};
</script>

<style scoped>
</style>
