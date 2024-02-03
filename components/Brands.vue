<template>
  <div style="background: linear-gradient(to bottom, #eefadf, #fcfefa)">
    <h1
      class="text-center mx-auto font-bold lg:w-1/2 text-3xl lg:text-4xl tracking-wider pt-20"
    >
      TRUSTED BY THE TOP COMPANIES
    </h1>
    <p class="text-center">We Will write something here.</p>

    <!--  Carousel 1    -->
    <h1 class="mt-12 font-semibold mb-4 text-xl"></h1>
    <div class="slider">
      <div class="slide-track">
        <div class=""><img src="../src//nav.svg" /></div>
        <div class=""><img src="../src//nav.svg" /></div>
        <div class=""><img src="../src//nav.svg" /></div>
        <div class=""><img src="../src//nav.svg" /></div>
        <div class=""><img src="../src//nav.svg" /></div>
        <div class=""><img src="../src//nav.svg" /></div>
        <div class=""><img src="../src//nav.svg" /></div>
        <div class=""><img src="../src//nav.svg" /></div>
        <div class=""><img src="../src//nav.svg" /></div>
        <div class=""><img src="../src//nav.svg" /></div>
        <div class=""><img src="../src//nav.svg" /></div>

        <!-- same 9 slides doubled (duplicate) -->
        <div class=""><img src="../src//nav.svg" /></div>
        <div class=""><img src="../src//nav.svg" /></div>
        <div class=""><img src="../src//nav.svg" /></div>
        <div class=""><img src="../src//nav.svg" /></div>
        <div class=""><img src="../src//nav.svg" /></div>
        <div class=""><img src="../src//nav.svg" /></div>
        <div class=""><img src="../src//nav.svg" /></div>
        <div class=""><img src="../src//nav.svg" /></div>
        <div class=""><img src="../src//nav.svg" /></div>
        <div class=""><img src="../src//nav.svg" /></div>
      </div>
    </div>
  </div>
</template>
<style>
body {
  min-height: 100vh;
}
.slider {
  height: 60px;
  position: relative;
  width: 100%;

  display: grid;
  place-items: center;
  overflow: hidden;
}
.slider::before,
.slider::after {
  position: absolute;
  background-image: linear-gradient(
    to right,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  content: "";
  height: 100%;
  width: 25%;
  z-index: 2;
  pointer-events: none;
}
.slider::before {
  left: 0;
  top: 0;
}
.slider::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}

/*  IMPORTANT CODE BELOW */

.slide-track {
  width: calc(150px * 20);
  display: flex;
  justify-content: space-between;
}

.slide-track2 {
  width: calc(150px * 15);
  display: flex;
}

.slide {
  width: 150px;
  height: 60px;

  display: grid;
  place-items: center;
  transition: 0.5s;
  cursor: pointer;
}
.slide:hover {
  transform: scale(0.8);
}

@media screen and (max-width: 768px) {
  .slide-track {
    width: calc(80px * 20);
  }

  .slide-track2 {
    width: calc(80px * 15);
  }

  .slide {
    width: 80px;
  }

  @keyframes scroll {
    0% {
      transform: translateX(0px);
    }
    100% {
      transform: translateX(calc(-80px * 10));
    }
  }

  @keyframes scroll2 {
    0% {
      transform: translateX(0px);
    }
    100% {
      transform: translateX(calc(-80px * 5));
    }
  }
}
</style>
