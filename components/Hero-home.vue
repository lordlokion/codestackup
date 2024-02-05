<template>
  <div style="background: linear-gradient(to bottom, #e8f0d2, #eefadf)">
    <div
      class="flex flex-col sm:flex-row max-w-6xl container mx-auto items-center pt-10 justify-between"
    >
      <!-- Left side content -->
      <div class="sm:w-full p-8 h-full"> <!-- Updated class here -->
        <span class="bg-black rounded-full text-white px-4 py-2 mx-1">WEB</span>
        <span class="bg-black rounded-full text-white px-4 py-2 mx-1">IOS</span>
        <span class="bg-black rounded-full text-white px-4 py-2 mx-1">ANDROID</span>

        <div class="text-container mb-10">
          <div class="uppercase">
            <h1 class="mb-3 mt-6 text-6xl font-bold dark:text-white">
              Your P<span style="color: #00ce7c">a</span>rtner
              <span class="text-black">,</span><br />
              N<span style="color: #00ce7c">o</span>t Company
            </h1>
          </div>
          <p>
            We will write something here, the text will be written here loreal
            pixel. We will write something here, the text will be written here
            loreal pixel. We will write something here, the text will be written
            here loreal pixel.
          </p>
        </div>
        <NuxtLink to="/talktous">
          <div class="flex mt-4 sm:mt-0">
            <div
              class="w-full sm:w-1/2 flex text-black px-8 py-4 font-semibold rounded-md text-xl bg-green-400 hover:bg-green-500 text-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-8 h-8 mx-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                />
              </svg>
              Get a proposal
            </div>
          </div>
        </NuxtLink>
      </div>

      <!-- Right side image -->
      <div class="sm:col-md-6 order-1 order-md-3 w-full sm:w-1/2 h-full relative">
        <div class="image-container h-full overflow-hidden">
          <div class="text-center">
            <Anim loc="/anim/home.json" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
const isLightMode = ref(true);

onMounted(() => {
  setInterval(() => {
    // Toggle between light and dark mode every 5 seconds
    isLightMode.value = !isLightMode.value;
  }, 5000);
});
</script>

<style scoped>
/* Additional styles for responsiveness */

@media only screen and (max-width: 768px) {
  .sm:w-full {
    width: 100%;
  }
}
</style>
