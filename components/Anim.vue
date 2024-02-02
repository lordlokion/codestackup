<template>
    <div class="hover:transform hover:scale-105 hover:transition-transform hover:duration-500">
      <lottie-player :src="loc" background="transparent" loop autoplay class="w-full h-full"></lottie-player>
    </div>
  </template>
  
  <script>
  export default {
    name: "Animation",
    props: {
      loc: {
        type: String,
        required: true,
      },
    },
  };
  </script>