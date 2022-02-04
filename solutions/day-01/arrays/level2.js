const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
]

//First remove all the punctuations and change the string to array and count the number of words in the array
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
let newText = '';
for (let e of text) {
    if (e != ',' && e != '.') {
        newText = newText + e;
    }

}
const arrText = newText.split(' ');
console.log(newText);
console.log(arrText);
console.log(arrText.length);

//In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

//add 'Meat' in the beginning of your shopping cart if it has not been already added
let product = 'Meat';
shoppingCart.indexOf(product) === -1 ? shoppingCart.unshift(product) : false; 

//add Sugar at the end of you shopping cart if it has not been already added
let product = 'Sugar';
shoppingCart.indexOf(product) === -1 ? shoppingCart.push(product) : false; 

//remove 'Honey' if you are allergic to honey
let honeyAllergy = true;
let product = 'Honey';
if (shoppingCart.indexOf(product) != -1 && honeyAllergy) {
    let prodIndex = shoppingCart.indexOf(product);
    const auxShoppingCart = shoppingCart.splice(prodIndex, 1);
}
console.log(shoppingCart);

//modify Tea to 'Green Tea'
let prodIndex = shoppingCart.indexOf('Tea');
prodIndex != -1 ? shoppingCart[prodIndex] = 'Green Tea' : false;

//In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
let country = 'Ethiopia';
countries.indexOf(country) != -1 ? console.log(countries[countries.indexOf(country)].toUpperCase()) : countries.push(country);

//In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
let indexOfTech = webTechs.indexOf('Sass');
if (indexOfTech != -1) {
    console.log('Sass is a CSS preprocess')
} else {
    webTechs.push('Sass');
    console.log(webTechs);
}
//Concatenate the following two variables and store it in a fullStack variable.

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
fullStack = frontEnd.concat(backEnd);
console.log(fullStack)