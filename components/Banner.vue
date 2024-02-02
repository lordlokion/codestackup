<template>
  <div class="p-4 sm:p-8">
    <div class="flex flex-col sm:flex-row max-w-6xl mx-auto shadow-md p-4 sm:p-8 rounded-2xl border-t-2 bg-purple-100">
      <!-- Image Section -->
      <div class="w-full sm:w-1/6 mb-4 sm:mb-0 sm:mr-4 lg:mr-6">
        <div class="h-20 sm:h-32 lg:h-48 bg-green-200 rounded-lg border border-gray-300 overflow-hidden">
          <img
            src=""
            alt="Card Image"
            class="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>

      <!-- Text Section -->
      <div class="flex-1 mt-4 sm:mt-0 sm:ml-4 lg:ml-6">
        <h1 class="text-sm sm:text-lg lg:text-3xl font-bold">
          Want to see more apps we’ve built with our partners?
        </h1>
      </div>

      <!-- Button Section -->
      <div class="w-full sm:w-1/2 mt-4 lg:mt-0 flex justify-center sm:justify-end">
        <NuxtLink to="/portfolio">
          <button class="px-4 sm:px-6 py-2 sm:py-3 bg-green-200 hover:bg-lime-600 rounded-full">
            Our Portfolio
          </button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
