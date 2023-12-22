<template>
  <article>
  <div>
    <h2>Checkout</h2>

    <!-- Adresgegevensformulier -->
    <div>
      <h3>Adresgegevens</h3>
      <form ref="checkoutForm">
        <label for="name">Naam:</label>
        <input type="text" id="name" v-model="userAddress.name" />

        <label for="street">Straat:</label>
        <input type="text" id="street" v-model="userAddress.street" />

        <label for="city">Stad:</label>
        <input type="text" id="city" v-model="userAddress.city" />

        <label for="differentBilling">Facturatiegegevens verschillen</label>
        <input type="checkbox" id="differentBilling" v-model="differentBilling" />

        <div v-if="differentBilling">
          <h3>Facturatiegegevens</h3>

          <label for="billingName">Naam (facturatie):</label>
          <input type="text" id="billingName" v-model="billingName" />

          <label for="billingStreet">Straat (facturatie):</label>
          <input type="text" id="billingStreet" v-model="billingStreet" />

          <label for="billingCity">Stad (facturatie):</label>
          <input type="text" id="billingCity" v-model="billingCity" />
        </div>
      </form>
    </div>

    <!-- Overzicht van bestelde producten -->
    <div>
      <h3>Bestelde producten</h3>
      <ul>
        <li v-for="item in cart" :key="item.product.id">
          {{ item.product.title }} - Aantal: {{ item.quantity }} - Prijs: €{{ item.product.price.toFixed(2) }}
        </li>
      </ul>

      <!-- Totaaloverzicht -->
      <p>Totaal BTW: €{{ calculateTotalVat().toFixed(2) }}</p>
      <p>Totaalprijs: €{{ calculateTotal().toFixed(2) }}</p>
    </div>

    <!-- Knop om naar de bevestigingspagina te gaan -->
    <button @click="goToConfirmation">Naar bevestiging</button>
  </div></article>
</template>

<script>
import { useCartStore } from '@/stores/cart';
import { useUserStore } from '@/services/userService';

export default {
  data() {
    return {
      differentBilling: false,
      billingName: '',
      billingStreet: '',
      billingCity: '',
      userAddress: {},
    };
  },
  computed: {
    cart() {
      const cartStore = useCartStore();
      return cartStore.items;
    },
  },
  methods: {
    calculateTotal() {
      const cartStore = useCartStore();
      return cartStore.items.reduce((total, item) => total + item.product.price * item.quantity, 0);
    },
    calculateTotalVat() {
      const cartStore = useCartStore();
      return cartStore.items.reduce((total, item) => total + (item.product.price * 0.21) * item.quantity, 0);
    },
    goToConfirmation() {
      const cartStore = useCartStore();
      cartStore.setBuyerName(this.userAddress.name); // Aangepast om de naam van de ingelogde gebruiker te gebruiken

      this.$router.push('/bevestiging');
    },
  },
  created() {
    const userStore = useUserStore();
    this.userAddress = userStore.currentUser.address;
  },
};
</script>

<style lang="scss" scoped>
  @import "@/assets/variables.scss";
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
