<template>
  <section id="projects" class="min-h-screen p-32">
    <!-- Header -->
    <div class="flex justify-between items-center mb-8">
      <div class="flex items-center space-x-1 text-2xl ">
        <p class="text-custom-orange">#</p>
        <h1 class="text-white  font-bold ">projects</h1>
      </div>
      
      <a href="https://github.com/CentKenneth" class="text-gray-400 hover:text-custom-orange">View all &rarr;</a>
    </div>
    <!-- Projects Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Project Card -->
      <div v-for="project in projects" :key="project.id" class="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <img :src="project.image" alt="Project Image" class="w-full h-40 object-cover">
        <div class="p-4">
          <p class="text-gray-400 text-sm mb-2">{{ project.tags.join(' ') }}</p>
          <h3 class="text-white text-xl font-semibold">{{ project.name }}</h3>
          <p class="text-gray-400 mt-1">{{ project.description }}</p>
        </div>
        <div class="flex justify-between items-center px-4 py-3 bg-gray-700">
          <a :href="project.liveLink" class="text-gray-300 hover:text-custom-orange flex items-center">
            Live <span class="ml-2">⤷</span>
          </a>
          <a :href="project.GithubLink" v-if="project.GithubLink" class="text-gray-300 hover:text-custome-orange flex items-center">
            Github <span class="ml-2">⤷</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import smartlifeImage from '../assets/images/smartlife.png'
import menncImage from '../assets/images/mennc.png'
import pharmacy from '../assets/images/pharmacy.png'
export default {
  name: 'ProjectSection',
  data() {
    return {
      projects: [
        {
          id: 1,
          image: smartlifeImage,
          tags: ['HTML', 'CSS', 'BOOTSTRAP', 'PHP'],
          name: 'SmartLifeMicroPre-Need',
          description: 'Business management system',
          liveLink: 'https://smartlifemicropre-need.com/home.php',
          GithubLink: 'https://github.com/CentKenneth/smartlife',
        },
        {
          id: 2,
          image: menncImage,
          tags: ['VUEJS', 'VUETIFY', 'NUXT', 'LARAVEL'],
          name: 'MENNC Healthcare',
          description: 'Web Mobile app for optical clinic',
          liveLink: 'http://meenc-system.surge.sh/',
          GithubLink:'https://github.com/CentKenneth',
        },
        {
          id: 3,
          image: pharmacy,
          tags: ['FIGMA', 'PHOTOSHOP'],
          name: 'Donna Mae Pharmacy',
          description: 'UI/UX DESIGN',
          liveLink: 'https://www.figma.com/proto/ED3gtjfLHIIV4xwksHOInh/DM-PMIS?node-id=5-2&starting-point-node-id=5%3A2&t=8E3RosfCtcuoYBqe-1',
          GithubLink: null,
        },
      ],
    };
  },
};
</script>
