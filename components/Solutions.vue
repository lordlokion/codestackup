<template>
  <div style="background: linear-gradient(to bottom, #fcfefa, #ffffff)">
    <div class="flex max-w-6xl container mx-auto items-center pt-10 justify-between">
      <div
        v-for="service in services"
        :key="service.id"
        :to="`/services/${generateRoute(service.title)}`"
        class="flex"
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
          description: "We delve deeply into your objectives, data, and requirements to develop a successful digital strategy.",
          imageSrc: "/images/scope_icon.svg",
          link: "#",
          buttonText: "Read the docs &rarr;"
        },
        {
          id: 2,
          title: "DESIGN",
          description: "Our design approach is both rigorous and imaginative, with the purpose of helping you achieve your objectives.",
          imageSrc: "/images/cmp_icon.svg",
          link: "#",
          buttonText: "Read the docs &rarr;"
        },
        {
          id: 3,
          title: "IMPLEMENTATION",
          description: "We are enthusiastic about our job and utilise technology to help you reach your objectives.",
          imageSrc: "/images/search_icon.svg",
          link: "#",
          buttonText: "Read the docs &rarr;"
        }
      ]
    };
  },
  methods: {
    generateRoute(title) {
      return title.replace(/\s+/g, '-').toLowerCase();
    },
    handleCardClick(service) {
      console.log(`Clicked on card with title: ${service.title}`);
      console.log('Generated route:', this.generateRoute(service.title));
    }
  }
};
</script>
