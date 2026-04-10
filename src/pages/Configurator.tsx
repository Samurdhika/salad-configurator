import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { LeftPanel } from '../components/LeftPanel';
import { BaseSelection } from '../components/BaseSelection';
import { CenterBowl } from '../components/CenterBowl';
import { IngredientSection } from '../components/IngredientSection';
import { SummaryBar } from '../components/SummaryBar';
import { Footer } from '../components/Footer';
import type { Bowl, Ingredient, Category, BaseType } from '../types';
import { getBowls, getCategories, getIngredients, getBaseType } from '../services/api';
import { useIngredientStore } from '../store/useIngredientStore';

export function Configurator() {
  const [bowls, setBowls] = useState<Bowl[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [baseTypes, setBaseTypes] = useState<BaseType[]>([]);

  const baseType = useIngredientStore((state) => state.baseType);

  useEffect(() => {
    async function fetchData() {
      try {
        const [bowlsData, categoriesData, ingredientsData, baseTypesData] = await Promise.all([
          getBowls(),
          getCategories(),
          getIngredients(),
          getBaseType(),
        ]);

        setBowls(bowlsData);
        setCategories(categoriesData);
        setIngredients(ingredientsData);
        setBaseTypes(baseTypesData);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    }

    fetchData();
  }, []);

  const filteredBowls = bowls.filter(bowl => bowl.base_type_id === baseType);
  const filteredCategories = categories.filter(cat => cat.id);

  return (
    <div className="min-h-screen bg-white p-8 flex flex-col gap-8">
      <Header />
      <div className="flex gap-8 items-start justify-center">
        <LeftPanel bowls={filteredBowls} />
        <CenterBowl />
        <BaseSelection BaseType={baseTypes} />
      </div>

      <IngredientSection
        categories={filteredCategories}
        ingredients={ingredients}
      />
      <SummaryBar />
      <Footer />
    </div>
  );
}