<template>
  <nav
    :class="[
      'fixed w-full z-50 transition-all duration-300',
      scrolled ? 'bg-white shadow-lg' : 'bg-transparent',
    ]"
  >
    <div class="max-w-7xl mx-auto flex justify-between items-center p-4">
      <div class="flex items-center gap-3">
        <img :src="logo" alt="logo" class="h-10 w-10 rounded-full" />
        <span class="font-bold text-xl text-nature-primary">QuatriAdventure</span>
      </div>

      <ul class="hidden md:flex gap-6 text-sm" :class="scrolled ? 'text-gray-700' : 'text-white'">
        <li><a href="#inicio" class="hover:text-nature-primary transition-colors">Inicio</a></li>
        <li><a href="#nosotros" class="hover:text-nature-primary transition-colors">Nosotros</a></li>
        <li><a href="#rutas" class="hover:text-nature-primary transition-colors">Recorridos</a></li>
        <li><a href="#contacto" class="hover:text-nature-primary transition-colors">Contacto</a></li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import logo from '@/assets/Imagenes/Logo/LOGO.jpg'

const scrolled = ref(false);

const handleScroll = () => {
  scrolled.value = window.scrollY > 50;
};

onMounted(() => window.addEventListener("scroll", handleScroll));
onUnmounted(() => window.removeEventListener("scroll", handleScroll));
</script>