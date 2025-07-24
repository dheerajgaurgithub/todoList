import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckSquare, Plus, Calendar, Flag, BarChart3, Smartphone, ArrowRight } from "lucide-react";
import todoHero from "@/assets/todo-hero.jpg";

interface TodoLandingProps {
  onGetStarted: () => void;
}

const TodoLanding = ({ onGetStarted }: TodoLandingProps) => {
  const features = [
    {
      icon: Plus,
      title: "Easy Task Creation",
      description: "Quickly add tasks with titles, descriptions, and priorities"
    },
    {
      icon: Calendar,
      title: "Deadline Management",
      description: "Set deadlines and get overdue notifications"
    },
    {
      icon: Flag,
      title: "Priority Levels",
      description: "Organize tasks by low, medium, and high priority"
    },
    {
      icon: BarChart3,
      title: "Progress Tracking",
      description: "Visual statistics of your productivity"
    },
    {
      icon: CheckSquare,
      title: "Smart Filtering",
      description: "Filter by all, active, or completed tasks"
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Works perfectly on desktop and mobile devices"
    }
  ];

  const stats = [
    { number: "100%", label: "Free to Use" },
    { number: "∞", label: "Unlimited Tasks" },
    { number: "0ms", label: "Load Time" },
    { number: "📱", label: "Mobile Ready" }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-10"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Simple & Powerful {" "}
                  <span  >
                  todoList
                </span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  Stay organized, boost productivity, and never miss a deadline with our beautiful task management app.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="hero" 
                  size="lg" 
                  onClick={onGetStarted}
                  className="flex items-center gap-2"
                >
                  Get Started Free
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="lg">
                  View Features
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-primary">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 gradient-hero rounded-2xl blur-3xl opacity-20 animate-pulse"></div>
              <img
                src={todoHero}
                alt="Todo App Interface"
                className="relative w-full h-auto rounded-2xl shadow-elegant"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need to Stay Organized
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our todo app combines simplicity with powerful features to help you manage tasks efficiently
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="gradient-card border-primary/20 shadow-soft hover:shadow-elegant transition-smooth">
                <CardContent className="p-6 text-center">
                  <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground">Getting started is simple and intuitive</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Add Your Tasks",
                description: "Create tasks with titles, descriptions, priorities, and optional deadlines"
              },
              {
                step: "2",
                title: "Stay Organized",
                description: "Filter tasks by status, sort by priority, and track your progress"
              },
              {
                step: "3",
                title: "Get Things Done",
                description: "Mark tasks as complete and watch your productivity soar"
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="gradient-hero shadow-glow">
            <CardContent className="p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Boost Your Productivity?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Join thousands of users who have transformed their daily workflow with our todo app
              </p>
              <Button 
                variant="outline" 
                size="lg"
                onClick={onGetStarted}
                className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm"
              >
                Start Managing Tasks Now
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default TodoLanding;