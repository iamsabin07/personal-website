import React from "react";

const Card = ({image, heading, detail, width ="64px", height ="64px"}) =>{
    return(
    <div className = "card">
        <img src = {image} alt = {heading} width = {width} height = {height}/>
        <span style={{fontWeight: 'bold' }}>{heading}</span>
        <span>{detail}</span>
    </div>
    )
}

export default Card;