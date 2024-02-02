<template>
  <div
    :style="{ backgroundImage: `url(${wave1})`, backgroundSize: 'cover' }"
    class="min-h-screen"
  >
    <div class="bg-white min-h-screen">
      <div class="m-auto">
        <NuxtPage />
      </div>
    </div>
  </div>
</template>

<script setup>
import wave1 from "/bg_home.svg";
</script>
