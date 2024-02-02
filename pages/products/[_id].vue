<template>
  <div>
    <section class="overflow-hidden pb-24">
      <div class="relative w-full py-24">
        <div class="absolute left-1/2 top-0 -translate-x-1/2 transform">
          <div class="flex justify-center gap-6">
            <div
              class="mt-20 hidden h-80 w-80 rounded-3xl lg:block bg-green-200"
              :style="`background: linear-gradient(180deg, rgba(255, 224, 165, 0.00) 0%, rgba(74, 222, 128, 0.1) 100%);`"
            ></div>
          </div>
        </div>
        <div class="relative z-10">
          <div class="container mx-auto px-4">
            <div class="-mx-4 flex flex-wrap flex-col lg:flex-row">
              <div class="w-full lg:w-1/2">
                <img
                  class="h-100 w-100 mx-auto mb-8 lg:mb-0 lg:mr-8 rounded-2xl object-cover"
                  :src="`/images/${product.image}`"
                  :alt="`${product.title} Image`"
                />
              </div>
              <div class="w-full lg:w-1/2 p-4">
                <div class="py-7">
                  <h1
                    class="mb-9 max-w-xs text-3xl font-bold text-black lg:max-w-sm lg:text-5xl"
                  >
                    {{ product.title }}
                  </h1>
                </div>
                <p class="text-lg font-bold text-gray-700 mb-4">Description:</p>
                <p>{{ product.description }}</p>
                <div>
                  <h2 class="text-xl font-bold mb-2 mt-4">Features:</h2>
                  <ul class="list-disc ml-6">
                    <li
                      v-for="(feature, index) in product.features"
                      :key="index"
                      class="text-lg text-gray-700"
                    >
                      {{ feature }}
                    </li>
                  </ul>
                </div>

                <div class="">
                  <h2 class="text-xl font-bold mb-2 mt-4">
                    Technical Specification:
                  </h2>
                  <table
                    class="min-w-full border border-collapse border-gray-300"
                  >
                    <thead>
                      <tr class="bg-green-200">
                        <th
                          class="px-2 sm:px-4 py-2 border text-left text-sm sm:text-base"
                        >
                          Model
                        </th>
                        <th
                          class="px-2 sm:px-4 py-2 border text-left text-sm sm:text-base"
                        >
                          Platen Area
                        </th>
                        <th
                          class="px-2 sm:px-4 py-2 border text-left text-sm sm:text-base"
                        >
                          Cutting Area
                        </th>
                        <th
                          class="px-2 sm:px-4 py-2 border text-left text-sm sm:text-base"
                        >
                          Motor
                        </th>
                        <th
                          class="px-2 sm:px-4 py-2 border text-left text-sm sm:text-base"
                        >
                          Impressions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(model, index) in product.models"
                        :key="index"
                        class="hover:bg-green-100"
                      >
                        <td
                          class="px-2 sm:px-4 py-2 border text-left whitespace-nowrap"
                        >
                          {{ model.name }}
                        </td>
                        <td
                          class="px-2 sm:px-4 py-2 border text-left whitespace-nowrap"
                        >
                          {{ model.pa }}
                        </td>
                        <td
                          class="px-2 sm:px-4 py-2 border text-left whitespace-nowrap"
                        >
                          {{ model.ca }}
                        </td>
                        <td
                          class="px-2 sm:px-4 py-2 border text-left whitespace-nowrap"
                        >
                          {{ model.motor }}
                        </td>
                        <td
                          class="px-2 sm:px-4 py-2 border text-left whitespace-nowrap"
                        >
                          {{ model.imp }}
                        </td>
                      </tr>
                      <!-- Add more rows as needed for additional product details -->
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const product = ref({});

onMounted(() => {
  const route = useRoute();
  const productId = route.params._id;

  // Find the selected product in the array of products
  const selectedProduct = products.find(
    (p) => p.title.toLowerCase().replace(/\s+/g, "-") === productId
  );

  // Set the product details
  if (selectedProduct) {
    product.value = selectedProduct;
  }
});

