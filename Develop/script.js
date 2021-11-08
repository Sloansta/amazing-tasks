let currentDate = $("#currentDay");
let workHours = $("#day-container");
let timeContainersEl = [];
let timeFormEl = [];
let inputArea = [];

function updateTime() {
    let date = moment();
    currentDate.text(date);
    checkPastFuture();
}

function initWorkTime() {
    for(let i = 9; i < 18; i++) {
         timeContainersEl[i] = document.createElement("div");
         timeContainersEl[i].classList = "time-block row hour " + i.toString();
         workHours.append(timeContainersEl[i]);
         timeFormEl[i] = document.createElement("form");
         $(timeFormEl[i]).addClass("text-light time-form")
         inputArea[i] = document.createElement("textarea");
         $(inputArea[i]).addClass("description " + i.toString());
         $(inputArea[i]).attr("id", i);

         if(i < 10) {
            timeContainersEl[i].innerHTML = "<h2>0" + i + ":00 </h2>"
         }else {
             timeContainersEl[i].innerHTML = "<h2>" + i + ":00 </h2>"
         }
         
         $(timeFormEl[i]).append(inputArea[i]);
         //$(timeContainersEl[i]).append(saveBtn);
         $(timeContainersEl[i]).append(timeFormEl[i]);
    }

}

function checkPastFuture() {
    for(let i = 9; i < timeContainersEl.length; i++) {
        if(i > moment().hour()) {
            $(timeContainersEl[i]).addClass("future");
            console.log("future")
        }else if(i == moment().hour()) {
            $(timeContainersEl[i]).addClass("present");
            console.log("present");
        }else if(i < moment().hour()) {
            $(timeContainersEl[i]).addClass("past");
        }
    }
}

// get this working tomorrow 
$(".save-btn").on("click", () => {
    for(let i = 9; i < inputArea.length; i++) {
        console.log(i + " works!");
        let hourlyIndex = $(inputArea[i]).val();
        console.log(hourlyIndex);
        if($(inputArea[i]).val() != "")
            saveToLocal($(inputArea[i]).val(), i);
    }
});

function saveToLocal(saveItem, index) {
    localStorage.setItem(index.toString(), saveItem);
}

initWorkTime();
checkPastFuture();

setInterval(updateTime, 1000);