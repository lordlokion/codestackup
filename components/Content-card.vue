<template>

<div style="background: linear-gradient(to bottom, #ffffff, #ffffff)">
    <h1 class="text-center font-bold text-4xl tracking-wider pt-20">
      OUR SERVICES
      <img
        src=""
        class="w-max h-12 item-center max-w-6xl mx-auto"
      />
    </h1>
  </div>


  <div
    v-for="(service, index) in services"
    :key="index"
    class="flex-shrink-0 mx-4"
  >
    <NuxtLink :to="`/services/${service.title.replace(/\s+/g, '-').toLowerCase()}`">
      <div
        class="max-w-6xl mx-auto bg-white shadow-md p-10 rounded-lg border-t-2 mb-20"
      >
        <div class="flex items-center justify-between space-x-8">
          <div
            class="w-1/3 h-72 bg-green-200 rounded-lg border border-gray-300 overflow-hidden"
          >
            <img
              :src="service.lightIconUrl"
              alt="Card Image"
              class="w-full h-full object-fill rounded-lg"
            />
          </div>

          <div class="w-2/3">
            <h2 class="text-3xl font-bold">{{ service.title }}</h2>
            <img :src="lightIconUrl" class="h-6" />
            <p class="text-gray-600">
              {{ service.description }}
            </p>
            <button class="bg-black text-white px-4 py-2 mt-6 rounded-full">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
const services = [
{
    lightIconUrl: "",
    title: "UX & UI Design",
    description:
      " Our UX/UI design package ensures a seamless user experience, enhancing engagement and leaving a lasting impression.",
  },
  {
    lightIconUrl: "",

    title: "Web App Development",
    description:
      "Transform your concepts into dynamic and functional web applications that stand out in the crowded digital landscape.",
  },
  {
    lightIconUrl: "",

    title: "Software Design & Architecture",
    description:
      "Developing software that stands the test of time requires a strong foundation. Our Software Design & Architecture services provide just that.",
  },
  {
    lightIconUrl:
      "",
    title: " API Development",
    description:
      "Connect and empower your applications with our API Development services. We ensure a smooth and efficient integration process,  bridging the digital divide",
  },
  {
    lightIconUrl:
      "",
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
