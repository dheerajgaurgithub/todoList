import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      primary: "dheerajgaur.0fficial@gmail.com",
      secondary: "dheeraj.gaur_cs23@gla.ac.in",
      subtitle: "Personal & College Email",
      href: "mailto:dheerajgaur.0fficial@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      primary: "+91 6397684456",
      secondary: "Available 9 AM - 9 PM",
      subtitle: "Call or WhatsApp",
      href: "tel:+916397684456",
    },
    {
      icon: MapPin,
      title: "Location",
      primary: "Aligarh, UP",
      secondary: "202001, India",
      subtitle: "Open to Remote Work",
      href: "https://maps.google.com/?q=Aligarh,UP,India",
    },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      description: "Professional Network",
      icon: Linkedin,
      href: "https://linkedin.com/in/dheeraj-gaur-9b5410324",
    },
    {
      name: "GitHub",
      description: "Code Repository",
      icon: Github,
      href: "https://github.com/dheerajgaurgithub",
    },
    {
      name: "Email",
      description: "Direct Contact",
      icon: Mail,
      href: "mailto:dheerajgaur.0fficial@gmail.com",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just show a toast message
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate? Let's discuss your next project or opportunity!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="gradient-card border-primary/20 shadow-soft hover:shadow-elegant transition-smooth">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/20 p-3 rounded-lg">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-1">{info.title}</h3>
                        <a
                          href={info.href}
                          className="text-muted-foreground hover:text-primary transition-smooth block"
                          target={info.href.startsWith("http") ? "_blank" : undefined}
                          rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        >
                          <div className="font-medium">{info.primary}</div>
                          <div className="text-sm">{info.secondary}</div>
                        </a>
                        <p className="text-sm text-muted-foreground mt-1">{info.subtitle}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <Card className="gradient-card border-primary/20 shadow-soft">
              <CardHeader>
                <CardTitle>Connect With Me</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/10 transition-smooth"
                  >
                    <social.icon className="w-5 h-5 text-primary" />
                    <div>
                      <div className="font-medium">{social.name}</div>
                      <div className="text-sm text-muted-foreground">{social.description}</div>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="gradient-card border-primary/20 shadow-soft">
            <CardHeader>
              <CardTitle>Send Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or opportunity..."
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" variant="gradient" className="w-full flex items-center gap-2">
                  <Send className="w-4 h-4" />
                  Send Message
                </Button>
              </form>

              <div className="mt-8 pt-6 border-t border-border">
                <div className="text-center text-sm text-muted-foreground">
                  <p className="mb-2">Usually responds within 24 hours</p>
                  <p>Looking forward to hearing from you!</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="gradient-hero shadow-glow max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Let's Build Something Amazing Together!</h3>
              <p className="text-white/90 mb-6">
                Whether you have a project in mind, want to discuss opportunities, or just want to say hello, 
                I'd love to hear from you. I'm always open to interesting conversations and new challenges.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20" asChild>
                  <a href="mailto:dheerajgaur.0fficial@gmail.com">
                    Send Message
                  </a>
                </Button>
                <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20" asChild>
                  <a
                    href="https://linkedin.com/in/dheeraj-gaur-9b5410324"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Connect on LinkedIn
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;