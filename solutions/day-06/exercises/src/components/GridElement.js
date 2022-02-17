import React from "react";

const GridElement = ( {arrNumbers, app} ) => {

    let gridColor = '';
    let arrPrime = [2,3,5,7,11,13,17,19,23,29,31];
    let list = '';
    if (app==='colors') {
        //Generar los colores de forma aleatoria. Se sabe que son 32 casillas
        let arrWork = [];
        for(let i=0; i<=31; i++) {
            let auxColor = '#';
            for(let j=0; j<=5; j++) {
                auxColor += arrNumbers[Math.trunc(Math.random() * ((arrNumbers.length - 1) - 0) + 0)];
            }
            arrWork.push(auxColor);
        }
        list = arrWork.map(
            (color, index) => {
                gridColor = {backgroundColor: color};
                return <li key={index} style={gridColor}>{color}</li>;
            }
        );
    } else {

        list = arrNumbers.map(
            (num, index) => {
                let inPrime = arrPrime.indexOf(num);
                
                if (inPrime === -1) { //El número NO está en el arreglo de números primos
                    (num % 2 === 0) ? gridColor = {backgroundColor: '#2DBF73'} : gridColor = {backgroundColor: '#FDDB3A'};
                } else {
                    gridColor = {backgroundColor: '#FA5E53'};
                }
                
                return <li key={index} style={gridColor}>{num}</li>;
            }
        );
    }
    return (
        list
    );
}

export default GridElement;