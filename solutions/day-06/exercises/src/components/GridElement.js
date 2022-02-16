import React from "react";

const GridElement = ( {arrNumbers} ) => {

    let gridColor = '';
    let arrPrime = [2,3,5,7,11,13,17,19,23,29,31];
    
    const list = arrNumbers.map(
        (num) => {
            let inPrime = arrPrime.indexOf(num);
            
            if (inPrime === -1) { //El número NO está en el arreglo de números primos
                (num % 2 === 0) ? gridColor = {backgroundColor: '#2DBF73'} : gridColor = {backgroundColor: '#FDDB3A'};
            } else {
                gridColor = {backgroundColor: '#FA5E53'};
            }
            
            return <li key={num} style={gridColor}>{num}</li>;
        }
    ) 

    
    
    return (
        list
    );
}

export default GridElement;