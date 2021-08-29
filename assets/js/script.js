$(document).ready(function () { // use .ready to load in moment before user interaction
    $('#currentDay').text(moment().format("MMM Do YYYY, h:mm:ss A")); //set current date & time

    $(".savebtn").on("click", function () {
        var text = $(this).siblings("description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(text, time); // set values to local storage 
        console.log(text, time);
    });

    setInterval(function() {
        $(".description").each(function(el){
            timeTracker(el);
        });
    }, 1200000);

    //load values from local storage
    $("#0800 .description").val(localStorage.getItem("0800"));
    $("#0900 .description").val(localStorage.getItem("0900"));
    $("#1000 .description").val(localStorage.getItem("1000"));
    $("#1100 .description").val(localStorage.getItem("1100"));
    $("#1200 .description").val(localStorage.getItem("1200"));  // curious if ther is a more "DRY" method to do this 
    $("#1300 .description").val(localStorage.getItem("1300"));
    $("#1400 .description").val(localStorage.getItem("1400"));
    $("#1500 .description").val(localStorage.getItem("1500"));
    $("#1600 .description").val(localStorage.getItem("1600"));


    //create a function to track the time and apply the the appropriate class
    function timeTracker() {
        //use moment.js to set current hour value
        var rightNow = moment().hour();
        console.log(rightNow)
        //loop over the timeblocks  use if/else to set the appropiate css class
        $(".time-block").each(function () {
            var blockhour = parseInt($(this).attr("id").split("hour")[1]);
            console.log(blockhour)

            if (blockhour === rightNow) {
                $(this).addClass("present");
                $(this).removeClass("future", "past");
            }

            else if (blockhour < rightNow) {
                $(this).addClass("past");
                $(this).removeClass("present", "future");
            }

            else {
                $(this).addClass("future");
                $(this).removeClass("past", "present");
            }
        });
    }
        timeTracker();
})
