import React from "react";

export default function Saludar(props){
    // Función destructuring.
    // Lo que hace es extender las propiedades a una variable o constante. Permitiendonos no tener que estructurar por nivel para acceder a sus valores
    // El Ejemplo sin usar la funcion destructuring, seria props.userInfo.nombre
    const {userInfo, saludarFn} = props;
    const {nombre = "Anonimo",edad = "Prefiero no decirlo"} = userInfo;
console.log(props);
console.log(userInfo);
console.log(saludarFn);
    return (
        <div>
         <button onClick={() => saludarFn(nombre, edad)}>
            LetsGo
            </button>
        </div>
    )
}