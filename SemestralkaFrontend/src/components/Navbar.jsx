import { useNavigate } from "react-router-dom";

function Navbar({ t }) {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");

        navigate("/");
    };

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px",
                borderBottom: "1px solid gray",
            }}
        >
            <h2>Currency Dashboard</h2>

            <button onClick={handleLogout}>
                {t.logout}
            </button>
        </div>
    );
}

export default Navbar;