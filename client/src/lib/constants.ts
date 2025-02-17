import { SiLinkedin, SiGithub, SiX } from "react-icons/si";

export const SOCIAL_LINKS = [
  {
    icon: SiLinkedin,
    href: "https://linkedin.com",
    label: "LinkedIn Profile",
  },
  {
    icon: SiGithub, 
    href: "https://github.com",
    label: "GitHub Profile",
  },
  {
    icon: SiX,
    href: "https://twitter.com",
    label: "X Profile",
  }
];

export const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
  { href: "/blog", label: "Blog" }
];

export const SERVICES = [
  {
    title: "Data Management",
    description: "End-to-end data pipeline development and optimization",
    image: "https://images.unsplash.com/photo-1556745753-b2904692b3cd",
  },
  {
    title: "Data Analysis",
    description: "Advanced statistical analysis and insights generation",
    image: "https://images.unsplash.com/photo-1649105703438-0992d6844823",
  },
  {
    title: "Data Visualization",
    description: "Interactive dashboards and visual storytelling",
    image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4",
  },
  {
    title: "Predictive Analytics",
    description: "Machine learning models for business forecasting",
    image: "https://images.unsplash.com/photo-1605152276897-4f618f831968",
  },
];

export const PORTFOLIO_ITEMS = [
  {
    title: "Sales Forecasting Dashboard",
    category: "Visualization",
    description: "Interactive Power BI dashboard for sales prediction",
    image: "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8",
  },
  {
    title: "Customer Segmentation Analysis",
    category: "Data Analysis",
    description: "K-means clustering for customer insights",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
  },
  {
    title: "Churn Prediction Model",
    category: "Predictive Analytics",
    description: "ML model to predict customer churn",
    image: "https://images.unsplash.com/photo-1739514984003-330f7c1d2007",
  },
  {
    title: "Supply Chain Optimization",
    category: "Data Analysis",
    description: "Network optimization using Python",
    image: "https://images.unsplash.com/photo-1510759395231-72b17d622279",
  },
  {
    title: "Marketing Campaign Analysis",
    category: "Visualization",
    description: "Campaign performance visualization",
    image: "https://images.unsplash.com/photo-1660592868727-858d28c3ba52",
  },
  {
    title: "Revenue Prediction Engine",
    category: "Predictive Analytics",
    description: "Time series forecasting model",
    image: "https://images.unsplash.com/photo-1685478237595-f452cb125f27",
  },
];

export const BLOG_POSTS = [
  {
    title: "The Future of Data Analytics",
    excerpt: "Exploring emerging trends in data science and analytics...",
    date: "2024-03-15",
  },
  {
    title: "Mastering Data Visualization",
    excerpt: "Best practices for creating impactful data visualizations...",
    date: "2024-03-10",
  },
  {
    title: "Machine Learning Fundamentals",
    excerpt: "A beginner's guide to predictive analytics...",
    date: "2024-03-05",
  }
];