<template>
  <Navbar />

  <div style="background: linear-gradient(to bottom, #e8f0d2, #eefadf)">
    <div
      class="flex flex-col md:flex-row max-w-6xl mx-auto items-center p-4 md:p-10 justify-between"
    >
      <!-- Right side image -->
      <div class="md:flex md:order-md-3 w-full md:w-1/2 relative">
        <div class="image-container h-full overflow-hidden">
          <div class="text-center">
            <img :src="service.IconUrl" alt="image" class="w-full h-auto" />
          </div>
        </div>
      </div>

      <!-- Left side content -->
      <div class="w-full md:w-1/2 p-4 md:p-8">
        <div class="text-container mb-4 md:mb-10">
          <div class="uppercase">
            <h1
              class="mb-3 mt-6 text-4xl md:text-6xl font-bold dark:text-white"
            >
              {{ service.title }}
            </h1>
          </div>
          <p class="text-sm md:text-base">
            {{ service.description }}
          </p>
        </div>
        <div class="bg-purple-100 rounded-full p-2 md:p-4 text-purple-500 font-bold items-center text-sm flex">
  <div class="mx-2 sm:mx-4 md:mx-6">Connect With Us!</div>
  <Social class="h-12 w-full border-2" />
</div>

      </div>
    </div>
  </div>

  <div class="max-w-7xl mx-auto mt-8 md:mt-20">
    <div class="w-full md:w-2/4 mx-auto">
      <h1 class="font-bold text-lg md:text-xl">Overview</h1>
      <p class="text-base md:text-lg mt-2 md:mt-5">
        {{ service.overview }}
      </p>
      <div class="px-6 md:px-40 py-6 md:py-20">
        <NuxtLink to="/talktous">
          <a
            href=""
            title=""
            class="text-white px-4 md:px-8 py-2 md:py-4 rounded-full text-sm md:text-md"
            style="background-color: #00ce7c"
          >
            Work With Us
          </a>
        </NuxtLink>
      </div>
    </div>
  </div>

  <!-- Section 1 -->
  <div
    class="flex flex-col md:flex-row space-y-8 md:space-y-0 mx-auto mt-8 md:mt-20 mb-8 md:mb-20 max-w-6xl border-2 border-green-600 rounded-xl p-4 md:p-10"
  >
    <div class="w-full md:w-2/3">
      <h2 class="text-2xl md:text-5xl font-bold">{{ service.b1_title }}</h2>

      <img src="" alt="Icon" class="h-4 md:h-6" />
      <p class="text-gray-600 text-sm md:text-base">
        {{ service.b1_description }}
      </p>
    </div>

    <div class="w-full md:w-1/3 h-40 md:h-60 rounded-lg overflow-hidden">
      <img
        :src="service.b1_img"
        alt="Card Image"
        class="w-full h-full object-fill rounded-lg"
      />
    </div>
  </div>

  <!-- Section 2 -->
  <div
    class="flex flex-col md:flex-row space-y-8 md:space-y-0 mx-auto mb-8 md:mb-20 max-w-6xl border-2 border-purple-600 rounded-xl p-4 md:p-10"
  >
    <div
      class="w-full md:w-1/3 h-40 md:h-60 bg-green-200 rounded-lg overflow-hidden"
    >
      <img
        :src="service.b2_img"
        alt="Card Image"
        class="w-full h-full object-fill rounded-lg"
      />
    </div>
    <div class="w-full md:w-2/3">
      <h2 class="text-2xl md:text-5xl font-bold">{{ service.b2_title }}</h2>

      <img src="" alt="Icon" class="h-4 md:h-6" />
      <p class="text-gray-600 text-sm md:text-base">
        {{ service.b2_description }}
      </p>
    </div>
  </div>

  <!-- Section 3 -->
  <div
    class="flex flex-col md:flex-row space-y-8 md:space-y-0 mx-auto mb-8 md:mb-20 max-w-6xl border-2 border-green-600 rounded-xl p-4 md:p-10"
  >
    <div class="w-full md:w-2/3">
      <h2 class="text-2xl md:text-5xl font-bold">{{ service.b3_title }}</h2>

      <img src="" alt="Icon" class="h-4 md:h-6" />
      <p class="text-gray-600 text-sm md:text-base">
        {{ service.b3_description }}
      </p>
    </div>

    <div class="w-full md:w-1/3 h-40 md:h-60 rounded-lg overflow-hidden">
      <img
        :src="service.b3_img"
        alt="Card Image"
        class="w-full h-full object-fill rounded-lg"
      />
    </div>
  </div>

  <Foot />
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const service = ref({});

