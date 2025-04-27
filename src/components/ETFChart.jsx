import { dummyETFs } from "../data/dummyETFs";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function ETFChart({displayETF , displayedETF}) {
    if(!displayedETF){
        return <div style={{ marginTop:"5%", width: '93%', backgroundColor:"white", borderRadius:"16px", padding:"16px" }}>Wählen Sie einen ETF aus, um den Kursverlauf anzuzeigen.</div>
    }
    const etf = displayedETF;

    const minWert = Math.min(...etf.kursdaten.map(data => data.wert));
    const maxWert = Math.max(...etf.kursdaten.map(data => data.wert));

    return (
        <div style={{ marginTop:"5%", width: '93%', height: '300px', backgroundColor:"white", borderRadius:"16px", padding:"16px" }}>
            <h2 style={{ width:"100%", fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>
                {etf.name} - Kursverlauf
            </h2>
            <ResponsiveContainer width="96%" height="70%">
                <LineChart data={etf.kursdaten}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="jahr" />
                    <YAxis
                    domain={[minWert, maxWert]} // Definiert die Domain von Y-Achse
                    />
                    <Tooltip />
                    <Line type="monotone" dataKey="wert" stroke="#8884d8" strokeWidth={3} dot={{ r: 4}}/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}