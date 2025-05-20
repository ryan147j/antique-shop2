import React from 'react';
import './App.css';
import Nav from './components/nav';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AntiquesList from './components/AntiquesList';
import AddAntique from './components/AddAntiques';
import Update from './components/Update';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/antiques" element={<AntiquesList />} />
        <Route path="/add" element={<AddAntique />} />
        <Route path="/update/:id" element={<Update />} />
      </Routes>
    </Router>
  );
}

export default App;