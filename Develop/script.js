let currentDate = $("#currentDay");
let workHours = $("#day-container");
let timeContainersEl = [];
let timeFormEl = [];

function updateTime() {
    let date = moment();
    currentDate.text(date);
    checkPastFuture();
}


// add buttons for each time block 
// commit this tomorrow 
function initWorkTime() {
    for(let i = 9; i < 18; i++) {
         timeContainersEl[i] = document.createElement("div");
         timeContainersEl[i].classList = "time-block row text-light " + i.toString();
         workHours.append(timeContainersEl[i]);
         timeFormEl[i] = document.createElement("form");
         $(timeFormEl[i]).addClass("text-light")
         let inputArea = document.createElement("textarea");
         inputArea.className = "description"

         if(i < 10) {
            timeContainersEl[i].innerHTML = "<h2>0" + i + ":00 </h2>"
         }else {
             timeContainersEl[i].innerHTML = "<h2>" + i + ":00 </h2>"
         }
         $(timeFormEl[i]).append(inputArea);
         $(timeContainersEl[i]).append(timeFormEl[i]);
    }
}

function checkPastFuture() {
    for(let i = 0; i < timeContainersEl.length; i++) {
        if(i > moment().hour()) {
            $(timeContainersEl[i]).addClass("bg-success");
            console.log("future")
        }else if(i == moment().hour()) {
            $(timeContainersEl[i]).addClass("bg-danger");
            console.log("present");
        }else if(i < moment().hour()) {
            $(timeContainersEl[i]).addClass("bg-secondary");
        }
    }
}

initWorkTime();
checkPastFuture();

setInterval(updateTime, 1000);