<template>
  <section id="projects" class="min-h-screen p-4 md:p-8 lg:p-16">
    <!-- Header -->
    <div class="flex flex-col md:flex-row justify-between items-center mb-8">
      <div class="flex items-center space-x-1 text-2xl">
        <p class="text-custom-orange">#</p>
        <h1 class="text-white font-bold">projects</h1>
      </div>
      <a href="https://github.com/CentKenneth" class="text-gray-400 hover:text-custom-orange mt-2 md:mt-0">View all
        &rarr;</a>
    </div>
    <!-- Projects Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Project Card -->
      <!-- Project Card -->
      <div v-for="project in projects" :key="project.id"
        class="bg-[#1E112F] rounded-lg shadow-lg overflow-hidden flex flex-col justify-between">
        <img :src="project.image" alt="Project Image" class="w-full h-50 object-cover">

        <div class="p-4 flex-1">
          <p class="text-gray-400 text-sm mb-2">{{ project.tags.join(' ') }}</p>
          <h3 class="text-white text-xl font-semibold">{{ project.name }}</h3>
          <p class="text-gray-400 mt-1">{{ project.description }}</p>
        </div>

        <!-- Action Buttons -->
        <div class="flex justify-between items-center px-4 py-3 bg-[#171E36]">
          <a :href="project.liveLink" target="_blank" class="text-gray-300 hover:text-custom-orange flex items-center">
            Live <span class="ml-2">⤷</span>
          </a>
          <a v-if="project.GithubLink" :href="project.GithubLink" target="_blank"
            class="text-gray-300 hover:text-custom-orange flex items-center">
            GitHub <span class="ml-2">⤷</span>
          </a>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
import goldenstatelumber from '../assets/images/GoldenStateLumber.png'
import smartlifeImage from '../assets/images/smartlife.png';
import menncImage from '../assets/images/mennc.png';
import pharmacy from '../assets/images/pharmacy.png';
import starbuilders from '../assets/images/starbuilderspc.png';

export default {
  name: 'ProjectSection',
  data() {
    return {
      projects: [
        {
          id: 1,
          image: starbuilders,
          tags: [
            'Laravel 12',
            'Vue.js',
            'Inertia.js',
            'TypeScript',
            'Tailwind CSS',
            'PrimeVue',
            'shadcn/ui',
            'Lucide Icons',
            'MySQL'
          ],
          name: 'StarBuilders Philippines',
          description: 'A fully responsive web-based system for managing purchase requests, inventory, and payroll — accessible on both desktop and mobile devices.',
          liveLink: 'https://starbuilders.ph',
        },

        {
          id: 2,
          image: goldenstatelumber,
          tags: ['CodeIgniter', 'CSS', 'BOOTSTRAP', 'Javascript', 'REST'],
          name: 'Golden State Lumber',
          description: 'Warehouse System',
          liveLink: 'https://gslwms.jastech.co',
        },
        {
          id: 3,
          image: smartlifeImage,
          tags: ['HTML', 'CSS', 'BOOTSTRAP', 'PHP'],
          name: 'SmartLifeMicroPre-Need',
          description: 'Business management system',
          liveLink: 'https://smartlifemicropre-need.com/home.php',
          GithubLink: 'https://github.com/CentKenneth/smartlife',
        },
        {
          id: 4,
          image: menncImage,
          tags: ['VUEJS', 'VUETIFY', 'NUXT', 'LARAVEL'],
          name: 'MENNC Healthcare',
          description: 'Web Mobile app for optical clinic',
          liveLink: 'http://meenc-system.surge.sh/',
          GithubLink: 'https://github.com/CentKenneth',
        },
        {
          id: 5,
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