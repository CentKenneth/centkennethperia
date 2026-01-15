<script setup lang="ts">
import { ref } from 'vue'
import MainLayout from '@/layouts/MainLayout.vue'
import Card from '@/components/ui/Card.vue'
import CardHeader from '@/components/ui/CardHeader.vue'
import CardTitle from '@/components/ui/CardTitle.vue'
import CardContent from '@/components/ui/CardContent.vue'
import Badge from '@/components/ui/Badge.vue'

interface Skill {
  name: string
  icon: string
  percentage: number
}

interface SkillCategory {
  title: string
  skills: Skill[]
}

const skillCategories = ref<SkillCategory[]>([
  {
    title: 'Back-end',
    skills: [
      { name: 'PHP', icon: 'devicon-php-plain', percentage: 95 },
      { name: 'Java', icon: 'devicon-java-plain', percentage: 85 },
      { name: 'Laravel', icon: 'devicon-laravel-plain', percentage: 95 },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'SQLyog', icon: 'fas fa-database', percentage: 75 },
      { name: 'MySQL', icon: 'devicon-mysql-plain', percentage: 95 },
    ],
  },
  {
    title: 'Version Control',
    skills: [
      { name: 'Github', icon: 'devicon-github-original', percentage: 98 },
      { name: 'GitLab', icon: 'devicon-gitlab-plain', percentage: 85 },
      { name: 'Git', icon: 'devicon-git-plain', percentage: 95 },
    ],
  },
  {
    title: 'Front-end',
    skills: [
      { name: 'HTML', icon: 'devicon-html5-plain', percentage: 100 },
      { name: 'CSS', icon: 'devicon-css3-plain', percentage: 90 },
      { name: 'JavaScript', icon: 'devicon-javascript-plain', percentage: 90 },
      { name: 'TypeScript', icon: 'devicon-typescript-plain', percentage: 80 },
      { name: 'Bootstrap', icon: 'devicon-bootstrap-plain', percentage: 90 },
      { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain', percentage: 85 },
      { name: 'Vue.js', icon: 'devicon-vuejs-plain', percentage: 90 },
      { name: 'PrimeVue', icon: 'devicon-primeng-plain', percentage: 85 },
    ],
  },
  {
    title: 'Tools & Others',
    skills: [
      { name: 'VS Code', icon: 'devicon-vscode-plain', percentage: 95 },
      { name: 'Postman', icon: 'devicon-postman-plain', percentage: 85 },
      { name: 'Figma', icon: 'devicon-figma-plain', percentage: 80 },
    ],
  },
])
</script>

<template>
  <MainLayout>
    <section class="min-h-screen p-4 md:p-8 lg:p-16">
      <!-- Header -->
      <div class="flex flex-col md:flex-row justify-between items-center mb-8">
        <div class="flex items-center space-x-1 text-2xl">
          <p class="text-custom-orange">#</p>
          <h1 class="text-white font-bold">skills</h1>
        </div>
        <a href="https://github.com/CentKenneth" class="text-gray-400 hover:text-custom-orange mt-2 md:mt-0">
          View all &rarr;
        </a>
      </div>
      
      <!-- Skills Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Skill Category Card -->
        <Card 
          v-for="category in skillCategories" 
          :key="category.title" 
          class="bg-custom-purple border-2 border-custom-orange"
        >
          <CardHeader>
            <CardTitle class="text-white text-xl">{{ category.title }}</CardTitle>
          </CardHeader>
          <CardContent>
            <ul class="space-y-4">
              <li v-for="skill in category.skills" :key="skill.name">
                <div class="flex justify-between items-center mb-1">
                  <div class="flex items-center space-x-3">
                    <i :class="skill.icon" class="text-white text-2xl"></i>
                    <span class="text-white">{{ skill.name }}</span>
                  </div>
                  <Badge variant="secondary" class="bg-custom-orange text-white">
                    {{ skill.percentage }}%
                  </Badge>
                </div>
                <!-- Progress Bar -->
                <div class="w-full bg-gray-600 rounded-full h-2.5">
                  <div
                    class="bg-custom-orange h-2.5 rounded-full transition-all duration-500"
                    :style="{ width: skill.percentage + '%' }"
                  ></div>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  </MainLayout>
</template>

  