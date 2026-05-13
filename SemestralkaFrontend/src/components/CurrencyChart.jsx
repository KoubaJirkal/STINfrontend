import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    Legend,
    ResponsiveContainer,
} from "recharts";

function CurrencyChart({ data, symbols }) {
    return (
        <div
            style={{
                width: "100%",
                height: "400px",
                marginTop: "20px",
            }}
        >
            <h2>Exchange Rate History</h2>

            <ResponsiveContainer>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis dataKey="date" />

                    <YAxis />

                    <Tooltip />

                    <Legend />

                    {symbols.split(",").map((symbol) => (
                        <Line
                            key={symbol}
                            type="monotone"
                            dataKey={symbol}
                        />
                    ))}
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default CurrencyChart;