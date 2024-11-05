<template>
  <section class="text-center mt-16">
    <div class="flex flex-col lg:flex-row justify-between items-center mx-6 sm:mx-10 md:mx-20 lg:mx-36 space-y-8 lg:space-y-0 lg:space-x-12">
      <!-- First Div: Text on the Left -->
      <div class="flex flex-col items-start space-y-6 lg:max-w-lg">
        <h1 class="font-bold text-2xl sm:text-3xl lg:text-4xl text-center lg:text-left">
          <span class="text-white">Cent is a </span>
          <span class="text-custom-orange">Web Developer</span> <span class="text-white">and</span>
          <br><span class="text-custom-orange">UI/UX Designer</span>
        </h1>
        <p class="text-gray-400 max-w-full text-center lg:text-left text-base sm:text-lg leading-relaxed">
          I am a highly motivated individual with a passion for learning new skills and a commitment to excellence. I strive for continuous improvement and growth in all areas, particularly in Information Technology. My goal is to leverage my skills and dedication to contribute effectively to innovative projects while enhancing my expertise in the ever-evolving tech landscape.
        </p>
      </div>

      <!-- Second Div: Image and Name on the Right -->
      <div class="flex flex-col items-center lg:items-start space-y-4">
        <img src="@/assets/images/cent.png" alt="Cent Kenneth Tag-at Peria" class="rounded-full w-48 sm:w-60 lg:w-72 h-48 sm:h-60 lg:h-72 object-cover shadow-lg transition-transform transform hover:scale-105">
        
        <p class="mt-4 text-gray-400 bg-custom-purple px-4 py-1 border border-custom-orange rounded-lg text-lg font-medium">
          Cent Kenneth Tag-at Peria
        </p>

        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mycentkennethperia@gmail.com" target="_blank" class="mt-4 bg-custom-purple hover:bg-hover-custom-purple text-white py-2 px-6 rounded-lg border border-custom-orange 
          transition duration-300 focus:outline-none focus:ring-2 focus:ring-orange-400 text-lg font-semibold shadow-md hover:shadow-xl transform hover:scale-105 flex items-center space-x-2" 
          aria-label="Contact me via Gmail">
          <!-- Email Icon (using Heroicons) -->
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-custom-orange" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2.94 4.94a2 2 0 00-2 2v6.12a2 2 0 002 2h14.12a2 2 0 002-2V6.94a2 2 0 00-2-2H2.94zM3 7l6.41 4.65a2 2 0 002.18 0L18 7v5.06a1 1 0 01-1 1H3a1 1 0 01-1-1V7z"/>
          </svg>
          <span>Contact Me</span>
        </a>

      </div>
    </div>
  </section>
</template>
