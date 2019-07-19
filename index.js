// MAP
const mapToNegativize = (array) => {
    let newArray = []
    for(let i = 0; i<array.length; i++){
        newArray.push(0 - array[i])
    }
    return(newArray)
}

const mapToNoChange = (array) => {
    let newArray = []
    for(let i=0; i<array.length; i++){
        newArray.push(array[i])
    }
    return(newArray)
}

const mapToDouble = (array) => {
    let newArray = []
    for(let i=0; i<array.length; i++){
        newArray.push(array[i] * 2)
    }
    return newArray
}

const mapToSquare = (array) => {
    let newArray = []
    for(let i=0; i<array.length; i++){
        newArray.push(array[i] * array[i])
    }
    return newArray
}

// REDUCE
const reduceToTotal = (sourceArray, startingPoint = 0) => {
    let value = startingPoint
    for(let i=0; i<sourceArray.length; i++){
        value += sourceArray[i]
    }
    return(value)
}

const reduceToAllTrue = (sourceArray) => {
    for(let i=0; i<sourceArray.length; i++){
        if (!sourceArray[i]) return false
    }
    return true
}

const reduceToAnyTrue = (sourceArray) => {
    for(let i=0; i<sourceArray.length; i++){
        if (sourceArray[i]) return true
    }
    return false

    
}