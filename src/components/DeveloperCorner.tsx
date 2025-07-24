import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import dheerajProfile from "@/assets/dheeraj-profile.png";

const DeveloperCorner = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">Meet the Developer</h2>
          <p className="text-muted-foreground">Built with passion by a full-stack developer</p>
        </div>

        <Card className="gradient-card border-primary/20 shadow-soft">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-3 gap-6 items-center">
              {/* Profile Image */}
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 gradient-hero rounded-full blur-xl opacity-30"></div>
                  <img
                    src={dheerajProfile}
                    alt="Dheeraj Gaur"
                    className="relative w-32 h-32 rounded-full object-cover border-4 border-primary/20"
                  />
                </div>
              </div>

              {/* Info */}
              <div className="md:col-span-2 space-y-4">
                <div>
                  <h3 className="text-xl font-bold mb-1">Dheeraj Gaur</h3>
                  <p className="text-primary font-medium">Full-Stack Web Developer</p>
                  <p className="text-sm text-muted-foreground">B.Tech CSE Student | MERN Stack Developer</p>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  Passionate about creating innovative solutions with modern web technologies. 
                  Currently pursuing B.Tech CSE at GLA University and building amazing projects 
                  with React, Node.js, and cutting-edge tools.
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {["React", "Node.js", "TypeScript", "MongoDB", "Express"].map((tech) => (
                    <span key={tech} className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex gap-3">
                  <Button variant="ghost" size="sm" asChild>
                    <a
                      href="https://github.com/dheerajgaurgithub"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  </Button>
                  <Button variant="ghost" size="sm" asChild>
                    <a
                      href="https://linkedin.com/in/dheeraj-gaur-9b5410324"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Linkedin className="w-4 h-4" />
                      LinkedIn
                    </a>
                  </Button>
                  <Button variant="ghost" size="sm" asChild>
                    <a
                      href="mailto:dheerajgaur.0fficial@gmail.com"
                      className="flex items-center gap-2"
                    >
                      <Mail className="w-4 h-4" />
                      Contact
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default DeveloperCorner;