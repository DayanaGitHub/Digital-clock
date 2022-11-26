function displayTime(){
    var dateTime=new Date();
    var hr=dateTime.getHours();
    var min=dateTime.getMinutes();
    var sec=dateTime.getSeconds();
    var session=document.getElementById("session");

    if(hr>=12){
        session.innerHTML="PM";
    }else{
        session.innerHTML="AM";
    }
    if(hr>12){
        hr=hr-12;
    }

    document.getElementById("hours").innerHTML=hr;
    document.getElementById("minutes").innerHTML=min;
    document.getElementById("seconds").innerHTML=sec;
}
setInterval(displayTime,10);