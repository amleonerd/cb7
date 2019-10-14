//i want you all to make an array and use map, filter, reduce to do something cool
//then
//make a mocha test for it! :/
let convert = {};
var class = 
var theGoodPlace = [
  { id: 32, name: "Eleanor", home: "Good Place"},
  { id: 34, name: "Cheety", home: "Good Place" },
  { id: 28, name: "Tahani Al-Jamil" , home: "Bad Place"},
  { id: 100, name: "The Good Janet", home: "Bad Place" }
];
//reduce function to find combined age/average age 
var combinedAge = theGoodPlace.reduce(function (accumulator, pilot) {
    var subjects = 4; 
    var totalAge = accumulator + theGoodPlace.id;
    return totalAge;
  }, 0);
  console.log(combinedAge/4);
  //map function 
  var theGoodPlaceCharecters = theGoodPlace.map(function(tgp) {
    return theGoodPlace.id
});
  
  //filter function to find home 

  var badPlace = theGoodPlace.filter(function (tgp) {
    return tgp.home === "Bad Place";
  });
  var goodPlace = theGoodPlace.filter(function (tgp) {
    return tgp.home === "Good Place";
  });
  module.exports = convert;