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
  <p class="text-center text-4xl pb-10 p-2">
    We bring your product to life with expertise.
  </p>

  <div
    v-for="(service, index) in services"
    :key="index"
    class="flex-shrink-0 mx-4"
  >
    <NuxtLink
      :to="`/services/${service.title.replace(/\s+/g, '-').toLowerCase()}`"
    >
      <div
        class="max-w-6xl mx-auto bg-white shadow-xl p-10 rounded-lg border-t border-gray-200 mb-20"
      >
        <div class="flex items-center justify-between space-x-8">
          <template v-if="index % 2 === 1">
            <!-- For even index, switch places -->
            <div class="w-full md:w-2/3">
              <h2 class="text-3xl font-bold">{{ service.title }}</h2>
              <img :src="lightIconUrl" class="lg:h-6 h-2" />
              <p class="hidden md:block text-gray-600">{{ service.description }}</p>

              <div class="flex flex-wrap mt-4">
                <div class="flex items-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  <div class="mx-2">{{ service.t1 }}</div>
                </div>

                <div class="flex items-center mr-4 mt-4 md:mt-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  <div class="mx-2">{{ service.t2 }}</div>
                </div>

                <div class="flex items-center mr-4 mt-4 md:mt-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  <div class="mx-2">{{ service.t3 }}</div>
                </div>
              </div>
              <button
                class="hidden md:bg-black md:text-white md:px-4 md:py-2 lg:mt-6 md:rounded-full md:flex"
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 mx-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </button>
            </div>

            <div class="w-1/3 h-60 rounded-lg overflow-hidden">
              <img
                :src="service.lightIconUrl"
                alt="Card Image"
                class="w-full h-full object-fill rounded-lg"
              />
            </div>
          </template>
          <template v-else>
            <!-- For odd index, normal order -->
            <div class="w-1/3 h-60 rounded-lg overflow-hidden">
              <img
                :src="service.lightIconUrl"
                alt="Card Image"
                class="w-full h-full object-fill rounded-lg"
              />
            </div>
            <div class="w-full md:w-2/3">
              <h2 class="text-3xl font-bold">{{ service.title }}</h2>
              <img :src="lightIconUrl" class="lg:h-6 h-2" />
              <p class="hidden md:block text-gray-600">{{ service.description }}</p>

              <div class="flex flex-wrap mt-4">
                <div class="flex items-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  <div class="mx-2">{{ service.t1 }}</div>
                </div>

                <div class="flex items-center mr-4 mt-4 md:mt-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  <div class="mx-2">{{ service.t2 }}</div>
                </div>

                <div class="flex items-center mr-4 mt-4 md:mt-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  <div class="mx-2">{{ service.t3 }}</div>
                </div>
              </div>
              <button
                class="hidden md:bg-black md:text-white md:px-4 md:py-2 lg:mt-6 md:rounded-full md:flex"
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 mx-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
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
    t1: "User-friendly Interfaces",
    t2: "Wireframing ",
    t3: "Prototyping",
  },
  {
    lightIconUrl: "/images/web_color2.svg",

    title: "Web App Development",
    description:
      "Transform your concepts into dynamic and functional web applications that stand out in the crowded digital landscape.",
    t1: "Responsive Website Design",
    t2: "E-commerce Solutions",
    t3: "CMS Development",
  },
  {
    lightIconUrl: "/images/sda.svg",

    title: "Software Design & Architecture",
    description:
      "Developing software that stands the test of time requires a strong foundation. Our Software Design & Architecture services provide just that.",
    t1: "Innovative Solutions",
    t2: "Client Centric",
    t3: "Agile Approach",
  },
  {
    lightIconUrl: "/images/API_COLOR.svg",
    title: " API Development",
    description:
      "Connect and empower your applications with our API Development services. We ensure a smooth and efficient integration process,  bridging the digital divide",
    t1: "RESTful API",
    t2: "API Integration",
    t3: "API Security Solutions",
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
