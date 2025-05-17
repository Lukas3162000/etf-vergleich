import React, { useState, useEffect } from "react";
import Vergleich from "./components/Vergleich";
import Favoriten from "./components/Favoriten";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


export default function App() {

    //States/speicher
      const [selectedETFs,setSelectedETFs] = useState([]);
      const [displayedETFs, setDisplayedETFs] = useState([]);
      const [favoriteETFs, setFavoriteETFs] = useState([]);
    

      //Handlerfunctions
      function addETF(etf){
        setSelectedETFs([...selectedETFs,etf])
      };
    
      function onRemove(isin){
        setSelectedETFs(prevETF => prevETF.filter(etf => etf.isin !== isin));
      };
    
      function onRemoveDisplayed(isin){
        setDisplayedETFs(prevETF => prevETF.filter(etf => etf.isin !== isin));
      };
    
      function displayETFs(isin, etf){
        setDisplayedETFs(prev => {
          const alreadyIncluded = prev.some(etf => etf.isin === isin);
          if(alreadyIncluded) return prev;
    
          const etfToAdd = selectedETFs.find(etf => etf.isin === isin);
          return [...prev, etfToAdd];
        })
      };

      const handleAddFavorite = (etf) => {
        if(!favoriteETFs.find(f => f.isin === etf.isin)){
            setFavoriteETFs([...favoriteETFs, etf]);
        }
      };

      const handleRemoveFavorite = (etf) => {
        setFavoriteETFs(prevFavorites =>
          prevFavorites.filter(f => f.isin !== etf.isin)
        );
      };

      return(
        <BrowserRouter>
            <nav>
                <Link to="/">ETF-Vergleich</Link>
                <Link to="/Favoriten">Favoriten</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Vergleich displayedETFs={displayedETFs} addETF={addETF} selectedETFs={selectedETFs} onRemove={onRemove} onRemoveDisplayed={onRemoveDisplayed} displayETFs={displayETFs} handleAddFavorite={handleAddFavorite}/>}/>
                <Route path="/Favoriten" element={<Favoriten favoriteETFs={favoriteETFs} handleAddFavorite={handleAddFavorite} handleRemoveFavorite={handleRemoveFavorite}/>} />
            </Routes>
        </BrowserRouter>
      );

}