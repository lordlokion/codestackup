<template>
  <div class="p-4 sm:p-8">
    <div class="hidden md:hidden lg:flex flex-col lg:flex-row max-w-6xl mx-auto shadow-md p-4 sm:p-8 rounded-2xl border-t-2 bg-purple-100 border-2">
      <!-- Image Section -->
      <div class="w-full lg:w-1/6 mb-4 lg:mb-0 lg:mr-6">
        <div class="h-20 lg:h-48 bg-green-200 rounded-lg border border-gray-300 overflow-hidden">
          <img
            src="/icon/search_icon.svg"
            alt="Card Image"
            class="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>

      <!-- Text Section -->
      <div class="flex-1 mt-4 lg:mt-0 lg:ml-6 pt-10">
        <h1 class="text-lg lg:text-3xl font-bold">
          Want to see more apps we’ve built with our partners?
        </h1>
      </div>

      <!-- Button Section -->
      <div class="w-full lg:w-1/6 lg:item-center lg:justify-center pt-16">
        <NuxtLink to="/portfolio">
          <button class="px-4 lg:px-6 py-2 lg:py-3 bg-green-200 hover:bg-lime-600 rounded-full">
            Our Portfolio
          </button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
