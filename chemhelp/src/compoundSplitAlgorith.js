const atomsCounter = (atom, amountOfAtoms, countObj) => {
  /*  if (countObj[atom]) {
    countObj[atom] += amountOfAtoms;
  }
  if (!countObj[atom]) {
    countObj[atom] = amountOfAtoms;
  }
  return countObj;
 */

  //Oddly looking but works as a single line
  countObj[atom] = countObj[atom]
    ? countObj[atom] + amountOfAtoms
    : amountOfAtoms;
};

const splitter = (compound) => {
  return compound.split(/([A-Z][a-z]|\(\w+\)|[A-Z]{1})/).filter((e) => {
    return e !== "";
  });
};

const recursiveFunc = (arr, atomsCount = {}) => {
  //Return result when each element inside the array has been passed
  if (arr.length === 0) {
    return atomsCount;
  }
  
  //Adds basic element and does recursion
  if (arr[0].match(/^[A-Z]$|^[A-Z][a-z]$/)) {
    const numberOfAtoms = isNaN(arr[1]) ? 1 : Number(arr[1]);

    atomsCounter(arr[0], numberOfAtoms, atomsCount); //I take out the functionality to push to atomSpreader function
  }
  //Manipulates and uses recursion
  if (arr[0].match(/^\(.*\)$/)) {
    const inside = arr[0]
      .split(/\(|\)/)
      .filter((e) => e !== "")
      .toString();
    for (let n = 0; n < arr[1]; n++) {
      recursiveFunc(splitter(inside), atomsCount);
    }
  }
  return recursiveFunc(arr.slice(1), atomsCount);
};


export  {
  recursiveFunc, splitter
}