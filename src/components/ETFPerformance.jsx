import React from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Bar,
  BarChart,
  Legend
} from "recharts";

export default function ETFPerformance({ etfs }) {
  if (!etfs || etfs.length === 0) return null;

  return (
    <div>
      {etfs.map((etf) => {
        const performanceDaten = etf.kursdaten.slice(1).map((d, i) => {
          const vorher = etf.kursdaten[i].wert;
          const wachstum = ((d.wert - vorher) / vorher) * 100

          return {
            jahr: d.jahr,
            wachstum: parseFloat(wachstum.toFixed(2)),
          };
        });

        const minWertY = Math.floor(Math.min(...performanceDaten));
        const maxWertY = Math.ceil(Math.max(...performanceDaten));
        
        
        return (
          <div
            key={etf.isin}
            style={{
              marginTop: "5%",
              maxWidth: "900px",
              minWidth: "600px",
              backgroundColor: "white",
              borderRadius: "16px",
              padding: "16px",
            }}
          >
            <h3>Jährliche Performance (%)</h3>
            <strong>{etf.name}</strong>

            <div
              style={{
                display: "flex",
                gap: "12px",
                flexWrap: "wrap",
                marginTop: "4px",
              }}
            >
              {performanceDaten.map((d, i) => (
                <div key={i} style={{ minWidth: "80px" }}>
                  {d.jahr}: {d.wachstum}%
                </div>
              ))}
            </div>


            {/* Dein eigenes Chart kommt hier hin */}
            <div style={{ height: "250px", marginTop: "20px" }}>
                <ResponsiveContainer width="96%" height="100%">
                    <BarChart data={performanceDaten}>
                        <Bar type={"monotone"}  dataKey={"wachstum"}/>
                        <XAxis dataKey={"jahr"}/>
                        <YAxis domain={[-10, 10]} tickFormatter={(tick) => {return tick+"%"}}/>
                        <Tooltip />
                        <CartesianGrid strokeDasharray="10 10"/>
                        <legend />

                    </BarChart>
                </ResponsiveContainer>
            </div>
          </div>
        );
      })}
    </div>
  );

};
