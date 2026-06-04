import { useEffect, useState } from "react";

import {
  obtenerEstudiantes,
  agregarEstudiante,
  eliminarEstudianteService,
  actualizarEstudiante
} from "../../services/StudentService";

import StudentList from "./StudentList";

function StudentForm() {

  // ESTADOS
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [estudiantes, setEstudiantes] = useState([]);

  // CARGAR ESTUDIANTES DESDE MONGODB
  useEffect(() => {

    const cargarEstudiantes = async () => {

      try {

        const datos =
          await obtenerEstudiantes();

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

  // REGISTRAR ESTUDIANTE
  const registrarEstudiante = async (e) => {

    e.preventDefault();

    // VALIDACIÓN
    if (!nombre || !correo) {

      alert(
        "Complete todos los campos"
      );

      return;

    }

    try {

      const nuevoEstudiante = {

        nombre,
        correo

      };

      // GUARDAR EN MONGODB
      const estudianteGuardado =
        await agregarEstudiante(
          nuevoEstudiante
        );

      // ACTUALIZAR TABLA
      setEstudiantes([
        ...estudiantes,
        estudianteGuardado
      ]);

      // LIMPIAR CAMPOS
      setNombre("");
      setCorreo("");

    } catch (error) {

      console.error(
        "Error registrando estudiante:",
        error
      );

    }

  };

  // ACTUALIZAR ESTUDIANTE
  const editarEstudiante =
  async (id, datos) => {

    try {

      const actualizado =
        await actualizarEstudiante(
          id,
          datos
        );

      setEstudiantes(

        estudiantes.map(est =>

          est._id === id
            ? actualizado
            : est

        )

      );

    } catch (error) {

      console.error(error);

    }

};

  // ELIMINAR ESTUDIANTE
  const eliminarEstudiante = async (id) => {

    try {

      await eliminarEstudianteService(
        id
      );

      setEstudiantes(
        estudiantes.filter(
          est => est._id !== id
        )
      );

    } catch (error) {

      console.error(
        "Error eliminando estudiante:",
        error
      );

    }

  };

  return (

    <div className="tarjeta">

      <h3>
        Registro de Estudiantes
      </h3>

      <form
        onSubmit={registrarEstudiante}
      >

        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) =>
            setNombre(e.target.value)
          }
        />

        <br />
        <br />

        <input
          type="email"
          placeholder="Correo"
          value={correo}
          onChange={(e) =>
            setCorreo(e.target.value)
          }
        />

        <br />
        <br />

        <button type="submit">

          Registrar

        </button>

      </form>

      <hr />

      <h3>
        Listado de Estudiantes
      </h3>

      <table className="tabla-estudiantes">

        <thead>

          <tr>

            <th>ID</th>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Acciones</th>

          </tr>

        </thead>

        <tbody>

          <StudentList
            estudiantes={estudiantes}
            onEliminar={
              eliminarEstudiante
            }
             
            onActualizar={
              editarEstudiante
            }
          />

        </tbody>

      </table>

    </div>

  );

}

export default StudentForm;