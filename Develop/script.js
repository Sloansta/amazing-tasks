let currentDate = $("#currentDay");
let workHours = $("#day-container");
let timeContainersEl = [];
let timeFormEl = [];

function updateTime() {
    let date = moment();
    currentDate.textContent = date.format("dddd, MMMM Do YYYY");

}

function initWorkTime() {
    for(let i = 9; i < 18; i++) {
         timeContainersEl[i] = document.createElement("div");
         timeContainersEl[i].classList = "time-block row hour";
         workHours.append(timeContainersEl[i]);
         timeFormEl[i] = document.createElement("form");
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

initWorkTime();

setInterval(updateTime, 1000);