import React from "react";
import "./ETFCard.css";

const ETFCard = ({ etf, onRemove, displayETFs}) => {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "10px",
      padding: "16px",
      marginBottom: "20px",
      background: "#fff"
    }}>
      <div className="tests" style={{display: "flex", justifyContent:"space-around"}}>
       <h3>{etf.name}</h3>
       <button onClick={() => displayETFs(etf.isin) }>
        +
       </button>

       <button onClick={() => onRemove(etf.isin)}>
        x
        </button>
      </div>

      <p><strong>ISIN:</strong> {etf.isin}</p>
      <p><strong>Kosten (TER):</strong> {etf.costs}%</p>
      <p><strong>Performance 5 Jahre:</strong> {etf.performance5y}%</p>
    </div>
  );
};

export default ETFCard;
