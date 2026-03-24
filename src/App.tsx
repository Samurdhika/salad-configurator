import React from 'react';
import { LeftPanel } from './components/LeftPanel';
import { BaseSelection } from './components/BaseSelection';
import { CenterBowl } from './components/CenterBowl';
import { IngredientSection } from './components/IngredientSection';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col gap-8">
        <div className ="flex gap-8 items-start justify-center">
        <LeftPanel />
        <CenterBowl />
        <BaseSelection />
      </div>

      <IngredientSection />
    </div>
      
  );
}