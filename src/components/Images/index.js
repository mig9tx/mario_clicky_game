import React from "react";

function Images(props) {
    return (
        <div class="img-container">
          <img alt={props.key} src={props.src} clicked={props.clicked} width="150px"/>
        </div>
    );
}

export default Images;