// stores/cart.js
import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [],
    buyerName: '', // Voeg de buyerName toe aan de staat van de winkel
  }),
  actions: {
    addToCart(product) {
      const existingItem = this.items.find(item => item.product.id === product.id);

      if (existingItem) {
        existingItem.quantity++;
      } else {
        this.items.push({ product, quantity: 1 });
      }
    },
    removeFromCart(productId) {
      this.items = this.items.filter(item => item.product.id !== productId);
    },
    clearCart() {
      this.items = [];
    },
    setBuyerName(name) {
      this.buyerName = name; // Voeg de setBuyerName actie toe
    },
  },
  getters: {
    cartTotal() {
      return this.items.reduce((total, item) => total + item.quantity, 0);
    },
    getBuyerName() {
      return this.buyerName; // Voeg de getBuyerName getter toe
    },
  },
});
