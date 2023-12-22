<template>
    <div>
      <h2>Bevestiging</h2>
  
      <div>
        <h3>Transactie succesvol</h3>
  
        <!-- Overzicht van bestelde producten -->
        <div>
          <h3>Bestelde producten</h3>
          <ul>
            <li v-for="item in cart" :key="item.product.id">
              {{ item.product.title }} - Aantal: {{ item.quantity }} - Prijs: €{{ item.product.price.toFixed(2) }}
            </li>
          </ul>
        </div>
  
        <!-- Totaaloverzicht -->
        <div>
          <p>Totaal BTW: €{{ calculateTotalVat().toFixed(2) }}</p>
          <p>Totaalprijs: €{{ calculateTotal().toFixed(2) }}</p>
        </div>
  
        <!-- Bedanktbericht met de naam van de koper -->
        <p>Bedankt, {{ buyerName }}, voor je aankoop!</p>
  
        <!-- Knop om terug te gaan naar de startpagina -->
      <button><router-link to="/">Terug naar startpagina</router-link></button>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onBeforeMount } from 'vue';
  import { useCartStore } from '@/stores/cart';
  
  export default {
    setup() {
      const cart = ref([]);
  
      const calculateTotal = () => {
        return cart.value.reduce((total, item) => total + item.product.price * item.quantity, 0);
      };
  
      const calculateTotalVat = () => {
        return cart.value.reduce((total, item) => total + (item.product.price * 0.21) * item.quantity, 0);
      };
  
      const cartStore = useCartStore();
  
      // Haal de winkelmandgegevens op bij het inrichten van de component
      cart.value = cartStore.items;
  
      // Haal de naam van de koper op bij het inrichten van de component
      const buyerName = cartStore.buyerName;
  
      // Leeg de winkelmand bij het verlaten van de component
      onBeforeMount(() => {
        cartStore.clearCart();
      });
  
      return {
        cart,
        calculateTotal,
        calculateTotalVat,
        buyerName,
      };
    },
  };
  </script>
  
  <style lang="scss" scoped>
  @import "@/assets/variables.scss";
    div{
    display: flex;
    flex-direction: column;
    align-items: center;
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
/* Voeg hier stijlen toe die specifiek zijn voor de checkoutpagina */
</style>
  