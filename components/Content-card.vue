<template>
  <div style="background: linear-gradient(to bottom, #ffffff, #ffffff)">
    <h1 class="text-center font-bold text-3xl lg:text-4xl tracking-wider pt-20">
      OUR SERVICES
      <img
        src="/icon/line_icon.png"
        class="w-max h-12 item-center max-w-6xl mx-auto"
      />
    </h1>
  </div>
  <p class="text-center pb-10">We will write something here.</p>

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
    lightIconUrl: "",
    title: "Web & Mobile Apps",
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
