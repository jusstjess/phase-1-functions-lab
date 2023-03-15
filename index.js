// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    const baseAddress = 42;
    const distance = someValue - baseAddress;
    return Math.abs(distance);
}

function distanceFromHqInFeet(someValue) {
    const blocks = distanceFromHqInBlocks(someValue);
    const feet = blocks * 264;
    return feet;
  
    
  }function distanceTravelledInFeet(start, destination) {
   const blockDifference = Math.abs(start-destination);
   const feetTraveled = blockDifference * 264;
   return feetTraveled;
  }

  function calculatesFarePrice(start, destination) {

    const totalFeetTraveled = distanceTravelledInFeet(start, destination); 

    
    if (totalFeetTraveled < 400){
        return 0;
    }
    else if (totalFeetTraveled >399 && totalFeetTraveled <2000){
        const basicFare = ((totalFeetTraveled - 400 ) * 0.02);
        return basicFare;
    }
    else if(totalFeetTraveled >1999 && totalFeetTraveled <2500){
        return 25;
    }
    else {
        return "cannot travel that far";

    } 
 
}

