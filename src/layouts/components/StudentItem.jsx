import { useState } from "react";
function StudentItem({
  estudiante,
  onEliminar,
  onActualizar
}) {

  const [editando, setEditando] =
    useState(false);

  const [nombre, setNombre] =
    useState(estudiante.nombre);

  const [correo, setCorreo] =
    useState(estudiante.correo);

  const guardarCambios =
    async () => {

      await onActualizar(
        estudiante._id,
        {
          nombre,
          correo
        }
      );

      setEditando(false);

    };

  return (

    <tr>

      <td>{estudiante._id}</td>

      <td>

        {
          editando
            ? (
              <input
                value={nombre}
                onChange={(e) =>
                  setNombre(
                    e.target.value
                  )
                }
              />
            )
            : nombre
        }

      </td>

      <td>

        {
          editando
            ? (
              <input
                value={correo}
                onChange={(e) =>
                  setCorreo(
                    e.target.value
                  )
                }
              />
            )
            : correo
        }

      </td>

      <td>

        {
          editando ? (

            <button
              onClick={
                guardarCambios
              }
            >
              Guardar
            </button>

          ) : (

            <button
              onClick={() =>
                setEditando(true)
              }
            >
              Editar
            </button>

          )
        }

        <button
          onClick={() =>
            onEliminar(
              estudiante._id
            )
          }
        >
          Eliminar
        </button>

      </td>

    </tr>

  );

}

export default StudentItem;