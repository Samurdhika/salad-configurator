import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Configurator } from './pages/Configurator';
import { Community } from './pages/Community';
import { Print } from './pages/Print';

export default function App() {
  return (
    // Note: No <BrowserRouter> here because it is already in main.tsx
    <Routes>
      <Route path="/" element={<Configurator />} />
      <Route path="/community" element={<Community />} />
      <Route path="/print" element={<Print />} />
    </Routes>
  );
}