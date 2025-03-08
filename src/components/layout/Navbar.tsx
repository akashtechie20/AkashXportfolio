
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigationItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto flex justify-between items-center py-4">
        <Link to="/" className="text-2xl font-bold text-portfolio-dark">
          Portfolio<span className="text-portfolio-purple">.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={cn(
                "nav-link",
                location.pathname === item.path && "active-nav-link"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild className="bg-portfolio-purple hover:bg-portfolio-purple/90">
            <Link to="/contact">Get In Touch</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b animate-fade-in">
          <nav className="container mx-auto py-4 flex flex-col space-y-4">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "py-2 px-4 hover:bg-portfolio-gray rounded-md transition-colors",
                  location.pathname === item.path && "bg-portfolio-gray text-portfolio-purple"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild className="w-full bg-portfolio-purple hover:bg-portfolio-purple/90">
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Get In Touch</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
