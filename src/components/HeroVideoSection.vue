<template>
  <section class="relative py-16 bg-white border-t border-gray-100">
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-nature-primary mb-4">
          Vive la Experiencia Grizzly 350
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Nuestras Yamaha Grizzly 350cc te esperan para explorar los rincones más espectaculares de Pinal de Amoles
        </p>
      </div>

      <!-- Video principal -->
      <div class="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl mb-8 bg-gray-900">
        <div v-if="loading" class="absolute inset-0 flex items-center justify-center bg-gray-800">
          <div class="text-white text-lg flex items-center gap-2">
            <i class="bi bi-arrow-repeat animate-spin"></i>
            Cargando video...
          </div>
        </div>
        
        <video
          ref="videoPlayer"
          autoplay
          loop
          muted
          playsinline
          class="w-full h-64 md:h-96 object-cover"
          @click="togglePlay"
          @loadeddata="onVideoLoaded"
          @error="onVideoError"
        >
          <source :src="currentVideo.src" :type="currentVideo.type" />
          Tu navegador no soporta el elemento video.
        </video>
        
        <!-- Overlay de controles -->
        <div class="absolute bottom-4 right-4 flex gap-2">
          <button 
            @click="togglePlay"
            class="bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
          >
            <i v-if="isPlaying" class="bi bi-pause-fill"></i>
            <i v-else class="bi bi-play-fill"></i>
          </button>
        </div>
        
        <!-- Indicador de estado -->
        <div class="absolute top-4 left-4 bg-nature-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
          {{ isPlaying ? 'Reproduciendo' : 'Pausado' }}
        </div>

        <!-- Mensaje de error -->
        <div v-if="videoError" class="absolute inset-0 flex items-center justify-center bg-gray-800">
          <div class="text-white text-center p-4">
            <i class="bi bi-exclamation-triangle text-4xl mb-2"></i>
            <p>Error al cargar el video</p>
            <button @click="retryVideo" class="mt-2 bg-nature-primary px-4 py-2 rounded-lg">
              Reintentar
            </button>
          </div>
        </div>
      </div>

      <!-- Información del video -->
      <div class="text-center text-gray-600 mb-8">
        <p class="text-sm">Video demostrativo de nuestros recorridos en cuatrimoto</p>
      </div>

      <!-- Características de las cuatrimotos -->
      <div class="grid md:grid-cols-3 gap-8 mt-12 max-w-4xl mx-auto">
        <div class="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
          <div class="text-nature-primary text-2xl mb-3">
            <i class="bi bi-speedometer2"></i>
          </div>
          <h3 class="font-bold text-gray-800 mb-2">350cc Automática</h3>
          <p class="text-gray-600 text-sm">Transmisión automática para mayor facilidad de manejo, ideal para principiantes</p>
        </div>
        
        <div class="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
          <div class="text-nature-primary text-2xl mb-3">
            <i class="bi bi-shield-check"></i>
          </div>
          <h3 class="font-bold text-gray-800 mb-2">Frenos Anti-pendiente</h3>
          <p class="text-gray-600 text-sm">Sistema de seguridad avanzado para pendientes pronunciadas</p>
        </div>
        
        <div class="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
          <div class="text-nature-primary text-2xl mb-3">
            <i class="bi bi-lightning-charge"></i>
          </div>
          <h3 class="font-bold text-gray-800 mb-2">Luces LED</h3>
          <p class="text-gray-600 text-sm">Iluminación potente para recorridos nocturnos y de aventura</p>
        </div>
      </div>

      <!-- Botón de acción -->
      <div class="text-center mt-12">
        <a 
          href="#rutas" 
          class="inline-block bg-nature-primary hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
        >
          Ver Todos los Recorridos
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Importa tu video local
import video1 from '@/assets/video/1.mp4'

const videoPlayer = ref(null)
const isPlaying = ref(true)
const loading = ref(true)
const videoError = ref(false)

// Usar tu video local
const currentVideo = ref({
  src: video1,
  type: 'video/mp4',
  alt: 'Recorrido QuatriAdventure'
})

const onVideoLoaded = () => {
  loading.value = false
  videoError.value = false
  isPlaying.value = true
}

const onVideoError = (error) => {
  loading.value = false
  videoError.value = true
  console.error('Error loading video:', error)
}

const togglePlay = () => {
  if (videoPlayer.value) {
    if (videoPlayer.value.paused) {
      videoPlayer.value.play()
      isPlaying.value = true
    } else {
      videoPlayer.value.pause()
      isPlaying.value = false
    }
  }
}

const retryVideo = () => {
  loading.value = true
  videoError.value = false
  if (videoPlayer.value) {
    videoPlayer.value.load()
  }
}

onMounted(() => {
  // Intentar reproducir automáticamente después de cargar
  setTimeout(() => {
    if (videoPlayer.value && videoPlayer.value.paused) {
      videoPlayer.value.play().catch((error) => {
        console.log('Autoplay blocked:', error)
        isPlaying.value = false
      })
    }
  }, 500)
})
</script>

<style scoped>
/* Estilos para mejorar la experiencia del video */
video {
  cursor: pointer;
  transition: transform 0.3s ease;
}

video:hover {
  transform: scale(1.01);
}

/* Animación de carga */
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.animate-spin {
  animation: spin 1s linear infinite;
}
</style>