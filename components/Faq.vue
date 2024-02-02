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
                    <p class="mb-5 text-xl">{{ question.answer }}</p>
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
    title: "This is going to be question 1?",
    answer:
      "Here comes the answer to the quesion.",
    showAnswer: false,
  },
  {
    id: 2,
    title: "This is going to be question 2?",
    answer:
      "Here comes the answer to the quesion.",
    showAnswer: false,
  },
  {
    id: 3,
    title: "This is going to be question 3?",
    answer:
      "Here is the answer of the third qustioj.",
    showAnswer: false,
  },
  {
    id: 4,
    title: "This is going to be question 4?",
    answer:
      "Here comes the Content of the last question here.",
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
