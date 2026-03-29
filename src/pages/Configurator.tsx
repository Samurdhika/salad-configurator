import React, {useState} from 'react';
import Header from '../components/Header'
import { LeftPanel } from '../components/LeftPanel';
import { BaseSelection } from '../components/BaseSelection';
import { CenterBowl } from '../components/CenterBowl';
import { IngredientSection } from '../components/IngredientSection';
import {SummaryBar} from '../components/SummaryBar';
import {Footer} from '../components/Footer';
import type { Bowl, Ingredient, Category } from '../types';

export function Configurator(){
  const [bowls, setBowls] = useState<Bowl[]>([]);
  const [category, setCategory] = useState<Category[]>([]);
  const [ingrediant, setIngrediant] = useState<Ingredient[]>([]);

    return (
        <div className="min-h-screen bg-white p-8 flex flex-col gap-8">
              <Header />
                <div className ="flex gap-8 items-start justify-center">
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

