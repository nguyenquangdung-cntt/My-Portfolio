# 🎨 Personal Portfolio Landing Page

A modern, responsive portfolio landing page built with Next.js, TypeScript, Tailwind CSS, and SCSS.

## ✨ Features

- 📱 Fully responsive design (mobile, tablet, desktop)
- 🎨 Beautiful UI with Tailwind CSS and SCSS
- ⚡ Built with Next.js for optimal performance
- 🔤 TypeScript for type safety
- 🎭 Smooth animations and transitions
- 📧 Contact form with form handling
- 💫 Modern gradient designs
- 🌙 Dark theme optimized

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Header/
│   │   ├── Header.tsx
│   │   └── Header.module.scss
│   ├── Hero/
│   │   ├── Hero.tsx
│   │   └── Hero.module.scss
│   ├── About/
│   │   ├── About.tsx
│   │   └── About.module.scss
│   ├── Skills/
│   │   ├── Skills.tsx
│   │   └── Skills.module.scss
│   ├── Projects/
│   │   ├── Projects.tsx
│   │   └── Projects.module.scss
│   ├── Contact/
│   │   ├── Contact.tsx
│   │   └── Contact.module.scss
│   └── Footer/
│       ├── Footer.tsx
│       └── Footer.module.scss
├── pages/
│   ├── _app.tsx
│   ├── _document.tsx
│   └── index.tsx
└── styles/
    ├── globals.css
    └── variables.scss
```

## 🚀 Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

1. **Clone or setup the project**

   ```bash
   cd d:\My-Portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Customization

### Update Your Information

Edit the content in each component:

- **Header**: [src/components/Header/Header.tsx](src/components/Header/Header.tsx) - Navigation links
- **Hero**: [src/components/Hero/Hero.tsx](src/components/Hero/Hero.tsx) - Your name, title, and CTA buttons
- **About**: [src/components/About/About.tsx](src/components/About/About.tsx) - Your bio and stats
- **Skills**: [src/components/Skills/Skills.tsx](src/components/Skills/Skills.tsx) - Your skills by category
- **Projects**: [src/components/Projects/Projects.tsx](src/components/Projects/Projects.tsx) - Your portfolio projects
- **Contact**: [src/components/Contact/Contact.tsx](src/components/Contact/Contact.tsx) - Contact information

### Customize Colors

Edit [tailwind.config.js](tailwind.config.js) or [src/styles/variables.scss](src/styles/variables.scss):

```scss
$primary: #1a1a2e;
$secondary: #16213e;
$accent: #0f3460;
$highlight: #e94560;
$light: #f4f4f4;
```

### Add Project Images

Place your project images in the `public/projects/` folder and update the image paths in the Projects component.

## 🛠️ Available Scripts

```bash
# Development
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## 📚 Technologies Used

- **Frontend Framework**: [Next.js 14](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + [SCSS](https://sass-lang.com/)
- **UI Components**: React 18
- **Build Tool**: Webpack (built-in with Next.js)

## 🎯 Sections

1. **Header** - Sticky navigation with mobile menu
2. **Hero** - Eye-catching landing section with CTA buttons
3. **About** - Personal introduction with stats
4. **Skills** - Technical skills organized by category
5. **Projects** - Showcase of featured projects
6. **Contact** - Contact form and contact methods
7. **Footer** - Quick links and social media

## 🌐 Deployment

### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Deploy to Other Platforms

- Netlify
- GitHub Pages
- AWS Amplify
- Railway
- Render

## 📱 Responsive Design

The portfolio is fully responsive and tested on:

- Mobile (320px and up)
- Tablet (768px and up)
- Desktop (1024px and up)

## 🎨 Color Scheme

- **Primary**: #1a1a2e (Dark blue)
- **Secondary**: #16213e (Darker blue)
- **Accent**: #0f3460 (Medium blue)
- **Highlight**: #e94560 (Red/Pink)
- **Light**: #f4f4f4 (Off-white)

## 📄 License

This project is open source and available under the MIT License.

## 💡 Tips

- Update the favicons in `public/` folder
- Add Google Analytics for tracking
- Optimize images for better performance
- Consider adding a sitemap
- Add robots.txt for SEO
- Update meta tags in [src/pages/\_document.tsx](src/pages/_document.tsx)

## 🙋 Support

For issues or questions, please create an issue in the repository.

---

**Happy coding! 🚀**
