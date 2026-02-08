import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import StudyMaterials from './pages/StudyMaterials';

function AppContent() {
  const [streak, setStreak] = useState(0);
  const [progress, setProgress] = useState({
    Listening: 0,
    Reading: 0,
    Writing: 0,
    Speaking: 0
  });
  const navigate = useNavigate();

  const completeMission = () => {
    setStreak(s => s + 1);
    setProgress(prev => ({
      Listening: Math.min(prev.Listening + 10, 100),
      Reading: Math.min(prev.Reading + 10, 100),
      Writing: Math.min(prev.Writing + 5, 100),
      Speaking: Math.min(prev.Speaking + 5, 100)
    }));
    navigate('/');
  };

  const resetStreak = () => {
    setStreak(0);
  };

  return (
    <Routes>
      <Route path="/" element={<Home streak={streak} progress={progress} onReset={resetStreak} />} />
      <Route path="/study-materials" element={<StudyMaterials onComplete={completeMission} />} />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
