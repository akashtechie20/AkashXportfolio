
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const allProjects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A modern shopping experience built with React and Node.js",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2574&auto=format&fit=crop",
      tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      github: "https://github.com",
      liveLink: "https://example.com",
      category: "Web Application"
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A responsive portfolio website with dynamic content management",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2555&auto=format&fit=crop",
      tags: ["React", "Tailwind CSS", "Supabase", "TypeScript"],
      github: "https://github.com",
      liveLink: "https://example.com",
      category: "Website"
    },
    {
      id: 3,
      title: "Task Management App",
      description: "A productivity tool for teams with real-time updates",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2572&auto=format&fit=crop",
      tags: ["React", "Firebase", "Redux", "Material UI"],
      github: "https://github.com",
      liveLink: "https://example.com",
      category: "Web Application"
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "Real-time weather updates with location tracking",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=2670&auto=format&fit=crop",
      tags: ["JavaScript", "API Integration", "CSS3", "HTML5"],
      github: "https://github.com",
      liveLink: "https://example.com",
      category: "Web Application"
    },
    {
      id: 5,
      title: "Blog Platform",
      description: "Content management system with advanced editor",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2672&auto=format&fit=crop",
      tags: ["Next.js", "Sanity.io", "Tailwind CSS", "TypeScript"],
      github: "https://github.com",
      liveLink: "https://example.com",
      category: "Website"
    },
    {
      id: 6,
      title: "Recipe Finder",
      description: "Search and save your favorite recipes",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2574&auto=format&fit=crop",
      tags: ["React", "API Integration", "CSS3", "Local Storage"],
      github: "https://github.com",
      liveLink: "https://example.com",
      category: "Web Application"
    },
  ];

  const categories = ["All", "Web Application", "Website", "Mobile App"];
  
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const filteredProjects = selectedCategory === "All" 
    ? allProjects 
    : allProjects.filter(project => project.category === selectedCategory);

  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold text-portfolio-dark mb-6">My Projects</h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                A showcase of my latest work, ranging from web applications to design systems.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={selectedCategory === category 
                    ? "bg-portfolio-purple hover:bg-portfolio-purple/90" 
                    : ""}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <Card key={project.id} className="overflow-hidden border-none shadow hover:shadow-md transition-shadow">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                      ))}
                    </div>
                    <div className="flex justify-between">
                      <Button asChild variant="outline" size="sm">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" /> GitHub
                        </a>
                      </Button>
                      <Button asChild size="sm" className="bg-portfolio-purple hover:bg-portfolio-purple/90">
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
