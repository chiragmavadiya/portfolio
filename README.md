# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. This portfolio showcases services, work history, education, projects, blog posts, and contact information.

## 🚀 Features

- **Responsive Design** - Fully responsive layout that works on all devices
- **Modern UI** - Clean and professional interface built with Tailwind CSS
- **Type-Safe** - Written in TypeScript for better code quality and maintainability
- **Fast Performance** - Built with Vite for lightning-fast development and optimized builds
- **SVG Support** - Integrated SVG support using vite-plugin-svgr

## 📋 Sections

The portfolio includes the following sections:

- **Hero** - Introduction and call-to-action
- **Services** - Service offerings (Web Development, UI Design, Game Development, Photography)
- **Pricing Plans** - Service pricing information
- **Recommendations** - Client testimonials and recommendations
- **Education** - Educational background
- **Work History** - Professional experience timeline
- **Portfolio** - Project showcase and portfolio items
- **Blog** - Latest blog posts
- **Contact** - Contact form and information

## 🛠️ Tech Stack

- **React** - ^19.2.0
- **TypeScript** - ~5.9.3
- **Vite** - ^7.2.4
- **Tailwind CSS** - ^4.1.18
- **vite-plugin-svgr** - ^4.5.0

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── icons/          # SVG icons used throughout the site
│   └── images/         # Image assets (profile, testimonials, blog images)
├── src/
│   ├── components/     # React components
│   │   ├── Blog.tsx
│   │   ├── Contact.tsx
│   │   ├── Education.tsx
│   │   ├── Hero.tsx
│   │   ├── Navigation.tsx
│   │   ├── Portfolio.tsx
│   │   ├── PricingPlans.tsx
│   │   ├── Recommendations.tsx
│   │   ├── Services.tsx
│   │   ├── Sidebar.tsx
│   │   └── WorkHistory.tsx
│   ├── App.tsx         # Main application component
│   ├── main.tsx        # Application entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
├── package.json        # Dependencies and scripts
├── tsconfig.json       # TypeScript configuration
├── vite.config.ts      # Vite configuration
└── README.md           # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the next available port).

### Build for Production

To create a production build:

```bash
npm run build
```

The optimized build will be in the `dist/` directory.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

### Linting

To run ESLint:

```bash
npm run lint
```

## 🎨 Styling

This project uses **Tailwind CSS v4** for styling. Tailwind is configured via the `@tailwindcss/vite` plugin, providing a modern and efficient styling solution.

## 📝 Available Scripts

- `npm run dev` - Start development server with hot module replacement
- `npm run build` - Build for production (TypeScript compilation + Vite build)
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## 🗂️ Components Overview

- **Sidebar** - Fixed sidebar navigation
- **Navigation** - Top navigation bar
- **Hero** - Landing section with introduction
- **Services** - Services offered
- **PricingPlans** - Pricing information
- **Recommendations** - Client testimonials
- **Education** - Educational qualifications
- **WorkHistory** - Professional experience
- **Portfolio** - Project showcase
- **Blog** - Blog posts section
- **Contact** - Contact form and details

## 🔧 Configuration

- **TypeScript**: Configured via `tsconfig.json`, `tsconfig.app.json`, and `tsconfig.node.json`
- **Vite**: Configured in `vite.config.ts` with React, Tailwind CSS, and SVGR plugins
- **ESLint**: Configured in `eslint.config.js` with React and TypeScript rules

## 🌐 Deployment (Free Hosting)

This project can be deployed for free using several platforms. Configuration files are already set up for easy deployment.

### Option 1: Netlify (Recommended)

**Netlify** offers free hosting with continuous deployment from Git.

#### Steps to Deploy:

1. **Push your code to GitHub/GitLab/Bitbucket** (if not already done):
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin master
   ```

2. **Sign up/Login to Netlify**:
   - Go to [netlify.com](https://www.netlify.com)
   - Sign up for free using GitHub, GitLab, or email

3. **Deploy via Git**:
   - Click "Add new site" → "Import an existing project"
   - Connect your Git repository
   - Netlify will auto-detect the build settings:
     - **Build command**: `npm run build`
     - **Publish directory**: `dist`
   - Click "Deploy site"

4. **Automatic Deployments**:
   - Every push to your repository will automatically trigger a new deployment
   - You'll get a free subdomain like `your-portfolio.netlify.app`
   - You can add a custom domain later

**Note**: The `netlify.toml` file is already configured in this project.

---

### Option 2: Vercel

**Vercel** provides excellent performance and automatic deployments.

#### Steps to Deploy:

1. **Push your code to GitHub** (if not already done)

2. **Sign up/Login to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub

3. **Import Project**:
   - Click "Add New Project"
   - Import your repository
   - Vercel will auto-detect Vite settings
   - Click "Deploy"

4. **Done!**:
   - Your site will be live at `your-portfolio.vercel.app`
   - Automatic deployments on every push

**Note**: The `vercel.json` file is already configured in this project.

---

### Option 3: GitHub Pages

Deploy directly from GitHub for free.

#### Steps to Deploy:

1. **Install gh-pages** (if needed):
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add deploy script to package.json**:
   ```json
   "scripts": {
     "deploy": "gh-pages -d dist"
   }
   ```

3. **Update vite.config.ts** to set base path:
   ```typescript
   export default defineConfig({
     base: '/portfolio/', // Replace 'portfolio' with your repo name
     // ... rest of config
   })
   ```

4. **Build and Deploy**:
   ```bash
   npm run build
   npm run deploy
   ```

5. **Enable GitHub Pages**:
   - Go to your repository Settings → Pages
   - Select `gh-pages` branch as source
   - Your site will be at `https://username.github.io/portfolio/`

---

### Option 4: Cloudflare Pages

**Cloudflare Pages** offers free hosting with excellent performance.

#### Steps to Deploy:

1. Push your code to GitHub/GitLab

2. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)

3. Navigate to Pages → Create a project

4. Connect your repository and set:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Framework preset**: Vite

5. Deploy!

---

### Comparison of Free Hosting Options

| Platform | Free Tier | Custom Domain | Auto Deploy | Best For |
|----------|-----------|---------------|-------------|----------|
| **Netlify** | ✅ Unlimited | ✅ Yes | ✅ Yes | Easiest setup |
| **Vercel** | ✅ Unlimited | ✅ Yes | ✅ Yes | Best performance |
| **GitHub Pages** | ✅ Unlimited | ✅ Yes | ⚠️ Manual | Open source projects |
| **Cloudflare Pages** | ✅ Unlimited | ✅ Yes | ✅ Yes | Global CDN |

### Recommended: Netlify or Vercel

Both Netlify and Vercel offer:
- ✅ Free unlimited hosting
- ✅ Automatic HTTPS
- ✅ Custom domain support
- ✅ Continuous deployment from Git
- ✅ Fast global CDN
- ✅ Preview deployments for pull requests

Choose the one that integrates best with your workflow!

## 📄 License

This project is private and not licensed for public use.

## 👨‍💻 Author

**Rayan Adlrdard** - Front-end Developer

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
