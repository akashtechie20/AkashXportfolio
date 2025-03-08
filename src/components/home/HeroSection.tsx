
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-white to-portfolio-gray">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-portfolio-dark mb-6 animate-fade-in">
            Creative Developer & Designer
          </h1>
          <p className="text-xl text-gray-600 mb-8 animate-slide-up">
            I build beautiful, interactive experiences with modern web technologies.
            Bringing ideas to life through clean code and thoughtful design.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <Button asChild size="lg" className="bg-portfolio-purple hover:bg-portfolio-purple/90">
              <Link to="/projects">
                View My Work <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/about">About Me</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
