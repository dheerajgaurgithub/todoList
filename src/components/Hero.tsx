import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, ArrowRight, ChevronDown } from "lucide-react";
import dheerajProfile from "@/assets/dheeraj-profile.png";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Hello, I'm{" "}
                <span className="gradient-hero bg-clip-text text-transparent">
                  Dheeraj Gaur
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                I'm a <span className="text-primary font-semibold">Fullstack Web Developer</span>
              </p>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-2xl">
              Passionate about creating innovative solutions with modern web technologies. 
              Currently pursuing B.Tech CSE and building amazing projects.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="flex items-center gap-2">
                <Download className="w-5 h-5" />
                Download Resume
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="flex items-center gap-2"
                onClick={() => scrollToSection("#projects")}
              >
                View My Work
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4 pt-4">
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://github.com/dheerajgaurgithub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-spring"
                >
                  <Github className="w-6 h-6" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://linkedin.com/in/dheeraj-gaur-9b5410324"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-spring"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a 
                  href="mailto:dheerajgaur.0fficial@gmail.com"
                  className="hover:scale-110 transition-spring"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 gradient-hero rounded-full blur-2xl opacity-20 animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-blue-100 to-purple-100 rounded-full p-2 shadow-elegant">
                <img
                  src={dheerajProfile}
                  alt="Dheeraj Gaur"
                  className="w-80 h-80 md:w-96 md:h-96 rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection("#about")}
            className="flex flex-col items-center text-muted-foreground hover:text-primary transition-smooth"
          >
            <span className="text-sm mb-2">Scroll</span>
            <ChevronDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;