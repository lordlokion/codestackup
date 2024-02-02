<template>
  <div v-if="!showThankYou" class="max-w-6xl flex rounded-2xl bg-purple-100 items-center mx-auto h-36 p-24 mb-20 mt-20">
    <img src="/icon/chat.svg">

    <div >
      <div class="font-bold text-2xl text-center">{{ getCurrentQuestion().question }}</div>
      <input v-if="!getCurrentQuestion().skip" v-model="answer" class="rounded-full px-60 py-3 mt-4" :placeholder="getPlaceholder()" />
      <div v-if="getCurrentQuestion().skip">
        <input v-model="answer" class="rounded-full px-4 py-2 mt-4" :placeholder="getPlaceholder()" />
        <button @click="skipQuestion" class="bg-yellow-500 text-white px-4 py-2 rounded-full">Skip</button>
      </div>
    </div>
    <div class="bg-green-500 h-12 mt-12 mx-4 w-36 text-center pt-3 rounded-full" @click="nextQuestion" :disabled="!canProceed">
      {{ isFinalStep ? 'Submit' : 'Next!' }}
    </div>
  </div>
  <div v-else class="max-w-6xl flex rounded-2xl bg-purple-100 items-center justify-center mx-auto h-36 p-4">
    <div class="text-center">
      <p>Thanks for answering!</p>
      <p>Your responses have been captured.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import emailjs from 'emailjs-com';

const questions = [
  { id: 1, question: 'What is your name?', skip: false },
  { id: 2, question: 'What is your email?', skip: false },
  { id: 3, question: 'What is your phone number?', skip: false },
  { id: 4, question: 'What is your location?', skip: true },
];

const currentQuestionIndex = ref(0);
const answer = ref('');
const submittedAnswers = ref([]);
const showThankYou = ref(false);

const getCurrentQuestion = () => questions[currentQuestionIndex.value];

const canProceed = ref(false);

const nextQuestion = () => {
  if (validateFields()) {
    submittedAnswers.value.push({ id: getCurrentQuestion().id, answer: answer.value });
    answer.value = '';
    currentQuestionIndex.value += 1;

    // If it's the last question, submit the responses and show the thank-you message
    if (currentQuestionIndex.value === questions.length) {
      submitForm();
      showThankYou.value = true;
    }
  }
};

const skipQuestion = () => {
  submittedAnswers.value.push({ id: getCurrentQuestion().id, answer: 'Skipped' });
  answer.value = '';
  currentQuestionIndex.value += 1;

  // If it's the last question, submit the responses and show the thank-you message
  if (currentQuestionIndex.value === questions.length) {
    submitForm();
    showThankYou.value = true;
  }
};

const validateFields = () => {
  if (getCurrentQuestion().id === 1) {
    return answer.value.trim() !== '';
  } else if (getCurrentQuestion().id === 2) {
    // Add email validation logic here
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(answer.value.trim());
  } else if (getCurrentQuestion().id === 3) {
    // Add phone number validation logic here
    const phonePattern = /^[0-9]+$/;
    return phonePattern.test(answer.value.trim());
  } else {
    return true;
  }
};

const getPlaceholder = () => {
  return getCurrentQuestion().skip ? 'Type your location (optional)' : 'Type your answer';
};

const submitForm = () => {
  // Store data in local storage for each question
  for (let i = 0; i < questions.length; i++) {
    const answer = submittedAnswers.value[i] ? submittedAnswers.value[i].answer : '';
    localStorage.setItem(`answer_${i + 1}`, answer);
  }

  // Send email using Email.js
  const templateParams = {
    to_email: 'recipient@example.com', // Replace with the recipient's email address
    answers: JSON.stringify(submittedAnswers.value),
  };

  emailjs.send('service_id', 'template_id', templateParams, 'user_id')
    .then((response) => {
      console.log('Email sent successfully:', response);
    })
    .catch((error) => {
      console.error('Email sending failed:', error);
      // Handle error if needed
    });
};

const isFinalStep = ref(false);

onMounted(() => {
  // Retrieve data from local storage on component mount
  for (let i = 0; i < questions.length; i++) {
    const storedAnswer = localStorage.getItem(`answer_${i + 1}`);
    if (storedAnswer) {
      submittedAnswers.value.push({ id: i + 1, answer: storedAnswer });
    }
  }

  // Check if it's the final step
  isFinalStep.value = currentQuestionIndex.value === questions.length;
});
</script>
