const atomSpreader = (group, next, ret) => {
  if (next === 1) {
    ret.push(group);
  } else {
    [...Array(next)].forEach((e, index) => {
      ret.push(group);
    });
  }
  return ret;
};

const splitter = (compound) => {
  const splitedCompound = compound
    .split(/([A-Z][a-z]|\(\w+\)|[A-Z]{1})/)
    .filter((e) => {
      return e !== "";
    });
  return splitedCompound;
};

const recursiveFunc = (arr, empArr = []) => {
  //Return result at end of the array
  if (arr.length === 0) {
    return empArr;
  }
  //Numbers are multipliers we don't need them, skip
  if (arr[0].match(/^[0-9]/)) {
    return recursiveFunc(arr.slice(1), empArr);
  }
  //Push basic element "timesToPush" times
  if (arr[0].match(/^[A-Z]$|^[A-Z][a-z]$/)) {
    const timesToPush = isNaN(arr[1]) ? 1 : Number(arr[1]);

    empArr.concat(atomSpreader(arr[0], timesToPush, empArr)); //I take out the functionality to push to atomSpreader function

    return recursiveFunc(arr.slice(1), empArr);
  }

  if (arr[0].match(/^\(.*\)$/)) {
    const inside = arr[0]
      .split(/\(|\)/)
      .filter((e) => e !== "")
      .toString();
    for (let n = 0; n < arr[1]; n++) {
      empArr.concat(recursiveFunc(splitter(inside), empArr));
    }
    return recursiveFunc(arr.slice(1), empArr);
  }
};
const splited = splitter("X2(Na2O3)2");
console.log(splited);
console.log("FINAL: ", recursiveFunc(splited));
