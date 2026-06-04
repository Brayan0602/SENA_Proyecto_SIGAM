import { Link } from "react-router-dom";

function Sidebar() {

  return (

    <div className="sidebar">

      <h2>SIGAM</h2>

      <nav>

        <Link to="/admin">
          Dashboard
        </Link>

        <Link to="/admin">
          Estudiantes
        </Link>

        <Link to="/admin">
          Matrículas
        </Link>

        <Link to="/admin">
          Reportes
        </Link>

      </nav>

    </div>

  );

}

export default Sidebar;