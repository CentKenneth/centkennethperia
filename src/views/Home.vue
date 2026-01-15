<script setup lang="ts">
import { RouterLink } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'
import { Button } from '@/components/ui/button'
</script>

<template>
  <MainLayout>
    <!-- Hero Section -->
    <section class="text-center mt-16">
      <div class="flex flex-col lg:flex-row justify-between items-center mx-6 sm:mx-10 md:mx-20 lg:mx-36 space-y-8 lg:space-y-0 lg:space-x-12">
        <!-- Text Content -->
        <div class="flex flex-col items-start space-y-6 lg:max-w-lg">
          <h1 class="font-bold text-2xl sm:text-3xl lg:text-4xl text-center lg:text-left w-full">
            <span class="text-white">Cent is a </span>
            <span class="text-custom-orange">Web Developer</span> 
            <span class="text-white"> and </span>
            <span class="text-custom-orange block sm:inline">UI/UX Designer</span>
          </h1>
          <p class="text-gray-400 max-w-full text-center lg:text-left text-base sm:text-lg leading-relaxed">
            I am a highly motivated individual with a passion for learning new skills and a commitment to excellence. 
            I strive for continuous improvement and growth in all areas, particularly in Information Technology. 
            My goal is to leverage my skills and dedication to contribute effectively to innovative projects while 
            enhancing my expertise in the ever-evolving tech landscape.
          </p>
          
          <!-- CTA Buttons -->
          <div class="flex flex-wrap gap-4 justify-center lg:justify-start">
            <RouterLink to="/projects">
              <Button 
                class="bg-custom-purple hover:bg-custom-purple/80 text-white border border-custom-orange"
                size="lg"
              >
                View Projects
              </Button>
            </RouterLink>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mycentkennethperia@gmail.com" target="_blank">
              <Button 
                variant="outline" 
                class="border-custom-orange text-gray-800 hover:bg-custom-purple/20"
                size="lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-custom-orange" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.94 4.94a2 2 0 00-2 2v6.12a2 2 0 002 2h14.12a2 2 0 002-2V6.94a2 2 0 00-2-2H2.94zM3 7l6.41 4.65a2 2 0 002.18 0L18 7v5.06a1 1 0 01-1 1H3a1 1 0 01-1-1V7z"/>
                </svg>
                Contact Me
              </Button>
            </a>
          </div>
        </div>

        <!-- Profile Image -->
        <div class="flex flex-col items-center lg:items-start space-y-4">
          <img 
            src="@/assets/images/cent.png" 
            alt="Cent Kenneth Tag-at Peria" 
            class="rounded-full w-48 sm:w-60 lg:w-72 h-48 sm:h-60 lg:h-72 object-cover shadow-lg transition-transform transform hover:scale-105"
          >
          
          <p class="mt-4 text-gray-400 bg-custom-purple px-4 py-1 border border-custom-orange rounded-lg text-lg font-medium">
            Cent Kenneth Tag-at Peria
          </p>
        </div>
      </div>
    </section>

    <!-- Quick Links Section -->
    <section class="mt-24 mx-6 sm:mx-10 md:mx-20 lg:mx-36">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <RouterLink to="/skills" class="group">
          <div class="bg-[#1E112F] border border-custom-orange rounded-lg p-6 hover:bg-custom-purple/20 transition cursor-pointer">
            <h3 class="text-custom-orange text-xl font-bold mb-2">Skills</h3>
            <p class="text-gray-400">Explore my technical expertise and proficiencies</p>
          </div>
        </RouterLink>
        
        <RouterLink to="/projects" class="group">
          <div class="bg-[#1E112F] border border-custom-orange rounded-lg p-6 hover:bg-custom-purple/20 transition cursor-pointer">
            <h3 class="text-custom-orange text-xl font-bold mb-2">Projects</h3>
            <p class="text-gray-400">View my portfolio of web applications</p>
          </div>
        </RouterLink>
        
        <RouterLink to="/about" class="group">
          <div class="bg-[#1E112F] border border-custom-orange rounded-lg p-6 hover:bg-custom-purple/20 transition cursor-pointer">
            <h3 class="text-custom-orange text-xl font-bold mb-2">About Me</h3>
            <p class="text-gray-400">Learn more about my background and experience</p>
          </div>
        </RouterLink>
      </div>
    </section>
  </MainLayout>
</template>

  