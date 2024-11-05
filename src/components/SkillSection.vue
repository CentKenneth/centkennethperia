<template>
  <section id="skills" class="min-h-screen p-4 md:p-8 lg:p-16">
    <!-- Header -->
    <div class="flex flex-col md:flex-row justify-between items-center mb-8">
      <div class="flex items-center space-x-1 text-2xl">
        <p class="text-custom-orange">#</p>
        <h1 class="text-white font-bold">skills</h1>
      </div>
      <a href="https://github.com/CentKenneth" class="text-gray-400 hover:text-custom-orange mt-2 md:mt-0">View all &rarr;</a>
    </div>
    
    <!-- Skills Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Skill Category Card -->
      <div v-for="category in skillCategories" :key="category.title" class="bg-custom-purple rounded-lg shadow-lg p-6 border-2 border-custom-orange ">
        <h2 class="text-white text-xl font-semibold mb-4">{{ category.title }}</h2>
        <ul class="space-y-4">
          <li v-for="skill in category.skills" :key="skill.name">
            <div class="flex justify-between items-center mb-1">
              <div class="flex items-center space-x-3">
                <i :class="skill.icon" class="text-white text-2xl"></i>
                <span class="text-white">{{ skill.name }}</span>
              </div>
              <span class="text-custom-orange">{{ skill.percentage }}%</span>
            </div>
            <!-- Progress Bar -->
            <div class="w-full bg-gray-600 rounded-full h-2.5">
              <div
                class="bg-custom-orange h-2.5 rounded-full"
                :style="{ width: skill.percentage + '%' }"
              ></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'SkillsSection',
  data() {
    return {
      skillCategories: [
        {
          title: 'Back-end',
          skills: [
            { name: 'PHP', icon: 'devicon-php-plain', percentage: 95 },
            { name: 'Java', icon: 'devicon-java-plain', percentage: 80 },
            { name: 'Laravel', icon: 'devicon-laravel-plain', percentage: 70 },
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
            { name: 'JS', icon: 'devicon-javascript-plain', percentage: 90 },
            { name: 'SCSS', icon: 'devicon-sass-original', percentage: 70 },
            { name: 'Vue', icon: 'devicon-vuejs-plain', percentage: 89 },
            { name: 'Tailwind', icon: 'devicon-tailwindcss-plain', percentage: 85 },
          ],
        },
        {
          title: 'Project Management / Tools',
          skills: [
            { name: 'Jira', icon: 'devicon-jira-plain', percentage: 85 },
            { name: 'VSCode', icon: 'devicon-vscode-plain', percentage: 95 },
            { name: 'Figma', icon: 'devicon-figma-plain', percentage: 85 },
            { name: 'Git', icon: 'devicon-git-plain', percentage: 90 },
           
          ],
        },
         {
          title: 'Others',
          skills: [
            { name: 'Canva', icon: 'devicon-canva-plain', percentage: 95 },
            { name: 'Lucidchart', icon: 'fas fa-diagram-project', percentage: 100 },
            { name: 'Photoshop', icon: 'devicon-photoshop-plain', percentage: 75 },
            { name: 'Network Configuration', icon: 'fas fa-network-wired', percentage: 89 },
            { name: 'Computer troubleshooting', icon: 'fas fa-tools', percentage: 95 },
          ],
        },
      ],
    };
  },
};
</script>
