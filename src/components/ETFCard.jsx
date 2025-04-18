import React from "react";

const ETFCard = ({ etf }) => {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "10px",
      padding: "16px",
      marginBottom: "20px",
      background: "#fff"
    }}>
      <h3>{etf.name}</h3>
      <p><strong>ISIN:</strong> {etf.isin}</p>
      <p><strong>Kosten (TER):</strong> {etf.costs}%</p>
      <p><strong>Performance 5 Jahre:</strong> {etf.performance5y}%</p>
    </div>
  );
};

export default ETFCard;
