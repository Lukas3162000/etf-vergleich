import React, { useState } from "react";
import "./ETFSearch.css"



const ETFSearch = () =>{
//Hier den Changehandler für das Inputfield machen. Also dass zb ne etf liste aus dummyETF in ner preview gefildert wird und aktualisiert
const changeHandler = ()=>{};

//Hier den submithandler für das Inputfield machen.
const submitHandler = ()=>{};

return( 
    <div className="search-container">
        <h1 style={{color: "#000", display: "flex"}}>ETF suchen</h1>
        <div className="input-wrapper">
            <input type="text" name="" id="" onChange={{}} className="search-input" />
            <button className="plus-button" onSubmit={{}}>+</button>
        </div>
    </div>

    );
};

export default ETFSearch;