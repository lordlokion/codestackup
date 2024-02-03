<template>
  <Navbar />
<div class="mx-auto">
  <div class="" style="background: linear-gradient(to bottom, #e8f0d2, #eefadf)">
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
        <div
          class="bg-purple-100 rounded-full p-2 md:p-4 text-purple-500 font-bold items-center text-sm flex"
        >
          <div class="mx-2 sm:mx-4 md:mx-6">Connect With Us!</div>
          <Social class="h-12 w-full" />
        </div>
      </div>
    </div>
  </div>

  <div class="max-w-7xl mx-auto mt-8 md:mt-20 p-4">
    <div class="w-full md:w-2/4 mx-auto">
      <h1 class="font-bold text-lg md:text-xl">Overview</h1>
      <p class="text-base md:text-lg mt-2 md:mt-5">
        {{ service.overview }}
      </p>
      <div class="md:px-40 py-6 md:py-20">
        <NuxtLink to="/talktous">
          <a
            href=""
            title=""
            class="text-black font-semibold px-4 md:px-8 py-2 md:py-4 rounded-xl text-sm md:text-md bg-green-500 hover:bg-green-600"
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
    <div class="w-full md:w-2/3 ">
      <h2 class="text-2xl md:text-5xl font-bold">{{ service.b1_title }}</h2>

      <img src="/icon/line_icon.png" alt="Icon" class="h-4 w-72 md:h-6" />
      <p class="text-gray-600 text-sm md:text-base">
        {{ service.b1_description }}
      </p>
      <div class="flex mt-4">
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
        <div class="mx-2">{{ service.b1_svg1 }}</div>
      </div>
      <div class="flex mt-4">
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
        <div class="mx-2">{{ service.b1_svg2 }}</div>
      </div>
      <div class="flex mt-4">
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
        <div class="mx-2">{{ service.b1_svg3 }}</div>
      </div>
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
    <div class="w-full md:w-2/3 mx-8">
      <h2 class="text-2xl md:text-5xl font-bold">{{ service.b2_title }}</h2>

      <img src="/icon/line_icon.png" alt="Icon" class="h-4 w-72 md:h-6" />
      <p class="text-gray-600 text-sm md:text-base">
        {{ service.b2_description }}
      </p>
      <div class="flex mt-4">
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
        <div class="mx-2">{{ service.b2_svg1 }}</div>
      </div>
      <div class="flex mt-4">
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
        <div class="mx-2">{{ service.b2_svg2 }}</div>
      </div>
      <div class="flex mt-4">
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
        <div class="mx-2">{{ service.b2_svg3 }}</div>
      </div>
    </div>
  </div>

  <!-- Section 3 -->
  <div
    class="flex flex-col md:flex-row space-y-8 md:space-y-0 mx-auto mb-8 md:mb-20 max-w-6xl border-2 border-green-600 rounded-xl p-4 md:p-10"
  >
    <div class="w-full md:w-2/3">
      <h2 class="text-2xl md:text-5xl font-bold">{{ service.b3_title }}</h2>

      <img src="/icon/line_icon.png" alt="Icon" class="w-72 md:h-6" />
      <p class="text-gray-600 text-sm md:text-base">
        {{ service.b3_description }}
      </p>
      <div class="flex mt-4">
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
        <div class="mx-2">{{ service.b3_svg1 }}</div>
      </div>
      <div class="flex mt-4">
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
        <div class="mx-2">{{ service.b3_svg2 }}</div>
      </div>
      <div class="flex mt-4">
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
        <div class="mx-2">{{ service.b3_svg3 }}</div>
      </div>
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
</div>
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
    b1_title: "Expert Web App Development",
    b1_description:
      "Discover how our tailored web app development services can revolutionize your business. We leverage cutting-edge technologies to create scalable and user-centric web applications, ensuring your online presence stands out. With a proven track record, agile development, and a client-centric approach, choosing us means staying ahead in the digital game.",
    b1_img: "/images/API_COLOR.svg",
    b1_svg1: "Innovative Solutions",
    b1_svg2: "Agile Enchantment",
    b1_svg3: "Client-Centric Magic",
    b2_title: "Responsive Web Apps",
    b2_description:
      "Explore the significance of responsive web applications in boosting your online presence. Our team specializes in creating visually appealing and functional web apps that adapt seamlessly to different devices. With an innovative design approach, mobile-first strategy, and a commitment to continuous improvement, we ensure your web app captivates and retains a diverse audience.",
    b2_img: "/images/API_COLOR.svg",
    b2_svg1: "",
    b2_svg2: "",
    b2_svg3: "",
    b3_title: "Trustworthy Web Applications",
    b3_description:
      "Delve into the importance of web application security and how our services prioritize building robust and secure solutions. From comprehensive security audits to SSL integration and regular updates, we ensure your web app is resilient against potential threats. Choose us for a security-first mindset, experienced professionals, and proactive measures to safeguard your business and user data.",
    b3_img: "/images/API_COLOR.svg",
    b3_svg1: "Proactive Spellcasting",
    b3_svg2: "Trusted Adventure",
    b3_svg3: "Loreal Ipsum",
  },


  {
    IconUrl: "/images/web_color2.svg",
    title: "Web App Development",
    description:
      "We deliver responsive web apps, sites, and a seamless mobile experience for iOS and Android.",
    overview:
      "A pinnacle of transformative UX/UI design seamlessly merged with functional brilliance, redefining digital experiences. With an unwavering commitment to innovation and a skilled team, we elevate designs beyond aesthetics—crafting intuitive, user-centric interfaces that captivate and resonate.",
    b1_title: "Expert Web App Development",
    b1_description:
      "Discover how our tailored web app development services can revolutionize your business. We leverage cutting-edge technologies to create scalable and user-centric web applications, ensuring your online presence stands out. With a proven track record, agile development, and a client-centric approach, choosing us means staying ahead in the digital game.",
    b1_img: "/images/API_COLOR.svg",
    b1_svg1: "Innovative Solutions",
    b1_svg2: "Agile Enchantment",
    b1_svg3: "Client-Centric Magic",
    b2_title: "Responsive Web Apps",
    b2_description:
      "Explore the significance of responsive web applications in boosting your online presence. Our team specializes in creating visually appealing and functional web apps that adapt seamlessly to different devices. With an innovative design approach, mobile-first strategy, and a commitment to continuous improvement, we ensure your web app captivates and retains a diverse audience.",
    b2_img: "/images/API_COLOR.svg",
    b2_svg1: "Artisanal Design",
    b2_svg2: "Mobile-First Elegance",
    b2_svg3: "Continuous Masterpiece",
    b3_title: "Trustworthy Web Applications",
    b3_description:
      "Delve into the importance of web application security and how our services prioritize building robust and secure solutions. From comprehensive security audits to SSL integration and regular updates, we ensure your web app is resilient against potential threats. Choose us for a security-first mindset, experienced professionals, and proactive measures to safeguard your business and user data.",
    b3_img: "/images/API_COLOR.svg",
    b3_svg1: "Proactive Spellcasting",
    b3_svg2: "Trusted Adventure",
    b3_svg3: "Loreal Ipsum",
  },


  {
    IconUrl: "/images/sda.svg",
    title: "Software Design & Architecture",
    description:
      "We deliver responsive web apps, sites, and a seamless mobile experience for iOS and Android.",
    overview:
      "A pinnacle of transformative UX/UI design seamlessly merged with functional brilliance, redefining digital experiences. With an unwavering commitment to innovation and a skilled team, we elevate designs beyond aesthetics—crafting intuitive, user-centric interfaces that captivate and resonate.",
    b1_title: "Art of Software Architecture",
    b1_description:"Dive into the captivating world of software architecture, where digital masterpieces are crafted through meticulous planning and ingenious design. Explore the fundamental principles that architects employ to create robust and scalable software solutions. From conceptualizing the initial design to mapping out intricate structures, this title promises an enlightening journey through the architectural wonders shaping the digital landscape.",    b1_img: "/images/API_COLOR.svg",
    b1_svg1: "Innovative Design Paradigms",
    b1_svg2: "Scalability as an Artform",
    b1_svg3: "Architectural Alchemy",
    b2_title: "Simplicity and Adaptability",
    b2_description:"Unravel the secrets behind effective software design with this comprehensive guide that translates the intricate language of code into a visual symphony. Delve into the principles of clean coding, modularization, and design patterns that empower developers to create elegant, maintainable, and efficient software. Whether you're a seasoned developer or an aspiring coder, this title promises insights that bridge the gap between complexity and simplicity in software design.",    b2_img: "/images/API_COLOR.svg",
    b2_svg1: "Maintainability",
    b2_svg2: "Adapt to Trends",
    b2_svg3: "Client-Focused Insights",
    b3_title: "Concept to Code",
    b3_description:"Embark on an epic journey through the realms of software development, as this title navigates the intricate path from conceptualizing ideas to transforming them into tangible code. Explore the pivotal role of software design in shaping the destiny of digital projects, ensuring they evolve seamlessly from inception to execution. Uncover the strategic decisions and innovative thinking that pave the way for successful software development, making this title a compass for those charting their course in the dynamic world of coding.",
        b3_img: "/images/API_COLOR.svg",
    b3_svg1: "Epic Journey Unveiled",
    b3_svg2: "Design's Pivotal Role",
    b3_svg3: "Strategic Decisions Uncovered",
  },


  {
    IconUrl: "/images/API_COLOR.svg",
    title: " API Development",
    description:
      "We deliver responsive web apps, sites, and a seamless mobile experience for iOS and Android.",
    overview:
      "A pinnacle of transformative UX/UI design seamlessly merged with functional brilliance, redefining digital experiences. With an unwavering commitment to innovation and a skilled team, we elevate designs beyond aesthetics—crafting intuitive, user-centric interfaces that captivate and resonate.",
    b1_title: "Tailored APIs, Tailored Success",
    b1_description:"Elevate your business with custom APIs tailored specifically for your needs. Our solutions seamlessly integrate, streamlining operations and freeing your team from mundane tasks. Designed for scalability, our APIs effortlessly adapt to market changes, ensuring your business stays agile and responsive. Experience the perfect blend of personalized design, operational efficiency, and adaptability—empowering your business to thrive in a dynamic environment.",
        b1_img: "/images/API_COLOR.svg",
    b1_svg1: "Perfect Fit",
    b1_svg2: "Boost Productivity",
    b1_svg3: "Future-Ready Scalability",
    b2_title: "Data-Driven Triumph",
    b2_description:"Transform data into actionable insights with our expert APIs. Our solutions break down data silos through seamless integration, creating a unified information flow. Empower decision-making with real-time analytics, gaining a competitive edge through up-to-the-minute insights. Monetize your valuable data by leveraging our APIs, opening avenues for new revenue streams. Unlock the full potential of your data ecosystem with our comprehensive approach, fostering informed decision-making and financial growth.",
        b2_img: "/images/API_COLOR.svg",
    b2_svg1: "Unified Data Integration",
    b2_svg2: "Real-Time Analytics",
    b2_svg3: "Monetize Your Data",
    b3_title: "Secured Foundations",
    b3_description:"Strengthen your digital foundation with our top-tier API development, prioritizing security at every level. Our approach includes end-to-end encryption, safeguarding data transmission with industry-leading protocols. Robust authentication mechanisms control access, allowing only authorized users to interact with your valuable data. Proactive security measures, including regular audits and updates, ensure resilience against emerging threats. Trust us to fortify your digital infrastructure, providing a secure and reliable environment for your business to thrive in the ever-evolving digital landscape.",
        b3_img: "/images/API_COLOR.svg",
    b3_svg1: "End-to-end Encryption",
    b3_svg2: "Authentication Control",
    b3_svg3: "Proactive Security",
  },


  {
    IconUrl: "/images/API_COLOR.svg",
    title: "LAST ONE",
    description:
      "We deliver responsive web apps, sites, and a seamless mobile experience for iOS and Android.",
    overview:
      "A pinnacle of transformative UX/UI design seamlessly merged with functional brilliance, redefining digital experiences. With an unwavering commitment to innovation and a skilled team, we elevate designs beyond aesthetics—crafting intuitive, user-centric interfaces that captivate and resonate.",
    b1_title: "Expert Web App Development",
    b1_description:
      "Discover how our tailored web app development services can revolutionize your business. We leverage cutting-edge technologies to create scalable and user-centric web applications, ensuring your online presence stands out. With a proven track record, agile development, and a client-centric approach, choosing us means staying ahead in the digital game.",
    b1_img: "/images/API_COLOR.svg",
    b1_svg1: "Innovative Solutions",
    b1_svg2: "Agile Enchantment",
    b1_svg3: "Client-Centric Magic",
    b2_title: "Responsive Web Apps",
    b2_description:
      "Explore the significance of responsive web applications in boosting your online presence. Our team specializes in creating visually appealing and functional web apps that adapt seamlessly to different devices. With an innovative design approach, mobile-first strategy, and a commitment to continuous improvement, we ensure your web app captivates and retains a diverse audience.",
    b2_img: "/images/API_COLOR.svg",
    b2_svg1: "",
    b2_svg2: "",
    b2_svg3: "",
    b3_title: "Trustworthy Web Applications",
    b3_description:
      "Delve into the importance of web application security and how our services prioritize building robust and secure solutions. From comprehensive security audits to SSL integration and regular updates, we ensure your web app is resilient against potential threats. Choose us for a security-first mindset, experienced professionals, and proactive measures to safeguard your business and user data.",
    b3_img: "/images/API_COLOR.svg",
    b3_svg1: "",
    b3_svg2: "",
    b3_svg3: "",
  },
];
</script>
