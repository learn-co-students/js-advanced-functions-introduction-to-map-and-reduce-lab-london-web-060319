// Your code here


const mapToNegativize = (array) => {
    return array.map(number => {
        return number * -1

    })
}

const mapToNoChange = (array) => {
  return array.map(thing => {
    return thing
  })
}

const mapToDouble = (array) => {
    return array.map(number => {
        return number * 2
    })
}

const mapToSquare = (array) => {
    return array.map(number => {
        return number * number
    })
}

const reduceToTotal = (array, startingPoint=0) => {
  return array.reduce(( a, c ) => {
      return a + c
  }, startingPoint)
}

const reduceToAllTrue = (array) => {
  return array.reduce((a, c ) => {
      if(c === false) {
        return false;
      }
      else{
        return true
      }

  })
}

const reduceToAnyTrue = (array) => {
  return array.reduce(( a, c ) => {
      if(c){
        return true
      }
      else {
        return false
      }
  })
}
