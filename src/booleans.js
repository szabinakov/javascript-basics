const negate = a => {
  if (a === true) {
    return false;
  } else {
    return true;
  }
  /*
  const baseOfAll = 5 > 4;
  if (a===baseOfAll) {
    return false;
  } else {
    return true;
  }
*/
};

const both = (a, b) => {
  if ( a === true && b === true) {
    return true;
  } else {
    return false;
  }
};

const either = (a, b) => {
  if ( a===true || b===true) {
    return true;
  } else {
    return false;
  }
};

const none = (a, b) => {
  if (a!==true && b!==true) {
    return true;
  } else {
    return false;
  }

};

const one = (a, b) => {
  if (a===true && b===false || a===false && b===true) {
    return true;
  } else {
    return false;
  }
};

const truthiness = a => {
    
if (a) {
 return true;
} else {
 return false;
}
};

const isEqual = (a, b) => {
if (a === b) {
  return true;
} else{
  return false;
}
};

const isGreaterThan = (a, b) => {
  if ( a > b ) {
    return true;
  } else {
    return false;
  }
};

const isLessThanOrEqualTo = (a, b) => {
  if (a <= b) {
    return true;
  } else {
    return false;
  }
};

const isOdd = a => {
if ( a % 2 !== 0) {
  return true;
} else {
  return false;
}
};

const isEven = a => {
  if (a % 2 === 0) {
    return true;
  } else {
    return false;
  }

};

const isSquare = a => {
  const compareNumber = Math.sqrt(a);
  if (Number.isInteger(compareNumber)) {
    return true;
  } else {
    return false;
  }
};

const startsWith = (char, string) => {
  const theFirstChar = string.charAt(0);
  if (char === theFirstChar) {
    return true;
  } else {
    return false;
  }
};

const containsVowels = string => {
  const stringCheck = string.match(/[aeouiAEOUI]/g);
  if (stringCheck) {
    return true;
  } else {
    return false;
  }

};


const isLowerCase = string => {
  const letters = string.match(/[A-Z]+/g);
    if (letters) {
      return false;
    } else {
      return true;
    }
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
