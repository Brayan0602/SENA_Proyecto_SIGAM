import { useNavigate } from "react-router-dom";

function Navbar({ titulo }) {

  const navigate = useNavigate();

  const usuario = localStorage.getItem("usuario");

  // CERRAR SESIÓN
  const cerrarSesion = () => {

    localStorage.clear();

    navigate("/");

  };

  return (

    <header className="navbar">

      <div>

        <h1>{titulo}</h1>

        <p>
          Bienvenido {usuario}
        </p>

      </div>

      <button onClick={cerrarSesion}>
        Cerrar Sesión
      </button>

    </header>

  );

}

export default Navbar;