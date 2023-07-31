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
import { AuthContext } from "./helpers/AuthContext"
import axios from "axios"
import LoginPage from './components/ActualComponents/LoginPage';

function App() {
  const [authState, setAuthState] = useState(false);

  return (
    <Router>
      <AuthContext.Provider value={{ authState, setAuthState }}>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/analytics" element={<MainPage />} />
          <Route path="/infofeed" element={<InfoWrapper />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </AuthContext.Provider>
   </Router >
  );
}

export default App;
