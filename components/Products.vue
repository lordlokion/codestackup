<template>
  <div class="">
    <section class="container mx-auto py-10">
      <h2 class="text-4xl text-center font-heading font-semibold text-rhino-600 tracking-xs mb-4">
        Products
      </h2>
      <p class="text-center mb-8">
        We take pride in being a highly accomplished manufacturer and exporter
        of the following range of products.
      </p>
      <div class="flex flex-wrap -mx-2 lg:-mx-6">
        <div v-for="(product, index) in products" :key="index" class="w-full sm:w-1/2 lg:w-1/4 px-2 lg:px-6 mb-8">
          <nuxt-link
            :to="`/products/${product.title.replace(/\s+/g, '-').toLowerCase()}`"
            class="block group max-w-xs mx-auto"
          >
            <div class="flex h-64 w-full mb-4 rounded-xl overflow-hidden border-2 border-transparent group-hover:border-green-500 transition duration-150">
              <img
                class="block object-fill w-full h-full"
                :src="`/images/${product.image}`"
                :alt="`${product.title} Image`"
              />
            </div>

            <div class="text-center font-bold">
              <span class="block text-base text-rhino-500 mb-2">{{ product.title }}</span>
            </div>
          </nuxt-link>
        </div>
      </div>
    </section>
  </div>
</template>


<script setup>
const products = [
  {
    title: "Die Punching Machine",
    price: "-",
    image: "cn1.png",
    description:
      '"PrecisionCraft Die Punching Machine and Heavy Duty Platen Punching Machine by Madan Engg Works" deliver superior performance in die cutting, creasing, and embossing across various materials such as paper, cardboard, corrugated board, leather, plastic, and PVC. Elevate your precision and efficiency with our cutting-edge solutions.',
    features: [
      "All elements are completely standardized and interchangeable, ensuring reliability and ease of maintenance.",
      "Bearings sourced from top-quality brands such as SKF/NBC/NACHI ensure smooth and precise machine operation.",
      "Double helical self-lubricated imported polyamide/metal pinion units on the main driving shaft enhance operational efficiency.",
      "The machine operates quietly, and its appealing outlook with high-quality paint and powder-lined fitting adds to its overall aesthetic appeal.",
    ],
  
  },
  {
    title: "Paper Cutting Machine",
    price: "-",
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
    price: "-",
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
    price: "-",
    image: "cn4.png",
    description: [
      "Madan Engg Works proudly presents its Die Cutting Machine, meticulously crafted for precision in Die-Punching, Creasing, Die Cut, and Embossing tasks across an array of materials.  This versatile machine is adept at handling diverse products, including Paper, Cardboard, Corrugated Board, Fiber Board, Vinyl, Foam, Rubber, Leather, Masonite, Cork Sheets, Glued Boxes, Marketing Cutouts, Jigsaw Puzzles, Labels, and much more, offering a range of applications to suit various industry needs.",
    ],
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
