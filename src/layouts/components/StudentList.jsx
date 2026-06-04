import StudentItem from "./StudentItem";

function StudentList({
  estudiantes,
  onEliminar,
  onActualizar
}) {

  return (

    <>
      {estudiantes.map((estudiante) => (

        <StudentItem
          key={estudiante._id}
          estudiante={estudiante}
          onEliminar={onEliminar}
          onActualizar={onActualizar}
        />

      ))}
    </>

  );

}

export default StudentList;