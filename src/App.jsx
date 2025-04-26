import React from "react";
import ETFCard from "./components/ETFCard";
import ETFSearch from "./components/ETFSearch";
import { dummyETFs } from "./data/dummyETFs";
import "./App.css";
import { useState, useEffect } from "react";


function App() {
  const [selectedETFs,setSelectedETFs] = useState([]);

  function addETF(etf){
    setSelectedETFs([...selectedETFs,etf])
  }

  function onRemove(isin){
    setSelectedETFs(prevETF => prevETF.filter(etf => etf.isin !== isin));
  }


  return (
    <>
    <ETFSearch addETF={addETF} />
    <div style={{ maxWidth: "600px", margin: "0 auto"}}>
      <h1>📈 ETF Vergleich</h1>
      {selectedETFs.map((etf)=>{
        return <ETFCard key={etf.isin} etf={etf} onRemove={onRemove} />
      })}
    </div>
    </>
  );
}

export default App;
