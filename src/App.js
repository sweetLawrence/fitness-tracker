import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import 'animate.css';
import InfoWrapper from './components/ActualComponents/InfoWrapper';
import MainPage from './components/ActualComponents/MainPage';
import Signup from './components/AuthenticationFolder/Signup';
import Login from './components/AuthenticationFolder/Login';
import HomePage from './components/ActualComponents/HomePage';
import Navbar from './components/ActualComponents/Navbar';
import Summary from './components/ActualComponents/Summary';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
        <Route path="/" element={<HomePage />} />
          <Route path="/analytics" element={<MainPage />} />
          <Route path="/infofeed" element={<InfoWrapper />} />
          <Route path="/summary" element={<Summary />} />
        </Routes>
        
      </div>
   </Router>
  );
}

export default App;
