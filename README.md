# Cent Kenneth Peria - Portfolio

A modern, full-stack portfolio application built with Vue 3, TypeScript, shadcn-vue, and TailwindCSS.

## 🚀 Tech Stack

- **Frontend Framework**: Vue 3 with Composition API
- **Language**: TypeScript
- **UI Components**: shadcn-vue
- **Styling**: TailwindCSS
- **Build Tool**: Vite
- **Router**: Vue Router

## ✨ Features

- 🎨 Modern UI with shadcn-vue components
- 📱 Fully responsive design (mobile, tablet, desktop)
- ⚡ Fast and optimized with Vite
- 🔷 Type-safe with TypeScript
- 🎭 Smooth animations and transitions
- 🌈 Custom color scheme with gradient backgrounds
- 📄 Four main pages: Home, Skills, Projects, About

## 📦 Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Setup Instructions

1. **Clone the repository**
```bash
git clone https://github.com/CentKenneth/centkennethperia.git
cd centkennethperia
```

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
```

The application will be available at `http://localhost:5173/centkennethperia/`

4. **Build for production**
```bash
npm run build
```

5. **Preview production build**
```bash
npm run preview
```

## 📁 Project Structure

```
centkennethperia/
├── src/
│   ├── assets/           # Images, fonts, and other static assets
│   ├── components/       # Reusable Vue components
│   │   └── ui/          # shadcn-vue UI components
│   ├── layouts/         # Layout components (MainLayout)
│   ├── lib/             # Utility functions
│   ├── router/          # Vue Router configuration
│   ├── views/           # Page components
│   │   ├── Home.vue
│   │   ├── Skills.vue
│   │   ├── Projects.vue
│   │   └── About.vue
│   ├── App.vue          # Root component
│   ├── main.ts          # Application entry point
│   └── env.d.ts         # TypeScript declarations
├── public/              # Public static assets
├── index.html           # HTML entry point
├── tsconfig.json        # TypeScript configuration
├── vite.config.ts       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── package.json         # Project dependencies
```

## 🎯 Pages

### Home (`/`)
- Hero section with introduction
- Profile image and name
- Call-to-action buttons (View Projects, Contact Me)
- Quick navigation cards to other sections

### Skills (`/skills`)
- Technical skills organized by categories:
  - Back-end (PHP, Java, Laravel)
  - Databases (MySQL, SQLyog)
  - Version Control (Git, GitHub, GitLab)
  - Front-end (HTML, CSS, JavaScript, TypeScript, Vue.js, Tailwind CSS)
  - Tools & Others (VS Code, Postman, Figma)
- Progress bars showing proficiency levels
- shadcn-vue Card and Badge components

### Projects (`/projects`)
- Portfolio projects displayed in a grid
- Each project card includes:
  - Project image
  - Name and description
  - Technology tags
  - Links to live demo and GitHub repository
- Sample projects:
  - StarBuilders Philippines
  - Golden State Lumber
  - SmartLifeMicroPre-Need
  - MENNC Healthcare
  - Donna Mae Pharmacy

### About (`/about`)
- Personal biography
- Technologies worked with
- Expertise and experience areas
- Contact information with links

## 🎨 Customization

### Colors
The project uses a custom color scheme defined in `src/assets/base.css`:
- Primary Orange: `#E6B221`
- Primary Purple: `#C778DD`
- Dark Blue: `#171E36`

### Adding New Components
shadcn-vue components are located in `src/components/ui/`. To add new components:
1. Create a new component file in `src/components/ui/`
2. Import and use in your pages

## 🚢 Deployment

### GitHub Pages
The project is configured for GitHub Pages deployment:

```bash
npm run deploy
```

This will build the project and deploy to the `gh-pages` branch.

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production (includes TypeScript type checking)
- `npm run preview` - Preview production build
- `npm run deploy` - Deploy to GitHub Pages

## 🛠️ Technologies Used

### Core
- Vue 3.4.29
- TypeScript 5.x
- Vite 5.4.6

### UI & Styling
- TailwindCSS 3.4.12
- shadcn-vue (via radix-vue)
- class-variance-authority
- clsx & tailwind-merge
- lucide-vue-next (icons)

### Development
- vue-tsc (TypeScript type checking)
- @vitejs/plugin-vue
- PostCSS & Autoprefixer

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Cent Kenneth Tag-at Peria**
- Website: [https://centkenneth.github.io/centkennethperia/](https://centkenneth.github.io/centkennethperia/)
- GitHub: [@CentKenneth](https://github.com/CentKenneth)
- Email: mycentkennethperia@gmail.com

## 🙏 Acknowledgments

- shadcn-vue for the beautiful UI components
- TailwindCSS for the utility-first CSS framework
- Vue.js team for the amazing framework

