import React from 'react';
import Header from './components/Header';
import { LeftPanel } from './components/LeftPanel';
import { BaseSelection } from './components/BaseSelection';
import { CenterBowl } from './components/CenterBowl';
import { IngredientSection } from './components/IngredientSection';
import {SummaryBar} from './components/SummaryBar';
import {Footer} from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col gap-8">
        <div className ="flex gap-8 items-start justify-center">
        <Header />
        <LeftPanel />
        <CenterBowl />
        <BaseSelection />
        
      </div>

      <IngredientSection />
      <SummaryBar />
      <Footer />
    </div>
      
  );
}
