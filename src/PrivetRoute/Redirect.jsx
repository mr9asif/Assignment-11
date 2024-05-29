import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Redirect = ({ children }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      return <div>Loading...</div>;
    }
  

    // Check if user is authenticated
    if (!user) {
      // Redirect to login page if user is not authenticated
      navigate("/login");
    } else {
      setIsLoading(false);
    }
  }, [user, navigate]);

  // Show loading indicator while authentication status is being checked
 
  // Render children if user is authenticated
  return children;
};

export default Redirect;
