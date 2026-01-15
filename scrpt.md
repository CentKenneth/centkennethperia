  // "scripts": {
  //   "dev": "vite",
  //   "build": "vue-tsc && vite build",
  //   "preview": "vite preview",
  //   "predeploy": "npm run build",
  //   "deploy": "gh-pages -d dist"
  // },

  git checkout --orphan gh-pages

# Remove all files from staging
git rm -rf .

# Create a placeholder file
echo "GitHub Pages" > README.md

# Add and commit
git add README.md
git commit -m "Initial gh-pages commit"

# Push to create the remote branch
git push origin gh-pages

# Switch back to main branch
git checkout main
npm run deploy