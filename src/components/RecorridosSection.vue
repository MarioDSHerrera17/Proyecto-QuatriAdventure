<template>
  <section id="rutas" class="py-24 bg-gradient-to-b from-white to-gray-50">
    <div class="max-w-7xl mx-auto px-6 text-center">
      
      <h2 class="text-3xl md:text-4xl font-bold text-nature-primary mb-14">
        Nuestros Recorridos
      </h2>

      <!-- GRID DE RUTAS -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div
          v-for="(ruta, i) in recorridos"
          :key="i"
          class="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group"
        >

          <!-- CARRUSEL MANUAL -->
          <div class="relative h-72 w-full overflow-hidden">

            <img 
              v-for="(img, imgIndex) in ruta.imagenes" 
              :key="imgIndex"
              :src="img"
              :alt="ruta.nombre"
              class="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
              :class="{
                'opacity-100 scale-100': ruta.currentImage === imgIndex,
                'opacity-0 scale-105': ruta.currentImage !== imgIndex
              }"
            />

            <!-- Flecha izquierda -->
            <button
              @click="ruta.currentImage = (ruta.currentImage - 1 + ruta.imagenes.length) % ruta.imagenes.length"
              class="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all"
            >
              <i class="bi bi-chevron-left text-lg"></i>
            </button>

            <!-- Flecha derecha -->
            <button
              @click="ruta.currentImage = (ruta.currentImage + 1) % ruta.imagenes.length"
              class="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all"
            >
              <i class="bi bi-chevron-right text-lg"></i>
            </button>

            <!-- Indicadores -->
            <div class="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
              <button
                v-for="(img, imgIndex) in ruta.imagenes"
                :key="imgIndex"
                @click="ruta.currentImage = imgIndex"
                class="w-2.5 h-2.5 rounded-full transition-all"
                :class="ruta.currentImage === imgIndex ? 'bg-white scale-125' : 'bg-white/50'"
              />
            </div>

          </div>

          <!-- CONTENIDO -->
          <div class="p-6 text-left">
            <h3 class="text-xl font-bold text-nature-primary mb-2">
              {{ ruta.nombre }}
            </h3>

            <p class="text-gray-500 text-sm mb-2">
              {{ ruta.duracion }}
            </p>

            <p class="text-gray-700 text-sm mb-4">
              {{ ruta.descripcion }}
            </p>

            <div class="text-xs text-gray-600 mb-4 space-y-1">
              <p v-if="ruta.nota" class="italic">{{ ruta.nota }}</p>
              <p v-if="ruta.incluye" class="text-nature-primary font-medium">{{ ruta.incluye }}</p>
              <p class="font-medium">{{ ruta.horarios }}</p>
              <p v-if="ruta.restriccion" class="text-red-500 font-medium">{{ ruta.restriccion }}</p>
            </div>

            <a
              :href="ruta.whatsappLink"
              target="_blank"
              class="block w-full text-center bg-nature-primary text-white font-semibold py-3 rounded-xl hover:scale-105 transition-all shadow-md"
            >
              Reservar
            </a>
          </div>
        </div>
      </div>

      <!-- SECCIÓN PERSONALIZADA -->
      <div class="mt-24 bg-gradient-to-r from-nature-primary to-green-700 text-white rounded-3xl p-12 shadow-2xl">
        <h3 class="text-2xl md:text-3xl font-bold mb-4">
          ¿No encuentras la ruta ideal?
        </h3>

        <p class="mb-8 text-white/90 max-w-2xl mx-auto">
          Diseñamos experiencias completamente personalizadas.
          Más adrenalina, más naturaleza o combinando varios destinos.
          Tú decides cómo vivir la aventura.
        </p>

        <div class="flex flex-col sm:flex-row justify-center gap-5">
          <a
            href="https://wa.me/524423653316?text=Hola!%20Quiero%20armar%20una%20ruta%20personalizada"
            target="_blank"
            class="bg-white text-nature-primary font-semibold px-8 py-3 rounded-xl shadow-md hover:scale-105 transition-all"
          >
            Armar mi ruta personalizada
          </a>

          <a
            href="#contacto"
            class="border border-white px-8 py-3 rounded-xl hover:bg-white hover:text-nature-primary transition-all"
          >
            Más información
          </a>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

import panoramico1 from '@/assets/Imagenes/Panoramicos/1.jpg'
import panoramico2 from '@/assets/Imagenes/Panoramicos/3.jpg'
import panoramico3 from '@/assets/Imagenes/Panoramicos/atardecer.jpeg'

import pinalNoche1 from '@/assets/Imagenes/pinal_noche/1.jpg'
import pinalNoche2 from '@/assets/Imagenes/pinal_noche/2.jpg'
import pinalNoche3 from '@/assets/Imagenes/pinal_noche/3.jpg'

