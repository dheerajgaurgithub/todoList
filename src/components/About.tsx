import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, MapPin, Phone, User } from "lucide-react";

const About = () => {
  const education = [
    {
      title: "B.Tech CSE",
      institution: "GLA University, Mathura",
      period: "2023 – 2026",
      current: true,
    },
    {
      title: "Diploma in CS & IT",
      institution: "Vivekananda College of Polytechnic, Aligarh",
      period: "Completed",
      current: false,
    },
  ];

  const personalInfo = [
    {
      icon: MapPin,
      label: "Location",
      value: "Aligarh, UP",
      sub: "202001",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 6397684456",
      sub: "Available for calls",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Passionate developer with a strong foundation in computer science and hands-on experience in full-stack development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education & Personal Info */}
          <div className="space-y-8">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-primary" />
                Education
              </h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <Card key={index} className="gradient-card border-primary/20">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-lg">{edu.title}</h4>
                        {edu.current && (
                          <span className="bg-primary/20 text-primary px-2 py-1 rounded-full text-sm">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-muted-foreground">{edu.institution}</p>
                      <p className="text-sm text-muted-foreground mt-1">{edu.period}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Personal Info */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <User className="w-6 h-6 text-primary" />
                Personal Info
              </h3>
              <div className="grid gap-4">
                {personalInfo.map((info, index) => (
                  <Card key={index} className="gradient-card border-primary/20">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3">
                        <info.icon className="w-5 h-5 text-primary" />
                        <div>
                          <p className="font-medium">{info.value}</p>
                          <p className="text-sm text-muted-foreground">{info.sub}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* My Journey */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
            <Card className="gradient-card border-primary/20 h-full">
              <CardContent className="p-8">
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    I'm a passionate computer science student currently pursuing my B.Tech at GLA University, Mathura. 
                    With a strong foundation from my diploma in Computer Science & IT, I've developed a deep love for 
                    problem-solving and creating innovative solutions.
                  </p>
                  <p>
                    My journey in tech has been enriched by hands-on internships at{" "}
                    <span className="text-primary font-medium">Coding Blocks</span> and{" "}
                    <span className="text-primary font-medium">Integraminds</span>, where I've worked on full-stack 
                    projects using the MERN stack, Flask, and Django.
                  </p>
                  <p>
                    I'm particularly passionate about data structures and algorithms, regularly solving problems on 
                    LeetCode to sharpen my analytical thinking. I believe in continuous learning and staying updated 
                    with the latest technologies.
                  </p>
                  <p>
                    When I'm not coding, you'll find me exploring new frameworks, contributing to open-source projects, 
                    or working on personal projects that challenge my creativity and technical skills.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;