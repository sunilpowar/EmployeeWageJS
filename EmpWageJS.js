const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

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
 
//UC 6 Storing Daily Wage in Array
function calcDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}
const MAX_HRS_IN_MONTH = 160;
const NUM_OF_WORKING_DAYS = 20;
let totalEmpHrs = 0;
let totalWorkingDays = 0;


let empDailyWageArr = new Array();
let empDailyWageMap = new Map();    //UC 8
let empDailyHrsMap = new Map();     //UC9
 
while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs));
    empDailyWageMap.set(totalWorkingDays, calcDailyWage(empHrs));      //UC8
    empDailyHrsMap.set(totalWorkingDays, empHrs);                     //UC9
}
let empWage = calcDailyWage(totalEmpHrs);
console.log("Total Days : " + totalWorkingDays + "  Total Hours : " + totalEmpHrs + "  Employee Wage :" + empWage);

// UC 7 Array helper functions
// A - Calc total Wage using Array foreach traversal or reduce method  

let totEmpWage = 0;
function sum(dailyWage) {
    totEmpWage += dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("A - Total Days : " + totalWorkingDays + "  Total Hours : " + totalEmpHrs
             + "  Employee Wage : " + totEmpWage);

function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage;
}
console.log("A - Employee Wage with Reduce : "  + empDailyWageArr.reduce(totalWages, 0));

// B - Show the Day along with Daily Wage using Array map helper function
let dailyCntr = 0;
function mapDayWithWage(dailyWage) {
    dailyCntr++;
    return dailyCntr + "=" + dailyWage;
}
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("B - Daily Wage Map");
console.log(mapDayWithWageArr);

// C - Show Days when Full time wage of 160 were earned
function fulltimeWage(dailyWage) {
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fulltimeWage);
console.log("C - Daily Wage Filter when Fulltime Wage Earned");
console.log(fullDayWageArr);

// D - Find the first occurence when Full Time Wage was earned using find function
function findFulltimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("D - First time Fulltime Wage was earned on Day:" + mapDayWithWageArr.find(findFulltimeWage));

// E - Check if Every element of Full Time Wage is truely holding Full Time Wage
function isAllFulltimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("E - Check All Element have Full TIme Wage : " + fullDayWageArr.every(isAllFulltimeWage));
        
// F - Check if there is Any Part Time Wage
function isAnyPartTimeWage(dailyWage) {
    return dailyWage.includes("80");
}
console.log("F - Check IF Any Part Time Wage : " + mapDayWithWageArr.some(isAnyPartTimeWage));

// G - Find the number of Days the Employee Worked
function totalDaysWorked(numOfDays, dailyWage) {
    if (dailyWage > 0) 
    return numOfDays + 1;
    return numOfDays;
}
console.log("G - Number of Days Employee Worked: " + empDailyWageArr.reduce(totalDaysWorked, 0));
 
// UC 8 Storing Daily Wage in Map

console.log(empDailyWageMap);
function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage;
}
console.log("UC 7A - Employee Wage Map totalHrs: " + Array.from(empDailyWageMap.values()).reduce(totalWages, 0));

// UC 9 Arrow Functions

const findTotal = (totalVal, dailyVal) => {
    return totalVal + dailyVal;
}

let totalHours = Array.from(empDailyHrsMap.values()).filter(dailyHours => dailyHours > 0).reduce(findTotal, 0);
let totalSalary = empDailyWageArr.filter(dailyWage => dailyWage > 0).reduce(findTotal, 0);

console.log("(9A- Employyee Wage With Arrow. : " + "   Total Hours : " + totalHours + " Total Wages : " + totalSalary);
let nonWorkingDays = new Array();
let partWorkingDays = new Array();
let fullWorkingDays = new Array();
empDailyHrsMap.forEach( (value, key, map) => {
    if (value == 8) fullWorkingDays.push(key);
    else if (value == 4) partWorkingDays.push(key);
    else nonWorkingDays.push(key);
});
console.log("Full Working Days : " + fullWorkingDays);
console.log("Part Working Days : " + partWorkingDays);
console.log("Non Working Days : " + nonWorkingDays);

// UC 10 Object Creation

let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyHrsAndWageArr = new Array();
while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyHrsAndWageArr.push(
        {
            dayNum:totalWorkingDays,
            dailyHours:empHrs,
            dailyWage: calcDailyWage(empHrs),
            toString() {
                return '\nDay' + this.dayNum + ' => Working Hours is ' + this.dailyHours + 
                        'And Wage Earned = ' + this.dailyWage
            },
        }
    );
}
 
console.log("UC 10 Showing Daily Hours Worked and Wage Earned : " + empDailyHrsAndWageArr);