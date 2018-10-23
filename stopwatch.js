//  Interval Exercise (follow the instructions below).

//  This code will run as soon as the page loads.
window.onload = function() {

  //  Click events are done for us:
  $("#start").click(stopwatch.start);
  $("#start").click(timer.start);
  $(".btn").click(stopwatch.reset);
  $(".btn").click(changeColor);
  $("#summit").click(timer.stop);
  $("#summit").click(stopwatch.stop);
};

var clickNum = 0;
function changeColor(event){
 
  if (clickNum == 0){
    $(this).css("background-color","lightgreen");
    clickNum=1;
    console.log(clickNum)
  }
  else{
    $(this).css("background-color","rgba(252, 252, 252, 0.788)");
    clickNum=0;
    console.log(clickNum)
  }

}

//  Variable that will hold our setInterval that runs the stopwatch
var intervalId;
var intervalTimber;
// prevents the clock from being sped up unnecessarily
var clockRunning = false;
var timerRunning = false;


//timer object.
var timer = {

  time: 0,

  start: function() {

    //  TODO: Use setInterval to start the count here and set the clock to running.
    
    if (!timerRunning) {
      intervalTimber = setInterval(timer.count, 1000);
      timerRunning = true;
    }

  },

  stop: function() {
      clearInterval(intervalTimber);
    //  TODO: Use clearInterval to stop the count here and set the clock to not be running.
  },


   count: function() {
    //  TODO: increment time by 1
    timer.time++;
    var  timeRemain = timer.timeCountdown(timer.time);
    $("#timer").text(timeRemain);

  },

  //  THIS FUNCTION IS DONE FOR US!
  //  We do not need to touch it.

  timeCountdown: function(t) {

    //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
    var minutes = 29- Math.floor(t / 60);
    var seconds = 60- t%60;
    console.log(seconds)
    
    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (t/60 == 0) {
      seconds = "00";
    }

    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
  }

};




//  Our stopwatch object.
var stopwatch = {

  time: 0,
  lap: 1,

  reset: function() {

    stopwatch.time = 0;
    stopwatch.lap = 1;

    $("#display").text('00:00');

  },

  start: function() {

    //  TODO: Use setInterval to start the count here and set the clock to running.
    
    if (!clockRunning) {
      intervalId = setInterval(stopwatch.count, 1000);
      clockRunning = true;
      console.log("Started")
      console.log(intervalId)
    }

  },

  stop: function() {
      clearInterval(intervalId);
      console.log("stopped")
      console.log(intervalId)

    //  TODO: Use clearInterval to stop the count here and set the clock to not be running.

  },

  recordLap: function() {

    //  TODO: Get the current time, pass that into the stopwatch.timeConverter function,
    //        and save the result in a variable.
    var timeCurrent = stopwatch.timeConverter(stopwatch.time)
    //  TODO: Add the current lap and time to the "laps" div.
    $("#laps").append("<p> Lap "+stopwatch.lap+" : "+ timeCurrent+"</p>")
    stopwatch.lap++;

    //  TODO: Increment lap by 1. Remember, we can't use "this" here.
  },

  count: function() {

    //  TODO: increment time by 1
    stopwatch.time++;
    var timeCurrent = stopwatch.timeConverter(stopwatch.time);
    
    $("#display").text(timeCurrent);

    timeRemain = stopwatch.timeCountdown(stopwatch.time);
    $("#timer").text(timeRemain);


    //  TODO: Get the current time, pass that into the stopwatch.timeConverter function,
    //        and save the result in a variable.

    //  TODO: Use the variable you just created to show the converted time in the "display" div.

  },

  //  THIS FUNCTION IS DONE FOR US!
  //  We do not need to touch it.

  timeConverter: function(t) {

    //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes === 0) {
      minutes = "00";
    }

    else if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
  },

  timeCountdown: function(t) {

    //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
    var minutes = 14- Math.floor(t / 60);
    var seconds = 10- (t - (minutes * 60));
    
    if (seconds < 10) {
      seconds = "5" + seconds;
    }

    if (minutes === 0) {
      minutes = "14";
    }

    else if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
  }



};
