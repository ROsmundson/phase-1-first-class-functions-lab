// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(2, 4);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(fareMultiplier) {
    return function(fare) {
        return fare * fareMultiplier;
    }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);


function selectDifferentDrivers(drivers, selectingDrivers) {
    return selectingDrivers(drivers);
}




    // describe('selectDifferentDrivers(arrayOfDrivers, function)', function () {
    //     it('returns the first two drivers when passed returnFirstTwoDrivers() as the second argument', function () {
    //       expect(selectDifferentDrivers(drivers, returnFirstTwoDrivers)).to.eql(['Sally', 'Bob']);
    //     });
    
    //     it('returns the last two drivers when passed returnLastTwoDrivers() as the second argument', function () {
    //       expect(selectDifferentDrivers(drivers, returnLastTwoDrivers)).to.eql(['Freddy', 'Claudia']);
    //     });
    //   });
    // });