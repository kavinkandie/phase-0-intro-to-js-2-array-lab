const cats=[ 'Milo', 'Otis', 'Garfield'];
// Define the initial cats arra

// Define the function to prepend a cat to the beginning of the cats array
function destructivelyPrependCat(name) {
    cats.unshift(name); // This modifies the original cats array by adding to the front
}

// Export the cats array and the function (if you need to use it in tests)
module.exports = { cats, destructivelyPrependCat };
// Define the initial cats array
function destructivelyAppendCat(name) {
    cats.push(name); // This modifies the original cats array by adding to the end
}

// Export the cats array and the function for testing purposes
module.exports = { cats, destructivelyAppendCat };
function destructivelyRemoveLastCat() {
    cats.pop(); // This modifies the original cats array by removing the last element
}

// Export the cats array and the function for testing purposes
module.exports = { cats, destructivelyRemoveLastCat };
function destructivelyRemoveFirstCat() {
    cats.shift(); // This modifies the original cats array by removing the first element
}

// Export the cats array and the function for testing purposes
module.exports = { cats, destructivelyRemoveFirstCat };
function appendCat(name) {
    return [...cats, name]; // Create a new array by spreading the current cats and adding the new cat
}

// Export the cats array and the function for testing purposes
module.exports = { cats, appendCat };
function prependCat(name) {
    return [name, ...cats]; // Create a new array with the new cat at the beginning
}

// Export the cats array and the function for testing purposes
module.exports = { cats, prependCat };
function removeLastCat() {
    return cats.slice(0, -1); // Create a new array that excludes the last cat
}

// Export the cats array and the function for testing purposes
module.exports = { cats, removeLastCat };
function removeFirstCat() {
    return cats.slice(1); // Create a new array that excludes the first cat
}

// Export the cats array and the function for testing purposes
module.exports = { cats, removeFirstCat };









