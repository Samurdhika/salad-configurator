import React from 'react';
import { Body } from './components/Body';

export default function App() {
  return (
    <div className="p-8 bg-slate-50 min-h-screen flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-8 text-slate-700">Valitse rasia</h1>
      
      <Body name="Neliö 250ml" />
      
    </div>
  );
}