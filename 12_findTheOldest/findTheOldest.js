const findTheOldest = function(peopleArr) {
    let max = {
        name: "",
        yearOfBirth: 0,
        yearOfDeath: 0
    }

    for (let i = 0; i < peopleArr.length; i++) {
        if (peopleArr[i].yearOfDeath == undefined) {
            peopleArr[i]["yearOfDeath"] = 2025

        }
        if ((peopleArr[i].yearOfDeath - peopleArr[i].yearOfBirth) > (max.yearOfDeath - max.yearOfBirth)) {
            max = peopleArr[i]
        }
    }

    return max
};

// Do not edit below this line
module.exports = findTheOldest;

console.log(findTheOldest([
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]))