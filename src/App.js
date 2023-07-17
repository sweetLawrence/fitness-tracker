import './App.css';
import Dashboard from './components/ActualComponents/Dashboard';
import Sidebar from './components/ActualComponents/Sidebar';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import 'animate.css';
import InfoFeed from './components/ActualComponents/InfoFeed';
import InfoFeedDashboard from './components/ActualComponents/InfoFeedDashboard';
import SetTargetBox from './components/ActualComponents/SetTargetBox';

function App() {
  const [selectedExercise, setSelectedExercise] = useState(0);
  return (
    <Router>
      <div className="App animate__animated animate__zoomIn ">

        <Sidebar setSelectedExercise={setSelectedExercise} selectedExercise={selectedExercise} />
        <Dashboard selectedExercise={selectedExercise} />
        {/* <InfoFeed /> */}
        {/* <InfoFeedDashboard /> */}
        {/* <Routes> */}
          {/* <Route path="/infofeed" element={<InfoFeedDashboard />} /> */}
        {/* </Routes> */}

      </div>
    </Router>




  );
}

export default App;
