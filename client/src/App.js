import './App.css';
import React, { useEffect, useState } from 'react';
import { getCupboard } from "./AppService"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CupboardContents from './components/CupboardContents';

function App() {
  const [cupboard, setCupboard] = useState([])

  useEffect(() => {
    getCupboard().then((allCupboard) => {
      setCupboard(allCupboard);
    })
  }, [])

  return (
    <Router>
      <Routes>
        <Route exact path="/cupboardcontents" element={< CupboardContents cupboard={cupboard} />} />
      </Routes>
    </Router>
  );
}

export default App;
