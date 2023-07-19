import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import 'animate.css';
import InfoWrapper from './components/ActualComponents/InfoWrapper';
import MainPage from './components/ActualComponents/MainPage';
import Signup from './components/AuthenticationFolder/Signup';
import Login from './components/AuthenticationFolder/Login';

function App() {
  return (
    <Router>
      <div className="App animate__animated animate__zoomIn ">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/infofeed" element={<InfoWrapper />} />
        </Routes>

        {/* <Signup /> */}
        {/* <Login /> */}
      </div>
   </Router>
  );
}

export default App;
