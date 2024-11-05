<template>
    <div>
      <Navbar />
      <AboutSection />

    </div>
  </template>
  
  <script>

    import Navbar from '../components/Navbar.vue'; // Corrected path
    import AboutSection from '@/components/AboutSection.vue';
    
  
  export default {
    components: {
      Navbar,
      AboutSection,

    },
  };
  </script>
  