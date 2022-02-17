import React from "react";
import GridElement from "./GridElement";
import './HexColor.css';

const HexColor = () => {

    let arrNum = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
    
    return (
        <section className="hexcolor-container">
           <h2 className="hexcolor-title">hexadecimal colors</h2>
           <ul>
               <GridElement arrNumbers={arrNum} app="colors"/>
           </ul>
        </section>
    );

};

export default HexColor;