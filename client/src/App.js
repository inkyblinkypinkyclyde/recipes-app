import './App.css';
import React, { useEffect, useState } from 'react';
import { getCupboard } from "./AppService"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CupboardContents from './components/CupboardContents';
import { postIngredient } from "./AppService";
import RecipeService from './AppService';

function App() {
  const [cupboard, setCupboard] = useState([])

  useEffect(() => {
    getCupboard().then((allCupboard) => {
      setCupboard(allCupboard);
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
      </Routes>
    </Router>
  );
}

export default App;
