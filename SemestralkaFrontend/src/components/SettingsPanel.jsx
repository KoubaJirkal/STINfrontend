function SettingsPanel({
    availableCurrencies,
    baseCurrency,
    setBaseCurrency,
    selectedCurrencies,
    setSelectedCurrencies,
    language,
    setLanguage,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    onRefresh,
    onSave,
    t,
}) {
    const handleCheckboxChange = (currency) => {
        if (selectedCurrencies.includes(currency)) {
            setSelectedCurrencies(
                selectedCurrencies.filter(
                    (c) => c !== currency
                )
            );
        }
        else {
            setSelectedCurrencies([
                ...selectedCurrencies,
                currency,
            ]);
        }
    };

    return (
        <div
            style={{
                width: "300px",
                padding: "20px",
                borderRight: "1px solid gray",
                overflowY: "auto",
                maxHeight: "90vh",
            }}
        >
            <h2>{t.settings}</h2>

            <div>
                <p>{t.defaultBaseCurrency}</p>

                <select
                    value={baseCurrency}
                    onChange={(e) =>
                        setBaseCurrency(e.target.value)
                    }
                >
                    {availableCurrencies.map((currency) => (
                        <option
                            key={currency}
                            value={currency}
                        >
                            {currency}
                        </option>
                    ))}
                </select>
            </div>

            <div>
                <p>{t.preferredCurrencies}</p>

                {availableCurrencies.map((currency) => (
                    <div key={currency}>
                        <input
                            type="checkbox"
                            checked={selectedCurrencies.includes(currency)}
                            onChange={() =>
                                handleCheckboxChange(currency)
                            }
                        />

                        {currency}
                    </div>
                ))}
            </div>

            <div>
                <p>{t.language}</p>

                <select
                    value={language}
                    onChange={(e) =>
                        setLanguage(e.target.value)
                    }
                >
                    <option value="CZ">
                        CZ
                    </option>

                    <option value="EN">
                        EN
                    </option>
                </select>
            </div>

            <div>
                <p>{t.startDate}</p>

                <input
                    type="date"
                    value={startDate}
                    onChange={(e) =>
                        setStartDate(e.target.value)
                    }
                />
            </div>

            <div>
                <p>{t.endDate}</p>

                <input
                    type="date"
                    value={endDate}
                    onChange={(e) =>
                        setEndDate(e.target.value)
                    }
                />
            </div>

            <button onClick={onSave}>
                {t.saveSettings}
            </button>

            <button onClick={onRefresh}>
                {t.refresh}
            </button>
        </div>
    );
}

export default SettingsPanel;