# Annotation Portfolio

A professional portfolio website showcasing data annotation services with a modern, responsive design built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern UI/UX**: Clean, professional design with smooth animations and transitions
- **Responsive Design**: Fully responsive layout that works seamlessly on all devices
- **Dark Mode Support**: Built-in theme switching for optimal viewing experience
- **Interactive Components**: Rich UI components using Radix UI for accessibility
- **Contact Integration**: WhatsApp floating button for direct client communication
- **SEO Optimized**: Meta tags and semantic HTML for better search engine visibility
- **Analytics Ready**: Google Analytics integration for visitor tracking

## 🛠️ Tech Stack

### Core Technologies
- **React 19.2.0** - Modern React with latest features
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing pipeline
- **Radix UI** - Accessible UI components
- **Lucide React** - Beautiful icon library
- **class-variance-authority** - Component variant management

### Development Tools
- **ESLint** - Code quality and consistency
- **TypeScript ESLint** - TypeScript-specific linting
- **Google Analytics** - Visitor tracking and analytics

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Navigation.tsx   # Site navigation
│   ├── Hero.tsx         # Hero section
│   ├── Services.tsx     # Services showcase
│   ├── HowItWorks.tsx   # Process explanation
│   ├── Samples.tsx      # Work samples
│   ├── About.tsx        # About section
│   ├── Testimonials.tsx # Client testimonials
│   ├── Pricing.tsx      # Pricing plans
│   ├── Contact.tsx      # Contact form
│   ├── Footer.tsx       # Site footer
│   └── WhatsAppFloat.tsx # WhatsApp integration
├── assets/              # Static assets
├── styles/              # Global styles
├── App.tsx             # Main application component
└── main.tsx            # Application entry point
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd annotation-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

## 📱 Sections Overview

### Hero Section
- Eye-catching headline and call-to-action
- Professional branding with custom logo
- Clear value proposition

### Services
- Comprehensive list of annotation services
- Detailed descriptions for each service type
- Visual icons for better understanding

### How It Works
- 4-step process explanation
- Timeline visualization
- Clear workflow demonstration

### Work Samples
- Portfolio of previous work
- Before/after examples
- Quality demonstration

### About
- Professional background
- Expertise and qualifications
- Trust-building content

### Testimonials
- Client feedback and reviews
- Social proof elements
- Rating system

### Pricing
- Transparent pricing structure
- Multiple service tiers
- Clear value propositions

### Contact
- Easy-to-use contact form
- Multiple contact methods
- Quick response promise

## 🎨 Design System

### Color Palette
- Primary: Cyan/Blue tones for professional look
- Secondary: Gray scale for text and backgrounds
- Accent: Orange/Red for CTAs and highlights

### Typography
- Clean, modern sans-serif fonts
- Hierarchical text sizing
- Excellent readability

### Components
- Consistent spacing and sizing
- Smooth animations and transitions
- Hover states and micro-interactions

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
VITE_GA_ID=G-PMBCX8C9KE
VITE_WHATSAPP_NUMBER=your-number
```

### Tailwind CSS Configuration
The project uses Tailwind CSS with custom configuration in `tailwind.config.js` for consistent theming and design tokens.

## 📊 Analytics

The website includes Google Analytics tracking to monitor:
- Page views and user engagement
- Traffic sources and user behavior
- Conversion tracking for contact forms
- Performance metrics

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory, ready for deployment to any static hosting service.

### Recommended Hosting Platforms
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

For inquiries about annotation services or technical questions about this portfolio:

- **Email**: [your-email@example.com]
- **WhatsApp**: [your-number]
- **Website**: [your-website.com]

---

Built with ❤️ using React, TypeScript, and modern web technologies.
