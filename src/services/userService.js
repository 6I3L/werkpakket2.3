// userService.js
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    currentUser: null,
  }),
  actions: {
    login(email, password) {
      // Voer hier de logica uit om de gebruiker in te loggen
      // Controleer bijvoorbeeld of de opgegeven gegevens overeenkomen met een gebruiker

      // Hier voegen we hardcoded gebruikersgegevens toe, inclusief adresgegevens
      if (email === 'admin@admin.com' && password === 'admin') {
        this.currentUser = {
          email,
          address: {
            name: 'Admin User',
            street: 'Admin Street',
            city: 'Admin City',
          },
        }; // Bewaar de gebruiker
        return true; // Inloggen gelukt
      } else {
        return false; // Inloggen mislukt
      }
    },
    logout() {
      this.currentUser = null; // Log de gebruiker uit
    },
  },
});
