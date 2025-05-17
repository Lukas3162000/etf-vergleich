import React from "react";
import FavoriteCard from "./FavoriteCard";


function Favoriten({ favoriteETFs, handleAddFavorite, handleRemoveFavorite }) {
 
    return (
      <>
      <div>
        <h1>⭐️ Favoriten</h1>
          {favoriteETFs.length === 0 && <p>Du hast noch keine Favoriten.</p>}
          {favoriteETFs.map((etf)=>{
           return <FavoriteCard key={etf.isin} etf={etf} handleAddFavorite={handleAddFavorite} handleRemoveFavorite={handleRemoveFavorite}/>
         })}
      </div>

      </>
    );
  }
  
  export default Favoriten;
  