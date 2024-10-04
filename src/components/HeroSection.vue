<template>
  <section class="text-center mt-16">
    <div class="flex flex-col lg:flex-row justify-between items-center mx-4 sm:mx-8 md:mx-16 lg:mx-32">
      <!-- First Div: Text on the Left -->
      <div class="flex flex-col items-start space-y-6">
        <h1 class="font-bold text-2xl sm:text-3xl">
          <span class="text-white">Cent is a </span>
          <span class="text-custom-orange">web developer</span> <span class="text-white">and</span>
          <br><span class="text-custom-orange">UI/UX Designer</span>
        </h1>
        <p class="text-gray-400 max-w-full sm:max-w-lg mx-auto text-center sm:text-left">
          I am a highly motivated individual with a passion for learning new skills and a commitment to excellence. I strive for continuous improvement and growth in all areas, particularly in Information Technology. My goal is to leverage my skills and dedication to contribute effectively to innovative projects while enhancing my expertise in the ever-evolving tech landscape.
        </p>
        <button class="bg-custom-purple hover:bg-orange-400 text-white py-2 px-4 rounded border-2 border-custom-orange 
          lg:ml-0 md:mx-auto sm:mx-auto transition duration-300 focus:outline-none focus:ring-2 focus:ring-orange-400 text-lg font-semibold shadow-md hover:shadow-xl transform hover:scale-105" 
          aria-label="Contact me">
          Contact me !!
        </button>
      </div>
      <!-- Second Div: Image and Name on the Right -->
      <div class="flex flex-col items-center mt-8 lg:mt-0">
        <img src="@/assets/images/cent.png" alt="Cent Kenneth Tag-at Peria" class="rounded-full w-48 sm:w-60 lg:w-72 h-48 sm:h-60 lg:h-72 object-cover">
        <p class="mt-4 text-gray-400 bg-custom-purple px-2 border-2 border-custom-orange">
          Cent Kenneth Tag-at Peria
        </p>
      </div>
    </div>
  </section>
</template>