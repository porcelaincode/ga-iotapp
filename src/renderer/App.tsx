import { useEffect } from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import Debug from 'screens/Debug';
import Home from 'screens/Home';

import { Provider, useSelector } from 'react-redux';
import { Store } from '../../redux/store';

import './App.css';

export default function App() {
  return (
    <Provider store={Store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/debug" element={<Debug />} />
        </Routes>
      </Router>
    </Provider>
  );
}
