import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

export function PrivateRoute({ children }) {
  const { usuario, loading } = useAuth();

  if (loading) return <p className="loading-msg">Cargando...</p>;

  return usuario ? children : <Navigate to="/login" replace />;
}

export function PublicRoute({ children }) {
  const { usuario, loading } = useAuth();

  if (loading) return <p className="loading-msg">Cargando...</p>;

  return usuario ? <Navigate to="/" replace /> : children;
}
