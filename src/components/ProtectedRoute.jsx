import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  // Optional: Handle loading state if your auth check is async
  if (loading) return <div>Loading...</div>;

  if (!user) {
    // If not logged in, redirect to Sign In
    return <Navigate to="/signin" replace />;
  }

  return children;
};

export default ProtectedRoute;