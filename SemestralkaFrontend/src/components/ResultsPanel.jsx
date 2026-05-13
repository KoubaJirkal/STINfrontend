function ResultsPanel({
    strongest,
    weakest,
    averages,
}) {
    return (
        <div style={{ padding: "20px" }}>
            <h2>Results</h2>

            <div>
                <h3>Strongest Currency</h3>

                {strongest && (
                    <p>
                        {strongest.currency} : {strongest.rate}
                    </p>
                )}
            </div>

            <div>
                <h3>Weakest Currency</h3>

                {weakest && (
                    <p>
                        {weakest.currency} : {weakest.rate}
                    </p>
                )}
            </div>

            <div>
                <h3>Average Rates</h3>

                {averages.map((a) => (
                    <p key={a.currency}>
                        {a.currency} : {a.averageRate}
                    </p>
                ))}
            </div>
        </div>
    );
}

export default ResultsPanel;