
//The following is an array of 10 students ages: 
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
               0,  1,  2,  3,  4,  5,  6,  7,  8,  9
//Sort the array and find the min and max age 
ages.sort();

//min age
let minAge = ages[0];
for(e of ages) {
    e < minAge ? minAge = e: false;
}
console.log(minAge);

//max age
let maxAge = ages[0];
for(e of ages) {
    e > maxAge ? maxAge = e: false;
    console.log('Max Age: ', maxAge, ' - ', 'Element: ', e);
}
console.log(maxAge);

//Find the median age(one middle item or two middle items divided by two) 

const medianAge = (arrayPar) => {
    arrAges = arrayPar.slice();
    arrAges.sort();
    let median = 0;
    let evenOrOdd = arrAges.length % 2;
    if(evenOrOdd === 0) { //Array length is even
        let posTwo = (arrAges.length  / 2);
        let posOne = ((arrAges.length / 2) - 1);
        median = (arrAges[posOne] + arrAges[posTwo]) / 2;
    } else { //Array length is odd
        let posOne = (arrAges.length - 1) / 2;
        median = arrAges[posOne];
    }
    
    return median;
}

//Find the average age(all items divided by number of items) 
const averAge = (arrayPar) => {
    arrAges = arrayPar.slice();
    let sumElem = 0;
    for (e of arrAges) {
        sumElem = sumElem + e;
    }
    return (sumElem / arrAges.length);
}


