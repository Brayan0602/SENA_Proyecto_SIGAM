// IMPORTAR ROUTER
import { BrowserRouter, Routes, Route } from "react-router-dom";

// IMPORTAR COMPONENTES
import Login from "./pages/Login";
import AdminPanel from "./pages/AdminPanel";
import StudentPanel from "./pages/StudentPanel";
import ProtectedRoute from "./routes/ProtectedRoute";

// COMPONENTE PRINCIPAL
function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Login />}
        />

        <Route
          path="/admin"
          element={
            <ProtectedRoute rolPermitido="admin">

              <AdminPanel />

            </ProtectedRoute>
          }
        />

        <Route
          path="/estudiante"
          element={
            <ProtectedRoute rolPermitido="estudiante">

              <StudentPanel />

            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>

  );

}

export default App;