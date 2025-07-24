import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, CheckCircle } from "lucide-react";

const Projects = () => {
  const majorProjects = [
    {
      title: "Social Media Platform",
      description: "A full-featured social media platform built with MERN stack. Features include user authentication, post creation, real-time messaging, and social interactions.",
      status: "Completed",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io", "JWT"],
      github: "https://github.com/dheerajgaurgithub/social-media-platform",
      live: null,
    },
    {
      title: "Recipe Management System",
      description: "A CRUD application for managing recipes with EJS templating. Features include adding, editing, deleting, and viewing recipes with a clean interface.",
      status: "Completed",
      technologies: ["Node.js", "Express.js", "EJS", "MongoDB", "Bootstrap"],
      github: "https://github.com/dheerajgaurgithub/Recipe-Management-System",
      live: "https://recipe-management-system-qt53.onrender.com/",
    },
    {
      title: "BhuviKart",
      description: "E-commerce website clone with product listing, shopping cart functionality, and responsive design built with core web technologies.",
      status: "Completed",
      technologies: ["React(TSX)", "CSS3", "Local Storage"],
      github: "https://github.com/dheerajgaurgithub/BhuviKart-E-Commerce-website-",
      live: "https://dheerajgaurbhuvikart.netlify.app/",
    },
    {
      title: "Employee Onboarding System",
      description: "Streamline your HR operations with intelligent automation, real-time collaboration, and seamless employee experiences.",
      status: "Completed",
      technologies: ["React(JSX)", "Tailwind", "Local Storage"],
      github: "https://github.com/dheerajgaurgithub/Employee_On_Boarding_System",
      live: "https://employee-on-boarding-system.vercel.app/",
    },
    {
      title: "Test Generator",
      description: "An intelligent test generation system built during Coding Blocks internship. Allows educators to create customized tests with various question types.",
      status: "Completed",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js"],
      github: "https://github.com/dheerajgaurgithub/test-generator",
      live: null,
    },
  ];

  const otherProjects = [
    {
      title: "Spotify Clone",
      description: "A music streaming interface clone of Spotify with responsive design, playlist management, and audio controls using vanilla web technologies.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      github: "https://github.com/dheerajgaurgithub/spotify-clone",
      live: "https://dheerajgaurofficial.netlify.app/",
    },
  ];

  const stats = [
    { label: "Public Repositories", value: "6+" },
    { label: "Technologies Used", value: "5+" },
    { label: "Commits This Year", value: "100+" },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            A showcase of my technical skills through real-world applications
          </p>
          <Button variant="outline" asChild>
            <a
              href="https://github.com/dheerajgaurgithub"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              View All on GitHub
            </a>
          </Button>
        </div>

        {/* Major Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8">Major Projects</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {majorProjects.map((project, index) => (
              <Card key={index} className="gradient-card border-primary/20 shadow-soft hover:shadow-elegant transition-smooth">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" />
                      {project.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="bg-primary/10">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-2">
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Github className="w-4 h-4" />
                        View Source
                      </a>
                    </Button>
                    {project.live && (
                      <Button variant="default" size="sm" asChild>
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <ExternalLink className="w-4 h-4" />
                          View Live
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8">Other Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card key={index} className="gradient-card border-primary/20 shadow-soft hover:shadow-elegant transition-smooth">
                <CardHeader>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="bg-primary/10 text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="bg-primary/10 text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-xs"
                      >
                        <Github className="w-3 h-3" />
                        Source
                      </a>
                    </Button>
                    <Button variant="default" size="sm" asChild>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-xs"
                      >
                        <ExternalLink className="w-3 h-3" />
                        Live
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* GitHub Activity */}
        <div className="text-center">
          <Card className="gradient-card border-primary/20 shadow-soft max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-xl">GitHub Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
              <Button variant="gradient" className="mt-6" asChild>
                <a
                  href="https://github.com/dheerajgaurgithub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  Visit My GitHub
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
