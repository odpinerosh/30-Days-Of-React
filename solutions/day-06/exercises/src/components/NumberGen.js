import React from "react";
import GridElement from "./GridElement";
import './NumberGen.css';

const NumberGen = () => {

    let arrNum = [];
        
    for (let i=0;i<=31;i++) {
        arrNum[i] = i;
    }



    return (
        <section className="numgen-container">
           <h2 className="numgen-title">number generator</h2>
           <ul>
               <GridElement arrNumbers={arrNum} />
           </ul>
        </section>
    );

};

export default NumberGen;