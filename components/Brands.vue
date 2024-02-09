<template>
  <div style="background: linear-gradient(to bottom, #eefadf, #fcfefa)">
    <h1 class="text-center font-bold text-3xl lg:text-4xl pt-10 max-w-2xl mx-auto lg:w-1/2">
      Empowering Growth with Seamless Technical Solutions
    </h1>
    <!-- Testimonial Section -->
    <div class="container mx-auto max-w-6xl flex flex-wrap justify-center items-center mt-10 space-y-8 lg:space-y-0 lg:space-x-8">
      <!-- Testimonial 1 -->
      <div class="max-w-xs w-full lg:w-auto rounded overflow-hidden review-column">
        <img src="https://assets-global.website-files.com/637116ed63d653540d84bcc3/637116ee63d6537b4c84bd40_Star%20cluster.svg" loading="lazy" alt="Stars" class="mb-4">
        <div class="">
          <p class="text-gray-700 text-base text-start font-semibold">"Their unparalleled commitment and swift delivery made all the difference."</p>
        </div>
        <div class="py-4 flex flex-col items-center items-start space-y-2 lg:flex-row lg:space-y-0 lg:space-x-2">
          <div>
            <img src="/testimonial/anil_sharma.jpeg" loading="lazy" width="50" sizes="50px" alt="img" class="testimonial-headshot rounded-full mx-auto lg:mx-0 object-cover">
          </div>
          <div>
            <p class="text-gray-600 text-base font-semibold text-center lg:text-left">Anil Sharma</p>
            <p class="text-gray-600 text-sm text-center lg:text-left">Madan Engg Works</p>
          </div>
        </div>
      </div>

       <!-- Testimonial 2 -->
       <div class="max-w-xs w-full lg:w-auto rounded overflow-hidden review-column">
        <img src="https://assets-global.website-files.com/637116ed63d653540d84bcc3/637116ee63d6537b4c84bd40_Star%20cluster.svg" loading="lazy" alt="Stars" class=" mb-4">
        <div class="">
          <p class="text-gray-700 text-base text-center lg:text-start font-semibold">"Their expertise exceeded our expectations, delivering exceptional results."</p>
        </div>
        <div class="py-4 flex flex-col items-center lg:items-start space-y-2 lg:flex-row lg:space-y-0 lg:space-x-2">
          <div>
            <img src="/testimonial/broke_indian.jpg" loading="lazy" width="50" sizes="50px" alt="img" class="testimonial-headshot rounded-full mx-auto lg:mx-0">
          </div>
          <div>
            <p class="text-gray-600 text-base font-semibold text-center lg:text-left">Sourav Singh</p>
            <p class="text-gray-600 text-sm text-center lg:text-left">Broke Indian</p>
          </div>
        </div>
      </div>

       <!-- Testimonial 3 -->
       <div class="max-w-xs w-full lg:w-auto rounded overflow-hidden review-column">
        <img src="https://assets-global.website-files.com/637116ed63d653540d84bcc3/637116ee63d6537b4c84bd40_Star%20cluster.svg" loading="lazy" alt="Stars" class="mb-4">
        <div class="">
          <p class="text-gray-700 text-base text-center lg:text-start font-semibold">"Their passion, competence, and attention to detail went above all expectations."</p>
        </div>
        <div class="py-4 flex flex-col items-center lg:items-start space-y-2 lg:flex-row lg:space-y-0 lg:space-x-2">
          <div>
            <img src="/testimonial/reddy.jpg" loading="lazy" width="50" sizes="50px" alt="img" class="testimonial-headshot rounded-full mx-auto lg:mx-0">
          </div>
          <div>
            <p class="text-gray-600 text-base font-semibold text-center lg:text-left">Devashesh Reddy</p>
            <p class="text-gray-600 text-sm text-center lg:text-left">Pegasus Imagery</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.review-column {
    opacity: 1;
    transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    transform-style: preserve-3d;
}

@media (min-width: 640px) {
  .testimonial-headshot {
    width: 50px;
  }
}
</style>
