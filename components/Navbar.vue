<template>
  <header class="py-4 bg-#FF5733" style="background-color: #e8f0d2">
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
          <a
            href="tel:(800) 490-1476"
            title=""
            class="flex items-center space-x-2 hover:text-green-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 hidden sm:inline"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
            <span class="hidden sm:inline">(000) 000-0000</span>
          </a>
        </li>
        <li class="mb-2 md:mb-0">
          <a
            href="mailto:"
            title=""
            class="flex items-center space-x-2 hover:text-green-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 hidden sm:inline"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
            <span class="hidden sm:inline">Hello@codestackup.com</span>
          </a>
        </li>
        <li>
          <a href="#">
            <NuxtLink
              to="/talktous"
              title=""
              class="inline-block bg-green-400 hover:bg-green-500 text-black font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out"
            >
              Schedule Your Free Consultation
            </NuxtLink>
          </a>
        </li>
      </ul>
    </div>
  </header>
</template>
