import React from "react";
import ETFCard from "./components/ETFCard";
import ETFSearch from "./components/ETFSearch";
import { dummyETFs } from "./data/dummyETFs";
import "./App.css";


function App() {
  return (
    <>
    <ETFSearch/>
    <div style={{ maxWidth: "600px", margin: "0 auto"}}>
      <h1>📈 ETF Vergleich</h1>
      {dummyETFs.map((etf) => (
        <ETFCard key={etf.isin} etf={etf} />
      ))}
    </div>
    </>
  );
}

export default App;
