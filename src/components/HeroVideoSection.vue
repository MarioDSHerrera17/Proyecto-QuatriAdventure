<template>
  <section
    class="relative py-20 bg-gradient-to-b from-gray-100 via-white to-gray-100 border-t border-gray-200"
  >
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-center mb-14">
        <h2 class="text-3xl md:text-4xl font-bold text-nature-primary mb-4">
          Vive la Experiencia Grizzly 350
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Nuestras Yamaha Grizzly 350cc te esperan para explorar los rincones
          más espectaculares de Pinal de Amoles
        </p>
      </div>

      <!-- Fondo degradado envolvente -->
      <div class="relative flex justify-center">
        <div
          class="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 blur-3xl opacity-40 scale-110"
        ></div>

        <!-- Contenedor principal -->
        <div
          class="relative max-w-xl md:max-w-2xl mx-auto rounded-3xl overflow-hidden bg-black shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)]"
        >
          <!-- Loading -->
          <div
            v-if="loading"
            class="absolute inset-0 flex items-center justify-center bg-black/80 z-20"
          >
            <div class="text-white text-lg flex items-center gap-2">
              <i class="bi bi-arrow-repeat animate-spin"></i>
              Cargando video...
            </div>
          </div>

          <!-- Contenedor vertical 9:16 -->
          <div class="w-full aspect-[4/4] relative">
            <transition name="fade" mode="out-in">
              <video
                :key="currentIndex"
                ref="videoPlayer"
                autoplay
                loop
                muted
                playsinline
                class="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                @click="togglePlay"
                @loadeddata="onVideoLoaded"
                @error="onVideoError"
              >
                <source :src="currentVideo.src" :type="currentVideo.type" />
              </video>
            </transition>
          </div>

          <!-- Overlay degradado inferior -->
          <div
            class="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/70 to-transparent pointer-events-none"
          ></div>

          <!-- Botón play/pause -->
          <div class="absolute bottom-4 right-4 z-10">
            <button
              @click="togglePlay"
              class="bg-white/10 backdrop-blur-md text-white p-3 rounded-full hover:bg-white/20 transition-all shadow-lg"
            >
              <i v-if="isPlaying" class="bi bi-pause-fill text-xl"></i>
              <i v-else class="bi bi-play-fill text-xl"></i>
            </button>
          </div>

          <!-- Estado -->
          <div
            class="absolute top-4 left-4 bg-nature-primary/90 backdrop-blur-md text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg"
          >
            {{ isPlaying ? "Reproduciendo" : "Pausado" }}
          </div>

          <!-- Error -->
          <div
            v-if="videoError"
            class="absolute inset-0 flex items-center justify-center bg-black/90 z-20"
          >
            <div class="text-white text-center p-4">
              <i class="bi bi-exclamation-triangle text-4xl mb-2"></i>
              <p>Error al cargar el video</p>
              <button
                @click="retryVideo"
                class="mt-3 bg-nature-primary px-4 py-2 rounded-lg shadow-lg"
              >
                Reintentar
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Selector -->
      <div class="flex justify-center gap-4 mt-10">
        <button
          v-for="(video, index) in videos"
          :key="index"
          @click="changeVideo(index)"
          class="px-5 py-2 rounded-xl font-semibold transition-all duration-300 shadow-md"
          :class="
            index === currentIndex
              ? 'bg-nature-primary text-white scale-105 shadow-lg'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:scale-105'
          "
        >
          Video {{ index + 1 }}
        </button>
      </div>

      <!-- Info -->
      <div class="text-center text-gray-600 mt-8">
        <p class="text-sm">
          Video demostrativo de nuestros recorridos en cuatrimoto
        </p>
      </div>
    </div>

    <!-- Características + Equipo incluido -->
    <div class="mt-20 grid md:grid-cols-2 gap-12 items-start">
      <!-- Características técnicas -->
      <div>
        <h3 class="text-2xl font-bold text-nature-primary mb-6">
          Características de la Grizzly 350
        </h3>

        <div class="grid sm:grid-cols-2 gap-6">
          <div class="flex items-start gap-4">
            <i class="bi bi-speedometer2 text-3xl text-nature-primary"></i>
            <div>
              <h4 class="font-semibold">Motor 348cc</h4>
              <p class="text-gray-600 text-sm">
                Potente motor monocilíndrico 4 tiempos
              </p>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <i class="bi bi-gear text-3xl text-nature-primary"></i>
            <div>
              <h4 class="font-semibold">Transmisión automática</h4>
              <p class="text-gray-600 text-sm">
                Ultramatic CVT, fácil y cómoda
              </p>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <i class="bi bi-shield-check text-3xl text-nature-primary"></i>
            <div>
              <h4 class="font-semibold">Sistema Anti-Pendiente</h4>
              <p class="text-gray-600 text-sm">
                Transmisión Ultramatic® con freno motor automático que brinda
                mayor control y seguridad en descensos pronunciados.
              </p>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <i class="bi bi-tree text-3xl text-nature-primary"></i>
            <div>
              <h4 class="font-semibold">Ideal para montaña</h4>
              <p class="text-gray-600 text-sm">
                Perfecta para rutas en Pinal de Amoles
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Equipo incluido -->
      <div>
        <h3 class="text-2xl font-bold text-nature-primary mb-6">
          Equipo que te proporcionamos
        </h3>

        <div class="grid sm:grid-cols-2 gap-6">
          <div class="flex items-start gap-4">
            <i class="bi bi-lightbulb text-3xl text-nature-primary"></i>
            <div>
              <h4 class="font-semibold">Lámparas</h4>
              <p class="text-gray-600 text-sm">Para recorridos con poca luz</p>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <i class="bi bi-signpost-2 text-3xl text-nature-primary"></i>
            <div>
              <h4 class="font-semibold">Bastones de senderismo</h4>
              <p class="text-gray-600 text-sm">
                Mayor estabilidad en caminatas
              </p>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <i class="bi bi-cloud-rain text-3xl text-nature-primary"></i>
            <div>
              <h4 class="font-semibold">Impermeable completo</h4>
              <p class="text-gray-600 text-sm">
                Protección total contra lluvia
              </p>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <i class="bi bi-eyeglasses text-3xl text-nature-primary"></i>
            <div>
              <h4 class="font-semibold">Guantes y goggles</h4>
              <p class="text-gray-600 text-sm">
                Seguridad y comodidad garantizada
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";

