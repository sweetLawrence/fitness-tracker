import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import 'animate.css';
import InfoWrapper from './components/ActualComponents/InfoWrapper';
import MainPage from './components/ActualComponents/MainPage';

function App() {
  return (
    <Router>
      <div className="App animate__animated animate__zoomIn ">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/infofeed" element={<InfoWrapper />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
