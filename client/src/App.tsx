import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import Layout from './components/Layout/Layout';
import './App.css'


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          {/* Add other routes here */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;