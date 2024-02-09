<template>
  <Navbar />

  <section class="mb-20">
    <div style="background: linear-gradient(to bottom, #e8f0d2, #ffffff)">
      <div
        class="flex flex-col sm:flex-row max-w-6xl container mx-auto items-center pt-10 justify-between"
      >
        <!-- Left side content -->
        <div class="sm:w-full p-8 h-full">
          <!-- Updated class here -->

          <div class="text-container mb-10">
            <div class="uppercase">
              <h1 class="mb-3 mt-6 text-6xl font-bold dark:text-white">
                Our <span style="color: #e2209e">Work</span>
              </h1>
            </div>
            <p class="max-w-xl">
              We are proud to work with truly innovative clients. Here are just
              a few of the companies we’ve had the privilege to work with. View
              your team’s projects from every angle and bring a fresh
              perspective to the task at hand.
            </p>
          </div>
          <NuxtLink to="/talktous">
            <div class="flex mt-4 sm:mt-0">
              <div
                class="w-full sm:w-1/2 flex text-black px-8 py-4 font-semibold rounded-md text-xl bg-green-400 hover:bg-green-500 text-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-8 h-8 mx-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                  />
                </svg>
                Get a proposal
              </div>
            </div>
          </NuxtLink>
        </div>

        <!-- Right side image -->
        <div
          class="sm:col-md-6 order-1 order-md-3 w-full sm:w-1/2 h-full relative"
        >
          <div class="image-container h-full overflow-hidden">
            <div class="text-center">
              <Anim loc="/anim/process3.json" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="mb-20">
    <div class="flex flex-wrap justify-center max-w-6xl mx-auto p-4 md:p-6">
      <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 px-2 mb-4">
        <div class="bg-white rounded-lg shadow-md">
          <a href="https://madanenggworks.in">
            <div class="bg-green-100">
              <img
                src="/images/work1.svg"
                alt="service.altText"
                decoding="async"
                class="w-full h-48 object-none"
              />
            </div>
          </a>
        </div>
        <h1 class="font-semibold underline pt-4 md:pt-6 text-center">
          Madan Engg Works
        </h1>
      </div>

      <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 px-2 mb-4">
        <div class="service-box bg-white rounded-lg shadow-md">
          <a href="https://brokeindian.com">
            <div class="bg-green-100">
              <img
                src="/images/work2.svg"
                alt="service.altText"
                decoding="async"
                class="w-full h-48 object-none"
              />
            </div>
          </a>
        </div>
        <h1 class="font-semibold underline pt-4 md:pt-6 text-center">
          Broke Indian
        </h1>
      </div>

      <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 px-2 mb-4">
        <div class="service-box bg-white rounded-lg shadow-md">
          <a href="https://madanenggworks.in">
            <div class="bg-green-100">
              <img
                src="/images/work1.svg"
                alt="service.altText"
                decoding="async"
                class="w-full h-48 object-none"
              />
            </div>
          </a>
        </div>
        <h1 class="font-semibold underline pt-4 md:pt-6 text-center">
          Madan Engg Works
        </h1>
      </div>

      <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 px-2 mb-4">
        <div class="service-box bg-white rounded-lg shadow-md">
          <a href="https://brokeindian.com">
            <div class="bg-green-100">
              <img
                src="/images/work2.svg"
                alt="service.altText"
                decoding="async"
                class="w-full h-48 object-none"
              />
            </div>
          </a>
        </div>
        <h1 class="font-semibold underline pt-4 md:pt-6 text-center">
          Broke Indian
        </h1>
      </div>
    </div>
  </section>
  <Foot />
</template>
