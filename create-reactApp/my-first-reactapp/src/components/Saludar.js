import React from "react";

export default function Saludar(props){
console.log(props)
    return (
        <div>
            <p> Hola {props.userInfo.nombre}, 
            tienes {props.userInfo.edad},  
            y tu color fav es el {props.userInfo.color} </p>
        </div>
    )
}