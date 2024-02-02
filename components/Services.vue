<template>
  <div style="background: linear-gradient(to bottom, #ffffff, #ffffff)">
    <h1 class="text-center font-bold text-4xl tracking-wider pt-20">
      OUR WORK
      <img
        src="/icon/line_icon.png"
        class="w-max h-12 item-center max-w-6xl mx-auto"
      />
    </h1>
  </div>
  <p class="text-center">We Will write something here.</p>
  <div class="flex max-w-6xl mx-auto p-6" style="background-color: #ffffff">
    <div
      v-for="(service, index) in services"
      :key="index"
      class="flex-shrink-0 w-1/4 mx-4"
    >
      <NuxtLink
        :to="`/services/${service.title.replace(/\s+/g, '-').toLowerCase()}`"
      >
        <div class="service-box p-6 bg-white rounded-lg shadow-md">
          <div class="icon light mb-4">
            <img
              :src="service.lightIconUrl"
              :alt="service.altText"
              decoding="async"
              class="w-12 h-12"
            />
          </div>
          <p class="text-lg font-semibold mb-2">{{ service.title }}</p>
          <div class="text-gray-600">{{ service.description }}</div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const services = [
  {
    lightIconUrl: "/images/cmp_icon.svg",
    title: "UX & UI Design",
    description:
      " Our UX/UI design package ensures a seamless user experience, enhancing engagement and leaving a lasting impression.",
  },
  {
    lightIconUrl: "/images/search_icon.svg",

    title: "Web App Development",
    description:
      "Transform your concepts into dynamic and functional web applications that stand out in the crowded digital landscape.",
  },
  {
    lightIconUrl: "/images/scope_icon.svg",

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
