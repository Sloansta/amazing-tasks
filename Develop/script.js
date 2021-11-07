let currentDate = $("#currentDay");
let workHours = $("#day-container");
let timeContainersEl = [];
let timeFormEl = [];

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
         let inputArea = document.createElement("textarea");
         $(inputArea).addClass("description");

         if(i < 10) {
            timeContainersEl[i].innerHTML = "<h2>0" + i + ":00 </h2>"
         }else {
             timeContainersEl[i].innerHTML = "<h2>" + i + ":00 </h2>"
         }
         
         $(timeFormEl[i]).append(inputArea);
         //$(timeContainersEl[i]).append(saveBtn);
         $(timeContainersEl[i]).append(timeFormEl[i]);
    }

}

function checkPastFuture() {
    for(let i = 0; i < timeContainersEl.length; i++) {
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
$(".description").on("blur", () => {
   let text = $(this).val().trim();
   let index = $(this).closest(".time-form").index();
   $(timeFormEl[index]).find(".description").val(text);
   saveToLocal($(timeFormEl[index]).find(".description").val(text));
});

function saveToLocal(saveItem) {
    //localStorage.setItem("time-save", JSON.stringify(saveItem));
    console.log("called")
}

initWorkTime();
checkPastFuture();

setInterval(updateTime, 1000);