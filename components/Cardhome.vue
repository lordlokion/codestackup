<template>
  <div style="background: linear-gradient(to bottom, #fcfefa, #ffffff)">
    <h1
      class="text-center uppercase mx-auto font-bold lg:w-1/2 text-3xl lg:text-4xl tracking-wider pt-20"
    >
      Everything your site need for success
    </h1>
    <div
      class="flex flex-col max-w-6xl container mx-auto items-center justify-between sm:flex-row"
    >
      <div
        v-for="service in services"
        :key="service.id"
        :to="`/services/${generateRoute(service.title)}`"
        class="mb-4 w-full sm:w-1/3 lg:w-1/3 px-4"
        @click="handleCardClick(service)"
      >
        <Card
          :title="service.title"
          :description="service.description"
          :imageSrc="service.imageSrc"
          :link="service.link"
          :buttonText="service.buttonText"
          class="p-2"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      services: [
        {
          id: 1,
          title: "STRATEGY",
          description:
            "We delve deeply into your objectives, data, and requirements to develop a successful digital strategy.",
          imageSrc: "/images/Strategy_icon.svg",
          link: "#",
          buttonText: "Read the docs &rarr;",
        },
        {
          id: 2,
          title: "DESIGN",
          description:
            "Our design approach is both rigorous and imaginative, with the purpose of helping you achieve your objectives.",
          imageSrc: "/images/design1.svg",
          link: "#",
          buttonText: "Read the docs &rarr;",
        },
        {
          id: 3,
          title: "IMPLEMENTATION",
          description:
            "We are enthusiastic about our job and utilize cutting-edge technology to efficiently help you reach your objectives.",
          imageSrc: "/images/implementation.svg",
          link: "#",
          buttonText: "Read the docs &rarr;",
        },
      ],
    };
  },
  methods: {
    generateRoute(title) {
      return title.replace(/\s+/g, "-").toLowerCase();
    },
    handleCardClick(service) {
      console.log(`Clicked on card with title: ${service.title}`);
      console.log("Generated route:", this.generateRoute(service.title));
    },
  },
};
</script>
