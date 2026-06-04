import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, rolPermitido }) {

  // OBTENER ROL
  const rol = localStorage.getItem("rol");

  // VALIDAR ACCESO
  if (!rol || rol !== rolPermitido) {

    return <Navigate to="/" replace />;

  }

  // MOSTRAR COMPONENTE
  return children;

}

export default ProtectedRoute;