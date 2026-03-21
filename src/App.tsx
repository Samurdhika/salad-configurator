import React from 'react';
import { LeftPanel } from './components/LeftPanel';
import { BaseSelection } from './components/BaseSelection';
import { CenterBowl } from './components/CenterBowl';

export default function App() {
  return (
      <div className ="min-h-screen flex items-center justify-center bg-gray-100">
        <LeftPanel />
        <CenterBowl />
        <BaseSelection />
      </div>
  );
}