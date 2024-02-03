<template>
  <div>
    <section class="pb-40 bg-white">
      <div class="container px-4 mx-auto">
        <div class="mb-20 text-center">
          <h2 class="mt-8 text-5xl font-semibold">
            Frequently asked questions
          </h2>
        </div>
        <div class="max-w-3xl mx-auto">
          <ul>
            <li
              v-for="question in questions"
              :key="question.id"
              class="py-4 bg-white border-b border-gray-200"
            >
              <button
                @click="toggleAnswer(question.id)"
                class="flex w-full text-left"
              >
                <div class="w-full">
                  <div class="flex items-center justify-between">
                    <h3 class="text-xl font-semibold">{{ question.title }}</h3>
                    <span class="ml-4">
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
                          d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3"
                        />
                      </svg>
                    </span>
                  </div>
                  <div :class="{ hidden: !question.showAnswer }" class="mt-6">
                    <p class="mb-5 text-md">{{ question.answer }}</p>
                  </div>
                </div>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";

const questions = ref([

{
    id: 1,
    title: "How will you help us improve our SEO?",
    answer:
      "We prioritise improving your SEO visibility. Our strategy includes a thorough review of your existing SEO position, targeted keyword research, and the adoption of SEO best practices. We focus on optimising on-page features, enhancing site structure, and introducing high-quality content. Our objective is to increase your website's exposure, drive organic traffic, and ensure that it appears prominently in search engine results.",
    showAnswer: false,
  },
  {
    id: 2,
    title: "Do you provide content outlines and editing services?",
    answer:
      "Yes, Compelling content is crucial for a successful website. Our expert content strategists can create a complete content plan that is suited to your company's aims. Furthermore, we provide expert editing services to guarantee that your material is not only interesting, but also consistent with your brand voice, creating a lasting impact on your audience.",
    showAnswer: false,
  },
  
  {
    id: 3,
    title: "How big is your team, and where are they located?",
    answer:
      "Our team consists of varied people with distinct abilities. While we value online cooperation, our core staff is centrally based in New Delhi, allowing for effective communication and project management.",
    showAnswer: false,
  },
  {
    id: 4,
    title: "What platforms do you use for web design and development?",
    answer:
      "We use advanced technologies and platforms to provide amazing web design and development solutions. Our expertise spans several platforms, including React, Vue, WordPress, Shopify, and custom-built solutions geared to your exact needs. We believe in staying ahead of industry trends and selecting the proper technologies to support your company objectives, resulting in a visually attractive website that is both technologically strong and user-friendly.",
    showAnswer: false,
  },
]);

const toggleAnswer = (questionId) => {
  const question = questions.value.find((q) => q.id === questionId);
  if (question) {
    question.showAnswer = !question.showAnswer;
  }
};
</script>
