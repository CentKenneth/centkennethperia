<script setup lang="ts">
import { ref } from 'vue'
import MainLayout from '@/layouts/MainLayout.vue'
import Card from '@/components/ui/Card.vue'
import CardHeader from '@/components/ui/CardHeader.vue'
import CardTitle from '@/components/ui/CardTitle.vue'
import CardDescription from '@/components/ui/CardDescription.vue'
import CardContent from '@/components/ui/CardContent.vue'
import Badge from '@/components/ui/Badge.vue'
import { Button } from '@/components/ui/button'

// Import project images
import goldenstatelumber from '../assets/images/GoldenStateLumber.png'
import smartlifeImage from '../assets/images/smartlife.png'
import menncImage from '../assets/images/mennc.png'
import pharmacy from '../assets/images/pharmacy.png'
import starbuilders from '../assets/images/starbuilderspc.png'
import rmci from '../assets/images/rmci.png'

interface Project {
  id: number
  image: string
  tags: string[]
  name: string
  description: string
  liveLink: string
  GithubLink?: string | null
}

const projects = ref<Project[]>([
  {
    id: 1,
    image: rmci,
    tags: [
      'Laravel 12',
      'Vue.js',
      'Inertia.js',
      'TypeScript',
      'Tailwind CSS',
      'PrimeVue',
      'shadcn/ui',
      'Lucide Icons',
      'MySQL'
    ],
    name: 'Rhean Motor Center INC.',
    description: 'A fully responsive web-application system for Inventory Management, Point of Sale, Loan Management, and AI Powered Decision Support System',
    liveLink: 'https://rheanmotorcenter.com',
  },
  {
    id: 2,
    image: starbuilders,
    tags: [
      'Laravel 12',
      'Vue.js',
      'Inertia.js',
      'TypeScript',
      'Tailwind CSS',
      'PrimeVue',
      'shadcn/ui',
      'Lucide Icons',
      'MySQL'
    ],
    name: 'StarBuilders Construction',
    description: 'A fully responsive web-based system for managing purchase requests, inventory, and payroll — accessible on both desktop and mobile devices.',
    liveLink: 'https://starbuilders.ph',
  },
  {
    id: 3,
    image: starbuilders,
    tags: [
      'Laravel 12',
      'Vue.js',
      'Inertia.js',
      'TypeScript',
      'Tailwind CSS',
      'PrimeVue',
      'shadcn/ui',
      'Lucide Icons',
      'MySQL'
    ],
    name: 'StarBuilders Construction',
    description: 'A fully responsive web-based system for managing purchase requests, inventory, and payroll — accessible on both desktop and mobile devices.',
    liveLink: 'https://starbuilders.ph',
  },
  {
    id: 4,
    image: goldenstatelumber,
    tags: ['CodeIgniter', 'CSS', 'BOOTSTRAP', 'Javascript', 'REST'],
    name: 'Golden State Lumber',
    description: 'Warehouse System',
    liveLink: 'https://gslwms.jastech.co',
  },
  {
    id: 5,
    image: smartlifeImage,
    tags: ['HTML', 'CSS', 'BOOTSTRAP', 'PHP'],
    name: 'SmartLifeMicroPre-Need',
    description: 'Business management system',
    liveLink: 'https://smartlifemicropre-need.com/home.php',
    GithubLink: 'https://github.com/CentKenneth/smartlife',
  },
  {
    id: 6,
    image: menncImage,
    tags: ['VUEJS', 'VUETIFY', 'NUXT', 'LARAVEL'],
    name: 'MENNC Healthcare',
    description: 'Web Mobile app for optical clinic',
    liveLink: 'http://meenc-system.surge.sh/',
    GithubLink: 'https://github.com/CentKenneth',
  },
  {
    id: 7,
    image: pharmacy,
    tags: ['FIGMA', 'PHOTOSHOP'],
    name: 'Donna Mae Pharmacy',
    description: 'UI/UX DESIGN',
    liveLink: 'https://www.figma.com/proto/ED3gtjfLHIIV4xwksHOInh/DM-PMIS?node-id=5-2&starting-point-node-id=5%3A2&t=8E3RosfCtcuoYBqe-1',
    GithubLink: null,
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
          <h1 class="text-white font-bold">projects</h1>
        </div>
        <a href="https://github.com/CentKenneth" class="text-gray-400 hover:text-custom-orange mt-2 md:mt-0">
          View all &rarr;
        </a>
      </div>
      
      <!-- Projects Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Project Card -->
        <Card 
          v-for="project in projects" 
          :key="project.id"
          class="bg-[#1E112F] border border-custom-orange overflow-hidden flex flex-col justify-between hover:shadow-lg hover:shadow-custom-purple/50 transition-all duration-300"
        >
          <img :src="project.image" alt="Project Image" class="w-full h-50 object-cover">

          <CardHeader>
            <CardTitle class="text-white text-lg">{{ project.name }}</CardTitle>
            <CardDescription class="text-gray-400">{{ project.description }}</CardDescription>
          </CardHeader>

          <CardContent class="flex-1">
            <div class="flex flex-wrap gap-2 mb-4">
              <Badge 
                v-for="tag in project.tags.slice(0, 3)" 
                :key="tag"
                variant="secondary" 
                class="bg-custom-purple text-white text-xs"
              >
                {{ tag }}
              </Badge>
              <Badge 
                v-if="project.tags.length > 3"
                variant="outline" 
                class="text-custom-orange border-custom-orange text-xs"
              >
                +{{ project.tags.length - 3 }} more
              </Badge>
            </div>
          </CardContent>

          <!-- Action Buttons -->
          <div class="flex justify-between items-center px-4 py-3 bg-[#171E36] border-t border-custom-orange/30">
            <a :href="project.liveLink" target="_blank">
              <Button 
                variant="ghost" 
                size="sm" 
                class="text-gray-300 hover:text-custom-orange"
              >
                Live <span class="ml-2">⤷</span>
              </Button>
            </a>
            <a v-if="project.GithubLink" :href="project.GithubLink" target="_blank">
              <Button 
                variant="ghost" 
                size="sm" 
                class="text-gray-300 hover:text-custom-orange"
              >
                GitHub <span class="ml-2">⤷</span>
              </Button>
            </a>
          </div>
        </Card>
      </div>
    </section>
  </MainLayout>
</template>

