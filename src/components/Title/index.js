import React from "react";
// import "./style.css";

const Title = (props) => {
    return (
        <div>
          <h1 className="title">{props.title}</h1>
        </div>
    );
};

Headers.defaultProps = {
    title: 'Mario Memory Game'
}

export default Title;