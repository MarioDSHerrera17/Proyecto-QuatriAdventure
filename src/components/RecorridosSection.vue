<template>
  <section id="rutas" class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-6 text-center">
      <h2 class="text-3xl font-bold text-nature-primary mb-10">Nuestros Recorridos</h2>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(ruta, i) in recorridos"
          :key="i"
          class="card-white hover:shadow-xl transition-all duration-300"
        >
          <!-- Carrusel de imágenes -->
          <div class="relative h-72 w-full overflow-hidden rounded-t-lg">
            <img 
              v-for="(img, imgIndex) in ruta.imagenes" 
              :key="imgIndex"
              :src="getImageUrl(img)" 
              :alt="ruta.nombre"
              class="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
              :class="{'opacity-100': ruta.currentImage === imgIndex, 'opacity-0': ruta.currentImage !== imgIndex}"
            />
            <!-- Indicadores del carrusel -->
            <div class="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
              <button
                v-for="(img, imgIndex) in ruta.imagenes"
                :key="imgIndex"
                @click="ruta.currentImage = imgIndex"
                class="w-2 h-2 rounded-full transition-all"
                :class="ruta.currentImage === imgIndex ? 'bg-white' : 'bg-white/50'"
              />
            </div>
          </div>

          <div class="p-5">
            <h3 class="text-xl font-bold text-nature-primary mb-2">{{ ruta.nombre }}</h3>
            <p class="text-gray-600 text-sm mb-2">{{ ruta.duracion }}</p>
            <p class="text-gray-700 text-sm mb-3">{{ ruta.descripcion }}</p>
            
            <!-- Información adicional -->
            <div class="text-xs text-gray-600 mb-3 space-y-1">
              <p v-if="ruta.nota" class="italic">{{ ruta.nota }}</p>
              <p v-if="ruta.incluye" class="text-nature-primary font-medium">{{ ruta.incluye }}</p>
              <p class="font-medium">{{ ruta.horarios }}</p>
              <p v-if="ruta.restriccion" class="text-red-500 font-medium">{{ ruta.restriccion }}</p>
            </div>
                        
            <a
              :href="ruta.whatsappLink"
              target="_blank"
              class="btn-primary inline-block w-full"
            >
              Reservar
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Importa las imágenes (ajusta según los nombres reales de tus archivos)
import panoramico1 from '@/assets/Imagenes/Panoramicos/1.jpg'
import panoramico2 from '@/assets/Imagenes/Panoramicos/2.jpg'
import panoramico3 from '@/assets/Imagenes/Panoramicos/3.jpg'

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
    descripcion: "Nos adentraremos en el bosque donde encontraremos paisajes impresionantes y disfrutaremos de hermosos lugares únicos.",    
    horarios: "Horarios flexibles: 9:00 AM - 6:00 PM",
    nota: "Puede ir 1 o 2 personas. No se necesita experiencia.",
    imagenes: [panoramico1, panoramico2, panoramico3],
    currentImage: 0,
    whatsappLink: "https://wa.me/524423653316?text=Hola!%20Quiero%20reservar%20el%20Paseo%20Panorámico%20EXPRESS"
  },
  {
    nombre: "Pinal de Noche",
    duracion: "2 Horas", 
    descripcion: "Recorreremos distintos puntos donde podremos admirar el pueblo, conoceremos la historia y leyendas, admiraremos el cielo totalmente estrellado.",    
    horarios: "Horarios flexibles: 9:00 AM - 8:00 PM",
    nota: "Tour disponible también durante el día",
    imagenes: [pinalNoche1, pinalNoche2, pinalNoche3],
    currentImage: 0,
    whatsappLink: "https://wa.me/524423653316?text=Hola!%20Quiero%20reservar%20Pinal%20de%20Noche"
  },
  {
    nombre: "Vistas y Sabores",
    duracion: "2.5 Horas",
    descripcion: "Disfruta de los diferentes paisajes que Pinal de Amoles te ofrece, conoce las historias y leyendas del pueblo, finalizaremos disfrutando las pruebas de licores y ates artesanales.",    
    horarios: "Horarios flexibles: 9:00 AM - 3:00 PM",
    nota: "Tradición de más de 200 años",
    imagenes: [sabores1, sabores2, sabores3],
    currentImage: 0,
    whatsappLink: "https://wa.me/524423653316?text=Hola!%20Quiero%20reservar%20Vistas%20y%20Sabores"
  },
  {
    nombre: "Nubes y Sombras",
    duracion: "2 Horas",
    descripcion: "Asómbrate con el Mirador Peña de la Guacamaya, vence el miedo en el mirador de cristal, descubre el interior de la Cueva del Judío, pasa por la Puerta del Cielo.",
    horarios: "Horarios flexibles: 9:00 AM - 3:00 PM",
    incluye: "Incluye entradas",
    restriccion: "No disponible los miércoles",
    imagenes: [nubes1, nubes2, nubes3],
    currentImage: 0,
    whatsappLink: "https://wa.me/524423653316?text=Hola!%20Quiero%20reservar%20Nubes%20y%20Sombras"
  },
  {
    nombre: "El Cedral",
    duracion: "2.5 Horas",
    descripcion: "Conoce este lugar único con una increíble Cascada de 40 metros, mirador al borde del precipicio, columpio extremo, hermosos pastizales y arroyos con ajolotes endémicos.",
    horarios: "Horarios flexibles: 9:00 AM - 4:00 PM",
    incluye: "Incluye entradas",
    imagenes: [cedral1, cedral2, cedral3],
    currentImage: 0,
    whatsappLink: "https://wa.me/524423653316?text=Hola!%20Quiero%20reservar%20El%20Cedral"
  },
  {
    nombre: "Bucareli Extremo",
    duracion: "8 Horas",
    descripcion: "Vive la aventura rumbo a la misión de Bucareli donde recorreremos 40 km de terracería. Conoce el Ex convento, tirolesas, puentes colgantes y pinturas rupestres.",
    horarios: "Horarios flexibles: 8:30 AM - 11:00 AM",
    incluye: "Incluye entradas al exconvento y seguro",
    nota: "No incluye tirolesas",
    imagenes: [bucareli1, bucareli2, bucareli3],
    currentImage: 0,
    whatsappLink: "https://wa.me/524423653316?text=Hola!%20Quiero%20reservar%20Bucareli%20Extremo"
  },
  {
    nombre: "Cascadas",
    duracion: "8 Horas",
    descripcion: "Recorre 6 km de terracería rodeado de hermosos paisajes para llegar a la cascada El Salto y desciende sus 258 escalones. Nada a los pies de la cascada y pozas del Chuveje.",
    horarios: "Horarios flexibles: 8:30 AM - 11:00 AM",
    incluye: "Incluye entradas a los lugares y seguro",
    imagenes: [cascadas1, cascadas2, cascadas3],
    currentImage: 0,
    whatsappLink: "https://wa.me/524423653316?text=Hola!%20Quiero%20reservar%20Cascadas"
  }
])

// Función auxiliar para obtener URLs de imágenes (por si necesitas mezclar con URLs externas)
const getImageUrl = (image) => {
  if (typeof image === 'string') {
    return image
  }
  return image
}

// Función para rotar imágenes automáticamente
let rotationIntervals = []

const startImageRotation = () => {
  recorridos.value.forEach((ruta, index) => {
    const interval = setInterval(() => {
      ruta.currentImage = (ruta.currentImage + 1) % ruta.imagenes.length
    }, 3000) // Cambia cada 3 segundos
    
    rotationIntervals.push(interval)
  })
}

const stopImageRotation = () => {
  rotationIntervals.forEach(interval => clearInterval(interval))
  rotationIntervals = []
}

onMounted(() => {
  startImageRotation()
})

onUnmounted(() => {
  stopImageRotation()
})
</script>