
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-portfolio-dark text-white py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Portfolio<span className="text-portfolio-purple">.</span>
            </h2>
            <p className="text-gray-300 mb-4">
              Showcasing my creative work and professional journey through beautiful designs and thoughtful development.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/akashtechie20" target="_blank" rel="noopener noreferrer" 
                className="text-gray-300 hover:text-portfolio-purple transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/akash-bhardwaj-6b01b9215" target="_blank" rel="noopener noreferrer"
                className="text-gray-300 hover:text-portfolio-purple transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:akashbhardwaj794@gmail.com"
                className="text-gray-300 hover:text-portfolio-purple transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-portfolio-purple transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-portfolio-purple transition-colors">About</Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-300 hover:text-portfolio-purple transition-colors">Projects</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-portfolio-purple transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="flex items-center mb-2 text-gray-300">
              <Mail size={16} className="mr-2" />
              <span>akashbhardwaj794@gmail.com</span>
            </div>
            <div className="flex items-center mb-2 text-gray-300">
              <Mail size={16} className="mr-2" />
              <span>2203051050048@paruluniversity.ac.in</span>
            </div>
            <div className="flex items-center mb-2 text-gray-300">
              <Phone size={16} className="mr-2" />
              <span>+91 8488928367, +91 8980397490</span>
            </div>
            <div className="flex items-start mb-2 text-gray-300">
              <MapPin size={16} className="mr-2 mt-1 flex-shrink-0" />
              <span>Parul University, Vadodara, Gujarat, India</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© {currentYear} Akash Bhardwaj. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
