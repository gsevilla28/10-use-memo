import React, { useEffect, useRef, useState } from "react";
import { Empleado } from "./Empleado";
import { useCallback } from "react";

export const Gestion = () => {
  const [nombre, setNombre] = useState("");
  const [pagina, setPagina] = useState(1);
  // const gestorInput = useRef();

  useEffect(() => {
    console.log("la vista Gestion se ha renderizado por cambio en estado");
  }, [nombre, pagina]);

  const mostrarMensaje = useCallback(() => {
    console.log("Hola, soy un mensaje desde el componente de empleados");
  }, [pagina]);

  //use callback sirve para memorizar la funcion y que no se ejecute sin que sea necesario

  const asignarGestor = (e) => {
    //setNombre(gestorInput.current.value);
    setNombre(e.target.value);
  };

  return (
    <div>
      <h1>Nombre del Gestor: {nombre}</h1>
      <input
        type="text"
        // ref={gestorInput}
        onChange={asignarGestor}
        placeholder="Introduce tu nombre de gestor"
      />
      <h2>Listado de empleados:</h2>
      <p>
        Los usuarios son administrados por {nombre} y vienen de jsonplaceholder
      </p>
      <button onClick={() => setPagina(1)}>pagina 1</button>
      <button onClick={() => setPagina(2)}>pagina 2</button>
      <Empleado pagina={pagina} mensaje={mostrarMensaje} />
    </div>
  );
};
