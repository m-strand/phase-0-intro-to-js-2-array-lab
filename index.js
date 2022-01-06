// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) { 
    return cats.push(name);
}
function destructivelyPrependCat(name) {
    return cats.unshift(name);
}
function destructivelyRemoveLastCat(name) {
    return cats.pop();
}
function destructivelyRemoveFirstCat(name) {
    return cats.shift();
}
function appendCat(name) {
    const coolCat = [...cats, name];
    return coolCat;
}
function prependCat(name) {
    const foolCat = [name, ...cats];
    return foolCat;
}
function removeLastCat(name) {
    const copyCat = cats.slice(0, cats.length - 1);
    return copyCat;
}
function removeFirstCat(name) { 
    const slopyCat = cats.slice(1);
    return slopyCat;
}