<template>
  <section id="projects" class="min-h-screen p-32">
    <!-- Header -->
    <div class="flex justify-between items-center mb-8">
      <div class="flex items-center space-x-1 text-2xl ">
        <p class="text-custom-orange">#</p>
        <h1 class="text-white  font-bold ">projects</h1>
      </div>
      
      <a href="#" class="text-gray-400 hover:text-custom-orange">View all &rarr;</a>
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
          <a :href="project.liveLink" class="text-gray-300 hover:text-white flex items-center">
            Live <span class="ml-2">⤷</span>
          </a>
          <a :href="project.cachedLink" v-if="project.cachedLink" class="text-gray-300 hover:text-white flex items-center">
            Cached <span class="ml-2">⤷</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProjectSection',
  data() {
    return {
      projects: [
        {
          id: 1,
          image: 'https://via.placeholder.com/400x150',
          tags: ['HTML', 'CSS', 'BOOTSTRAP', 'PHP'],
          name: 'SmartLifeMicroPre-Need',
          description: 'Minecraft servers hosting',
          liveLink: 'https://smartlifemicropre-need.com/home.php',
          cachedLink: '#',
        },
        {
          id: 2,
          image: 'https://via.placeholder.com/400x150',
          tags: ['React', 'Express', 'Node.js'],
          name: 'ProtectX',
          description: 'Discord anti-crash bot',
          liveLink: '#',
          cachedLink: null,
        },
        {
          id: 3,
          image: 'https://via.placeholder.com/400x150',
          tags: ['CSS', 'Express', 'Node.js'],
          name: 'Kahoot Answers Viewer',
          description: 'Get answers to your kahoot quiz',
          liveLink: '#',
          cachedLink: null,
        },
      ],
    };
  },
};
</script>
