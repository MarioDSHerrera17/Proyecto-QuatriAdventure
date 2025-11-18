<template>
  <div class="min-h-screen bg-white text-gray-800 font-rajdhani">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <HeroVideoSection />  <!-- ← Agrega esta línea -->
    <RecorridosSection />
    <ContactSection />
    <FooterSection />

    <!-- Botón flotante WhatsApp -->
    <a
      href="https://wa.me/524423653316?text=Hola!%20Quiero%20agendar%20un%20recorrido%20con%20QuatriAdventure"
      target="_blank"
      class="whatsapp-btn"
    >
      <i class="bi bi-whatsapp"></i>
    </a>
  </div>
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
import HeroSection from "./components/HeroSection.vue";
import AboutSection from "./components/AboutSection.vue";
import HeroVideoSection from "./components/HeroVideoSection.vue"; // ← Importa el nuevo componente
import RecorridosSection from "./components/RecorridosSection.vue";
import ContactSection from "./components/ContactSection.vue";
import FooterSection from "./components/FooterSection.vue";
</script>

<style>
@import "bootstrap-icons/font/bootstrap-icons.css";
@import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap');
</style>