import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import HeroSection from './components/Hero/HeroSection';
import './App.css'
import MainSection from './components/Testimonials/MainSection';

const App = () => {
  return (
    <Router>
      <Header />
      <HeroSection/>
      <MainSection/>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
