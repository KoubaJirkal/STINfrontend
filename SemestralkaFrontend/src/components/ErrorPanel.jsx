
function ErrorPanel({
    error,
    usingCache,
    lastUpdated,
    onRetry,
}) {
    if (!error && !usingCache)
        return null;

    return (
        <div
            style={{
                border: "1px solid red",
                padding: "15px",
                margin: "20px",
            }}
        >
            <h3>Error</h3>

            {error && (
                <p>
                    Unable to fetch data from
                    ExchangeRate API
                </p>
            )}

            {usingCache && (
                <p>
                    Using cached data from:
                    {" "}
                    {lastUpdated}
                </p>
            )}

            <button onClick={onRetry}>
                Retry
            </button>
        </div>
    );
}

export default ErrorPanel;