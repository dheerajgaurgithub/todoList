import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      skills: [
        { name: "Java", level: 90, color: "bg-orange-500" },
        { name: "Python", level: 85, color: "bg-blue-500" },
        { name: "JavaScript", level: 88, color: "bg-yellow-500" },
        { name: "TypeScript", level: 75, color: "bg-blue-600" },
      ],
    },
    {
      title: "Frontend Technologies",
      icon: "🎨",
      skills: [
        { name: "React.js", level: 85, color: "bg-cyan-500" },
        { name: "HTML5", level: 95, color: "bg-orange-600" },
        { name: "CSS3", level: 90, color: "bg-blue-500" },
        { name: "Tailwind CSS", level: 80, color: "bg-teal-500" },
      ],
    },
    {
      title: "Backend & Databases",
      icon: "🛠️",
      skills: [
        { name: "Node.js", level: 80, color: "bg-green-600" },
        { name: "Express.js", level: 78, color: "bg-gray-600" },
        { name: "MongoDB", level: 75, color: "bg-green-500" },
        { name: "MySQL", level: 70, color: "bg-blue-600" },
      ],
    },
    {
      title: "Tools & Others",
      icon: "⚙️",
      skills: [
        { name: "Git", level: 85, color: "bg-red-500" },
        { name: "VS Code", level: 95, color: "bg-blue-500" },
        { name: "Chrome DevTools", level: 80, color: "bg-yellow-500" },
        { name: "Cassandra", level: 65, color: "bg-purple-500" },
      ],
    },
  ];

  const coreCS = [
    {
      icon: "🧮",
      title: "Data Structures & Algorithms",
      description: "Problem solving & optimization",
    },
    {
      icon: "💾",
      title: "Operating Systems",
      description: "System design & management",
    },
    {
      icon: "🌐",
      title: "Computer Networks",
      description: "Network protocols & security",
    },
    {
      icon: "🗃️",
      title: "Database Management",
      description: "RDBMS & NoSQL databases",
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="gradient-card border-primary/20 shadow-soft hover:shadow-elegant transition-smooth">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <span className="text-2xl">{category.icon}</span>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Core Computer Science */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Core Computer Science</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreCS.map((subject, index) => (
              <Card key={index} className="gradient-card border-primary/20 shadow-soft hover:shadow-elegant transition-smooth text-center">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{subject.icon}</div>
                  <h4 className="font-semibold mb-2">{subject.title}</h4>
                  <p className="text-sm text-muted-foreground">{subject.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* MERN Stack Highlight */}
        <div className="text-center">
          <Card className="gradient-hero shadow-glow max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">MERN Stack Developer</h3>
              <div className="flex justify-center items-center gap-4 mb-4">
                <span className="text-4xl">🍃</span>
                <span className="text-2xl text-white">+</span>
                <span className="text-4xl">🚂</span>
                <span className="text-2xl text-white">+</span>
                <span className="text-4xl">⚛️</span>
                <span className="text-2xl text-white">+</span>
                <span className="text-4xl">🟢</span>
              </div>
              <p className="text-white/90">
                Full-stack JavaScript development with modern frameworks and tools
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;