<template>
  <nav class="p-4">
    <div class="flex justify-between items-center">
      <!-- Logo Section -->
      <div class="flex items-center ml-4 sm:ml-8 lg:ml-28">
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
      <div class="hidden lg:flex items-center space-x-6 mr-4 sm:mr-8 lg:mr-32">
        <div class="flex items-center space-x-1">
          <p class="text-custom-orange">#</p>
          <a @click.prevent="scrollToSection('home')" class="text-white cursor-pointer">home</a>
        </div>
        <div class="flex items-center space-x-1">
          <p class="text-custom-orange">#</p>
          <a @click.prevent="scrollToSection('projects')" class="text-white cursor-pointer">projects</a>
        </div>
        <div class="flex items-center space-x-1">
          <p class="text-custom-orange">#</p>
          <a @click.prevent="scrollToSection('skills')" class="text-white cursor-pointer">skills</a>
        </div>
        <div class="flex items-center space-x-1">
          <p class="text-custom-orange">#</p>
          <a @click.prevent="scrollToSection('works')" class="text-white cursor-pointer">works</a>
        </div>
        <div class="flex items-center space-x-1">
          <p class="text-custom-orange">#</p>
          <a @click.prevent="scrollToSection('education')" class="text-white cursor-pointer">education</a>
        </div>
        <div class="flex items-center space-x-1">
          <p class="text-custom-orange">#</p>
          <a @click.prevent="scrollToSection('about')" class="text-white cursor-pointer">about</a>
        </div>
      </div>
    </div>

    <!-- Collapsible Navigation Links for Small Screens -->
    <div :class="{'hidden': !isMenuOpen, 'block': isMenuOpen}" class="lg:hidden mt-4">
      <div class="flex flex-col space-y-2">
        <div class="flex items-center space-x-1">
          <p class="text-custom-orange">#</p>
          <a @click.prevent="scrollToSection('home')" class="text-white cursor-pointer">home</a>
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
          <a @click.prevent="scrollToSection('works')" class="text-white cursor-pointer">works</a>
        </div>
        <div class="flex items-center space-x-1">
          <p class="text-custom-orange">#</p>
          <a @click.prevent="scrollToSection('education')" class="text-white cursor-pointer">education</a>
        </div>
        <div class="flex items-center space-x-1">
          <p class="text-custom-orange">#</p>
          <a @click.prevent="scrollToSection('about')" class="text-white cursor-pointer">about</a>
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
