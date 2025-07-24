import { useState } from "react";
import Header from "@/components/Header";
import TodoLanding from "@/components/TodoLanding";
import TodoApp from "@/components/TodoApp";
import DeveloperCorner from "@/components/DeveloperCorner";
import { ThemeProvider } from "next-themes";

type ViewType = "landing" | "todo";

const Index = () => {
  const [currentView, setCurrentView] = useState<ViewType>("landing");

  const showLanding = () => setCurrentView("landing");
  const showTodoApp = () => setCurrentView("todo");

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="min-h-screen bg-background transition-colors">
        <Header 
          showTodoApp={currentView === "todo"} 
          onToggleView={showTodoApp}
          onHomeClick={showLanding}
        />
        
        {currentView === "landing" ? (
          <>
            <TodoLanding onGetStarted={showTodoApp} />
            <div id="developer">
              <DeveloperCorner />
            </div>
          </>
        ) : (
          <TodoApp />
        )}
      </div>
    </ThemeProvider>
  );
};

export default Index;
