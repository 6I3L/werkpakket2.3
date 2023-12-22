<!-- src/components/Contact.vue -->
<template>
    <div class="roze">
      <article class="row twee">
        <img src="./img/foto2.jpg" alt="">
        <div class="text-row">
          <h2>Contact</h2>
          <div class="email-form">
            <form>
              <label for="email">E-mail:</label>
              <input type="email" id="email" name="email" required>
  
              <label for="message">Bericht:</label>
              <textarea id="message" name="message" rows="4" required></textarea>
  
              <button type="submit">Verstuur</button>
            </form>
          </div>
        </div>
      </article>
    </div>
  </template>
  
  <script>
  export default {
    // voeg component logica toe indien nodig
  };
  </script>
  
  <style scoped>

  </style>
  