<template>
  <Navbar />

  <section class="mb-20">
    <div style="background: linear-gradient(to bottom, #e8f0d2, #eefadf)">
      <div
        class="flex flex-col sm:flex-row max-w-6xl container mx-auto items-center pt-10 justify-between"
      >
        <!-- Left side content -->
        <div class="sm:w-full p-8 h-full">
          <!-- Updated class here -->

          <div class="text-container mb-10">
            <div class="uppercase">
              <h1 class="mb-3 mt-6 text-6xl font-bold dark:text-white">
                About <span style="color: #e2209e">Us</span>
              </h1>
            </div>
            <p class="max-w-xl">
              The collaboration goes
              far beyond a standard IT service, with CodeStackUp we have a
              sparring partner that challenges us in our product decisions and
              is truly passionate about the results developed. The level of
              professionalism and dedication is exceptional in this industry and
              we are eager to strengthen our collaboration in the future.
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
  <section class="overflow-hidden mt-20">
    <div class="container px-4 mx-auto">
      <div class="relative mb-32">
        <div class="hidden lg:block absolute top-0 left-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="500"
            height="500"
            viewBox="0 0 500 500"
            fill="none"
          >
            <path
              d="M0.5 498.311V304.054C0.5 136.406 136.406 0.5 304.054 0.5H498.311C498.967 0.5 499.5 1.03289 499.5 1.68919V136.561C499.5 137.217 498.967 137.75 498.311 137.75H342.061C290.59 137.75 239.516 163.123 201.319 201.319C163.123 239.516 137.75 290.59 137.75 342.061V498.311C137.75 498.967 137.217 499.5 136.561 499.5H1.68919C1.03249 499.5 0.5 498.967 0.5 498.311Z"
              fill="url(#paint0_linear_231_9230)"
              stroke="#F0F0F0"
            ></path>
            <defs>
              <linearGradient
                id="paint0_linear_231_9230"
                x1="0"
                y1="500"
                x2="500"
                y2="0"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#F8F8F8"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div class="hidden lg:block absolute top-0 right-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="500"
            height="500"
            viewBox="0 0 500 500"
            fill="none"
          >
            <path
              d="M499.5 1.68919V195.946C499.5 363.594 363.594 499.5 195.946 499.5H1.68919C1.03289 499.5 0.5 498.967 0.5 498.311V363.439C0.5 362.783 1.03289 362.25 1.68919 362.25H157.939C209.41 362.25 260.484 336.877 298.681 298.681C336.877 260.484 362.25 209.41 362.25 157.939V1.68919C362.25 1.03289 362.783 0.5 363.439 0.5H498.311C498.967 0.5 499.5 1.03289 499.5 1.68919Z"
              fill="url(#paint0_linear_231_9229)"
              stroke="#F0F0F0"
            ></path>
            <defs>
              <linearGradient
                id="paint0_linear_231_9229"
                x1="499.998"
                y1="2.85805e-05"
                x2="8.49831"
                y2="500"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#F8F8F8"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div class="relative z-10">
          <h1
            class="text-center text-5xl lg:text-7xl font-bold font-heading max-w-lg lg:max-w-3xl mx-auto pt-14 pb-32"
          >
            On a mission to make learning fun
          </h1>
          <div
            class="border border-gray-200 bg-white rounded-3xl flex flex-wrap"
          >
            <div class="w-full md:w-1/2 lg:w-1/4 py-8">
              <div class="md:border-r border-gray-200 px-12">
                <p class="text-gray-600 mb-2 text-center">Founded</p>
                <h2 class="text-4xl lg:text-5xl font-semibold text-center">
                  2023
                </h2>
              </div>
            </div>
            <div class="w-full md:w-1/2 lg:w-1/4 py-8">
              <div class="lg:border-r border-gray-200 px-12">
                <p class="text-gray-600 mb-2 text-center">Total funding</p>
                <h2 class="text-4xl lg:text-5xl font-semibold text-center">
                  $9.6M
                </h2>
              </div>
            </div>
            <div class="w-full md:w-1/2 lg:w-1/4 py-8">
              <div class="md:border-r border-gray-200 px-12">
                <p class="text-gray-600 mb-2 text-center">Team members</p>
                <h2 class="text-4xl lg:text-5xl font-semibold text-center">
                  110
                </h2>
              </div>
            </div>
            <div class="w-full md:w-1/2 lg:w-1/4 py-8">
              <div class="px-12">
                <p class="text-gray-600 mb-2 text-center">Nationalities</p>
                <h2 class="text-4xl lg:text-5xl font-semibold text-center">
                  24
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-wrap mb-32 -mx-4">
        <div class="w-full lg:w-1/3 p-4">
          <div
            class="relative bg-no-repeat bg-cover rounded-3xl w-full max-w-sm mx-auto"
            style="
              height: 440px;
              background-image: url('https://shuffle.dev/solstice-assets/images/about/men-picture.png');
            "
          >
            <div
              class="absolute bottom-0 left-0 bg-white rounded-tr-3xl rounded-bl-3xl px-6 py-3"
            >
              <h2 class="text-2xl font-bold font-heading mb-2">
                David Petrucci
              </h2>
              <p class="text-sm text-gray-600">Founder &amp; CEO</p>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-1/3 p-4">
          <div
            class="relative bg-no-repeat bg-cover rounded-3xl w-full max-w-sm mx-auto"
            style="
              height: 440px;
              background-image: url('https://shuffle.dev/solstice-assets/images/about/woman-picture1.png');
            "
          >
            <div
              class="absolute bottom-0 left-0 bg-white rounded-tr-3xl rounded-bl-3xl px-6 py-3"
            >
              <h2 class="text-2xl font-bold font-heading mb-2">Malika Gil</h2>
              <p class="text-sm text-gray-600">Operations Manager</p>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-1/3 p-4">
          <div
            class="relative bg-no-repeat bg-cover rounded-3xl w-full max-w-sm mx-auto"
            style="
              height: 440px;
              background-image: url('https://shuffle.dev/solstice-assets/images/about/woman-picture2.png');
            "
          >
            <div
              class="absolute bottom-0 left-0 bg-white rounded-tr-3xl rounded-bl-3xl px-6 py-3"
            >
              <h2 class="text-2xl font-bold font-heading mb-2">Erika Newton</h2>
              <p class="text-sm text-gray-600">Growth Marketer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="max-w-6xl mx-auto mb-20">
    <ol class="items-center sm:flex">
      <li class="relative mb-6 sm:mb-0">
        <div class="flex items-center">
          <div
            class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0"
          >
            <svg
              class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
              />
            </svg>
          </div>
          <div
            class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"
            style="right: 50%; border: 2px solid #00ce7c; border-radius: 1%"
          ></div>
        </div>
        <div class="mt-3 sm:pe-8">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            Flowbite Library v1.0.0
          </h3>
          <time
            class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
            >Released on December 2, 2021</time
          >
          <p class="text-base font-normal text-gray-500 dark:text-gray-400">
            Get started with dozens of web components and interactive elements.
          </p>
        </div>
      </li>
      <li class="relative mb-6 sm:mb-0">
        <div class="flex items-center">
          <div
            class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0"
          >
            <svg
              class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
              />
            </svg>
          </div>
          <div
            class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"
            style="right: 50%; border: 2px solid #00ce7c; border-radius: 1%"
          ></div>
        </div>
        <div class="mt-3 sm:pe-8">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            Flowbite Library v1.2.0
          </h3>
          <time
            class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
            >Released on December 23, 2021</time
          >
          <p class="text-base font-normal text-gray-500 dark:text-gray-400">
            Get started with dozens of web components and interactive elements.
          </p>
        </div>
      </li>
      <li class="relative mb-6 sm:mb-0">
        <div class="flex items-center">
          <div
            class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0"
          >
            <svg
              class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
              />
            </svg>
          </div>
          <div
            class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"
            style="right: 50%; border: 2px solid #00ce7c; border-radius: 1%"
          ></div>
        </div>
        <div class="mt-3 sm:pe-8">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            Flowbite Library v1.3.0
          </h3>
          <time
            class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
            >Released on January 5, 2022</time
          >
          <p class="text-base font-normal text-gray-500 dark:text-gray-400">
            Get started with dozens of web components and interactive elements.
          </p>
        </div>
      </li>
    </ol>
  </section>
  <Banner class="mb-20" />
  <Foot />
</template>
