import React from "react";
import ETFCard from "./components/ETFCard";
import { dummyETFs } from "./data/dummyETFs";
import "./App.css";

function App() {
  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h1>📈 ETF Vergleich</h1>
      {dummyETFs.map((etf) => (
        <ETFCard key={etf.isin} etf={etf} />
      ))}
    </div>
  );
}

export default App;
