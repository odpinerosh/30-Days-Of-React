import React from "react";
import './InputField.css';


const InputField = (props) => {

    const inputStyle = {
        gridArea: props.gridArea,
    }

    return (
        
            <input id={props.inputID} style={inputStyle} type="text" placeholder={props.inputID} className="input-field"></input>
        
    );

}

export default InputField;