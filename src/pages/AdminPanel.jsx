import "../styles/panel.css";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "../layouts/components/Navbar";
import StudentForm from "../layouts/components/StudentForm";
import DashboardCard from "../layouts/components/DashboardCard";
import Sidebar from "../layouts/components/Sidebar";

import { obtenerEstudiantes } from "../services/StudentService";

function AdminPanel() {
  // NAVEGACIÓN
  const navigate = useNavigate();

  // USUARIO ACTUAL
  const usuario = localStorage.getItem("usuario") || "Administrador";

  // ESTADO DE ESTUDIANTES
  const [estudiantes, setEstudiantes] = useState([]);

  // CARGAR DATOS
  useEffect(() => {
    const cargarEstudiantes = async () => {
      try {
        const datos = await obtenerEstudiantes();
        setEstudiantes(datos || []);
      } catch (error) {
        console.error("Error cargando estudiantes:", error);
      }
    };

    cargarEstudiantes();
  }, []);

  // CERRAR SESIÓN
  const cerrarSesion = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="layout-admin">
      {/* COMPONENTE SIDEBAR LATERAL */}
      <Sidebar />

      <div className="panel-container">
        {/* NAVBAR SUPERIOR */}
        <Navbar titulo="SIGAM - Panel Administrador" />

        {/* SECCIÓN DE BIENVENIDA INSTITUCIONAL */}
        <header className="welcome-banner">
          <h2>Bienvenido, {usuario}</h2>
          <p>Panel de gestión académica del sistema SIGAM.</p>
        </header>

        {/* REJILLA DE TARJETAS (MÉTRICAS) */}
        <section className="dashboard-grid">
          <DashboardCard
            titulo="Estudiantes"
            valor={estudiantes.length}
            color="#1e40af" /* Azul institucional unificado */
            icono="🎓"
          />

          <DashboardCard
            titulo="Matrículas"
            valor="24"
            color="#16a34a" /* Verde de estado activo */
            icono="📝"
          />

          <DashboardCard
            titulo="Asignaturas"
            valor="18"
            color="#ea580c" /* Naranja sutil */
            icono="📚"
          />
        </section>

        {/* COMPONENTE FORMULARIO DE ACCIÓN */}
        <section className="form-section">
          <StudentForm />
        </section>

        {/* BOTONERA DE ACCIONES SECUNDARIAS */}
        <footer className="botones-panel">
          <button className="btn-secondary">
            Gestionar Estudiantes
          </button>
          
          <button className="btn-secondary">
            Generar Reportes
          </button>
          
          <button onClick={cerrarSesion} className="btn-danger-action">
            Cerrar Sesión
          </button>
        </footer>
      </div>
    </div>
  );
}

export default AdminPanel;