const products = [
  {
    title: "Die Punching Machine",
    image: "cn1.png",
    description:
      'PrecisionCraft Die Punching Machine and Heavy Duty Platen Punching Machine by Madan Engg Works" deliver superior performance in die cutting, creasing, and embossing across various materials such as paper, cardboard, corrugated board, leather, plastic, and PVC. Elevate your precision and efficiency with our cutting-edge solutions.',
    features: [
      "All elements are completely standardized and interchangeable, ensuring reliability and ease of maintenance.",
      "Bearings sourced from top-quality brands such as SKF/NBC/NACHI ensure smooth and precise machine operation.",
      "Double helical self-lubricated imported polyamide/metal pinion units on the main driving shaft enhance operational efficiency.",
      "The machine operates quietly, and its appealing outlook with high-quality paint and powder-lined fitting adds to its overall aesthetic appeal.",
    ],
    models: [
      {
        name: "MADAN-29",
        pa: "23 x 29",
        ca: "20 x 26",
        motor: "3hp",
        imp: "1500/hr",
      },
      {
        name: "MADAN-35",
        pa: "25 x 35",
        ca: "22 x 32",
        motor: "3hp",
        imp: "1500/hr",
      },
      {
        name: "MADAN-40",
        pa: "26 x 36",
        ca: "23 x 33",
        motor: "4hp",
        imp: "1600/hr",
      },
      {
        name: "MADAN-43",
        pa: "32 x 43",
        ca: "29 x 40",
        motor: "5hp",
        imp: "1300/hr",
      },
      {
        name: "MADAN-46",
        pa: "36 x 46",
        ca: "33 x 43",
        motor: "7.5hp",
        imp: "1100/hr",
      },
      {
        name: "MADAN-56",
        pa: "44 x 56",
        ca: "41 x 53",
        motor: "7.5hp",
        imp: "1000/hr",
      },
      {
        name: "MADAN-65",
        pa: "45 x 65",
        ca: "42 x 62",
        motor: "10hp",
        imp: "1000/hr",
      },
    ],
  },
  {
    title: "Paper Cutting Machine",
    image: "cn2.png",
    description:
      "At Madan Engg Works, our Paper Cutting Machine embodies years of exceptional expertise and practical experience. To ensure precise right-angle cuts, we integrate a multitude of safety measures, features, and automation elements in the manufacturing process of our Paper Cutter Machines",
    features: [
      "The machine ensures accuracy in cutting, delivering precise results for various materials.",
      "Featuring a mechanized back gauge with a manual instrument for fine adjustments, the machine enables precise and customizable cutting measurements.",
      "The machine is equipped with expanded side tables for storing stocks during production and side plates on the back table, providing a more extensive and organized workspace.",
      "Foot clamping and central oil ensure a secure grip on materials during cutting, enhancing stability and precision.",
      "The blade is easily interchangeable and adjustable through user-friendly switches, allowing for versatile cutting applications with different materials and thicknesses.",
    ],
  },
  {
    title: "Corrugation Machine",
    image: "cn3.png",
    description:
      "Our top-tier Madan Brand Corrugation Machines form a comprehensive plant, featuring various machines dedicated to specific tasks like Fluting, Sheeting, Pasting, Printing, Punching, Creasing, Cutting, Slotting, Embossing, and finally Stitching.",
    features: [
      "The machine features a special characteristic of an oil tub equipment with an oil lubricating pump, ensuring efficient and reliable lubrication for smooth operation.",
      "Equipped with a heavy-duty excel makes P.I.V. (Positive Infinitely Variable) tools box, the gadget ensures robust performance and durability.",
      "Utilizing an imported chain with a gear ratio of 1:5, the machine provides precise control over the length of the sheet to be cut, contributing to accurate and consistent results.",
      "Powered by an A.C. motor and starter, the machine combines reliability and efficiency in its operation.",
      "The cutting phase is equipped with a blade accessible at 4 edges, providing versatility in cutting options and facilitating different cutting configurations.",
      "The machine is equipped with a digital sheet counter, providing accurate counting and facilitating precise control over the production process.",
    ],
  },
  {
    title: "Die Cutting Maching",
    image: "cn4.png",
    description:
      "Madan Engg Works proudly presents its Die Cutting Machine, meticulously crafted for precision in Die-Punching, Creasing, Die Cut, and Embossing tasks across an array of materials.  This versatile machine is adept at handling diverse products, including Paper, Cardboard, Corrugated Board, Fiber Board, Vinyl, Foam, Rubber, Leather, Masonite, Cork Sheets, Glued Boxes, Marketing Cutouts, Jigsaw Puzzles, Labels, and much more, offering a range of applications to suit various industry needs.",
    features: [
      "Entirely standardized in the packaging industry, our machine adheres to international standards, ensuring all components are interchangeable for precision and ease of use.",
      "All shafts are crafted from high-quality EN Grade steel, while pins are grounded, and bushes are made from Phosphorus Bronze Alloy, ensuring durability and robust performance.",
      "Utilizing only SKF/NBC/NACHI bearings, the machine guarantees smooth and reliable operation, enhancing overall performance.",
      "The machine features a self-diagnostic system code with visual indications, enhancing troubleshooting capabilities for seamless operation.",
      "The machine operates quietly, and its outlook is enhanced with high-quality paint and powder-coated fittings, embodying versatility and durability.",
      "Easy adjustment of impressions is facilitated through two worm gears and eccentric bushes within the cam, allowing precise control for uniform impressions on all corners of the platen.",
    ],
  },

  // Add more products as needed
];
</script>
