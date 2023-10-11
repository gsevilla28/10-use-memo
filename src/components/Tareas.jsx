import React, { useMemo, useState } from "react";

export const Tareas = () => {
  const [tareas, setTareas] = useState([]);
  const [contador, setContador] = useState(1200);

  const guardarTareas = (e) => {
    e.preventDefault();

    setTareas([...tareas, e.target.descripcion.value]);
    // console.log(tareas);
  };
  const borrarTarea = (index) => {
    const nuevasTareas = tareas.filter((item, indice) => indice !== index);
    // console.log(nuevasTareas);

    setTareas(nuevasTareas);
  };
  const sumarAlContador = () => {
    setContador(contador + 1);
  };

  const contadoresPasados = (acumulacion) => {
    for (let i = 0; i <= acumulacion; i++) {
      console.log("ejecutando acumulacion de contadores del pasado");
    }

    return `contador manual de tareas:${acumulacion}`;
  };

  //con use memo, la funcion que está dentro solo se ejecuttara cuando cambie la dependencia, en este caso el estado contador
  const memoContadores = useMemo(() => contadoresPasados(contador), [contador]);

  return (
    <div className="tareas-container">
      <h1>Mis tareas</h1>
      <form onSubmit={guardarTareas}>
        <input type="text" name="descripcion" placeholder="Describe la tarea" />{" "}
        <input type="submit" value="Guardar" />
      </form>
      <h3>{memoContadores}</h3>
      <button onClick={sumarAlContador}>Sumar</button> {/* <hr /> */}
      <h3>Lista de tareas</h3>
      <ul>
        {tareas.map((item, index) => {
          return (
            <li key={index}>
              {item}&nbsp;
              <button onClick={() => borrarTarea(index)}>X</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
