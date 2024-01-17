let finances = [
  ['Jan-2010', 867884],
  ['Feb-2010', 984655],
  ['Mar-2010', 322013],
  ['Apr-2010', -69417],
  ['May-2010', 310503],
  ['Jun-2010', 522857],
  ['Jul-2010', 1033096],
  ['Aug-2010', 604885],
  ['Sep-2010', -216386],
  ['Oct-2010', 477532],
  ['Nov-2010', 893810],
  ['Dec-2010', -80353],
  ['Jan-2011', 779806],
  ['Feb-2011', -335203],
  ['Mar-2011', 697845],
  ['Apr-2011', 793163],
  ['May-2011', 485070],
  ['Jun-2011', 584122],
  ['Jul-2011', 62729],
  ['Aug-2011', 668179],
  ['Sep-2011', 899906],
  ['Oct-2011', 834719],
  ['Nov-2011', 132003],
  ['Dec-2011', 309978],
  ['Jan-2012', -755566],
  ['Feb-2012', 1170593],
  ['Mar-2012', 252788],
  ['Apr-2012', 1151518],
  ['May-2012', 817256],
  ['Jun-2012', 570757],
  ['Jul-2012', 506702],
  ['Aug-2012', -1022534],
  ['Sep-2012', 475062],
  ['Oct-2012', 779976],
  ['Nov-2012', 144175],
  ['Dec-2012', 542494],
  ['Jan-2013', 359333],
  ['Feb-2013', 321469],
  ['Mar-2013', 67780],
  ['Apr-2013', 471435],
  ['May-2013', 565603],
  ['Jun-2013', 872480],
  ['Jul-2013', 789480],
  ['Aug-2013', 999942],
  ['Sep-2013', -1196225],
  ['Oct-2013', 268997],
  ['Nov-2013', -687986],
  ['Dec-2013', 1150461],
  ['Jan-2014', 682458],
  ['Feb-2014', 617856],
  ['Mar-2014', 824098],
  ['Apr-2014', 581943],
  ['May-2014', 132864],
  ['Jun-2014', 448062],
  ['Jul-2014', 689161],
  ['Aug-2014', 800701],
  ['Sep-2014', 1166643],
  ['Oct-2014', 947333],
  ['Nov-2014', 578668],
  ['Dec-2014', 988505],
  ['Jan-2015', 1139715],
  ['Feb-2015', 1029471],
  ['Mar-2015', 687533],
  ['Apr-2015', -524626],
  ['May-2015', 158620],
  ['Jun-2015', 87795],
  ['Jul-2015', 423389],
  ['Aug-2015', 840723],
  ['Sep-2015', 568529],
  ['Oct-2015', 332067],
  ['Nov-2015', 989499],
  ['Dec-2015', 778237],
  ['Jan-2016', 650000],
  ['Feb-2016', -1100387],
  ['Mar-2016', -174946],
  ['Apr-2016', 757143],
  ['May-2016', 445709],
  ['Jun-2016', 712961],
  ['Jul-2016', -1163797],
  ['Aug-2016', 569899],
  ['Sep-2016', 768450],
  ['Oct-2016', 102685],
  ['Nov-2016', 795914],
  ['Dec-2016', 60988],
  ['Jan-2017', 138230],
  ['Feb-2017', 671099],
];
// Instructions
// Create a new GitHub repo called Console-Finances. Then, clone it to your computer. [done]

// Copy the starter files into your local git repository. [done]

// The total number of months included in the dataset.[done]
let totalMonths = finances.length;

// The net total amount of Profit/Losses over the entire period. [done]
var netTotal = 0;
for (let x in finances) {
  netTotal += Number(finances[x][1]);
}

// The average of the changes in Profit/Losses over the entire period.
// looping through the finances array to get a new array of the values for each period
var changes = [];
var averageChanges = [];
for(var i = 0; i < finances.length; i++){
  changes.push(finances[i][1]);
}
// logs the new date for the array
// console.log(changes);
//adds the new data of a - b within the array and adds it to its own array averageChanges
for(var i = 0; i < changes.length-1; i++){
  // changes.slice(86, -87);
  averageChanges.push(Math.abs(changes[i]-=changes[i+1]));
};
// logs the array
// console.log(averageChanges);
// attemps to turn the averageChanges array into a singular value and stored in the variable total.
var numMonths = finances.length;
var totalChange = 0;
// Iterate through the array starting from the second month
for (let i = 1; i < numMonths; i++) {
  // Get the current month's value and the previous month's value
  let currentMonthValue = finances[i][1];
  let previousMonthValue = finances[i - 1][1];

  // Calculate the monthly change by subtracting the previous month's value from the current month's value
  let monthlyChange = currentMonthValue - previousMonthValue;

  // Add the monthly change to the total change
  totalChange += monthlyChange;
}

// Calculate the average change by dividing the total change by the number of months minus one
let averageChange = totalChange / (numMonths - 1);



var lowestDate = finances[0][0];
var lowestNumber = finances[0][1];
var Both = '';
for (var i = 0; i < finances.length; i++) {
  if (finances[i][0] < lowestDate) {
   lowestDate = finances[i][0];
  }

  if (finances[i][1] < lowestNumber) {
     lowestNumber = finances[i][1];
  }
  Both = "The Greatest decrease in Profits/Losses: " + lowestDate + " " + lowestNumber;
}


// console.log('Lowest number:', lowestNumber);
// console.log('Date:', lowestDate);
let highestNumber = -Infinity;
let highestDate = "";
for (let i = 0; i < finances.length; i++){
  let number = finances[i][1];
  let date = finances[i][0];
  if(number > highestNumber){
    highestNumber = number;
    highestDate = date;
  }
  highestBoth = "The greatest increase in Profits/Losses: " +
  highestDate + " " + highestNumber;
}
console.log("Financial analysis");
console.log("--------------------")
console.log("Total Months: " + totalMonths);
console.log("Total: " + Number(netTotal));
console.log("Average Change: " + averageChange.toFixed(2));
console.log(Both);
console.log(highestBoth);
