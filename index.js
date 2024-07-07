// Code your solution in this file!
// Task 1: returnFirstTwoDrivers
const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2);
};

// Task 2: returnLastTwoDrivers
const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
};

// Task 3: selectingDrivers
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Task 4: createFareMultiplier
const createFareMultiplier = function (multiplier) {
    return function (fare) {
        return fare * multiplier;
    };
};

// Task 5: fareDoubler
const fareDoubler = createFareMultiplier(2);

// Task 6: fareTripler
const fareTripler = createFareMultiplier(3);

// Task 7: selectDifferentDrivers
const selectDifferentDrivers = function (drivers, selectionFunction) {
    return selectionFunction(drivers);
};
