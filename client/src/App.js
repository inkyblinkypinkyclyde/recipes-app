import './App.css';
import React, { useEffect, useState } from 'react';
import { getCupboard } from "./AppService"

function App() {
  const [cupbaord, setCupboard] = useState([])

  useEffect(() => {
    getCupboard().then((allCupboard) => {
      setCupboard(allCupboard);
    })
  }, [])

  return (
    <>
      <h1>The server said</h1>
    </>
  );
}

export default App;