import video1 from "@/assets/video/1.mp4";
import video2 from "@/assets/video/Cedral.MOV";
import video3 from "@/assets/video/Campestre.MOV";

const videoPlayer = ref(null);
const isPlaying = ref(true);
const loading = ref(true);
const videoError = ref(false);

const videos = [
  { src: video1, type: "video/mp4" },
  { src: video2, type: "video/mp4" },
  { src: video3, type: "video/mp4" },
];

const currentIndex = ref(0);
const currentVideo = computed(() => videos[currentIndex.value]);

const onVideoLoaded = () => {
  loading.value = false;
  videoError.value = false;
  isPlaying.value = true;
};

const onVideoError = () => {
  loading.value = false;
  videoError.value = true;
};

const togglePlay = () => {
  if (!videoPlayer.value) return;

  if (videoPlayer.value.paused) {
    videoPlayer.value.play();
    isPlaying.value = true;
  } else {
    videoPlayer.value.pause();
    isPlaying.value = false;
  }
};

const retryVideo = () => {
  loading.value = true;
  videoError.value = false;
  videoPlayer.value?.load();
};

const changeVideo = (index) => {
  if (index === currentIndex.value) return;
  loading.value = true;
  videoError.value = false;
  currentIndex.value = index;
};

onMounted(() => {
  setTimeout(() => {
    videoPlayer.value?.play().catch(() => {
      isPlaying.value = false;
    });
  }, 500);
});
</script>

<style scoped>
/* Animación fade */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Spinner */
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.animate-spin {
  animation: spin 1s linear infinite;
}
</style>
