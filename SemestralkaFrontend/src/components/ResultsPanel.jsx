function ResultsPanel({
    strongest,
    weakest,
    averages,
    t,
}) {
    return (
        <div style={{ padding: "20px" }}>
            <h2>{t.results}</h2>

            <div>
                <h3>{t.strongestCurrency}</h3>

                {strongest && (
                    <p>
                        {strongest.currency} : {strongest.rate}
                    </p>
                )}
            </div>

            <div>
                <h3>{t.weakestCurrency}</h3>

                {weakest && (
                    <p>
                        {weakest.currency} : {weakest.rate}
                    </p>
                )}
            </div>

            <div>
                <h3>{t.averageRates}</h3>

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