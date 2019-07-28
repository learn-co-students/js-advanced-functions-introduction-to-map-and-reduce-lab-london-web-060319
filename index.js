function mapToNegativize(sourceArray) {
  let negativeArr = []
  for (let i = 0; i < sourceArray.length; i++) {
    negativeArr.push(-1 * sourceArray[i])
  }
  return negativeArr
}

function mapToNoChange(sourceArray) {
  let unchangedArr = []
  for (let i = 0; i < sourceArray.length; i++) {
    unchangedArr.push(sourceArray[i])
  }
  return unchangedArr
}

function mapToDouble(sourceArray) {
  let doubledArr = []
  for (let i = 0; i < sourceArray.length; i++) {
    doubledArr.push(2 * sourceArray[i])
  }
  return doubledArr
}

function mapToSquare(sourceArray) {
  let squaredArr = []
  for (let i = 0; i < sourceArray.length; i++) {
    squaredArr.push(sourceArray[i] * sourceArray[i])
  }
  return squaredArr
}

function reduceToTotal(sourceArray, startingPoint=0) {
  let total = startingPoint
  for (let i = 0; i < sourceArray.length; i++) {
    total = total + sourceArray[i]
  }
  return total
}

function reduceToAllTrue(sourceArray) {
  for (let i = 0; i < sourceArray.length; i++) {
    if (!sourceArray[i]) return false
  }
  return true
}

function reduceToAnyTrue(sourceArray) {
  for (let i = 0; i < sourceArray.length; i++) {
    if (sourceArray[i]) return true
  }
  return false
}
