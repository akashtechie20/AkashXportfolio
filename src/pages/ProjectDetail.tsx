
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  // Mock project data that will be replaced with database data after Supabase integration
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A modern shopping experience built with React and Node.js",
      fullDescription: "This e-commerce platform provides a seamless shopping experience with advanced features like product filtering, user authentication, cart management, and secure payment processing. Built using React for the frontend and Node.js with Express for the backend API, it offers a fast and responsive interface across devices.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2574&auto=format&fit=crop",
      tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      github: "https://github.com",
      liveLink: "https://example.com",
      features: [
        "User authentication and profile management",
        "Product catalog with advanced filtering options",
        "Shopping cart and wishlist functionality",
        "Secure checkout with multiple payment options",
        "Order tracking and history"
      ],
      technologies: [
        "React for frontend UI components",
        "Node.js and Express for backend API",
        "MongoDB for database storage",
        "Redux for state management",
        "Stripe for payment processing",
        "Tailwind CSS for styling"
      ]
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A responsive portfolio website with dynamic content management",
      fullDescription: "This portfolio website showcases projects and professional information with a clean, responsive design. It features a content management system for easy updates, contact form functionality, and optimized performance. The site is built with React and Tailwind CSS for the frontend, with Supabase providing backend functionality.",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2555&auto=format&fit=crop",
      tags: ["React", "Tailwind CSS", "Supabase", "TypeScript"],
      github: "https://github.com",
      liveLink: "https://example.com",
      features: [
        "Responsive design for all device sizes",
        "Project showcase with filtering options",
        "Admin dashboard for content management",
        "Contact form with email notifications",
        "SEO optimization"
      ],
      technologies: [
        "React with TypeScript",
        "Tailwind CSS for styling",
        "Supabase for backend database and authentication",
        "Framer Motion for animations",
        "React Router for navigation"
      ]
    },
    {
      id: 3,
      title: "Task Management App",
      description: "A productivity tool for teams with real-time updates",
      fullDescription: "This task management application helps teams organize their work with features like task creation, assignment, status tracking, and deadline management. It offers real-time updates when team members make changes, ensuring everyone stays in sync. The app uses a modern tech stack with React, Firebase, and Material UI.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2572&auto=format&fit=crop",
      tags: ["React", "Firebase", "Redux", "Material UI"],
      github: "https://github.com",
      liveLink: "https://example.com",
      features: [
        "Task creation, assignment, and status tracking",
        "Deadline management with reminders",
        "Team collaboration with comments",
        "Real-time updates across all users",
        "Reporting and analytics dashboard"
      ],
      technologies: [
        "React for frontend UI",
        "Firebase for real-time database and authentication",
        "Redux for state management",
        "Material UI for component library",
        "Firebase Cloud Functions for backend processes"
      ]
    }
  ];
  
  const project = projects.find(p => p.id === Number(id));
  
  useEffect(() => {
    if (!project) {
      navigate("/projects");
    }
  }, [project, navigate]);
  
  if (!project) {
    return null;
  }

  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Button 
              variant="ghost" 
              className="mb-8 hover:bg-portfolio-gray"
              onClick={() => navigate("/projects")}
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
            </Button>
            
            <div className="mb-8">
              <div className="h-[400px] overflow-hidden rounded-lg mb-8">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-portfolio-dark mb-4">{project.title}</h1>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
              
              <p className="text-gray-600 text-lg mb-8">{project.fullDescription}</p>
              
              <div className="flex flex-wrap gap-4 mb-12">
                <Button asChild variant="outline">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-5 w-5" /> View on GitHub
                  </a>
                </Button>
                <Button asChild className="bg-portfolio-purple hover:bg-portfolio-purple/90">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-5 w-5" /> Live Demo
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-2xl font-semibold mb-6 text-portfolio-dark">Features</h2>
                <ul className="space-y-3">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-portfolio-purple mt-2 mr-3"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold mb-6 text-portfolio-dark">Technologies Used</h2>
                <ul className="space-y-3">
                  {project.technologies.map((tech, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-portfolio-purple mt-2 mr-3"></div>
                      <span>{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetail;
