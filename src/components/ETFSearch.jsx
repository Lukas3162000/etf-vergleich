import React, { useState } from "react";
import "./ETFSearch.css"
import { dummyETFs } from "../data/dummyETFs";



const ETFSearch = (props) =>{
const [searchTerm, setSerachTerm] = useState("");


const filteredETFs = dummyETFs.filter(etf => 
    {if(searchTerm.length > 0){
        return etf.name.toLowerCase().includes(searchTerm.toLowerCase())}}
    )

const handleAdd = () => {
    const match = dummyETFs.find(etf => etf.name === searchTerm);
    if(match){
        props.addETF(match);
        setSerachTerm("");
    }
}


return( 
    <div className="search-container">
        <h1 style={{color: "#000", display: "flex"}}>ETF suchen</h1>
        <div className="input-wrapper">
            <input type="text" onChange={(e)=>setSerachTerm(e.target.value)} value={searchTerm} className="search-input" />
            <button 
            className="plus-button" 
            onClick={handleAdd}>
                +
            </button>
        </div>
        <ul>
            {filteredETFs.map((etf)=>(
                <li 
                key={etf.isin} 
                onClick={() => {
                    console.log("Clicked", etf.name)
                    setSerachTerm(etf.name)
                }} 
                style={{cursor: "pointer"}}>

                {etf.name}

                </li>
            ))}
        </ul>
    </div>

    );
};

export default ETFSearch;