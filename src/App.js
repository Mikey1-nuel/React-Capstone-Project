import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import HomePage from './components/homepage';
import DetailsPage from './components/search';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/country/:name" element={<DetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
