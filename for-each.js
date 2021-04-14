// Use the forEach method to solve these problems! All functions should return a NEW array, without mutating the old array.

/*
Output:

['spot', 'rover', 'jumpy', 'einstein']
*/

export function makeArrayOfNames(arr) {
    const newArr = [];
    arr.forEach(elem => newArr.push(elem.name));
    return newArr;
}

/*
Output:

['cat', 'frog', 'dog', 'dog']
*/

export function makeReversedArrayOfTypes(arr) {
    const newArr = [];
    arr.reverse().forEach(elem => newArr.push(elem.type));
    arr.reverse();
    return newArr;
}

/*
Output:

[
    { nombre: 'spot', tipo: 'dog' },
    { nombre: 'rover', tipo: 'dog' },
    { nombre: 'jumpy', tipo: 'frog' },
    { nombre: 'einstein', tipo: 'cat' },
]
*/

export function makeSpanishLanguageArray(arr) {
    const newArr = [];
    arr.forEach(elem => {newArr.push({nombre: elem.name, tipo: elem.type});})

    return newArr;
}

