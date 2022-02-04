//Declare an empty array;
const emptyArr = [];

//Declare an array with more than 5 number of elements
const cityArr = ["Bogota", "Cali", "Medellin", "Buga", "Buenaventura", "Maicao"];
const numbArr = [1,2,3,4,5,6,7,8,9,10,11];

//Find the length of your array
console.log(cityArr.length);

//Get the first item, the middle item and the last item of the array
console.log(cityArr[0]);
console.log(numbArr[Math.trunc(numbArr.length/2)]);
console.log(cityArr[cityArr.length - 1]);

//Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = [90, {poo: 'yes', solid: 4}, "Mexico", ["Chimpa", "Michum", "Dolly"],{id: "79635523", idType: "Cedula", idFrom: "Bogota"}, "Slayer", "Metallica", "Megadeth"];
console.table(mixedDataTypes);
console.log(mixedDataTypes.length);

//Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, 
//Apple, IBM, Oracle and Amazon
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

//Print the array using console.log()
console.log(itCompanies);

//Print the number of companies in the array
console.log('Number of companies: ', itCompanies.length);

//Print the first company, middle and last company
let firstCompany = itCompanies[0];
console.log('First company: ', firstCompany);

let middleCompany = Math.trunc(itCompanies.length/2);
console.log('Middle company: ', itCompanies[middleCompany]);

let lastCompany = itCompanies.length - 1;
console.log('Last company: ', itCompanies[lastCompany]);

//Print out each company
console.log(itCompanies.toString());

//Change each company name to uppercase one by one and print them out
itCompanies.map(e=> e.toUpperCase());

//Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(itCompanies.slice(0, itCompanies.length-1).join(', '), 'and', itCompanies[itCompanies.length-1]+ ' are big IT companies.')

//Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
itCompanies.indexOf('IBM') != -1 ? console.log(itCompanies[itCompanies.indexOf('IBM')]) : console.log('Company is not found');

//Filter out companies which have more than one 'o' without the filter method
const arrFiltered = [];
for (let comp of itCompanies) {
    let aux = 0;
    for (let i of comp) {
        (i === 'o' ? aux++ : 0); 
    }
    aux >= 2 ? arrFiltered.push(comp) : 0;
}
console.log(arrFiltered);

//Sort the array using sort() method
itCompanies.sort();

//Reverse the array using reverse() method
itCompanies.reverse();

//Slice out the first 3 companies from the array
itCompanies.slice(0,3);

//Slice out the last 3 companies from the array
itCompanies.slice(itCompanies.length-3);

//Slice out the middle IT company or companies from the array
itCompanies.slice(Math.trunc(itCompanies.length/2),Math.trunc(itCompanies.length/2)+1);

//Remove the first IT company from the array
itCompanies.shift();

//Remove the middle IT company or companies from the array
itCompanies.splice(Math.trunc(itCompanies.length/2),1)
//Remove the last IT company from the array
itCompanies.pop();

//Remove all IT companies
itCompanies.splice();
