import { useEffect, useState } from "react";

import api from "../api/api";

import Navbar from "../components/Navbar";
import SettingsPanel from "../components/SettingsPanel";
import ResultsPanel from "../components/ResultsPanel";
import CurrencyChart from "../components/CurrencyChart";
import ErrorPanel from "../components/ErrorPanel";

import translations from "../translations";

function DashboardPage() {
    const [baseCurrency, setBaseCurrency] =
        useState("EUR");

    const [selectedCurrencies,
        setSelectedCurrencies] =
        useState(["USD", "CZK"]);

    const [availableCurrencies,
        setAvailableCurrencies] =
        useState([]);

    const [language, setLanguage] =
        useState("CZ");

    const [startDate, setStartDate] =
        useState("2025-01-01");

    const [endDate, setEndDate] =
        useState("2025-01-05");

    const [strongest, setStrongest] =
        useState(null);

    const [weakest, setWeakest] =
        useState(null);

    const [averages, setAverages] =
        useState([]);

    const [chartData, setChartData] =
        useState([]);

    const [error, setError] =
        useState(false);

    const [usingCache, setUsingCache] =
        useState(false);

    const [lastUpdated, setLastUpdated] =
        useState("");

    const symbols =
        selectedCurrencies.join(",");

    const t = translations[language];

    const saveSettings = async () => {
        try {
            await api.put("/settings", {
                baseCurrency,
                selectedCurrencies:
                    selectedCurrencies.join(","),
            });

            localStorage.setItem(
                "language",
                language
            );

            alert("Settings saved");
        }
        catch (err) {
            console.log(err);

            alert("Unable to save settings");
        }
    };

    const loadSettings = async () => {
        try {
            const response =
                await api.get("/settings");

            setBaseCurrency(
                response.data.baseCurrency
            );

            setSelectedCurrencies(
                response.data.selectedCurrencies
                    .split(",")
            );
        }
        catch (err) {
            console.log(err);
        }
    };

    const loadCurrencies = async () => {
        try {
            const response =
                await api.get("/rates/currencies");

            setAvailableCurrencies(
                Object.keys(response.data)
            );
        }
        catch (err) {
            console.log(err);
        }
    };

    const loadData = async () => {
        try {
            setError(false);

            const strongestResponse =
                await api.get("/rates/strongest", {
                    params: {
                        baseCurrency,
                        symbols,
                    },
                });

            setStrongest(
                strongestResponse.data
            );

            const weakestResponse =
                await api.get("/rates/weakest", {
                    params: {
                        baseCurrency,
                        symbols,
                    },
                });

            setWeakest(
                weakestResponse.data
            );

            const averageResponse =
                await api.get("/rates/average", {
                    params: {
                        startDate,
                        endDate,
                        baseCurrency,
                        symbols,
                    },
                });

            setAverages(
                averageResponse.data
            );

            const historyResponse =
                await api.get("/rates/history", {
                    params: {
                        startDate,
                        endDate,
                        baseCurrency,
                        symbols,
                    },
                });

            const formattedChartData =
                Object.entries(historyResponse.data.rates)
                    .map(([date, rates]) => ({
                        date,
                        ...rates,
                    }));

            setChartData(formattedChartData);

            setUsingCache(false);
        }
        catch (err) {
            setError(true);

            console.log(err);
        }
    };

    useEffect(() => {
        const savedLanguage =
            localStorage.getItem("language");

        if (savedLanguage)
            setLanguage(savedLanguage);

        loadCurrencies();
        loadSettings();
    }, []);

    useEffect(() => {
        if (
            baseCurrency &&
            selectedCurrencies.length > 0
        ) {
            loadData();
        }
    }, [
        baseCurrency,
        selectedCurrencies,
        startDate,
        endDate,
    ]);

    return (
        <div>
            <Navbar t={t} />

            <ErrorPanel
                error={error}
                usingCache={usingCache}
                lastUpdated={lastUpdated}
                onRetry={loadData}
                t={t}
            />

            <div
                style={{
                    display: "flex",
                    minHeight: "90vh",
                }}
            >
                <SettingsPanel
                    availableCurrencies={availableCurrencies}
                    baseCurrency={baseCurrency}
                    setBaseCurrency={setBaseCurrency}
                    selectedCurrencies={selectedCurrencies}
                    setSelectedCurrencies={setSelectedCurrencies}
                    language={language}
                    setLanguage={setLanguage}
                    startDate={startDate}
                    setStartDate={setStartDate}
                    endDate={endDate}
                    setEndDate={setEndDate}
                    onRefresh={loadData}
                    onSave={saveSettings}
                    t={t}
                />

                <div
                    style={{
                        flex: 1,
                        padding: "20px",
                    }}
                >
                    <ResultsPanel
                        strongest={strongest}
                        weakest={weakest}
                        averages={averages}
                        t={t}
                    />

                    <CurrencyChart
                        data={chartData}
                        symbols={symbols}
                        t={t}
                    />
                </div>
            </div>
        </div>
    );
}

export default DashboardPage;