<template>
  <article>
  <div>
    <h2>Winkelmandje</h2>

    <div v-if="cart.length === 0">
      <p>Je winkelmandje is leeg.</p>
    </div>

    <div v-else>
      <div v-for="item in cart" :key="item.product.id" class="cart-item">
        <img :src="`/src/components/img/producten/${item.product.image}`" alt="Product" />
        <div class="item-details">
          <h3>{{ item.product.title }}</h3>
          <p>{{ item.product.description }}</p>
          <p>Prijs per stuk: €{{ item.product.price.toFixed(2) }}</p>
          <label for="quantity">Aantal:</label>
          <select v-model="item.quantity" @change="updateQuantity(item.product.id, item.product.stock)">
            <option v-for="n in Math.min(item.product.stock, 10)" :key="n" :value="n">{{ n }}</option>
          </select>
          <p>Subtotaal voor dit product: €{{ calculateSubtotal(item).toFixed(2) }}</p>
          <p>BTW voor dit product: €{{ calculateVat(item).toFixed(2) }}</p>
          <button @click="removeFromCart(item.product.id)">Verwijderen</button>
        </div>
      </div>

      <div class="cart-total">
        <p>Totaalprijs voor alle artikelen (inclusief BTW): €{{ calculateTotal().toFixed(2) }}</p>
        <p>Totaal BTW: €{{ calculateTotalVat().toFixed(2) }}</p>
      </div>

      <button @click="goToCheckout">Naar Checkout</button>
      <br><br>
    </div>
  </div></article>
</template>

<script>
import { useCartStore } from '@/stores/cart';
import { useUserStore } from '@/services/userService';

export default {
  computed: {
    cart() {
      const cartStore = useCartStore();
      return cartStore.items;
    },
  },
  methods: {
    removeFromCart(productId) {
      const cartStore = useCartStore();
      cartStore.removeFromCart(productId);
    },
    updateQuantity(productId, maxStock) {
      const cartStore = useCartStore();
      const cartItem = this.cart.find(item => item.product.id === productId);

      if (cartItem.quantity > maxStock) {
        cartItem.quantity = maxStock;
      }

      cartStore.updateQuantity(productId, cartItem.quantity);
    },
    calculateSubtotal(item) {
      return item.product.price * item.quantity;
    },
    calculateVat(item) {
      return (item.product.price * 0.21) * item.quantity;
    },
    calculateTotal() {
      const cartStore = useCartStore();
      return cartStore.items.reduce((total, item) => total + this.calculateSubtotal(item), 0);
    },
    calculateTotalVat() {
      const cartStore = useCartStore();
      return cartStore.items.reduce((total, item) => total + this.calculateVat(item), 0);
    },
    goToCheckout() {
      const userStore = useUserStore();
      if (userStore.currentUser) {
        this.$router.push('/checkout');
      } else {
        this.$router.push('/login');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  @import "@/assets/variables.scss";
  .cart-item {
    display: flex;
    margin-bottom: 20px;
    border-top: 1px solid #ccc;
  }

  .cart-item img {
    width: 100px;
    height: 100px;
    margin-right: 20px;
  }

  .cart-total {
    margin-top: 20px;
    border-top: 1px solid #ccc;
    padding-top: 10px;
  }

  select {
    margin-left: 10px;
  }

  button {
    background-color: $primary-color;
    color: white;
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    cursor: pointer;
  }

  button:hover {
    background-color: $button-hover-color;
  }

  article {
    width: 1000px;
    div {
      width: 100%;
    }

    @media (min-width: 1000px) {
      margin: auto;
    }
  }
</style>
