import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();
  const [isAnimating, setIsAnimating] = useState(false);

  const handleGetStarted = () => {
    setIsAnimating(true);
    setTimeout(() => {
      navigate('/todos');
    }, 500);
  };

  return (
    <div className={`landing-page ${isAnimating ? 'fade-out' : ''}`}>
      <div className="landing-content">
        <h1>Welcome to Todo List</h1>
        <p className="tagline">Organize your tasks, boost your productivity</p>
        
        <div className="features">
          <div className="feature">
            <div className="feature-icon">📝</div>
            <h3>Create Tasks</h3>
            <p>Add new tasks with just a few clicks</p>
          </div>
          
          <div className="feature">
            <div className="feature-icon">✅</div>
            <h3>Track Progress</h3>
            <p>Mark tasks as complete when finished</p>
          </div>
          
          <div className="feature">
            <div className="feature-icon">🔄</div>
            <h3>Stay Organized</h3>
            <p>Filter and manage your tasks efficiently</p>
          </div>
        </div>
        
        <button className="get-started-btn" onClick={handleGetStarted}>
          Get Started
        </button>
      </div>
    </div>
  );
}

export default LandingPage;