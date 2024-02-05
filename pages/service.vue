<template>
    <Navbar />
  
<section class="mb-20">
    <div style="background: linear-gradient(to bottom, #e8f0d2, #eefadf)">
    <div
      class="flex flex-col sm:flex-row max-w-6xl container mx-auto items-center pt-10 justify-between"
    >
      <!-- Left side content -->
      <div class="sm:w-full p-8 h-full">
        <!-- Updated class here -->

        <div class="text-container mb-10">
          <div class="uppercase">
            <h1 class="mb-3 mt-6 text-6xl font-bold dark:text-white">
              Our <span style="color: #e2209e">Services</span>
            </h1>
          </div>
          <p>
            this is going to be the service page.
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
      <div
        class="sm:col-md-6 order-1 order-md-3 w-full sm:w-1/2 h-full relative"
      >
        <div class="image-container h-full overflow-hidden">
          <div class="text-center">
            <Anim loc="/anim/process3.json" />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>  
    <div v-for="(service, index) in services" :key="index" class="flex-shrink-0 mx-4">
      <NuxtLink :to="`/services/${service.title.replace(/\s+/g, '-').toLowerCase()}`">
        <div class="max-w-6xl mx-auto bg-white shadow-xl p-10 rounded-lg border-t border-gray-200 mb-20">
          <div class="flex items-center justify-between space-x-8">
            <template v-if="index % 2 === 1">
              <!-- For even index, switch places -->
              <div class="w-2/3">
                <h2 class=" text-3xl font-bold">{{ service.title }}</h2>
                <img :src="lightIconUrl" class="lg:h-6 h-2" />
                <p class="text-gray-600 ">{{ service.description }}</p>
                <button class="bg-black text-white px-4 py-2 mt-6 rounded-full flex">
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 mx-2"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                  </svg>
                </button>
              </div>
              <div class="w-1/3 h-60 rounded-lg overflow-hidden">
                <img :src="service.lightIconUrl" alt="Card Image" class="w-full h-full object-fill rounded-lg" />
              </div>
            </template>
            <template v-else>
              <!-- For odd index, normal order -->
              <div class="w-1/3 h-60 rounded-lg overflow-hidden">
                <img :src="service.lightIconUrl" alt="Card Image" class="w-full h-full object-fill rounded-lg" />
              </div>
              <div class="w-2/3">
                <h2 class="text-3xl font-bold">{{ service.title }}</h2>
                <img :src="lightIconUrl" class="h-6" />
                <p class="text-gray-600">{{ service.description }}</p>
                <button class="bg-black text-white px-4 py-2 mt-6 rounded-full flex">
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 mx-2"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                  </svg>
                </button>
              </div>
            </template>
          </div>
        </div>
      </NuxtLink>
    </div>
    <Foot />
  </template>
  
  
  <script setup>
  const services = [
    {
      lightIconUrl: "/images/UI.svg",
      title: "UX & UI Design",
      description:
        " Our UX/UI design package ensures a seamless user experience, enhancing engagement and leaving a lasting impression.",
    },
    {
      lightIconUrl: "/images/web_color2.svg",
  
      title: "Web App Development",
      description:
        "Transform your concepts into dynamic and functional web applications that stand out in the crowded digital landscape.",
    },
    {
      lightIconUrl: "/images/sda.svg",
  
      title: "Software Design & Architecture",
      description:
        "Developing software that stands the test of time requires a strong foundation. Our Software Design & Architecture services provide just that.",
    },
    {
      lightIconUrl: "/images/API_COLOR.svg",
      title: " API Development",
      description:
        "Connect and empower your applications with our API Development services. We ensure a smooth and efficient integration process,  bridging the digital divide",
    },
    {
      lightIconUrl: "/images/API_COLOR.svg",
      title: "LAST ONE",
      description:
        "We deliver responsive web apps, sites, and a seamless mobile experience for iOS and Android.",
    },
  ];
  </script>
  
  <style scoped>
  .service-box {
    transition: transform 0.3s;
  }
  
  .service-box:hover {
    transform: scale(1.05);
  }
  </style>
  