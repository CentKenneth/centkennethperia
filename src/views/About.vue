<script setup lang="ts">
import { ref } from 'vue'
import MainLayout from '@/layouts/MainLayout.vue'
import Card from '@/components/ui/Card.vue'
import CardHeader from '@/components/ui/CardHeader.vue'
import CardTitle from '@/components/ui/CardTitle.vue'
import CardDescription from '@/components/ui/CardDescription.vue'
import Badge from '@/components/ui/Badge.vue'

interface Expertise {
  title: string
  description: string
  icon: string
}

const expertiseAreas = ref<Expertise[]>([
  {
    title: 'Responsive Design',
    description: 'Crafting dynamic and responsive UIs.',
    icon: '📱'
  },
  {
    title: 'Vue.js & TailwindCSS',
    description: 'Creating modern and scalable web interfaces.',
    icon: '⚡'
  },
  {
    title: 'Backend with Laravel',
    description: 'Building secure and scalable backend solutions.',
    icon: '🔧'
  },
  {
    title: 'Teaching Experience',
    description: 'Former IT instructor with a passion for mentoring.',
    icon: '👨‍🏫'
  },
  {
    title: 'Project Management',
    description: 'Experienced with agile tools like Jira and GitHub.',
    icon: '📊'
  },
  {
    title: 'UI/UX Design',
    description: 'Proficient in Figma and UX/UI principles.',
    icon: '🎨'
  },
])

const technologies = ref<string[]>([
  'PHP', 'Laravel', 'Vue.js', 'TypeScript', 'JavaScript',
  'Tailwind CSS', 'MySQL', 'Git', 'Figma', 'Inertia.js'
])
</script>

<template>
  <MainLayout>
    <section class="py-6 px-4 md:px-8 lg:px-16">
      <div class="max-w-4xl mx-auto">
        <!-- Header -->
        <div class="flex items-center space-x-1 text-2xl mb-8">
          <p class="text-custom-orange">#</p>
          <h1 class="text-white font-bold">about-me</h1>
        </div>

        <!-- Bio Section -->
        <div class="mb-12">
          <h2 class="text-3xl font-bold text-white mb-6">Who I Am</h2>
          <div class="space-y-4 text-gray-300 text-lg leading-relaxed">
            <p>
              Hello! I'm <span class="font-semibold text-custom-orange">Cent</span>, a Web Developer and Front-End Developer 
              with a strong foundation in responsive web application design and a passion for crafting efficient, scalable codebases. 
              I'm also a former IT teacher at STI College Davao, where I discovered my enthusiasm for sharing knowledge and mentoring others.
            </p>
            <p>
              My experience spans a wide range of technologies including 
              <span class="font-semibold text-custom-purple">PHP, Laravel, Vue.js, Tailwind CSS, JavaScript</span>, 
              and design tools like Figma. I've developed and contributed to systems such as inventory management platforms, 
              warehouse applications, and business management systems — each project sharpening my skills across both frontend and backend development.
            </p>
            <p>
              I'm continuously driven to explore new technologies, push the boundaries of web development, and deliver exceptional digital experiences!
            </p>
          </div>
        </div>

        <!-- Technologies -->
        <div class="mb-12">
          <h3 class="text-2xl font-bold text-white mb-4">Technologies I Work With</h3>
          <div class="flex flex-wrap gap-2">
            <Badge 
              v-for="tech in technologies" 
              :key="tech"
              class="bg-custom-purple text-white border border-custom-orange"
            >
              {{ tech }}
            </Badge>
          </div>
        </div>

        <!-- Expertise Areas -->
        <div class="mb-12">
          <h3 class="text-2xl font-bold text-white mb-6">Expertise & Experience</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card 
              v-for="area in expertiseAreas" 
              :key="area.title"
              class="bg-custom-purple shadow-lg border-2 border-custom-orange hover:scale-105 transition-transform duration-300"
            >
              <CardHeader>
                <div class="text-4xl mb-2">{{ area.icon }}</div>
                <CardTitle class="text-white text-lg">{{ area.title }}</CardTitle>
                <CardDescription class="text-gray-200">{{ area.description }}</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>

        <!-- Contact Section -->
        <div class="text-center">
          <h3 class="text-2xl font-bold text-white mb-4">Let's Connect</h3>
          <p class="text-gray-400 mb-6">
            I'm always interested in hearing about new projects and opportunities.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=mycentkennethperia@gmail.com" 
              target="_blank"
              class="inline-flex items-center justify-center px-6 py-3 bg-custom-purple border border-custom-orange text-white rounded-lg hover:bg-custom-purple/80 transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-custom-orange" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.94 4.94a2 2 0 00-2 2v6.12a2 2 0 002 2h14.12a2 2 0 002-2V6.94a2 2 0 00-2-2H2.94zM3 7l6.41 4.65a2 2 0 002.18 0L18 7v5.06a1 1 0 01-1 1H3a1 1 0 01-1-1V7z"/>
              </svg>
              Email Me
            </a>
            <a 
              href="https://github.com/CentKenneth" 
              target="_blank"
              class="inline-flex items-center justify-center px-6 py-3 bg-custom-purple border border-custom-orange text-white rounded-lg hover:bg-custom-purple/80 transition"
            >
              <svg class="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  </MainLayout>
</template>

  