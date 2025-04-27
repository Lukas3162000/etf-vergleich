import React from "react";
import ETFCard from "./components/ETFCard";
import ETFSearch from "./components/ETFSearch";
import ETFChart from "./components/ETFChart";
import { dummyETFs } from "./data/dummyETFs";
import "./App.css";
import { useState, useEffect } from "react";


function App() {
  const [selectedETFs,setSelectedETFs] = useState([]);

  const [displayedETF, setDisplayedETF] = useState();

  function addETF(etf){
    setSelectedETFs([...selectedETFs,etf])
  }

  function onRemove(isin){
    setSelectedETFs(prevETF => prevETF.filter(etf => etf.isin !== isin));
  }

  function displayETF(isin, etf){
    const etfToDisplay = selectedETFs.find(etf => etf.isin === isin);
    setDisplayedETF(etfToDisplay);
  }


  return (
    <>
    <ETFSearch addETF={addETF} />
    <ETFChart displayETF={displayETF} displayedETF={displayedETF}/>
    <div>
      <h1>📈 ETF Vergleich</h1>
      {selectedETFs.map((etf)=>{
        return <ETFCard key={etf.isin} etf={etf} onRemove={onRemove} displayETF={displayETF}/>
      })}
    </div>
    </>
  );
}

export default App;
