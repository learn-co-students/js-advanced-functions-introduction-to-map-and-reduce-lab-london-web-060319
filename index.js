// Your code here

// Define Map
const mapToNegativize = (sourceArray) => {
    const newArray = new Array
    sourceArray.forEach(s => { newArray.push(s*-1) });
    return newArray
}

const mapToNoChange = (sourceArray) => {
    const newArray = new Array
    sourceArray.forEach(s => { newArray.push(s) });
    return newArray
}

const mapToDouble = (sourceArray) => {
    const newArray = new Array
    sourceArray.forEach(s => { newArray.push(s*2) });
    return newArray
}

const mapToSquare = (sourceArray) => {
    const newArray = new Array
    sourceArray.forEach(s => { newArray.push(s**2) });
    return newArray
}

// Define Reduce
const reduceToTotal = (sourceArray, startingPoint=0) => {
    let total = startingPoint
    sourceArray.forEach(s => {
        total += s
    });
    return total
}

const reduceToAllTrue = (sourceArray) => {
    for (let i = 0; i < sourceArray.length; i++) {
        if (!!sourceArray[i] === false) {
            return false;
        }
    }
    return true;
}

const reduceToAnyTrue = (sourceArray) => {
    for (let i = 0; i < sourceArray.length; i++) {
        if (!!sourceArray[i] === true) {
            return true;
        }
    }
    return false;
}