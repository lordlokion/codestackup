<template>
  <div
    :style="{ backgroundImage: `url(${wave1})`, backgroundSize: 'cover' }"
    class="min-h-screen overflow-hidden"
  >
    <div class="min-h-screen ">
      <div class="mx-auto ">
        <!-- Adjusted padding for different screen sizes -->
        <NuxtPage />
      </div>
    </div>
  </div>
</template>

<script setup>
import wave1 from "/bg_home.svg";
</script>
