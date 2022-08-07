import React, { useState } from "react";
import { Box, BoxNum, BoxText } from './HobbiesStyles';


const SingleCard = ({index, image, text, image2, text2}) =>{
    const [flipped, setFlipped] = useState(false);
    
    const handleClick = () =>{
        setFlipped(!flipped);
    }

    return(
        <div className="hobbies-card">
        <div className={flipped? "flipped": ""}>
        <Box key = {index} className = "front1" onMouseLeave={handleClick}>
        <BoxNum><span style={{textAlign:"center"}}><img src = {image2} width= "100px"  height="100px"/></span></BoxNum>
        <br/>
        <BoxText>{text2}</BoxText>
        </Box>
        <Box key = {index} className = "back" onMouseEnter={handleClick}>
        <BoxNum><span style={{textAlign:"center"}}><img src = {image} width= "100px"  height="100px"/></span></BoxNum>
        <br/>
        <BoxText>{text}</BoxText>
      </Box>
      </div>
      </div>

    )
}

export default SingleCard;