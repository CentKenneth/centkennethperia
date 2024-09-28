<template>
  <section id="skills" class="min-h-screen p-32">
    <!-- Header -->
    <div class="flex justify-between items-center mb-8">
      <h1 class="text-white text-2xl font-bold">#projects</h1>
      <a href="#" class="text-gray-400 hover:text-custom-orange">View all &rarr;</a>
    </div>
    <!-- Projects Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Project Card -->
      <div v-for="skills in projects" :key="skills.id" class="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <img :src="skills.image" alt="Project Image" class="w-full h-40 object-cover">
        <div class="p-4">
          <p class="text-gray-400 text-sm mb-2">{{ skills.tags.join(' ') }}</p>
          <h3 class="text-white text-xl font-semibold">{{ skills.name }}</h3>
          <p class="text-gray-400 mt-1">{{ skills.description }}</p>
        </div>
        <div class="flex justify-between items-center px-4 py-3 bg-gray-700">
          <a :href="skills.liveLink" class="text-gray-300 hover:text-white flex items-center">
            Live <span class="ml-2">⤷</span>
          </a>
          <a :href="skills.cachedLink" v-if="skills.cachedLink" class="text-gray-300 hover:text-white flex items-center">
            Cached <span class="ml-2">⤷</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SkillSection',
  data() {
    return {
      skills: [
        {
          id: 1,
          image: 'https://via.placeholder.com/400x150',
          tags: ['HTML', 'SCSS', 'Python', 'Flask'],
          name: 'ChertNodes',
          description: 'Minecraft servers hosting',
          liveLink: '#',
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
