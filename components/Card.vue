<template>
    <div class="relative flex justify-center overflow-hidden py-6 sm:py-12">
      <div
        class="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1  sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10"
      >
        <span
          class="absolute top-10 z-0 h-20 w-20 rounded bg-green-400 transition-all duration-300 group-hover:scale-[10]"
        ></span>
        <div class="relative z-10 mx-auto max-w-md">
          <span
            class="grid h-20 w-20 place-items-center rounded  transition-all duration-300 group-hover:bg-green-400"
          >
            <img :src="imageSrc" :alt="altText" class="grid h-20 w-20 place-items-center transition-all duration-300 group-hover:bg-green-400" />
          </span>
          <div
            class="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-black/90"
          >
            <h1 class="text-2xl font-bold ">{{ title }}</h1>
  
            <!-- You can pass the title and description as props -->
            <p class="text-md">{{ description }}</p>
          </div>
         
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Card",
    props: {
      title: String,
      description: String,
      imageSrc: String,
      altText: String, // New prop for alt text
      link: String,
      buttonText: String,
    },
  };
  </script>
  