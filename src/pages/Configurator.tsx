import React, {useState, useEffect} from 'react';
import Header from '../components/Header'
import { LeftPanel } from '../components/LeftPanel';
import { BaseSelection } from '../components/BaseSelection';
import { CenterBowl } from '../components/CenterBowl';
import { IngredientSection } from '../components/IngredientSection';
import {SummaryBar} from '../components/SummaryBar';
import {Footer} from '../components/Footer';
import type { Bowl, Ingredient, Category } from '../types';
import { getBowls } from '../services/api';
import { getCategories } from '../services/api';
import { getIngredients } from '../services/api';
import { useIngredientStore } from '../store/useIngredientStore'; // ADDED THIS

export function Configurator(){
  const [bowls, setBowls] = useState<Bowl[]>([]);
  const [category, setCategory] = useState<Category[]>([]);
  const [ingrediant, setIngrediant] = useState<Ingredient[]>([]);

  const baseType = useIngredientStore((state) => state.baseType); // ADDED THIS

  useEffect(() => {
    async function fetchBowls() {
      try {
        const data = await getBowls();
        setBowls(data);
      } catch (error) {
        console.error("Failed to fetch bowls:", error);
      }
    }

    fetchBowls();

    async function fetchCategories() {
      try {
        const data = await getCategories();
        setCategory(data);
      } catch (error) {
        console.error("Failed to fetch Categories:", error);
      }
    }

    fetchCategories();

    async function fetchIngredients() {
      try {
        const data = await getIngredients();
        setIngrediant(data);
      } catch (error) {
        
      }
    }

    fetchIngredients();
  }, []);

    const filteredBowls = bowls.filter(bowl => bowl.base_type_id === baseType);
    const filteredCategories = category.filter(cat => cat.id);

    return (
        <div className="min-h-screen bg-white p-8 flex flex-col gap-8">
              <Header />
                <div className ="flex gap-8 items-start justify-center">
                <LeftPanel bowls={filteredBowls}/> {/* UPDATED TO filteredBowls */}
                <CenterBowl />
                <BaseSelection ingredients={ingrediant} />
                
              </div>
        
              <IngredientSection categories={filteredCategories}  // UPDATED TO filteredCategories
                                 ingredients={ingrediant} />
              <SummaryBar />
              <Footer />
            </div>
    );
    
}