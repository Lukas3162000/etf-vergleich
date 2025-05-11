import React from "react";
import "./FavoriteCard.css";

const FavoriteCard = ({ etf, handleAddFavorite }) => {
  console.log("Favorite ETF:", etf);
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "10px",
      padding: "16px",
      marginBottom: "20px",
      background: "#fff"
    }}>
      <div className="tests">
       <h3>{etf.name}</h3>
       <div className="buttons">
         <button onClick={() => handleAddFavorite(etf)}>
          <span>★</span>
         </button>
        </div>
 
      </div>

      <p><strong>ISIN:</strong> {etf.isin}</p>
      <p><strong>Kosten (TER):</strong> {etf.costs}%</p>
      <p><strong>Performance 5 Jahre:</strong> {etf.performance5y}%</p>
    </div>
  );
};

export default FavoriteCard;
