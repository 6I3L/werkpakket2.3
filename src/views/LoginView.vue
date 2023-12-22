<!-- LoginView.vue -->
<template>

  <div class="login-form">
    <h2>Inloggen</h2>
    <form @submit.prevent="handleLogin">
      <label for="email">E-mailadres:</label>
      <input v-model="email" type="email" id="email" name="email" required>
      <label for="password">Wachtwoord:</label>
      <input v-model="password" type="password" id="password" name="password" required>
      <button type="submit">Inloggen</button>
    </form>
    <a href="forgot-password.html">Wachtwoord vergeten?</a>
  </div>
</template>

<script>
import { useUserStore } from '@/services/userService'; // Pas het pad aan aan je eigen structuur

export default {
  name: 'LoginView',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    handleLogin() {
      const userStore = useUserStore();
      const loggedIn = userStore.login(this.email, this.password);

      if (loggedIn) {
        // Inloggen gelukt, navigeer naar het winkelmandje of een andere pagina
        this.$router.push('/winkelmandje');
      } else {
        // Inloggen mislukt, toon een foutmelding of neem andere maatregelen
        alert('Inloggen mislukt. Controleer uw gegevens.');
      }
    },
  },
};
</script>

<style scoped>
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
