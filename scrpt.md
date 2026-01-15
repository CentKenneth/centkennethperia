  // "scripts": {
  //   "dev": "vite",
  //   "build": "vue-tsc && vite build",
  //   "preview": "vite preview",
  //   "predeploy": "npm run build",
  //   "deploy": "gh-pages -d dist"
  // },

*
 new deploy 
# Switch to main first
git checkout main

# Delete local gh-pages branch
git branch -D gh-pages

# Delete remote gh-pages branch
git push origin --delete gh-pages

# Now create it fresh
git checkout --orphan gh-pages
git rm -rf .
echo "GitHub Pages" > README.md
git add README.md
git commit -m "Initial gh-pages commit"
git push origin gh-pages

# Switch back to main
git checkout main

# Deploy
npm run deploy


*
To update your deployed GitHub Pages site, simply run:
# Make your code changes in your project files

# Stage and commit your changes to main branch
git add .
git commit -m "Your update message"
git push origin main

# Deploy the updates to GitHub Pages
npm run deploy