onMounted(() => {
  const route = useRoute();
  const serviceId = route.params._id;

  // Find the selected service in the array of services
  const selectedservice = services.find(
    (p) => p.title.toLowerCase().replace(/\s+/g, "-") === serviceId
  );

  // Set the service details
  if (selectedservice) {
    service.value = selectedservice;
  }
});

const services = [
  {
    IconUrl: "/images/UI.svg",
    title: "UX & UI Design",
    description:
      "We deliver responsive web apps, sites, and a seamless mobile experience for iOS and Android.",
    overview:
      "A pinnacle of transformative UX/UI design seamlessly merged with functional brilliance, redefining digital experiences. With an unwavering commitment to innovation and a skilled team, we elevate designs beyond aesthetics—crafting intuitive, user-centric interfaces that captivate and resonate.",
    b1_title: "This is Title",
    b1_description: "Here comes the desription.",
    b1_img: "",
    b2_title: "This is title2",
    b2_description: "Here comes the description.",
    b2_img: "",
    b3_title: "This is title 3",
    b3_description: "Here comes the description.",
    b3_img: "",
  },
  {
    IconUrl: "/images/web_color2.svg",
    title: "Web App Development",
    description:
      "We deliver responsive web apps, sites, and a seamless mobile experience for iOS and Android.",
    overview:
      "A pinnacle of transformative UX/UI design seamlessly merged with functional brilliance, redefining digital experiences. With an unwavering commitment to innovation and a skilled team, we elevate designs beyond aesthetics—crafting intuitive, user-centric interfaces that captivate and resonate.",
    b1_title: "This is Title",
    b1_description: "Here comes the desription.",
    b1_img: "",
    b2_title: "This is title2",
    b2_description: "Here comes the description.",
    b2_img: "",
    b3_title: "This is title 3",
    b3_description: "Here comes the description.",
    b3_img: "",
  },
  {
    IconUrl: "/images/sda.svg",
    title: "Software Design & Architecture",
    description:
      "We deliver responsive web apps, sites, and a seamless mobile experience for iOS and Android.",
    overview:
      "A pinnacle of transformative UX/UI design seamlessly merged with functional brilliance, redefining digital experiences. With an unwavering commitment to innovation and a skilled team, we elevate designs beyond aesthetics—crafting intuitive, user-centric interfaces that captivate and resonate.",
    b1_title: "This is Title",
    b1_description: "Here comes the desription.",
    b1_img: "",
    b2_title: "This is title2",
    b2_description: "Here comes the description.",
    b2_img: "",
    b3_title: "This is title 3",
    b3_description: "Here comes the description.",
    b3_img: "",
  },
  {
    IconUrl: "/images/API_COLOR.svg",
    title: " API Development",
    description:
      "We deliver responsive web apps, sites, and a seamless mobile experience for iOS and Android.",
    overview:
      "A pinnacle of transformative UX/UI design seamlessly merged with functional brilliance, redefining digital experiences. With an unwavering commitment to innovation and a skilled team, we elevate designs beyond aesthetics—crafting intuitive, user-centric interfaces that captivate and resonate.",
    b1_title: "This is Title",
    b1_description: "Here comes the desription.",
    b1_img: "",
    b2_title: "This is title2",
    b2_description: "Here comes the description.",
    b2_img: "",
    b3_title: "This is title 3",
    b3_description: "Here comes the description.",
    b3_img: "",
  },
  {
    IconUrl: "/images/cmp_icon.svg",
    title: "Web & Mobile Apps",
    description:
      "We deliver responsive web apps, sites, and a seamless mobile experience for iOS and Android.",
    overview:
      "A pinnacle of transformative UX/UI design seamlessly merged with functional brilliance, redefining digital experiences. With an unwavering commitment to innovation and a skilled team, we elevate designs beyond aesthetics—crafting intuitive, user-centric interfaces that captivate and resonate.",
    b1_title: "This is Title",
    b1_description: "Here comes the desription.",
    b1_img: "",
    b2_title: "This is title2",
    b2_description: "Here comes the description.",
    b2_img: "",
    b3_title: "This is title 3",
    b3_description: "Here comes the description.",
    b3_img: "",
  },
];
</script>
