// IMPORTAR useState
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

// COMPONENTE LOGIN
function Login() {

    const navigate = useNavigate();

  // ESTADOS
  const [usuario, setUsuario] = useState("");
  const [clave, setClave] = useState("");
  const [rol, setRol] = useState("");
  const [mensaje, setMensaje] = useState("");

  // FUNCIÓN LOGIN
  const iniciarSesion = (e) => {

    e.preventDefault();

    // VALIDACIÓN CAMPOS
    if (!usuario || !clave || !rol) {
      setMensaje("Complete todos los campos");
      return;
    }

    // USUARIOS SIMULADOS
    const usuarios = [
      {
        usuario: "admin",
        clave: "1234",
        rol: "admin"
      },
      {
        usuario: "estudiante",
        clave: "1234",
        rol: "estudiante"
      }
    ];

    // VALIDAR USUARIO
    const usuarioValido = usuarios.find(
      (u) =>
        u.usuario === usuario &&
        u.clave === clave &&
        u.rol === rol
    );

    // SI EXISTE
    if (usuarioValido) {

      localStorage.setItem("usuario", usuario);
      localStorage.setItem("rol", rol);

      if (rol === "admin") {

  navigate("/admin");

} else {

  navigate("/estudiante");

}

    } else {

      setMensaje("Datos incorrectos");

    }

  };

  // INTERFAZ
  return (

    <div className="login-container">

      <h1>SIGAM</h1>

      <h2>Inicio de Sesión</h2>

      <form onSubmit={iniciarSesion}>

        <input
          type="text"
          placeholder="Usuario"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />

        <br /><br />

        <input
          type="password"
          placeholder="Contraseña"
          value={clave}
          onChange={(e) => setClave(e.target.value)}
        />

        <br /><br />

        <select
          value={rol}
          onChange={(e) => setRol(e.target.value)}
        >

          <option value="">Seleccione Rol</option>
          <option value="admin">Administrador</option>
          <option value="estudiante">Estudiante</option>

        </select>

        <br /><br />

        <button type="submit">
          Ingresar
        </button>

      </form>

      <p className="mensaje">
        {mensaje}
     </p>

    </div>

  );

}

// EXPORTAR COMPONENTE
export default Login;