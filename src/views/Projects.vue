<template>
  <div>
    <Navbar />
    <HeroSection />
    <QuoteSection />
    <ProjectSection />
    <SkillSection />
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'; // Corrected path
import HeroSection from '../components/HeroSection.vue'; // Corrected path
import QuoteSection from '../components/QuoteSection.vue'; // Corrected path
import ProjectSection from '../components/ProjectSection.vue'; // Corrected path
import SkillSection from '../components/SkillSection.vue'; // Corrected path
import Footer from '../components/Footer.vue'; // Corrected path

export default {
  components: {
    Navbar,
    HeroSection,
    QuoteSection,
    ProjectSection,
    SkillSection,
    Footer,
  },
};
</script>
