<template>
  <div>
    <h1 class="text-center font-bold text-4xl tracking-wider pt-20">
      OUR TEAM
    </h1>
    <p class="text-center">We will write something here.</p>
    <div class="w-full max-w-6xl container mx-auto flex items-center justify-center p-4 sm:p-10">
      <div class="flex items-center space-x-4">
        <button
          @click="prevSlide"
          class="text-gray-500 px-2 py-1 rounded-full bg-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-4 h-4 sm:w-6 sm:h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061A1.125 1.125 0 0 1 21 8.689v8.122ZM11.25 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061a1.125 1.125 0 0 1 1.683.977v8.122Z"
            />
          </svg>
        </button>

        <div
          v-for="(image, position) in positions"
          :key="position"
          class="flex-none"
          :class="{
            'w-32 h-32 sm:w-64 sm:h-64': position === centerPosition,
            'w-16 h-16 sm:w-32 sm:h-32': position !== centerPosition,
          }"
        >
          <img
            :src="images[(currentIndex + position) % images.length].src"
            :alt="images[(currentIndex + position) % images.length].alt"
            class="rounded-full object-contain mx-auto w-full h-full"
            :style="{
              backgroundColor: position === centerPosition ? '#00ce7c' : '#00ce7c',
            }"
          />
        </div>

        <button
          @click="nextSlide"
          class="text-gray-500 px-2 py-1 rounded-full bg-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-4 h-4 sm:w-6 sm:h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const images = [
  { src: "/images/cmp_icon.svg", alt: "Image 1" },
  { src: "/images/scope_icon.svg", alt: "Image 2" },
  { src: "/images/search_icon.svg", alt: "Image 1" },
  { src: "/images/scope_icon.svg", alt: "Image 2" },
  { src: "/images/search_icon.svg", alt: "Image 1" },
];

const positions = [0, 1, 2, 3, 4]; // Static positions
const centerPosition = 2; // Center position
const currentIndex = ref(0); // Starting with the first image

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % images.length;
};

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + images.length) % images.length;
};
</script>
