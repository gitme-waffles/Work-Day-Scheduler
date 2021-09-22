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
var saveBtn = $(".saveBtn")

// time
var currentTime = moment()
const offSet = 9;
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

// get key from local storage render to text area (if there is text or not?)
function renderText(params) {
    for (let i = 0; i < timeArray.length; i++) {
        var keyName = timeArray[i].attr('id');
        var renderReady = localStorage.getItem(keyName);
        if (null != renderReady) {
           timeArray[i].val(renderReady);
        }      
    }    
}

function saveText(event) {
    var target = $(event.currentTarget.previousElementSibling)
    var keyName = target.attr('id');
    localStorage.setItem(keyName, target.val());
    console.log(keyName);
}

$(".saveBtn").on("click", function(event) {
    saveText(event)
})
renderText();