
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const FeaturedProjects = () => {
  const featuredProjects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A modern shopping experience built with React and Node.js",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2574&auto=format&fit=crop",
      tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A responsive portfolio website with dynamic content management",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2555&auto=format&fit=crop",
      tags: ["React", "Tailwind CSS", "Supabase", "TypeScript"],
    },
    {
      id: 3,
      title: "Task Management App",
      description: "A productivity tool for teams with real-time updates",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2572&auto=format&fit=crop",
      tags: ["React", "Firebase", "Redux", "Material UI"],
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-portfolio-dark mb-4">Featured Projects</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A selection of my recent work, showcasing my skills in design and development.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div 
                key={project.id}
                className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                  <Button asChild variant="ghost" className="text-portfolio-purple hover:text-portfolio-purple/90 p-0">
                    <Link to={`/projects/${project.id}`}>
                      View Project <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild className="bg-portfolio-purple hover:bg-portfolio-purple/90">
              <Link to="/projects">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
