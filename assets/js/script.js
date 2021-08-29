$(document).ready(function(){ // use .ready to load in moment before user interaction
    $('#currentDay').text(moment().format("MMM Do YYYY, h:mm:ss A")); //set current date & time

    $(".savebtn").on("click", function(){
        var text = $(this).siblings("description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(text,time); // set values to local storage 
        console.log(text,time);
    })

    //load values from local storage
    $("#0800 .description").value(localStorage.getItem("0800"));
    $("#0900 .description").value(localStorage.getItem("0900"));
    $("#1000 .description").value(localStorage.getItem("1000"));
    $("#1100 .description").value(localStorage.getItem("1100"));
    $("#1200 .description").value(localStorage.getItem("1200"));
    $("#1300 .description").value(localStorage.getItem("1300"));
    $("#1400 .description").value(localStorage.getItem("1400"));
    $("#1500 .description").value(localStorage.getItem("1500"));
    $("#1600 .description").value(localStorage.getItem("1600"));

    
})
