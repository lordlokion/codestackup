<template>
  <header class="py-4" style="background-color: #e8f0d2">
    <div class="max-w-6xl container mx-auto flex flex-col md:flex-row items-center justify-between">
      <div class="mb-4 md:mb-0">
        <a href="">
          <NuxtLink to="/">
            <img
              alt="Logo"
              decoding="async"
              nitro-lazy-empty=""
              class=""
              src="/icon/logo_black.svg"
            />
          </NuxtLink>
        </a>
      </div>
      <ul class="flex flex-col md:flex-row items-center space-x-0 md:space-x-4">
        <li class="mb-2 md:mb-0">
          <span class="hidden sm:inline">Home</span>
        </li>
        <li class="mb-2 md:mb-0">
            <span class="hidden sm:inline">Services</span>
        </li>
        <li class="mb-2 md:mb-0">
            <span class="hidden sm:inline">About Us</span>
        </li>
        <li class="mb-2 md:mb-0">
            <span class="hidden sm:inline">Our Process</span>
        </li>
        <li>
          <a href="#">
            <NuxtLink
              to="/talktous"
              title=""
              class="hidden lg:inline-block bg-green-400 hover:bg-green-500 text-black font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out"
            >
              Schedule Your Free Consultation
            </NuxtLink>
          </a>
        </li>
      </ul>
    </div>
  </header>
</template>
