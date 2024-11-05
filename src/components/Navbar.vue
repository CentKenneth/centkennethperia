<template>
  <nav class="p-4 shadow-lg">
    <div class="flex justify-between items-center">
      <!-- Logo Section -->
      <div class="flex items-center ml-4 sm:ml-8 lg:ml-14">
        <img src="@/assets/images/logo.png" alt="Cent" class="h-10" />
        <h1 class="text-white font-bold ml-2 text-lg sm:text-xl">Cent</h1>
      </div>

      <!-- Hamburger Menu Icon for Small Screens -->
      <div class="lg:hidden">
        <button @click="isMenuOpen = !isMenuOpen">
          <svg class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <!-- Navigation Links for Large Screens -->
      <div class="hidden lg:flex items-center space-x-6 mr-4 sm:mr-8 lg:mr-14">
        <div class="flex items-center space-x-1">
          <p class="text-custom-orange">#</p>
          <router-link to="/" class="text-white cursor-pointer">home</router-link>
        </div>
        <div class="flex items-center space-x-1">
          <p class="text-custom-orange">#</p>
          <a @click.prevent="scrollToSection('projects')" class="text-white cursor-pointer">projects</a>
        </div>
        <div class="flex items-center space-x-1">
          <p class="text-custom-orange">#</p>
          <a @click.prevent="scrollToSection('skills')" class="text-white cursor-pointer">skills</a>
        </div>
        <!-- <div class="flex items-center space-x-1">
          <p class="text-custom-orange">#</p>
          <router-link to="/about" class="text-white cursor-pointer">about</router-link>
        </div> -->
      </div>
    </div>

    <!-- Collapsible Navigation Links for Small Screens -->
    <div :class="{'hidden': !isMenuOpen, 'block': isMenuOpen}" class="lg:hidden mt-4">
      <div class="flex flex-col space-y-2">
        <div class="flex items-center space-x-1">
          <p class="text-custom-orange">#</p>
          <router-link to="/home" class="text-white cursor-pointer">home</router-link>
        </div>
        <div class="flex items-center space-x-1">
          <p class="text-custom-orange">#</p>
          <a @click.prevent="scrollToSection('skills')" class="text-white cursor-pointer">skills</a>
        </div>
        <div class="flex items-center space-x-1">
          <p class="text-custom-orange">#</p>
          <a @click.prevent="scrollToSection('projects')" class="text-white cursor-pointer">projects</a>
        </div>
        <div class="flex items-center space-x-1">
          <p class="text-custom-orange">#</p>
          <router-link to="/about" class="text-white cursor-pointer">about</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        this.isMenuOpen = false; // Close the menu after clicking on a link
      }
    },
  },
};
</script>

<style>
.custom-shadow {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5); /* Adjust the shadow values as needed */
}
</style>
