import {
  FiCode,
  FiPenTool,
  FiLayout,
  FiSmartphone,
  FiTrendingUp,
  FiSearch,
} from 'react-icons/fi'

/** Main menu: dedicated routes + optional home hash for one-page anchors */
export const navLinks = [
  { label: 'Home', to: '/', hash: 'home' },
  { label: 'Services', to: '/services' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export const stats = [
  { value: '09+', label: 'Years Experience' },
  { value: '542+', label: 'Projects Complete' },
  { value: '432+', label: 'Happy Clients' },
]

export const services = [
  {
    slug: 'ui-design',
    icon: FiPenTool,
    title: 'UI Design',
    body: 'Elegant interfaces for modern digital products.',
    details:
      'High-fidelity user interface systems focused on consistency, readability, and premium visual aesthetics.',
  },
  {
    slug: 'web-design',
    icon: FiLayout,
    title: 'Web Design',
    body: 'Responsive layouts with premium visual hierarchy.',
    details:
      'Modern and accessible web experiences tailored for conversion and strong brand presence across devices.',
  },
  {
    slug: 'app-design',
    icon: FiSmartphone,
    title: 'App Design',
    body: 'Delightful mobile experiences across platforms.',
    details:
      'User-first mobile design with clear flows, intuitive interactions, and polished micro-interactions.',
  },
  {
    slug: 'web-development',
    icon: FiCode,
    title: 'Web Development',
    body: 'Fast frontend development with clean architecture.',
    details:
      'Production-grade frontend implementation using scalable components and performance-driven best practices.',
  },
  {
    slug: 'digital-marketing',
    icon: FiTrendingUp,
    title: 'Digital Marketing',
    body: 'Performance-driven campaigns with measurable growth.',
    details:
      'Data-backed campaign strategy for audience growth, engagement, and conversion optimization.',
  },
  {
    slug: 'seo-marketing',
    icon: FiSearch,
    title: 'SEO Marketing',
    body: 'Search-ready websites optimized for visibility.',
    details:
      'Technical and content-focused SEO solutions to improve rankings, discoverability, and organic traffic.',
  },
]

export const skills = [
  { name: 'Figma', value: 95 },
  { name: 'Sketch', value: 85 },
  { name: 'XD', value: 90 },
  { name: 'Photoshop', value: 82 },
  { name: 'Illustrator', value: 78 },
]

export const portfolioItems = [
  {
    id: 1,
    slug: 'dark-finance-dashboard',
    title: 'Dark Finance Dashboard',
    category: 'UI Design',
    image:
      'https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1200&q=80',
    details:
      'A premium dashboard concept with data-rich cards, dark-mode hierarchy, and sharp conversion cues.',
  },
  {
    id: 2,
    slug: 'brand-campaign-landing',
    title: 'Brand Campaign Landing',
    category: 'Branding',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    details:
      'Landing page built for a campaign launch with narrative storytelling and focused call-to-actions.',
  },
  {
    id: 3,
    slug: 'agency-website-concept',
    title: 'Agency Website Concept',
    category: 'Web Design',
    image:
      'https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1200&q=80',
    details:
      'Website concept for a design agency highlighting case studies, trust indicators, and clear navigation.',
  },
  {
    id: 4,
    slug: 'creative-portfolio-kit',
    title: 'Creative Portfolio Kit',
    category: 'UI Design',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    details:
      'Portfolio template kit with modular sections and visual rhythm for designer self-branding.',
  },
  {
    id: 5,
    slug: 'luxury-product-showcase',
    title: 'Luxury Product Showcase',
    category: 'Branding',
    image:
      'https://images.unsplash.com/photo-1519222970733-f546218fa6d7?auto=format&fit=crop&w=1200&q=80',
    details:
      'Minimal and cinematic product storytelling page crafted for high-end branding and campaign assets.',
  },
  {
    id: 6,
    slug: 'saas-marketing-website',
    title: 'SaaS Marketing Website',
    category: 'Web Design',
    image:
      'https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1200&q=80',
    details:
      'Scalable SaaS marketing site featuring feature sections, testimonials, and structured onboarding flow.',
  },
]
