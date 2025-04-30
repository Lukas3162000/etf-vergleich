import { dummyETFs } from "../data/dummyETFs";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function ETFChart({displayETFs , displayedETFs}) {
    if(!displayedETFs || displayedETFs.length === 0){
        return <div style={{ marginTop:"5%", width: '93%', backgroundColor:"white", borderRadius:"16px", padding:"16px" }}>Wählen Sie einen ETF aus, um den Kursverlauf anzuzeigen.</div>
    }
    const etf = displayedETFs;

    const minWert = Math.min(...etf.flatMap(e => e.kursdaten.map(d => d.wert)));
    const maxWert = Math.max(...etf.flatMap(e => e.kursdaten.map(d => d.wert)));

    //Gemeinsame X-Achse
    const jahre = displayETFs[0]?.kursdaten.map(d => d.jahr) || [];
    const mergedData = jahre.map(jahr => {
        const entry = { jahr };
        displayETFs.forEach(etf => {
            const wertObj = etf.kursdaten.find(k => k.jahr === jahr);
            entry[etf.isin] = wertObj ? wertObj.wert : null;  // Sicherstellen, dass kein Fehler auftritt
        });
        return entry;
    });

    //Farben
    const farben = ["#8884d8", "#82ca9d", "#ff7300", "#ff0000"];


    return (
        <div style={{ marginTop:"5%", width: '93%', height: '300px', backgroundColor:"white", borderRadius:"16px", padding:"16px" }}>
            <h2 style={{ width:"100%", fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>
                {etf.map(e => e.name).join(" vs. ")} - Kursverlauf
            </h2>
            <ResponsiveContainer width="96%" height="70%">
                <LineChart data={mergedData}> 
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="jahr" />
                    <YAxis
                    domain={[minWert, maxWert]} // Definiert die Domain von Y-Achse
                    />
                    <Tooltip />
                    {etf.map((e,index) => (
                        <Line key={index} data={e.kursdaten} dataKey="wert" name={e.name} stroke={index === 0 ? "#8884d8" : farben[index]} dot={{ r:4 }} type="monotone"/>
                    ))};
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}