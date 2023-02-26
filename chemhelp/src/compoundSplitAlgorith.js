

const atomSpreader = (group, next, ret) => {
  if (next === 1) {
    //console.log(" C or P?", group)
    ret.push(group);
  } else {
    //console.log("Ca and O?", group);
    [...Array(next)].forEach((e, index) => {
      //console.log(`number of times it entered for ${group}": ${index}`)
      ret.push(group);
    });
  }
  console.log("What is the ret arr?: ", ret);
  return ret;
};

const splitter = (compound) => {
  const splitedCompound = compound
    .split(/([A-Z][a-z]|\(\w+\)|\[A-Z]{1})/)
    .filter((e) => {
      return e !== "";
    });
  return splitedCompound;
};

const recursiveFunc = (arr, empArr = []) => {
  arr.forEach((group, index) => {
    if (group.match(/^[A-Z]$|^[A-Z][a-z]$/)) {
      var next;
      if (index === arr.length - 1 || isNaN(arr[index + 1])) {
        next = 1;
      } else {
        next = Number(arr[index + 1]);
      }
      empArr.concat(atomSpreader(group, next, empArr));
    }

    if (group.match(/^\(.*\)$/)) {
      const inside = group.split("").filter((e) => !e.match(/\(|\)/));
      //console.log("parenthesis?", inside);
      // console.log("parenthesis iterations?:", arr[index + 1]);
      for (let n = 0; n < arr[index + 1]; n++) {
        empArr.concat(recursiveFunc(inside, empArr));
      }
    }

    if (group.match(/^[A-Z]{2}|\w{3,}s/)) {
        console.log('polyatominc no par', group.split(""))
      empArr.concat(recursiveFunc(group.split(""), empArr));
    }
  });
  return empArr;
};
const splited = splitter("Ca3(PO4)2")
console.log("FINAL: ", recursiveFunc(splited));
