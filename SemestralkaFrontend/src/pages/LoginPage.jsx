import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

function LoginPage() {
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await api.post("/auth/login", {
                password: password,
            });

            localStorage.setItem("token", response.data.token);

            navigate("/dashboard");
        }
        catch (err) {
            setError("Invalid password");
        }
    };

    return (
        <div>
            <h1>Login</h1>

            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button onClick={handleLogin}>
                Login
            </button>

            <p>{error}</p>
        </div>
    );
}

export default LoginPage;