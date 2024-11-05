<template>
  <footer class="bg-custom-purple text-white py-6" style="box-shadow: 0px -5px 10px rgba(0,0,0,0.5)">
    <div class="container mx-auto flex flex-col md:flex-row justify-between items-center">
      <div class="text-center md:text-left">
        <div class="flex items-center justify-center">
          <img src="@/assets/images/logo.png" alt="Cent Logo" class="h-5 w-auto mr-4">
          <h2 class="text-lg font-bold">Cent</h2>
          <span>&nbsp;<a href="mailto:mycentkennethperia@gmail.com" class="text-white hover:underline">mycentkennethperia@gmail.com</a></span>
        </div>
        <p class="text-sm mt-1 ml-10">Web Developer and UI/UX Designer</p>
      </div>
      <div class="mt-4 md:mt-0 text-center md:text-left">
        <h3 class="font-semibold text-gray-200">Media</h3>
        <ul class="flex space-x-4 mt-2">
          <li>
            <a href="https://github.com/CentKenneth" class="text-gray-400 hover:text-white focus:text-white" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/cent-kennneth-peria-776b33242/" class="text-gray-400 hover:text-white focus:text-white" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </li>
        </ul>
      </div>

    </div>
    <div class="text-center mt-10">
      <p class="text-sm mt-1">© Copyright {{ currentYear }}. Made by Cent</p>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>
