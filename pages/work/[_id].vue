<template>
  <Navbar />
  <div style="background: linear-gradient(to bottom, #e8f0d2, #eefadf)">
    <div
      class="flex max-w-6xl container mx-auto items-center pt-10 justify-between"
    >
      <!-- Right side image -->
      <div class="col-md-6 order-md-3 w-1/2 h-full relative">
        <div class="image-container h-full overflow-hidden">
          <div class="text-center">
            <img :src="work.lightIconUrl" alt="image" />
          </div>
        </div>
      </div>

      <!-- Left side content -->
      <div class="w-1/2 p-8 h-full">
        <div class="text-container mb-10">
          <div class="uppercase">
            <h1 class="mb-3 mt-6 text-6xl font-bold dark:text-white">
              {{ work.title }}
            </h1>
          </div>
          <p>
            {{ work.description }}
          </p>
        </div>
        <div
          class="bg-purple-100 rounded-full p-4 text-purple-500 font-bold items-center text-md flex"
        >
          <div class="mx-6">Connect With Us!</div>
          <Social />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const work = ref({});

onMounted(() => {
  const route = useRoute();
  const workId = route.params._id;

  // Find the selected work in the array of works
  const selectedwork = works.find(
    (p) => p.title.toLowerCase().replace(/\s+/g, "-") === workId
  );

  // Set the work details
  if (selectedwork) {
    work.value = selectedwork;
  }
});

const works = [
  {
    lightIconUrl: "/images/cmp_icon.svg",
    title: "Web & Mobile Apps",
    description:
      "We deliver responsive web apps, sites, and a seamless mobile experience for iOS and Android.",
  },
  {
    lightIconUrl: "/images/search_icon.svg",

    title: "Strategy & Prototyping",
    description:
      "We'll work with you to determine the right features to captivate future users and stay in budget.",
  },
  {
    lightIconUrl: "/images/scope_icon.svg",

    title: "Web & Mobile Apps",
    description:
      "We deliver responsive web apps, sites, and a seamless mobile experience for iOS and Android.",
  },
  {
    lightIconUrl: "",
    title: "Strategy & Prototyping",
    description:
      "We'll work with you to determine the right features to captivate future users and stay in budget.",
  },
  {
    lightIconUrl: "",
    title: "Web & Mobile Apps",
    description:
      "We deliver responsive web apps, sites, and a seamless mobile experience for iOS and Android.",
  },
];
</script>
