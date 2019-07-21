function mapToNegativize(array) {
    const negativeArray = []
    for(const num of array) {
        if (num.toString().charAt(0) === "-") {
            negativeArray.push(Math.abs(num))
        } else {
            negativeArray.push(-Math.abs(num))
        }
    }
    return negativeArray;
}

function mapToNoChange(array) {
    return array
}

function mapToDouble(array) {
    const doublesArray = []
    for(const num of array) {
        doublesArray.push(num * 2)
    }
    return doublesArray;
}

function mapToSquare(array) {
    const squaresArray = []
    for(const num of array) {
        squaresArray.push(num ** 2)
    }
    return squaresArray;
}

function reduceToTotal(array, total=0) {

    for(const num of array) {
        total += num
    }
    return total;
}

function reduceToAllTrue(array) {
    for(const item of array) {
        if (!!item === false) {
            return false;
        }
    }
    return true;    
}

function reduceToAnyTrue(array) {
    for(const item of array) {
        if (!!item === true) {
            return true;
        }
    }
    return false;
}