<template>
    <div class="p-20">
    <div class="flex max-w-6xl mx-auto  shadow-md p-8 rounded-2xl border-t-2 bg-purple-100">
      <!-- Image Section -->
      <div class="flex w-1/6">
        <div
          class="h-32 bg-green-200 rounded-lg border border-gray-300 overflow-hidden"
        >
          <img
            src=""
            alt="Card Image"
            class="w-32 h-32 object-fill rounded-lg"
          />
        </div>
      </div>
  
      <!-- Text Section -->
      <div class="ml-6 w-4/6 mt-6 ">
        <h1 class="text-3xl font-bold">
          Want to see more apps we’ve built with our partners?
        </h1>
      </div>
  
      <!-- Button Section -->
      <div class="w-1/6 mt-6">
        <NuxtLink to="/portfolio">
        <button class="px-10 py-3 bg-green-200 hover:bg-lime-600 rounded-full mt-6">Our Portfolio</button>
      </NuxtLink>
      </div>
    </div>
</div>
  </template>
  