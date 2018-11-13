function myTimer() {
    var date = new Date();

    var secondLiczba = date.getSeconds();
    var seconds = secondLiczba.toString();

    if (secondLiczba < 10) {
        var tileSecond1 = document.getElementById("sec1");
        tileSecond1.innerHTML = 0;
        var tileSecond2 = document.getElementById("sec2");
        tileSecond2.innerHTML = seconds[0];       
    } else {        
        var tileSecond1 = document.getElementById("sec1");
        tileSecond1.innerHTML = seconds[0];
        var tileSecond2 = document.getElementById("sec2");
        tileSecond2.innerHTML = seconds[1];
    }

    var minutesLiczba = date.getMinutes();
    var minutes = minutesLiczba.toString();
  
    if (minutesLiczba < 10) {
        var tileMinute1 = document.getElementById("min1");
        tileMinute1.innerHTML = 0;
        var tileMinute2 = document.getElementById("min2");
        tileMinute2.innerHTML = minutes[0];
    } else {
        var tileMinute1 = document.getElementById("min1");
        tileMinute1.innerHTML = minutes[0];
        var tileMinute1 = document.getElementById("min2");
        tileMinute2.innerHTML = minutes[1];
    }    
    var hoursLiczba = date.getHours();
    var hours = hoursLiczba.toString();

    if (hoursLiczba < 10) {
        var tileHour1 = document.getElementById("hour1");
        tileHour1.innerHTML = 0;
        var tileHour2 = document.getElementById("hour2");
        tileHour2.innerHTML = hours[0];
    } else {
        var tileHour1 = document.getElementById("hour1");
        tileHour1.innerHTML = hours[0];
        var tileHour2 = document.getElementById("hour2");
        tileHour2.innerHTML = hours[1];
    }
}
setInterval(myTimer, 1000);