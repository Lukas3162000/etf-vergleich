import React from "react";
import ETFCard from "./components/ETFCard";
import ETFSearch from "./components/ETFSearch";
import ETFChart from "./components/ETFChart";
import ETFPerformance from "./components/ETFPerformance";
import { dummyETFs } from "./data/dummyETFs";
import "./App.css";
import { useState, useEffect } from "react";


function App() {
  const [selectedETFs,setSelectedETFs] = useState([]);

  const [displayedETFs, setDisplayedETFs] = useState([]);

  function addETF(etf){
    setSelectedETFs([...selectedETFs,etf])
  }

  function onRemove(isin){
    setSelectedETFs(prevETF => prevETF.filter(etf => etf.isin !== isin));
  }

  function onRemoveDisplayed(isin){
    setDisplayedETFs(prevETF => prevETF.filter(etf => etf.isin !== isin));
  }

  function displayETFs(isin, etf){
    setDisplayedETFs(prev => {
      const alreadyIncluded = prev.some(etf => etf.isin === isin);
      if(alreadyIncluded) return prev;

      const etfToAdd = selectedETFs.find(etf => etf.isin === isin);
      return [...prev, etfToAdd];
    })
  }


  return (
    <>
    <ETFSearch addETF={addETF} />
    <ETFChart displayETFs={displayETFs} displayedETFs={displayedETFs} onRemoveDisplayed={onRemoveDisplayed}/>
    <ETFPerformance etfs={displayedETFs}/>
    <div>
      <h1>📈 ETF Vergleich</h1>
      {selectedETFs.map((etf)=>{
        return <ETFCard key={etf.isin} etf={etf} onRemove={onRemove} displayETFs={displayETFs} />
      })}
    </div>
    </>
  );
}

export default App;
