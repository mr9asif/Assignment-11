import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const PrivetRoute = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    useEffect(() => {
        // Simulate an asynchronous authentication check
        const delay = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(delay);
    }, []);

    if (loading) {
        return <h1>Loading.......</h1>;
    }

    if (!user) {
        return navigate("/errorpage");
    }

    return children;
};

export default PrivetRoute;
