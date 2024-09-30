<template>
<div>
  <Navbar/>
  <HeroSection/>
  <QuoteSection/>
  <ProjectSection/>
</div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import QuoteSection from './components/QuoteSection.vue'
import ProjectSection from './components/ProjectSection.vue'
import SkillSection from './components/SkillSection.vue'
export default {
  components: {
    Navbar,
    HeroSection,
    QuoteSection,
    ProjectSection,
    SkillSection
  }
}
</script>
