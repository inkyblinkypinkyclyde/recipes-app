import './App.css';
import React, { useEffect, useState } from 'react';
import { getCupboard } from "./AppService"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CupboardContents from './components/CupboardContents';
import RecipeService from './AppService';
import Recipes from './components/Recipes';

function App() {
  const [cupboard, setCupboard] = useState([])
  const [recipes, setRecipes] = useState([])
  const [ingredients, setIngredients] = useState([])

  useEffect(() => {
    getCupboard().then((allCupboard) => {
      setCupboard(allCupboard)
        .then(console.log(cupboard));
      setRecipes(cupboard.filter(ingredient => ingredient.recipeName));
      setIngredients(cupboard.filter(ingredient => ingredient.itemName));
    })
  }, [])

  const addTempIngredient = (ingredient) => {
    const temp = cupboard.map(s => s);
    temp.push(ingredient);
    setCupboard(temp);
  }

  const addIngredient = newIngredient => {
    RecipeService.postIngredient(newIngredient)
      .then(addTempIngredient(newIngredient))
  }

  return (
    <Router>
      <Routes>
        <Route exact path="/cupboardcontents" element={< CupboardContents cupboard={cupboard} addIngredient={addIngredient} />} />
        <Route exact path="/recipes" element={< Recipes />} />
      </Routes>
    </Router>
  );
}

export default App;
