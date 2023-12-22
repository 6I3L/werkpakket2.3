<!-- src/components/Footer.vue -->
<template>
    <footer>
      <article>
        <div class="footer-columns">
          <div class="column">
            <h2>Snelle Links</h2>
            <ul>
              <li><a href="#">Verzendbeleid</a></li>
              <li><a href="#">Privacybeleid</a></li>
              <li><a href="#">Servicevoorwaarden</a></li>
              <li><a href="#">Restitutiebeleid</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
  
          <div class="column">
            <h2>Contactinfo</h2>
            <ul>
              <li>Adore Your Jewellery</li>
              <li>BE0751896191</li>
              <li>Leuven, België</li>
              <li>AdoreYourJewellery.co@gmail.com</li>
              <li>
                <div class="social-icons">
                  <a href="#"><i class="fab fa-facebook"></i></a>
                  <a href="#"><i class="fab fa-tiktok"></i></a>
                  <a href="#"><i class="fab fa-instagram"></i></a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </article>
    </footer>
  </template>
  
  <script>
  export default {
    // voeg component logica toe indien nodig
  };
  </script>
  
  <style scoped>
footer {
  margin-top: auto; /* Dit zorgt ervoor dat de footer altijd aan de onderkant blijft, zelfs als de inhoud niet groot genoeg is */
  padding: 10px 0;
}

.footer-columns {
  display: flex;
  justify-content: space-around;
}

.column {
  max-width: 300px;
}

.social-icons {
  margin-top: 10px;
  display: flex;
  gap: 10px;
}
  </style>
  