import sabores1 from '@/assets/Imagenes/sabores/1.jpg'
import sabores2 from '@/assets/Imagenes/sabores/2.jpg'
import sabores3 from '@/assets/Imagenes/sabores/3.jpg'

import nubes1 from '@/assets/Imagenes/Nubes/1.jpg'
import nubes2 from '@/assets/Imagenes/Nubes/2.jpg'
import nubes3 from '@/assets/Imagenes/Nubes/3.jpg'

import cedral1 from '@/assets/Imagenes/Cedral/1.jpg'
import cedral2 from '@/assets/Imagenes/Cedral/2.jpg'
import cedral3 from '@/assets/Imagenes/Cedral/3.jpg'

import bucareli1 from '@/assets/Imagenes/Bucareli/1.jpg'
import bucareli2 from '@/assets/Imagenes/Bucareli/2.jpg'
import bucareli3 from '@/assets/Imagenes/Bucareli/3.jpg'

import cascadas1 from '@/assets/Imagenes/Cascadas/1.jpg'
import cascadas2 from '@/assets/Imagenes/Cascadas/2.jpg'
import cascadas3 from '@/assets/Imagenes/Cascadas/3.jpg'

const recorridos = ref([
  {
    nombre: "Paseo Panorámico EXPRESS",
    duracion: "1 Hora",
    descripcion: "Bosque y paisajes impresionantes.",
    horarios: "9:00 AM - 6:00 PM",
    nota: "Puede ir 1 o 2 personas. No se necesita experiencia.",
    imagenes: [panoramico1, panoramico2, panoramico3],
    currentImage: 0,
    whatsappLink: "https://wa.me/524423653316?text=Hola!%20Quiero%20reservar%20el%20Paseo%20Panorámico%20EXPRESS"
  },
  {
    nombre: "Pinal de Noche",
    duracion: "2 Horas",
    descripcion: "Historia, leyendas y cielo estrellado.",
    horarios: "9:00 AM - 8:00 PM",
    nota: "Disponible también durante el día",
    imagenes: [pinalNoche1, pinalNoche2, pinalNoche3],
    currentImage: 0,
    whatsappLink: "https://wa.me/524423653316?text=Hola!%20Quiero%20reservar%20Pinal%20de%20Noche"
  },
  {
    nombre: "Vistas y Sabores",
    duracion: "2.5 Horas",
    descripcion: "Paisajes y degustación artesanal.",
    horarios: "9:00 AM - 3:00 PM",
    nota: "Tradición de más de 200 años",
    imagenes: [sabores1, sabores2, sabores3],
    currentImage: 0,
    whatsappLink: "https://wa.me/524423653316?text=Hola!%20Quiero%20reservar%20Vistas%20y%20Sabores"
  },
  {
    nombre: "Nubes y Sombras",
    duracion: "2 Horas",
    descripcion: "Miradores, cueva y puerta del cielo.",
    horarios: "9:00 AM - 3:00 PM",
    incluye: "Incluye entradas",
    restriccion: "No disponible los miércoles",
    imagenes: [nubes1, nubes2, nubes3],
    currentImage: 0,
    whatsappLink: "https://wa.me/524423653316?text=Hola!%20Quiero%20reservar%20Nubes%20y%20Sombras"
  },
  {
    nombre: "El Cedral",
    duracion: "2.5 Horas",
    descripcion: "Cascada de 40m y miradores extremos.",
    horarios: "9:00 AM - 4:00 PM",
    incluye: "Incluye entradas",
    imagenes: [cedral1, cedral2, cedral3],
    currentImage: 0,
    whatsappLink: "https://wa.me/524423653316?text=Hola!%20Quiero%20reservar%20El%20Cedral"
  },
  {
    nombre: "Bucareli Extremo",
    duracion: "8 Horas",
    descripcion: "40 km de aventura rumbo a la misión.",
    horarios: "8:30 AM - 11:00 AM",
    incluye: "Incluye entradas al exconvento y seguro",
    nota: "No incluye tirolesas",
    imagenes: [bucareli1, bucareli2, bucareli3],
    currentImage: 0,
    whatsappLink: "https://wa.me/524423653316?text=Hola!%20Quiero%20reservar%20Bucareli%20Extremo"
  },
  {
    nombre: "Cascadas",
    duracion: "8 Horas",
    descripcion: "Cascada El Salto y pozas del Chuveje.",
    horarios: "8:30 AM - 11:00 AM",
    incluye: "Incluye entradas y seguro",
    imagenes: [cascadas1, cascadas2, cascadas3],
    currentImage: 0,
    whatsappLink: "https://wa.me/524423653316?text=Hola!%20Quiero%20reservar%20Cascadas"
  }
])
</script>
