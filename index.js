// Write your solution here!
const cats = ["Milo","Otis","Garfield"];
function destructivelyAppendCat(name){
    return cats.push(name);
}
function destructivelyPrependCat(name){
    return cats.unshift(name);
}
function destructivelyRemoveLastCat(name){
    return cats.pop(name);
}
function destructivelyRemoveFirstCat(name){
    return cats.shift(name);
}
function appendCat(name){
    var newCats=cats.slice();
    newCats.push(name);
    return newCats;
}
function prependCat(name){
    const prepCat=cats.slice();
    prepCat.unshift(name);
    return prepCat;
}
function removeLastCat(){
    const oneDown=cats.slice();
    oneDown.pop(name);
    return oneDown;
}
function removeFirstCat(){
    const oneUp=cats.slice();
    oneUp.shift(name);
    return oneUp;
}