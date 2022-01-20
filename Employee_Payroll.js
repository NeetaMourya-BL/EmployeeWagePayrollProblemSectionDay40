/** UC11 Objects Opeartions using arrow functions */
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;
let empDailyWageArr = new Array();
let empDailyWageMap = new Map();
let empDailyHrsMap = new Map();
let fullWorkingDays = new Array();
let partWorkingDays = new Array();
let nonWorkingDays = new Array();
let empDailyHrsAndWageArr = new Array();

function getWorkingHours(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}

/** function for calculating daily wage */
function calculateDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}

let totalEmpHrs = 0;
let totalWorkingDays = 0;
while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyHrsAndWageArr.push({
        day: totalWorkingDays,
        dailyHours: empHrs,
        dailyWage: calculateDailyWage(empHrs),
        toString() {
            return "\n Day " + this.day + " => Daily Working Hours " + this.dailyHours + " Daily wage = " + this.dailyWage
        },
    });
    empDailyWageArr.push(calculateDailyWage(empHrs));
    empDailyWageMap.set(totalWorkingDays, calculateDailyWage(empHrs));
    empDailyHrsMap.set(totalWorkingDays, empHrs);
}

let empWage = totalEmpHrs * WAGE_PER_HOUR;
console.log("UC7 -Total Days:" + totalWorkingDays + "," + " Total Hours:" + totalEmpHrs);
console.log("Daily wage array:" + empDailyWageArr);
console.log("************************************");

//Array Helper Functions
//7a Calculate total wage using array forEach 
let totalWage = 0;
function sum(dailyWage) {
    totalWage += dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("7a using forEach total wage is: " + totalWage);

//7a Calculate total wage using reduce method
function totalWages(sum, nextValue) {
    return sum + nextValue;
}
let sum1 = empDailyWageArr.reduce(totalWages, 0);
console.log("7a using reduce total wage is: " + sum1);

//7b show the day along with daily wage using ArrayMap
let dailyCounter = 0;
function mapDayWithWage(dailyWage) {
    dailyCounter++;
    return "Day" + dailyCounter + " = " + "wage" + dailyWage;
    //return dailyCounter + " = " + dailyWage;
}
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("7b Daily wage using map : " + mapDayWithWageArr);

//7c Show days when full time wage of 160 were earned using filter
function fullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fullTimeWage);
console.log("7c Daily wage filter when fulltime wage is 160 earned: " + fullDayWageArr);

//7d find first occurence when full time wage earned using find function
let findFullTimeWage = mapDayWithWageArr.find(fullTimeWage);
console.log("7d First full time wage using find function " + findFullTimeWage);

//7e check if every element of full time wage is truely holding Full time wage
let isAllFullTimeWage = fullDayWageArr.every(fullTimeWage);
console.log("7e Check all elment having full time wage using every function : " + isAllFullTimeWage);

//7f Check if there is any part time wage
function isAnyPartTimeWage(dailyWage) {
    return dailyWage.includes("80");
}
let anyPartTimeWage = mapDayWithWageArr.some(isAnyPartTimeWage);
console.log("7f Check if any part time wage using some function : " + anyPartTimeWage);

//7g Find the number of days employee worked
function totalDaysWorked(numOfDays, dailyWage) {
    if (dailyWage > 0)
        return numOfDays + 1;
    return numOfDays;
}
let numOfWorkingDays = empDailyWageArr.reduce(totalDaysWorked, 0);
console.log("7g Total number of days employee worked :" + numOfWorkingDays);

//UC8 Store the day and daily wage along with total wage  
console.log("UC8 Store the day and daily wage:");
console.log(empDailyWageMap);

console.log("Total wage using reduce method :" + Array.from(empDailyWageMap.values()).reduce(totalWages, 0));

let totalWagesUsingMap = 0;
function totalWagesMap(dailyWage) {
    totalWagesUsingMap += dailyWage;
}
Array.from(empDailyWageMap.values()).map(totalWagesMap)
console.log("Total wage using map method :" + totalWagesUsingMap);

//UC9 Use  daily wage map and daily hour map - Arrow functions use
//9a total wage and total hours worked
let findTotal = (totalWage, dailyWage) => {
    return totalWage += dailyWage;
}
console.log("Total Wage using Arrow function (1st way) :"
    + Array.from(empDailyWageMap.values())
        .reduce(findTotal, 0));

console.log("Total Wage using Arrow function (2nd way) :"
    + Array.from(empDailyWageMap.values())
        .filter(dailyWage => dailyWage > 0)
        .reduce((total, next) => total + next));

console.log("Total hours using arrow function (1st way):"
    + Array.from(empDailyHrsMap.values())
        .reduce(findTotal, 0));

console.log("Total hours using arrow function (2nd way):"
    + Array.from(empDailyHrsMap.values())
        .reduce((total, next) => total + next));

//9b show full working days, part working days, no working days
empDailyHrsMap.forEach((value, key) => {
    if (value == 8)
        fullWorkingDays.push(key);
    else if (value == 4)
        partWorkingDays.push(key);
    else nonWorkingDays.push(key);
});
console.log("Full Working Days :" + fullWorkingDays);
console.log("Part Working Days :" + partWorkingDays);
console.log("Non Working Days :" + nonWorkingDays);

//UC 10 Store the day, hours worked and wage earned in single object
console.log("UC10 Use of JS Object Creation :");
console.log("Day, Daily hours and wage using single object: ");
console.log(empDailyHrsAndWageArr);

//UC11 Object operatins using arrow functions
console.log("UC11 Object operatins using arrow functions :");
//11a Calculate total wage and total hours worked
let totalWagee = empDailyHrsAndWageArr.reduce((totalWage, empDailyHrsAndWageArrObject) => {
    return totalWage += empDailyHrsAndWageArrObject.dailyWage;
},
    0);
console.log("UC11a Total Wage :" + totalWagee);

let totalHours = empDailyHrsAndWageArr.reduce((totalHours, empDailyHrsAndWageArrObject) => {
    return totalHours += empDailyHrsAndWageArrObject.dailyHours;
},
    0);
console.log("UC11a Total Hours :" + totalHours);

//11b Show full working days using foreach
console.log("UC11b Full Working Days : ");
empDailyHrsAndWageArr.forEach(empDailyHrsAndWageArrObject => {
    if (empDailyHrsAndWageArrObject.dailyHours == FULL_TIME_HOURS) {
        console.log(empDailyHrsAndWageArrObject);
    }
}
)
//11b other way
console.log("11b Other way :")
empDailyHrsAndWageArr
    .filter(empDailyHrsAndWageArrObject => empDailyHrsAndWageArrObject.dailyHours == FULL_TIME_HOURS)
    .forEach(dailyWorkHrs => console.log(dailyWorkHrs));

//11c part working days using map by reducing to String array
console.log("UC11c Part Working Days : ");
let partWorkingDayStrArr = empDailyHrsAndWageArr
    .filter(empDailyHrsAndWageArrObject => empDailyHrsAndWageArrObject.dailyHours == PART_TIME_HOURS)
    .map(empDailyHrsAndWageArrObject => empDailyHrsAndWageArrObject);
console.log(partWorkingDayStrArr);
//UC11D no working day using map
console.log("UC11d No Working Days : ");
let noWorkingDays = empDailyHrsAndWageArr
    .filter(empDailyHrsAndWageArrObject => empDailyHrsAndWageArrObject.dailyHours == 0)
    .map(empDailyHrsAndWageArrObject => empDailyHrsAndWageArrObject);
console.log(noWorkingDays);