<template>
  <div class="flex justify-center items-center h-full">
    <div v-if="embedCode" class="w-full md:w-2/3 lg:w-1/2 xl:w-1/3">
      <label class="block text-gray-700"></label>
      <div
        v-html="embedCode"
        class="aspect-w-16 aspect-h-9 md:aspect-w-16 md:aspect-h-9 lg:aspect-w-24 lg:aspect-h-13 xl:aspect-w-16 xl:aspect-h-9"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const videoLinks = [
  'https://www.youtube.com/watch?v=ZHDmssqKbvI',
  // Add more video links as needed
];

const embedCode = ref('');

function getRandomVideoLink(links) {
  const randomIndex = Math.floor(Math.random() * links.length);
  const videoId = getYouTubeVideoId(links[randomIndex]);
  return videoId || ''; // Return an empty string if the video ID extraction fails
}

function getYouTubeVideoId(url) {
  const videoIdRegex = /[?&]v=([^&]+)/;
  const match = url.match(videoIdRegex);
  return match ? match[1] : null;
}

onMounted(() => {
  const randomVideoLink = getRandomVideoLink(videoLinks);
  const isMobile = window.innerWidth < 768; // Check if the screen width is less than 768 pixels (adjust as needed)
  const width = isMobile ? 400 : 480;
  const height = isMobile ? 200 : 270;

  embedCode.value = `<iframe width="${width}" height="${height}" src="https://www.youtube.com/embed/${randomVideoLink}" frameborder="0" allowfullscreen></iframe>`;
});
</script>

<style scoped>
/* Add your custom styles here */
</style>
