import React from "react";
import './Button.css';


const Button = (props) => {

    const buttonStyle = { gridArea: props.gridArea, };

    return (
        <button type="button" style={buttonStyle} className="btn">Subscribe!</button>
    );

}

export default Button;