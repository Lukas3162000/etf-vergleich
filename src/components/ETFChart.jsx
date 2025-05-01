import { dummyETFs } from "../data/dummyETFs";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function ETFChart({displayETFs , displayedETFs , onRemoveDisplayed}) {
    if(!displayedETFs || displayedETFs.length === 0){
        return <div style={{ marginTop:"5%", width: '93%', backgroundColor:"white", borderRadius:"16px", padding:"16px" }}>Wählen Sie einen ETF aus, um den Kursverlauf anzuzeigen.</div>
    }
    const etf = displayedETFs;
    //Gemeinsame Y-Achse
    const minWertY = Math.min(...etf.flatMap(e => e.kursdaten.map(d => d.wert)));
    const maxWertY = Math.max(...etf.flatMap(e => e.kursdaten.map(d => d.wert)));

    //Gemeinsame X-Achse
    const jahre = displayedETFs[0]?.kursdaten.map(d => d.jahr) || [];
    const mergedData = jahre.map(jahr => {
        const entry = { jahr };
        displayedETFs.forEach(etf => {
            const wertObj = etf.kursdaten.find(k => k.jahr === jahr);
            entry[etf.isin] = wertObj ? wertObj.wert : null;  // Sicherstellen, dass kein Fehler auftritt
        });
        return entry;
    });



    //Farben
    const farben = ["#8884d8", "#82ca9d", "#ff7300", "#ff0000"];


    return (
        <div style={{ marginTop:"5%", maxWidth: '900px', minHeight:"300px", minWidth: '600px', backgroundColor:"white", borderRadius:"16px", padding:"16px" }}>
            <h2 style={{ width:"100%", fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>
                ETF Kursverlauf 2019 bis 2023
            </h2>
            <div style={{height:"300px"}}>
            <ResponsiveContainer width="96%" height="100%">
                <LineChart data={mergedData}> 
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" dataKey="jahr" domain={[2019,2023]} tickCount={5}/>
                    <YAxis
                    domain={[minWertY, maxWertY]} // Definiert die Domain von Y-Achse
                    />
                    <Tooltip />
                    {etf.map((e,index) => (
                    <Line 
                        key={index} 
                        type="monotone"
                        dataKey={e.isin} 
                        name={e.name} 
                        stroke={farben[index % farben.length]}
                        dot={{ r:4 }} 
                        />
                    ))};
                </LineChart>
            </ResponsiveContainer>
            </div>
            
            
            <div style={{display:"flex", flexWrap:"wrap", gap:"8px", marginTop:"16px"}}>{displayedETFs.map((etf, index) => (
                        <div key={etf.isin} style={{
                            backgroundColor: '#f1f1f1',
                            borderRadius: "20px",
                            padding: "6px 12px",
                            display: "flex",
                            alignContent: "center"
                        }}>
                            <span style={{marginRight: "8px"}}>{etf.name}</span>
                            <svg 
                             onClick={() => onRemoveDisplayed(etf.isin)}
                              xmlns="http://www.w3.org/2000/svg" 
                              width="12" height="12" viewBox="0 0 24 24" 
                              fill="none" stroke="black" strokeWidth="2" 
                              strokeLinecap="round" strokeLinejoin="round"
                              style={{ cursor: "pointer",marginTop: "5px" }}
                              >
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                                
                        </div>
                    ))}</div>
                    
        </div>
    );
}