<template>
  <header>
    <h1>Adore Your Jewellery</h1>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/products">Producten</router-link></li>
        <!-- Voeg de afmeldknop toe -->
        <li v-if="isLoggedIn"><button @click="logout">Afmelden</button></li>
        <!-- Gebruik router-link om naar de loginpagina te gaan als de gebruiker niet is ingelogd -->
        <li v-else><router-link to="/login">Inloggen</router-link></li>
      </ul>
    </nav>
    
    <!-- Knop voor WinkelmandjeView met dynamische tekst -->
    <button @click="goToCartView">
      Winkelmandje ({{ cartItemCount }})
    </button>
  </header>
</template>

<script>
import { useCartStore } from '@/stores/cart';
import { useUserStore } from '@/services/userService';

export default {
  methods: {
    // Functie om naar WinkelmandjeView te navigeren
    goToCartView() {
      this.$router.push('/winkelmandje');
    },
    // Functie om uit te loggen
    logout() {
      const userStore = useUserStore();
      userStore.logout();
      // Navigeer naar de startpagina na het uitloggen
      this.$router.push('/');
    }
  },
  computed: {
    // Bereken het aantal items in het winkelmandje
    cartItemCount() {
      const cartStore = useCartStore();
      return cartStore.items.length;
    },
    // Controleer of de gebruiker is ingelogd
    isLoggedIn() {
      const userStore = useUserStore();
      return userStore.currentUser !== null;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";

.cart-item {
  display: flex;
  margin-bottom: 20px;
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

/* Voeg hier aanvullende stijlen toe voor de winkelmandknop */
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
</style>
