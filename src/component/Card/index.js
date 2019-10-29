import React from "react";
import "./style.css";

function Card(props){
    return(
        <image src={props.image} className='cardCharacter'/>
    )
}

export default Card;