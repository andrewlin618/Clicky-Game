import React from "react";
import "./style.css"

function Card(props){
    return(
        <img key={props.key} id={props.key} src={props.image} alt={props.name} onClick={props.onClick} className="btn btn-light"/>
    )
}
export default Card;