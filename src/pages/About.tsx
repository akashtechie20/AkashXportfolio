
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Briefcase, GraduationCap, Award } from "lucide-react";

const About = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold text-portfolio-dark mb-6">About Me</h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Get to know more about my journey, skills, and passion for creating digital experiences.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <img 
                  src="/lovable-uploads/ede1a60b-42e1-4dbb-b6ac-9a8c90499a7c.png" 
                  alt="Akash Bhardwaj wearing sunglasses and a striped sweater" 
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                />
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-portfolio-dark">
                  Hi, I'm <span className="text-portfolio-purple">Akash Bhardwaj</span>
                </h2>
                <p className="text-gray-600 mb-4">
                  Emerging Computer scientist with hands-on experience in software development lifecycle and a strong foundation in Python, HTML, CSS. 
                </p>
                <p className="text-gray-600 mb-4">
                  Demonstrated problem-solving skills and a commitment to enhancing user experiences through innovative solutions. Eager to apply a collaborative and analytical approach to technology challenges and contribute to team success.
                </p>
                <p className="text-gray-600 mb-6">
                  When I'm not coding, you can find me studying about the Universe, playing cricket, traveling, and exploring new things.
                </p>
                
                <Button className="bg-portfolio-purple hover:bg-portfolio-purple/90">
                  <Download className="mr-2 h-4 w-4" /> Download Resume
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-2xl font-semibold mb-6 text-portfolio-dark flex items-center">
                  <Briefcase className="mr-2 h-5 w-5 text-portfolio-purple" /> Projects
                </h2>
                
                <div className="space-y-8">
                  <Card className="shadow-sm border-gray-200">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-medium">MentalXmate</h3>
                      <p className="text-portfolio-purple">05 Jul, 2024 - 20 Jul, 2024 | Team Size: 4</p>
                      <p className="text-gray-600 mt-2">
                        Mental mate gives you music therapy and AI powered chatbot.
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-gray-100 rounded-full text-xs">AIML</span>
                        <span className="px-2 py-1 bg-gray-100 rounded-full text-xs">Python</span>
                        <span className="px-2 py-1 bg-gray-100 rounded-full text-xs">JScript</span>
                        <span className="px-2 py-1 bg-gray-100 rounded-full text-xs">JSON</span>
                        <span className="px-2 py-1 bg-gray-100 rounded-full text-xs">HTML</span>
                        <span className="px-2 py-1 bg-gray-100 rounded-full text-xs">CSS</span>
                      </div>
                      <a href="https://github.com/akashtechie20/mentalXmate" className="text-portfolio-purple hover:underline text-sm mt-3 inline-block">
                        View Project →
                      </a>
                    </CardContent>
                  </Card>
                  
                  <Card className="shadow-sm border-gray-200">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-medium">Alexa plays</h3>
                      <p className="text-portfolio-purple">20 Feb, 2024 - 25 Feb, 2024</p>
                      <p className="text-gray-600 mt-2">
                        Alexa-like systems offer a range of features that enhance user experience through voice interaction, automation, and AI-driven capabilities.
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-gray-100 rounded-full text-xs">Python</span>
                        <span className="px-2 py-1 bg-gray-100 rounded-full text-xs">NLP</span>
                      </div>
                      <a href="https://github.com/akashtechie20/Alexa" className="text-portfolio-purple hover:underline text-sm mt-3 inline-block">
                        View Project →
                      </a>
                    </CardContent>
                  </Card>
                  
                  <Card className="shadow-sm border-gray-200">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-medium">Admin E-commerce panel</h3>
                      <p className="text-portfolio-purple">Team Size: 4</p>
                      <p className="text-gray-600 mt-2">
                        This is website to manage the inventory. Dashboard is provided which gives you brief idea about your inventory. Different graphs are given which gives u insight about your inventory.
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-gray-100 rounded-full text-xs">Mean Stack</span>
                      </div>
                      <a href="https://github.com/akashtechie20/E-commerce-panel" className="text-portfolio-purple hover:underline text-sm mt-3 inline-block">
                        View Project →
                      </a>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold mb-6 text-portfolio-dark flex items-center">
                  <GraduationCap className="mr-2 h-5 w-5 text-portfolio-purple" /> Education
                </h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-medium">B.Tech. - CSE - PIT</h3>
                    <p className="text-portfolio-purple">Parul University (2022 - 2026)</p>
                    <p className="text-gray-600 mt-2">
                      CGPA: 7.01 / 10
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium">12th - MSBSHSE</h3>
                    <p className="text-portfolio-purple">Pirojsha Godrej Junior College, Bordi, Palghar (2022)</p>
                    <p className="text-gray-600 mt-2">
                      Percentage: 71.17 / 100
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium">10th - MSBSHSE</h3>
                    <p className="text-portfolio-purple">JADI RANA HIGH SCHOOL, SANJAN (2020)</p>
                    <p className="text-gray-600 mt-2">
                      Percentage: 90.20 / 100
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium">Certifications & Achievements</h3>
                    <ul className="list-disc list-inside text-gray-600 mt-2 space-y-2">
                      <li>Introduction to Cybersecurity</li>
                      <li>AI/ML HACKATHON - Certificate of Appreciation</li>
                      <li>Gujarat Tableau User Group - Certificate of Participation</li>
                      <li>Computer Network and Internet Protocol - NPTEL (64/100)</li>
                      <li>Power BI Micro Course - Certificate of course completion</li>
                      <li>Full Stack React E-commerce Project - Course completion</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-6 text-portfolio-dark flex items-center">
                <Award className="mr-2 h-5 w-5 text-portfolio-purple" /> Skills & Expertise
              </h2>
              
              <div className="flex flex-wrap gap-3 mb-16">
                <span className="px-4 py-2 bg-gray-100 rounded-full">Web Development</span>
                <span className="px-4 py-2 bg-gray-100 rounded-full">Software Engineering</span>
                <span className="px-4 py-2 bg-gray-100 rounded-full">Management</span>
                <span className="px-4 py-2 bg-gray-100 rounded-full">Project Planning</span>
                <span className="px-4 py-2 bg-gray-100 rounded-full">Python</span>
                <span className="px-4 py-2 bg-gray-100 rounded-full">AIML</span>
                <span className="px-4 py-2 bg-gray-100 rounded-full">HTML</span>
                <span className="px-4 py-2 bg-gray-100 rounded-full">CSS</span>
                <span className="px-4 py-2 bg-gray-100 rounded-full">Excel</span>
                <span className="px-4 py-2 bg-gray-100 rounded-full">ReactJS</span>
                <span className="px-4 py-2 bg-gray-100 rounded-full">Power BI</span>
                <span className="px-4 py-2 bg-gray-100 rounded-full">Tableau</span>
                <span className="px-4 py-2 bg-gray-100 rounded-full">Mean Stack</span>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-16">
                <h2 className="text-2xl font-semibold mb-4 text-portfolio-dark">Contact Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium">Email:</p>
                    <p className="text-gray-600">2203051050048@paruluniversity.ac.in</p>
                    <p className="text-gray-600">akashbhardwaj794@gmail.com</p>
                  </div>
                  <div>
                    <p className="font-medium">Phone:</p>
                    <p className="text-gray-600">+91-8488928367, +91-8980397490</p>
                  </div>
                  <div>
                    <p className="font-medium">GitHub:</p>
                    <a href="https://github.com/akashtechie20" className="text-portfolio-purple hover:underline">
                      github.com/akashtechie20
                    </a>
                  </div>
                  <div>
                    <p className="font-medium">Languages:</p>
                    <p className="text-gray-600">English, Hindi, Marathi, Gujarati</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
