<template>
  <div
    :style="{ backgroundImage: `url(${wave1})`, backgroundSize: 'cover' }"
    class="min-h-screen overflow-hidden"
  >
    <div class="bg-white min-h-screen">
      <div class="mx-auto lg:p-12 xl:p-16">
        <!-- Adjusted padding for different screen sizes -->
        <NuxtPage />
      </div>
    </div>
  </div>
</template>

<script setup>
import wave1 from "/bg_home.svg";
</script>
