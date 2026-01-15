<template>
  <nav 
    :class="['navbar-header', 'fixed', 'top-0', 'left-0', 'right-0', 'z-30', 'transition-all', 'duration-300', scrolled ? 'navbar-scrolled' : 'navbar-top']"
  >
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16 md:h-20">
        <!-- Logo Section -->
        <div class="flex items-center space-x-3 group">
          <img 
            src="@/assets/images/logo.png" 
            alt="Cent" 
            class="h-10 md:h-12 transition-transform duration-300 group-hover:scale-110" 
          />
          <h1 class="text-white font-bold text-xl md:text-2xl tracking-wide">Cent</h1>
        </div>

        <!-- Hamburger Menu Icon for Small Screens -->
        <div class="lg:hidden mr-2">
          <button 
            @click="toggleMenu" 
            aria-label="Toggle menu"
            aria-expanded="isMenuOpen"
            class="hamburger-btn p-2 rounded-md hover:bg-white/10 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-custom-orange"
          >
            <svg class="w-7 h-7 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        <!-- Navigation Links for Large Screens -->
        <div class="hidden lg:flex items-center space-x-8">
          <div class="nav-item flex items-center space-x-1 group">
            <span class="text-custom-orange transition-all duration-200 group-hover:scale-110">#</span>
            <router-link 
              to="/" 
              class="nav-link text-white text-base font-medium cursor-pointer hover:text-custom-orange transition-colors duration-200 focus:outline-none focus:text-custom-orange"
              active-class="active-link"
            >
              home
            </router-link>
          </div>
          <div class="nav-item flex items-center space-x-1 group">
            <span class="text-custom-orange transition-all duration-200 group-hover:scale-110">#</span>
            <a 
              @click.prevent="scrollToSection('projects')" 
              class="nav-link text-white text-base font-medium cursor-pointer hover:text-custom-orange transition-colors duration-200 focus:outline-none focus:text-custom-orange"
              tabindex="0"
              @keypress.enter="scrollToSection('projects')"
            >
              projects
            </a>
          </div>
          <div class="nav-item flex items-center space-x-1 group">
            <span class="text-custom-orange transition-all duration-200 group-hover:scale-110">#</span>
            <a 
              @click.prevent="scrollToSection('skills')" 
              class="nav-link text-white text-base font-medium cursor-pointer hover:text-custom-orange transition-colors duration-200 focus:outline-none focus:text-custom-orange"
              tabindex="0"
              @keypress.enter="scrollToSection('skills')"
            >
              skills
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Backdrop Overlay -->
    <transition name="backdrop-fade">
      <div
        v-if="isMenuOpen"
        @click="toggleMenu"
        class="fixed inset-0 bg-black bg-opacity-60 z-40 backdrop-blur-sm"
        aria-hidden="true"
      ></div>
    </transition>

    <!-- Slide-In Mobile Menu -->
    <transition name="slide-fade">
      <div
        v-if="isMenuOpen"
        class="mobile-menu fixed top-0 right-0 w-72 sm:w-80 h-full z-50 shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        <!-- Close Button -->
        <div class="flex justify-between items-center p-6 border-b border-white/10">
          <h2 class="text-white text-lg font-bold">Menu</h2>
          <button 
            @click="toggleMenu" 
            aria-label="Close menu"
            class="close-btn p-2 rounded-md hover:bg-white/10 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-custom-orange"
          >
            <svg class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Menu Items -->
        <nav class="flex flex-col space-y-6 p-6 mt-4">
          <div class="mobile-nav-item flex items-center space-x-2 group">
            <span class="text-custom-orange text-lg font-bold">#</span>
            <router-link 
              to="/" 
              @click="toggleMenu" 
              class="mobile-nav-link text-white text-lg font-medium hover:text-custom-orange transition-colors duration-200 focus:outline-none focus:text-custom-orange"
            >
              home
            </router-link>
          </div>
          <div class="mobile-nav-item flex items-center space-x-2 group">
            <span class="text-custom-orange text-lg font-bold">#</span>
            <a 
              @click.prevent="scrollToSection('projects')" 
              class="mobile-nav-link text-white text-lg font-medium cursor-pointer hover:text-custom-orange transition-colors duration-200 focus:outline-none focus:text-custom-orange"
              tabindex="0"
              @keypress.enter="scrollToSection('projects')"
            >
              projects
            </a>
          </div>
          <div class="mobile-nav-item flex items-center space-x-2 group">
            <span class="text-custom-orange text-lg font-bold">#</span>
            <a 
              @click.prevent="scrollToSection('skills')" 
              class="mobile-nav-link text-white text-lg font-medium cursor-pointer hover:text-custom-orange transition-colors duration-200 focus:outline-none focus:text-custom-orange"
              tabindex="0"
              @keypress.enter="scrollToSection('skills')"
            >
              skills
            </a>
          </div>
          <div class="mobile-nav-item flex items-center space-x-2 group">
            <span class="text-custom-orange text-lg font-bold">#</span>
            <router-link 
              to="/about" 
              @click="toggleMenu" 
              class="mobile-nav-link text-white text-lg font-medium hover:text-custom-orange transition-colors duration-200 focus:outline-none focus:text-custom-orange"
            >
              about
            </router-link>
          </div>
        </nav>
      </div>
    </transition>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
      scrolled: false,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    // Clean up scroll lock if component unmounts while menu is open
    document.body.style.overflow = 'auto';
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrolled = window.scrollY > 20;
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      document.body.style.overflow = this.isMenuOpen ? 'hidden' : 'auto';
    },
    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        if (this.isMenuOpen) {
          this.toggleMenu();
        }
      }
    },
  },
};
</script>

<style scoped>
/* Header Styles */
.navbar-header {
  background: rgba(30, 17, 47, 0.7);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.navbar-top {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.navbar-scrolled {
  background: rgba(30, 17, 47, 0.95);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

/* Navigation Link Styles */
.nav-link {
  position: relative;
  padding-bottom: 2px;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--custom-orange, #E6B221);
  transition: width 0.3s ease;
}

.nav-link:hover::after,
.nav-link:focus::after {
  width: 100%;
}

.active-link {
  color: var(--custom-orange, #E6B221);
}

/* Mobile Menu Styles */
.mobile-menu {
  background: linear-gradient(135deg, #1E112F 0%, #2A0A4F 50%, #1E112F 100%);
  border-left: 2px solid rgba(199, 120, 221, 0.3);
}

.mobile-nav-item {
  padding: 8px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  transition: transform 0.2s ease;
}

.mobile-nav-item:hover {
  transform: translateX(8px);
}

.mobile-nav-link {
  padding: 4px 0;
  min-height: 44px;
  display: flex;
  align-items: center;
}

/* Buttons */
.hamburger-btn,
.close-btn {
  min-width: 44px;
  min-height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Animations */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

.backdrop-fade-enter-active,
.backdrop-fade-leave-active {
  transition: opacity 0.3s ease;
}

.backdrop-fade-enter-from,
.backdrop-fade-leave-to {
  opacity: 0;
}

/* Responsive adjustments */
@media (max-width: 1023px) {
  .mobile-menu {
    max-width: 90vw;
  }
}
</style>
