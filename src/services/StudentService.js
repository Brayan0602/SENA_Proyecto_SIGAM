import {
  getData,
  postData,
  deleteData,
  putData
} from "../api/apiClient";

// Obtener estudiantes
export const obtenerEstudiantes =
 async () => {
  return await getData("estudiantes");
};

// Crear estudiante
export const agregarEstudiante =
 async (estudiante) => {
  return await postData(
    "estudiantes",
    estudiante
  );
};

// Actualizar estudiante
export const actualizarEstudiante =
  async (id, estudiante) => {
    return await putData(
      `estudiantes/${id}`,
      estudiante
    );

};

// Eliminar estudiante
export const eliminarEstudianteService = 
async (id) => {
  return await deleteData(
    `estudiantes/${id}`
  );
};