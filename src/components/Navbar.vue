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
        class="mobile-menu fixed top-0 right-0 w-72 sm:w-80 h-full z-50 shadow-2xl overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        <!-- Decorative Background Elements -->
        <div class="menu-bg-decoration" aria-hidden="true"></div>
        
        <!-- Close Button -->
        <div class="flex justify-between items-center p-6 border-b border-white/20 relative z-10 backdrop-blur-sm bg-white/5">
          <div class="flex items-center space-x-2">
            <div class="w-2 h-2 rounded-full bg-custom-orange animate-pulse"></div>
            <h2 class="text-white text-lg font-bold tracking-wide">Navigation</h2>
          </div>
          <button 
            @click="toggleMenu" 
            aria-label="Close menu"
            class="close-btn p-2 rounded-lg hover:bg-white/10 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-custom-orange hover:rotate-90"
          >
            <svg class="w-6 h-6 text-white transition-transform duration-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Menu Items -->
        <nav class="flex flex-col space-y-2 p-6 mt-4 relative z-10">
          <div class="mobile-nav-item group">
            <div class="flex items-center space-x-3 p-4 rounded-xl hover:bg-white/5 transition-all duration-300">
              <span class="text-custom-orange text-xl font-bold group-hover:scale-110 transition-transform duration-200">#</span>
              <router-link 
                to="/" 
                @click="toggleMenu" 
                class="mobile-nav-link text-white text-lg font-medium hover:text-custom-orange transition-colors duration-200 focus:outline-none focus:text-custom-orange flex-1"
              >
                home
              </router-link>
              <svg class="menu-arrow" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </div>
          </div>
          <div class="mobile-nav-item group">
            <div class="flex items-center space-x-3 p-4 rounded-xl hover:bg-white/5 transition-all duration-300">
              <span class="text-custom-orange text-xl font-bold group-hover:scale-110 transition-transform duration-200">#</span>
              <a 
                @click.prevent="scrollToSection('projects')" 
                class="mobile-nav-link text-white text-lg font-medium cursor-pointer hover:text-custom-orange transition-colors duration-200 focus:outline-none focus:text-custom-orange flex-1"
                tabindex="0"
                @keypress.enter="scrollToSection('projects')"
              >
                projects
              </a>
              <svg class="menu-arrow" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </div>
          </div>
          <div class="mobile-nav-item group">
            <div class="flex items-center space-x-3 p-4 rounded-xl hover:bg-white/5 transition-all duration-300">
              <span class="text-custom-orange text-xl font-bold group-hover:scale-110 transition-transform duration-200">#</span>
              <a 
                @click.prevent="scrollToSection('skills')" 
                class="mobile-nav-link text-white text-lg font-medium cursor-pointer hover:text-custom-orange transition-colors duration-200 focus:outline-none focus:text-custom-orange flex-1"
                tabindex="0"
                @keypress.enter="scrollToSection('skills')"
              >
                skills
              </a>
              <svg class="menu-arrow" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </div>
          </div>
          <div class="mobile-nav-item group">
            <div class="flex items-center space-x-3 p-4 rounded-xl hover:bg-white/5 transition-all duration-300">
              <span class="text-custom-orange text-xl font-bold group-hover:scale-110 transition-transform duration-200">#</span>
              <router-link 
                to="/about" 
                @click="toggleMenu" 
                class="mobile-nav-link text-white text-lg font-medium hover:text-custom-orange transition-colors duration-200 focus:outline-none focus:text-custom-orange flex-1"
              >
                about
              </router-link>
              <svg class="menu-arrow" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </div>
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
  background: linear-gradient(135deg, 
    rgba(30, 17, 47, 0.98) 0%, 
    rgba(42, 10, 79, 0.98) 25%,
    rgba(199, 120, 221, 0.15) 50%,
    rgba(42, 10, 79, 0.98) 75%,
    rgba(30, 17, 47, 0.98) 100%
  );
  border-left: 3px solid transparent;
  border-image: linear-gradient(to bottom, 
    rgba(199, 120, 221, 0.8), 
    rgba(230, 178, 33, 0.8),
    rgba(199, 120, 221, 0.8)
  ) 1;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  position: relative;
}

/* Decorative Background */
.menu-bg-decoration {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 30%, rgba(199, 120, 221, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(230, 178, 33, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 40% 80%, rgba(199, 120, 221, 0.1) 0%, transparent 40%);
  animation: pulse-glow 8s ease-in-out infinite;
  pointer-events: none;
}

@keyframes pulse-glow {
  0%, 100% {
    opacity: 0.5;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.05);
  }
}

.mobile-nav-item {
  position: relative;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.mobile-nav-item::before {
  content: '';
  position: absolute;
  left: -24px;
  top: 50%;
  transform: translateY(-50%);
  width: 3px;
  height: 0;
  background: linear-gradient(to bottom, var(--custom-orange, #E6B221), var(--custom-purple, #C778DD));
  transition: height 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 2px;
}

.mobile-nav-item:hover::before {
  height: 60%;
}

/* Menu Arrow Icon */
.menu-arrow {
  width: 1rem;
  height: 1rem;
  color: var(--custom-orange, #E6B221);
  opacity: 0;
  transition: opacity 0.2s ease;
}

.mobile-nav-item:hover .menu-arrow {
  opacity: 1;
}


.mobile-nav-link {
  padding: 4px 0;
  min-height: 44px;
  display: flex;
  align-items: center;
  position: relative;
}

.mobile-nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--custom-orange, #E6B221), transparent);
  transition: width 0.3s ease;
}

.mobile-nav-link:hover::after {
  width: 100%;
}

/* Buttons */
.hamburger-btn,
.close-btn {
  min-width: 44px;
  min-height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.close-btn::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle, rgba(230, 178, 33, 0.2) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.close-btn:hover::before {
  opacity: 1;
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
