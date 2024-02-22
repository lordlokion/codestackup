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
      <div class="w-full lg:w-1/2 p-4 md:p-8">
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
          class="bg-purple-100 rounded-full md:p-4 text-purple-500 font-bold items-center text-sm flex"
        >
          <div class="mx-2">Connect With Us!</div>
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
      
      
      <div class="py-6 md:py-20 text-center justify-between">
        <NuxtLink to="/talktous">
          <a
            href=""
            title=""
            class="text-black font-semibold px-4 md:px-8 py-2 md:py-4 rounded-xl text-xl md:text-md bg-purple-300 hover:bg-purple-400"
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

      <Anim loc="/anim/1.json" class="-my-12" />
      
    </div>
  </div>

  <!-- Section 2 -->
  <div
    class="flex flex-col md:flex-row space-y-8 md:space-y-0 mx-auto mb-8 md:mb-20 max-w-6xl border-2 border-purple-600 rounded-xl p-4 md:p-10"
  >
    <div
      class="w-full md:w-1/3 h-40  md:h-64 rounded-lg overflow-hidden "
    >
    <Anim loc="/anim/2.json" class="-my-12 " />
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

      <img src="/icon/line_icon.png" alt="Icon" class="h-4 w-72 md:h-6" />
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

    <div class="w-full md:w-1/3 h-40 md:h-64 rounded-lg overflow-hidden">

      <Anim loc="/anim/5.json" class="-my-12" />

      <img
        src=""
        alt=""
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
      "Explore our offerings of responsive web applications, websites, and an intuitive mobile journey tailored for both iOS and Android platforms.",
    overview: "Enter the world of innovative UX/UI design, where functionality meets transformative brilliance, reshaping the digital landscape. Guided by a steadfast dedication to innovation and supported by a team of experts, we go beyond traditional aesthetics, creating user-friendly interfaces that captivate and connect with audiences.",
    b1_title: "User-Centric Approach",
    b1_description:"Our design philosophy revolves around understanding your users needs, behaviours, and expectations. We design intuitive interfaces that prioritise user satisfaction and ease of navigation, ensuring a delightful experience at every touchpoint.",    b1_img: "/images/API_COLOR.svg",
    b1_svg1: "Understanding User Needs",
    b1_svg2: "Customised Integration Design",
    b1_svg3: "Continuous User Feedback",
            b1_anim: "/anim/1.json",
    b2_title: "Visuals and Functionality",
    b2_description:"Our designs seamlessly blend aesthetics with functionality. From captivating visuals to intuitive interactions, we strike the perfect balance to create interfaces that not only look stunning but also drive user engagement and conversions.",
           b2_anim: "/anim/1.json", 
    b2_svg1: "Elegant Design Fusion",
    b2_svg2: "Engaging User Interfaces",
    b2_svg3: "Seamless User Experience",
    b3_title: "Responsive Design",
    b3_description:"In today's multi-device landscape, responsiveness is key. Our designs adapt flawlessly to various screen sizes and devices, ensuring consistent and optimal user experiences across desktops, tablets, and smartphones.",
    b3_anim: "/anim/1.json", 
    b3_svg1: "Dynamic Adaptability",
    b3_svg2: "Unified User Journey",
    b3_svg3: "Universal Optimisation",
  },


  {
    IconUrl: "/images/web_color2.svg",
    title: "Web App Development",
    description:
      "Our expertise lies in deploying dynamic web applications, websites, and ensuring a seamless mobile experience for both iOS and Android platforms.",
    overview:"At the peak of innovative design, we seamlessly blend functionality with brilliance, redefining digital interactions. With an unyielding commitment to creativity and a talented team, we go beyond appearances—creating intuitive, user-focused interfaces that captivate and leave a lasting impact.",
    b1_title: "Customised Solutions",
    b1_description:
      "We understand that every business is unique. Our web app development process begins with a deep dive into your requirements, ensuring that we deliver tailored solutions that align perfectly with your objectives and goals.",
    b1_img: "/images/API_COLOR.svg",
    b1_svg1: "Personalised Approach",
    b1_svg2: "Flexible Functionality",
    b1_svg3: "Modular Development",
    b2_title: "Scalable Archiecture",
    b2_description:
      "Our team of experienced developers employs robust and scalable architectures that lay a strong foundation for your web applications to grow alongside your business. Whether you're a startup or an enterprise, our solutions are designed to scale effortlessly with your evolving needs.",
    b2_img: "/images/API_COLOR.svg",
    b2_svg1: "Future-Ready Frameworks",
    b2_svg2: "Elastic Flexibility",
    b2_svg3: "Development Methodologies",
    b3_title: "Security and Compliance",
    b3_description:
      "Security is paramount in today's digital world. Our web app development process incorporates robust security measures and compliance standards to safeguard your data and protect your users' privacy.",
    b3_img: "/images/API_COLOR.svg",
    b3_svg1: "Enhanced Security Measures",
    b3_svg2: "Regulatory Compliance Assurance",
    b3_svg3: "Rigorous data protection",
  },


  {
    IconUrl: "/images/sda.svg",
    title: "Software Design & Architecture",
    description:
      "We provide interactive web applications, websites, and a smooth mobile interface for both iOS and Android platforms.",
    overview:"At the forefront of digital evolution, our software design and architecture epitomise innovation and excellence. Seamlessly merging functional brilliance, we redefine digital landscapes. With an unwavering commitment to innovation and a team of skilled professionals, we transcend conventional boundaries—crafting intuitive, user-centric solutions that captivate and resonate with audiences.",
    b1_title: "Development Methodology",
    b1_description:"We are technology agnostic. Whether you prefer open-source technologies or proprietary solutions, we have the expertise to design and architect software using the tools and platforms that best suit your requirements.",    b1_img: "/images/API_COLOR.svg",
    b1_svg1: "Versatile Technology Integration",
    b1_svg2: "Innovation Without Constraints",
    b1_svg3: "Sustainable Technology Integration",
    b2_title: "Customised Solutions",
    b2_description:"We understand that every business is unique. Our software design and architecture process begins with a thorough understanding of your requirements and objectives. We tailor our solutions to fit your specific needs, ensuring that they align seamlessly with your business goals.",    b2_img: "/images/API_COLOR.svg",
    b2_svg1: "Client-Centric Development",
    b2_svg2: "Agile Adaption",
    b2_svg3: "Personalised Solutions",
    b3_title: "Modular Design",
    b3_description:"We believe in the power of modularity. Our software architectures are designed with a modular approach, allowing for flexibility and reusability of components. This not only simplifies development and maintenance but also facilitates future enhancements and updates.",
        b3_img: "/images/API_COLOR.svg",
    b3_svg1: "Scalable Foundation",
    b3_svg2: "Efficiency Through Modularisation",
    b3_svg3: "Future Ready Architcture",
  },


  {
    IconUrl: "/images/API_COLOR.svg",
    title: " API Development",
    description:
      "We specialise in delivering dynamic API solutions, catering to responsive web apps, sites, and offering a seamless mobile experience across iOS and Android platforms.",
    overview:"At the forefront of API development, we embrace transformative UX/UI principles seamlessly integrated with functional brilliance, reshaping digital interactions. With an unyielding dedication to innovation and a proficient team, we transcend traditional boundaries—forging intuitive, user-centric interfaces that engage and leave a lasting impact.",
    b1_title: "Customised API Solutions",
    b1_description:"We understand that every business has unique requirements. Our API development process begins with a thorough analysis of your needs and objectives. We tailor our API solutions to fit your specific use cases, ensuring maximum functionality and efficiency.",
        b1_img: "/images/API_COLOR.svg",
    b1_svg1: "Flexible Integration Framework",
    b1_svg2: "Modular Architcture Design",
    b1_svg3: "Scalable performance optimisation",
    b2_title: "Documentation and Support",
    b2_description:"We provide comprehensive documentation and support for our APIs, making it easy for developers to understand and utilise them effectively. From API reference guides to code samples, we ensure that developers have all the resources they need to integrate with our APIs seamlessly.",
        b2_img: "/images/API_COLOR.svg",
    b2_svg1: "Interactive API Documentation",
    b2_svg2: "Comprehensive Resource Library",
    b2_svg3: "Regular Updates and Enhancements",
    b3_title: "Performance Optimisation",
    b3_description:"Performance is critical for API success. We optimize our APIs for speed and efficiency, minimizing latency and response times to ensure a smooth user experience for your applications and services.",
        b3_img: "/images/API_COLOR.svg",
    b3_svg1: "Streamlined Latency Reduction",
    b3_svg2: "Seamless User Experience",
    b3_svg3: "Enhanced Throughput Efficiency",
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
