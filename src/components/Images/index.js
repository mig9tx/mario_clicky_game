import React from "react";

function Images(props) {
    function handleClick (event) {
        event.preventDefault();
        console.log('this image of mario clicked', props.id, props.clicked);
        
      }
    return (
        <div class="img-container">
          <img id={props.id} alt={props.key} src={props.src} clicked={false} 
          onClick={handleClick} width="150px"/>
        </div>
    );
}

export default Images;