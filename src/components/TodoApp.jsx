import { useState, useEffect } from 'react';

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [filter, setFilter] = useState('all');
  const [isEditing, setIsEditing] = useState(null);
  const [editValue, setEditValue] = useState('');

  // Load tasks from localStorage on initial render
  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Add a new task
  const addTask = () => {
    if (inputValue.trim() !== '') {
      const newTask = {
        id: Date.now(),
        text: inputValue,
        completed: false,
        createdAt: new Date().toISOString()
      };
      setTasks([...tasks, newTask]);
      setInputValue('');
    }
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Toggle task completion status
  const toggleComplete = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  // Start editing a task
  const startEdit = (id, text) => {
    setIsEditing(id);
    setEditValue(text);
  };

  // Save edited task
  const saveEdit = (id) => {
    if (editValue.trim() !== '') {
      setTasks(tasks.map(task => 
        task.id === id ? { ...task, text: editValue } : task
      ));
      setIsEditing(null);
      setEditValue('');
    }
  };

  // Filter tasks based on current filter
  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true; // 'all' filter
  });

  // Clear all completed tasks
  const clearCompleted = () => {
    setTasks(tasks.filter(task => !task.completed));
  };

  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      
      {/* Task Input */}
      <div className="task-input">
        <input 
          type="text" 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTask()}
          placeholder="Add a new task..."
        />
        <button onClick={addTask}>Add</button>
      </div>
      
      {/* Filter Controls */}
      <div className="filter-controls">
        <button 
          className={filter === 'all' ? 'active' : ''}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button 
          className={filter === 'active' ? 'active' : ''}
          onClick={() => setFilter('active')}
        >
          Active
        </button>
        <button 
          className={filter === 'completed' ? 'active' : ''}
          onClick={() => setFilter('completed')}
        >
          Completed
        </button>
        <button onClick={clearCompleted}>Clear Completed</button>
      </div>
      
      {/* Task List */}
      <ul className="task-list">
        {filteredTasks.length > 0 ? (
          filteredTasks.map(task => (
            <li key={task.id} className={task.completed ? 'completed' : ''}>
              <div className="task-item">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleComplete(task.id)}
                />
                
                {isEditing === task.id ? (
                  <input
                    type="text"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && saveEdit(task.id)}
                    onBlur={() => saveEdit(task.id)}
                    autoFocus
                  />
                ) : (
                  <span 
                    className="task-text"
                    onDoubleClick={() => startEdit(task.id, task.text)}
                  >
                    {task.text}
                  </span>
                )}
                
                <div className="task-actions">
                  <button onClick={() => startEdit(task.id, task.text)}>
                    Edit
                  </button>
                  <button onClick={() => deleteTask(task.id)}>
                    Delete
                  </button>
                </div>
              </div>
              <small className="task-date">
                Created: {new Date(task.createdAt).toLocaleString()}
              </small>
            </li>
          ))
        ) : (
          <li className="empty-message">
            {filter === 'all' 
              ? 'No tasks yet. Add one above!' 
              : filter === 'active' 
                ? 'No active tasks!' 
                : 'No completed tasks!'}
          </li>
        )}
      </ul>
      
      {/* Task Counter */}
      <div className="task-counter">
        <p>{tasks.filter(task => !task.completed).length} tasks left</p>
      </div>
    </div>
  );
}

export default TodoApp;