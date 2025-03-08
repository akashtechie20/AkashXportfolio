
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Redux", "HTML/CSS"]
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Express", "Supabase", "Firebase", "RESTful APIs", "GraphQL"]
    },
    {
      title: "Design & Tools",
      skills: ["Figma", "Adobe XD", "Responsive Design", "UI/UX Principles", "Git", "CI/CD"]
    }
  ];

  return (
    <section className="py-20 bg-portfolio-gray">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-portfolio-dark mb-4">Skills & Expertise</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              I've developed a diverse set of skills throughout my journey as a developer and designer.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="overflow-hidden border-none shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-portfolio-dark">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-portfolio-purple mr-3"></div>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
