import React from "react";
import "./style.css"

const Images= props => 
   (
    
    <div className= "container-flex">
    <div className="card" onClick={() => props.clickCount(props.id)}>
      <div className="img-container">
        <img alt="" src={props.image} />
      </div>
    </div>
    </div>
  );


export default Images;
