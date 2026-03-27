import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Configurator } from './pages/configurator';
import { Community } from './pages/Community';
import { Print } from './pages/Print';

export default function App() {
  return (
    
    <Routes>
      <Route path="/" element={<Configurator />} />
      <Route path="/community" element={<Community />} />
      <Route path="/print" element={<Print />} />
    </Routes>
    

      
  );
}
