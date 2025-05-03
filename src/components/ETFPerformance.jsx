import React from "react";

export default function ETFPerformance({ etfs }) {
    if(!etfs || etfs.length === 0) return null;
    console.log(etfs);
    return (
        <div>
            {etfs.map((etf) => (
                <div key={etf.isin} style={{ marginTop:"5%", maxWidth: '900px', minWidth: '600px', backgroundColor:"white", borderRadius:"16px", padding:"16px" }}>
                    <h3>jährliche Performance (%)</h3>
                    <strong>{etf.name}</strong>
                    <div style={{display:"flex", gap:"12px", flexWrap:"Wrap", marginTop:"4px"}}>
                        {etf.kursdaten.slice(1).map((d,i) => {
                            const vorher = etf.kursdaten[i].wert;
                            const wachstum = ((d.wert - vorher)/vorher)*100;

                            return(
                                <div key={i} style={{ minWidth:"80px"}}>
                                    {d.jahr}: {wachstum.toFixed(2)}%
                                </div>
                            );
                        })}
                    </div>
                </div>
            ))}
        </div>
    )
  }
  