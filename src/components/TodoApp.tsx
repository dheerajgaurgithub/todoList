import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Plus, Edit, Trash2, Calendar, Flag, CheckCircle2, Circle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import todoHero from "@/assets/todo-hero.jpg";

interface Todo {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  priority: "low" | "medium" | "high";
  deadline?: string;
  createdAt: string;
}

const TodoApp = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState({
    title: "",
    description: "",
    priority: "medium" as const,
    deadline: "",
  });
  const [editingId, setEditingId] = useState<string | null>(null);
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");
  const { toast } = useToast();

  // Load todos from localStorage on mount
  useEffect(() => {
    const savedTodos = localStorage.getItem("dheeraj-todos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  // Save todos to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem("dheeraj-todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (!newTodo.title.trim()) {
      toast({
        title: "Error",
        description: "Please enter a task title",
        variant: "destructive",
      });
      return;
    }

    const todo: Todo = {
      id: Date.now().toString(),
      title: newTodo.title,
      description: newTodo.description,
      completed: false,
      priority: newTodo.priority,
      deadline: newTodo.deadline,
      createdAt: new Date().toISOString(),
    };

    setTodos(prev => [todo, ...prev]);
    setNewTodo({ title: "", description: "", priority: "medium", deadline: "" });
    
    toast({
      title: "Task Added!",
      description: "Your new task has been added successfully.",
    });
  };

  const toggleTodo = (id: string) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
    toast({
      title: "Task Deleted",
      description: "Task has been removed from your list.",
    });
  };

  const updateTodo = (id: string, updates: Partial<Todo>) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, ...updates } : todo
      )
    );
    setEditingId(null);
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  const completedCount = todos.filter(todo => todo.completed).length;
  const totalCount = todos.length;

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-500";
      case "medium":
        return "bg-yellow-500";
      case "low":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  const isOverdue = (deadline: string) => {
    if (!deadline) return false;
    return new Date(deadline) < new Date();
  };

  return (
    <div className="min-h-screen pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="relative mb-8">
            <img
              src={todoHero}
              alt="Todo App Hero"
              className="w-full h-64 object-cover rounded-2xl shadow-elegant"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl flex items-end">
              <div className="p-8 text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Todo List App
                </h1>
                <p className="text-xl opacity-90">
                  Stay organized and productive with Dheeraj's Todo Manager
                </p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-md mx-auto mb-8">
            <Card className="gradient-card">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-primary">{totalCount}</div>
                <div className="text-sm text-muted-foreground">Total Tasks</div>
              </CardContent>
            </Card>
            <Card className="gradient-card">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-green-500">{completedCount}</div>
                <div className="text-sm text-muted-foreground">Completed</div>
              </CardContent>
            </Card>
            <Card className="gradient-card">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-orange-500">{totalCount - completedCount}</div>
                <div className="text-sm text-muted-foreground">Remaining</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Add Todo Form */}
        <Card className="gradient-card border-primary/20 shadow-soft mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Plus className="w-5 h-5" />
              Add New Task
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              placeholder="Task title..."
              value={newTodo.title}
              onChange={(e) => setNewTodo(prev => ({ ...prev, title: e.target.value }))}
              onKeyPress={(e) => e.key === "Enter" && addTodo()}
            />
            
            <Textarea
              placeholder="Task description (optional)..."
              value={newTodo.description}
              onChange={(e) => setNewTodo(prev => ({ ...prev, description: e.target.value }))}
              rows={3}
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Priority</label>
                <select
                  value={newTodo.priority}
                  onChange={(e) => setNewTodo(prev => ({ ...prev, priority: e.target.value as any }))}
                  className="w-full p-2 border border-border rounded-md bg-background"
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Deadline (optional)</label>
                <Input
                  type="datetime-local"
                  value={newTodo.deadline}
                  onChange={(e) => setNewTodo(prev => ({ ...prev, deadline: e.target.value }))}
                />
              </div>

              <div className="flex items-end">
                <Button onClick={addTodo} variant="gradient" className="w-full">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Task
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Filter Buttons */}
        <div className="flex gap-2 mb-6">
          {(["all", "active", "completed"] as const).map((filterType) => (
            <Button
              key={filterType}
              variant={filter === filterType ? "default" : "outline"}
              onClick={() => setFilter(filterType)}
              className="capitalize"
            >
              {filterType}
            </Button>
          ))}
        </div>

        {/* Todo List */}
        <div className="space-y-4">
          {filteredTodos.length === 0 ? (
            <Card className="gradient-card">
              <CardContent className="p-8 text-center">
                <Circle className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium mb-2">No tasks found</h3>
                <p className="text-muted-foreground">
                  {filter === "all" 
                    ? "Add your first task to get started!" 
                    : `No ${filter} tasks at the moment.`}
                </p>
              </CardContent>
            </Card>
          ) : (
            filteredTodos.map((todo) => (
              <Card key={todo.id} className={`gradient-card border-primary/20 shadow-soft transition-smooth ${todo.completed ? "opacity-75" : ""}`}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Checkbox
                      checked={todo.completed}
                      onCheckedChange={() => toggleTodo(todo.id)}
                      className="mt-1"
                    />
                    
                    <div className="flex-1">
                      {editingId === todo.id ? (
                        <div className="space-y-2">
                          <Input
                            value={todo.title}
                            onChange={(e) => updateTodo(todo.id, { title: e.target.value })}
                            onKeyPress={(e) => e.key === "Enter" && setEditingId(null)}
                          />
                          {todo.description && (
                            <Textarea
                              value={todo.description}
                              onChange={(e) => updateTodo(todo.id, { description: e.target.value })}
                              rows={2}
                            />
                          )}
                        </div>
                      ) : (
                        <div>
                          <h3 className={`text-lg font-medium ${todo.completed ? "line-through text-muted-foreground" : ""}`}>
                            {todo.title}
                          </h3>
                          {todo.description && (
                            <p className={`text-muted-foreground mt-1 ${todo.completed ? "line-through" : ""}`}>
                              {todo.description}
                            </p>
                          )}
                        </div>
                      )}

                      <div className="flex items-center gap-2 mt-3">
                        <Badge variant="outline" className="flex items-center gap-1">
                          <Flag className={`w-3 h-3 ${getPriorityColor(todo.priority)}`} />
                          {todo.priority}
                        </Badge>
                        
                        {todo.deadline && (
                          <Badge 
                            variant={isOverdue(todo.deadline) ? "destructive" : "outline"}
                            className="flex items-center gap-1"
                          >
                            <Calendar className="w-3 h-3" />
                            {new Date(todo.deadline).toLocaleDateString()}
                          </Badge>
                        )}
                        
                        {todo.completed && (
                          <Badge variant="outline" className="bg-green-500/20 text-green-600">
                            <CheckCircle2 className="w-3 h-3 mr-1" />
                            Completed
                          </Badge>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setEditingId(editingId === todo.id ? null : todo.id)}
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => deleteTodo(todo.id)}
                        className="text-destructive hover:text-destructive"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoApp;