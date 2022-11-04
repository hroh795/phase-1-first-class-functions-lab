// Code your solution in this file!
const returnFirstTwoDrivers= function(array) {
    return array.slice(0,2);
}

const returnLastTwoDrivers = function(array) {
    return array.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int) {
    return function (fare) { return fare*int;};
}

const before = createFareMultiplier();
function fareDoubler(before) {

    return before*2;
}

const before2 = createFareMultiplier();

function fareTripler(before2) {
    return before2*3;
}


function selectDifferentDrivers(arrayOfDrivers, functionType) {
   return functionType(arrayOfDrivers);
}
