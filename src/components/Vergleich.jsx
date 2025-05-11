import React from "react";
import ETFCard from "./ETFCard";
import ETFSearch from "./ETFSearch";
import ETFChart from "./ETFChart";
import ETFPerformance from "./ETFPerformance";
import { dummyETFs } from "../data/dummyETFs";
import "./Vergleich.css";
import { useState, useEffect } from "react";


function Vergleich({ displayETFs, displayedETFs, onRemove, onRemoveDisplayed, handleAddFavorite, addETF, selectedETFs}) {
 

  return (
    <>
    <ETFSearch addETF={addETF} />
    <ETFChart displayETFs={displayETFs} displayedETFs={displayedETFs} onRemoveDisplayed={onRemoveDisplayed}/>
    <ETFPerformance etfs={displayedETFs}/>
    <div>
      <h1>📈 ETF Vergleich</h1>
      {selectedETFs.map((etf)=>{
        return <ETFCard key={etf.isin} etf={etf} onRemove={onRemove} displayETFs={displayETFs} handleAddFavorite={handleAddFavorite}/>
      })}
    </div>
    </>
  );
}

export default Vergleich;
