// A local nightclub is having a Battle of the Bands night in a few months. They expect many bands to sign up because the grand prize is $20,000. To make things easier on the nightclub management, they want each band to be assigned a number so that they can easily keep track of the order in which the bands will perform.

// Your job is to write a function that accepts any band name as an argument. The function will increment a global variable by one each time it is invoked, and return that number, and the band name concatenated together.

let bandNumber = 1

const takeNumber = function (bandName) {
    for (bandNumber.length; bandNumber++;)
        return (`${bandNumber - 1}. ${bandName}`)
    }

const scum = takeNumber("Galactic Scum")
console.log(scum)  // This should print "1. Galactic Scum" in the console

const under = takeNumber("Underdogs")
console.log(under)
// This should print "2. Underdogs" in the console

const theCure = takeNumber("The Cure")
console.log(theCure)

const vanMorrison = takeNumber("Van Morrison")
console.log(vanMorrison)

const radiohead = takeNumber("Radiohead")
console.log(radiohead)

// UI/UX Challenge
// This is an optional challenge once you meet MVP. Make a new GitHub branch for this challenge.

// Nightclub management wants to use this app at the front door during the event. Incorporate the logic you have written and add an HTML document and apply CSS to make a mobile version of Battle of the Bands.

