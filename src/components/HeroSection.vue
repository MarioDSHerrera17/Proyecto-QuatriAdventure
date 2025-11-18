<template>
  <section id="inicio" class="relative h-screen flex items-center justify-center text-center">
    <video
      autoplay
      loop
      muted
      playsinline
      class="absolute inset-0 w-full h-full object-cover"
    >
      <source src="https://cdn.coverr.co/videos/coverr-atv-riding-through-the-dirt-5642/1080p.mp4" type="video/mp4" />
    </video>

    <div class="hero absolute inset-0 bg-black/40"></div>

    <div class="z-10 px-6 max-w-3xl">
      <h1 class="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
        Vive la aventura en Pinal de Amoles
      </h1>
      <p class="mt-4 text-lg text-gray-200">
        Recorridos guiados en cuatrimoto por la Sierra Gorda Queretana.
      </p>
      <a href="#rutas" class="mt-8 inline-block btn-primary">
        Ver recorridos
      </a>
    </div>
  </section>
</template>