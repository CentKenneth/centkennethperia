<template>
  <nav class="p-4 shadow-lg relative z-30">
    <div class="flex justify-between items-center">
      <!-- Logo Section -->
      <div class="flex items-center ml-4 sm:ml-8 lg:ml-14">
        <img src="@/assets/images/logo.png" alt="Cent" class="h-10" />
        <h1 class="text-white font-bold ml-2 text-lg sm:text-xl">Cent</h1>
      </div>

      <!-- Hamburger Menu Icon for Small Screens -->
      <div class="lg:hidden">
        <button @click="toggleMenu" aria-label="Toggle menu">
          <svg class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <!-- Navigation Links for Large Screens -->
      <div class="hidden lg:flex items-center space-x-6 mr-4 sm:mr-8 lg:mr-14">
        <div class="flex items-center space-x-1">
          <p class="text-custom-orange">#</p>
          <router-link to="/" class="text-white cursor-pointer hover:text-custom-orange transition">home</router-link>
        </div>
        <div class="flex items-center space-x-1">
          <p class="text-custom-orange">#</p>
          <a @click.prevent="scrollToSection('projects')" class="text-white cursor-pointer hover:text-custom-orange transition">projects</a>
        </div>
        <div class="flex items-center space-x-1">
          <p class="text-custom-orange">#</p>
          <a @click.prevent="scrollToSection('skills')" class="text-white cursor-pointer hover:text-custom-orange transition">skills</a>
        </div>
        <!-- <div class="flex items-center space-x-1">
          <p class="text-custom-orange">#</p>
          <router-link to="/about" class="text-white cursor-pointer hover:text-custom-orange transition">about</router-link>
        </div> -->
      </div>
    </div>

    <!-- Backdrop Overlay -->
    <div
      v-if="isMenuOpen"
      @click="toggleMenu"
      class="fixed inset-0 bg-black bg-opacity-50 z-10"
    ></div>

    <!-- Slide-In Mobile Menu -->
    <transition name="slide-fade">
      <div
  v-if="isMenuOpen"
  class="fixed top-0 right-0 w-64 h-full z-20 p-6 shadow-lg rounded-l-xl"
  style="background: linear-gradient(120deg, #1E112F, #2A0A4F, #C778DD, #1E112F);"
>

        <div class="flex flex-col space-y-4 mt-10">
          <div class="flex items-center space-x-1">
            <p class="text-custom-orange">#</p>
            <router-link to="/" @click="toggleMenu" class="text-white hover:text-custom-orange transition">home</router-link>
          </div>
          <div class="flex items-center space-x-1">
            <p class="text-custom-orange">#</p>
            <a @click.prevent="scrollToSection('projects')" class="text-white hover:text-custom-orange transition">projects</a>
          </div>
          <div class="flex items-center space-x-1">
            <p class="text-custom-orange">#</p>
            <a @click.prevent="scrollToSection('skills')" class="text-white hover:text-custom-orange transition">skills</a>
          </div>
          <div class="flex items-center space-x-1">
            <p class="text-custom-orange">#</p>
            <router-link to="/about" @click="toggleMenu" class="text-white hover:text-custom-orange transition">about</router-link>
          </div>
        </div>
      </div>
    </transition>
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
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      document.body.style.overflow = this.isMenuOpen ? 'hidden' : 'auto';
    },
    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        this.toggleMenu();
      }
    },
  },
  beforeUnmount() {
    // Clean up scroll lock if component unmounts while menu is open
    document.body.style.overflow = 'auto';
  }
};
</script>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>
