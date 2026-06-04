import Student from "../models/Student.js";

// Obtener todos
export const getStudents = async (req, res) => {

  try {

    const students = await Student.find();

    res.json(students);

  } catch (error) {

    res.status(500).json({
      mensaje: error.message
    });

  }

};

// Crear estudiante
export const createStudent = async (req, res) => {

  try {

    const student = await Student.create(
      req.body
    );

    res.status(201).json(student);

  } catch (error) {

    res.status(400).json({
      mensaje: error.message
    });

  }

};

// Actualizar estudiante
export const updateStudent = async (req, res) => {

  try {

    const student =
      await Student.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );

    res.json(student);

  } catch (error) {

    res.status(500).json({
      mensaje: error.message
    });

  }

};

// Eliminar estudiante
export const deleteStudent = async (req, res) => {

  try {

    await Student.findByIdAndDelete(
      req.params.id
    );

    res.json({
      mensaje: "Estudiante eliminado"
    });

  } catch (error) {

    res.status(500).json({
      mensaje: error.message
    });

  }

};