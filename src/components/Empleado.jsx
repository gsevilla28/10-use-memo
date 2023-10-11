import React, { useState } from "react";
import { useEffect } from "react";

export const Empleado = React.memo(({ pagina = 1, mensaje }) => {
  const [empleados, setEmpleados] = useState([]);

  //Memo sirve para renderizar subcomponente solamente cuando detecte un cambio
  useEffect(() => {
    console.log("componente empleado renderizado");
  }, [empleados]);

  useEffect(() => {
    getEmpleados(pagina);
    mensaje();
  }, [pagina]);

  const getEmpleados = async (p) => {
    const url = `https://reqres.in/api/users?page=${p}`;

    const peticion = await fetch(url);
    const { data } = await peticion.json();
    setEmpleados(data);
  };

  return (
    <div>
      <p>Mostrando pagina: {pagina}</p>
      <ul className="empleados">
        {empleados.length >= 1 &&
          empleados.map((item) => <li key={item.id}>{item.first_name}</li>)}
      </ul>
    </div>
  );
});
