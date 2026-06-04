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
  const usuario = localStorage.getItem("usuario");

  // ESTADO DE ESTUDIANTES
  const [estudiantes, setEstudiantes] = useState([]);

  // CARGAR DATOS
  useEffect(() => {

    const cargarEstudiantes = async () => {

      try {

        const datos = await obtenerEstudiantes();

        setEstudiantes(datos || []);

      } catch (error) {

        console.error(
          "Error cargando estudiantes:",
          error
        );

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

  <Sidebar />

  <div className="panel-container">

      {/* NAVBAR */}
      <Navbar titulo="SIGAM - Panel Administrador" />

      {/* BIENVENIDA */}
      <div style={{ marginBottom: "20px" }}>

        <h2>
          Bienvenido, {usuario}
        </h2>

        <p>
          Panel de gestión académica del sistema SIGAM.
        </p>

      </div>

      {/* DASHBOARD */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          marginBottom: "30px"
        }}
      >

        <DashboardCard
          titulo="Estudiantes"
          valor={estudiantes.length}
          color="#2563eb"
        />

        <DashboardCard
          titulo="Matrículas"
          valor="24"
          color="#16a34a"
        />

        <DashboardCard
          titulo="Asignaturas"
          valor="18"
          color="#ea580c"
        />

      </div>

      {/* FORMULARIO */}
      <StudentForm />

      {/* BOTONES */}
      <div className="botones-panel">

        <button>
          Gestionar Estudiantes
        </button>

        <button>
          Generar Reportes
        </button>

        <button onClick={cerrarSesion}>
          Cerrar Sesión
        </button>

      </div>
    
     </div>

    </div>

  );

}

export default AdminPanel;