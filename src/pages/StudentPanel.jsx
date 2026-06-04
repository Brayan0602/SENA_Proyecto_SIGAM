import Navbar from "../layouts/components/Navbar";
import "../styles/panel.css";


function StudentPanel() {

  return (

    <div className="panel-container">

      <Navbar titulo="SIGAM - Panel Estudiante" />

      <div className="tarjetas">

        <div className="tarjeta">

          <h3>Matrícula</h3>

          <p>
            Gestión de asignaturas académicas
          </p>

        </div>

        <div className="tarjeta">

          <h3>Horario</h3>

          <p>
            Consulta de horarios académicos
          </p>

        </div>

        <div className="tarjeta">

          <h3>Perfil</h3>

          <p>
            Actualización de información personal
          </p>

        </div>

      </div>

    </div>

  );

}

export default StudentPanel;