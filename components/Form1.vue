<template>
  <div class="w-full p-8 min-h-screen" style="background-color: #00ce7c">
    <div>
      <div class="flex">
        <div class="w-1/3"></div>
        <div class="w-1/3 mx-10 mb-4 w-48">
          <img src="" />
        </div>
        <div class="w-1/3"></div>
      </div>
    </div>

    <div class="flex">
      <div class="w-1/3"></div>
      <div class="w-1/3 mx-32">
        <h1 class="max-w-6xl text-white text-6xl mb-8">Get a proposal</h1>
        <p class="max-w-6xl text-gray-100 text-md mb-8">
          We’ll be in touch to book a discovery call shortly after you submit
          the form below 😃
        </p>
      </div>
      <div class="w-1/3"></div>
    </div>

    <div class="p-6 md:max-w-lg mx-auto bg-white">
      <form
        @submit.prevent="submitForm"
        class="flex flex-wrap -m-2"
        id="contactForm"
        action="#"
      >
        <div class="w-full p-2">
          <label class="block">
            <span class="inline-block mb-2 font-medium tracking-tight"
              >Your Name</span
            >
            <input
              v-model="name"
              type="text"
              id="name"
              name="name"
              class="p-4 w-full text-gray-500 tracking-tight placeholder-gray-300 outline-none border border-gray-300 focus:border-gray-700 rounded-lg transition duration-200"
              placeholder="Your Name"
            />
          </label>
        </div>
        <div class="w-full p-2">
          <label class="block">
            <span class="inline-block mb-2 font-medium tracking-tight"
              >Email Address</span
            >
            <input
              v-model="email"
              type="email"
              id="email"
              name="email"
              class="p-4 w-full text-gray-500 tracking-tight placeholder-gray-300 outline-none border border-gray-300 focus:border-gray-700 rounded-lg transition duration-200"
              placeholder="Email Address"
            />
          </label>
        </div>
        <div class="w-full p-2">
          <label class="block">
            <span class="inline-block mb-2 font-medium tracking-tight"
              >Phone</span
            >
            <input
              v-model="phone"
              type="text"
              id="phone"
              name="phone"
              class="p-4 w-full text-gray-500 tracking-tight placeholder-gray-300 outline-none border border-gray-300 focus:border-gray-700 rounded-lg transition duration-200"
              placeholder="Phone Number"
            />
          </label>
        </div>

        <div class="w-full p-2">
          <label class="block">
            <span class="inline-block mb-2 font-medium tracking-tight"
              >Company Name</span
            >
            <input
              v-model="name"
              type="text"
              id="name"
              name="name"
              class="p-4 w-full text-gray-500 tracking-tight placeholder-gray-300 outline-none border border-gray-300 focus:border-gray-700 rounded-lg transition duration-200"
              placeholder="Google"
            />
          </label>
        </div>

        <div class="w-full p-2">
          <label class="block">
            <span class="inline-block mb-2 font-medium tracking-tight"
              >Website URL (if applicable)</span
            >
            <input
              v-model="name"
              type="text"
              id="name"
              name="name"
              class="p-4 w-full text-gray-500 tracking-tight placeholder-gray-300 outline-none border border-gray-300 focus:border-gray-700 rounded-lg transition duration-200"
              placeholder="https://company.com"
            />
          </label>
        </div>

        <div class="w-full p-2">
          <label class="block">
            <span class="inline-block mb-2 font-medium tracking-tight"
              >Project Summary</span
            >
            <textarea
              v-model="message"
              id="message"
              name="message"
              rows="7"
              class="block p-4 w-full text-gray-500 placeholder-gray-300 outline-none border border-gray-300 focus:border-gray-700 rounded-lg resize-none transition duration-200"
              placeholder="i.e page count, functionalities, timeline, design preferences etc.."
            ></textarea>
          </label>
        </div>
        <div class="w-full p-2 text-center justify-between">
          <button
            type="submit"
            class="px-40 py-2 bg-green-500 text-black font-semibold rounded-md flex"
          >
            Submit Request
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
                d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const name = ref("");
const email = ref("");
const phone = ref("");
const message = ref("");

const submitForm = () => {
  const formData = {
    from_name: name.value,
    email_id: email.value,
    phone: phone.value,
    message: message.value,
  };

  // Store form data in local storage
  localStorage.setItem("quoteFormData", JSON.stringify(formData));

  // Send email using EmailJS (or another email service)
  // Note: This example uses EmailJS; you need to sign up and get your service credentials.
  // Replace 'user_id', 'service_id', and 'template_id' with your actual values.

  const emailjsParams = {
    service_id: "",
    template_id: "template_gf4comp",
    user_id: "",
    template_params: formData,
  };

  // Send email using EmailJS
  fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(emailjsParams),
  })
    .then((response) => {
      if (response.ok) {
        console.log("Email sent successfully");
        alert("Thank you! We will get back to you soon.");
      } else {
        console.error("Failed to send email. Status:", response.status);
        alert("Failed to send email. Please try again later.");
      }
    })
    .catch((error) => {
      console.error("Error sending email:", error);
      alert("Failed to send email. Please try again later.");
    });
};
</script>
