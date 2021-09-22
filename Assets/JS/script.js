// Date 
var weekDay = moment().format("do MMMM, YYYY");
$("#currentDay").text(weekDay);

var hour9 = $("#hour-9");
var hour10 = $("#hour-10");
var hour11 = $("#hour-11");
var hour12 = $("#hour-12");
var hour13 = $("#hour-13");
var hour14 = $("#hour-14");
var hour15 = $("#hour-15");
var hour16 = $("#hour-16");
var hour17 = $("#hour-17");
const offSet = 9;
var currentTime = moment()
currentTime.hour()

var timeArray = [hour9, hour10, hour11, hour12, hour13, hour14, hour15, hour16, hour17];

for (let i = 0; i < timeArray.length; i++) {
    let checkedTime = i + offSet;
    if (currentTime.hour() < checkedTime) {
        timeArray[i].addClass('future')
    } else if (currentTime.hour() == checkedTime) {
        timeArray[i].addClass('present')
    } else {
        timeArray[i].addClass('past')
    }
}
console.log()
// function bananas() {

// if (moment().hour() < i) {
//     hour9.addClass('past')
// } else if (moment().hour() == i) {
//     hour9.addClass('present')
// } else {
//     hour9.addClass('future')
// }
// }

// bananas();