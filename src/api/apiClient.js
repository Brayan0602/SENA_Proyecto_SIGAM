const API_URL = "http://localhost:5000/api";

// OBTENER DATOS
export const getData = async (endpoint) => {

  try {

    const response = await fetch(
      `${API_URL}/${endpoint}`
    );

    const data = await response.json();

    return data;

  } catch (error) {

    console.error(
      "Error obteniendo datos:",
      error
    );

  }

};

// ENVIAR DATOS
export const postData = async (
  endpoint,
  body
) => {

  try {

    const response = await fetch(
      `${API_URL}/${endpoint}`,
      {

        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify(body)

      }
    );

    const data = await response.json();

    return data;

  } catch (error) {

    console.error(
      "Error enviando datos:",
      error
    );

  }

};

export const deleteData = async (
  endpoint
) => {

  try {

    const response = await fetch(
      `${API_URL}/${endpoint}`,
      {
        method: "DELETE"
      }
    );

    return await response.json();

  } catch (error) {

    console.error(
      "Error eliminando:",
      error
    );

  }

};

export const putData = async (
  endpoint,
  body
) => {

  try {

    const response = await fetch(
      `${API_URL}/${endpoint}`,
      {
        method: "PUT",

        headers: {
          "Content-Type":
            "application/json"
        },

        body: JSON.stringify(body)
      }
    );

    return await response.json();

  } catch (error) {

    console.error(
      "Error actualizando:",
      error
    );

  }

};