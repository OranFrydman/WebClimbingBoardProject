// Greetings Home Page
var time;
var d = new Date();
time=d.getHours();
console.log(time)
if(time<12.0)
{
    document.getElementById("time").innerHTML="Good Morning!";
}
else if(time<18){
    document.getElementById("time").innerHTML="Good Afternoon!";
}
else
{
    document.getElementById("time").innerHTML="Good Evening!";
}
//StopWatch for workout plan


let [second,minute,] = [0,0];
let timerRef = document.querySelector('.mainTime');
let int = null;
//start



document.getElementById('StartStopButton').addEventListener('click', ()=>
{if(int!==null)
    {
        clearInterval(int);
    }
    int = setInterval(mainTime,1000);
});
//stop

document.getElementById('stop').addEventListener('click', ()=>
{
    clearInterval(int);
});
//reset

document.getElementById('reset').addEventListener('click', ()=>
{
    clearInterval(int);
    [second,minute] = [0,0];
    timerRef.innerHTML = '00 : 00 ';
});
//maintime
function mainTime()
{
        second++;
        if(second == 60)
            {
            second = 0;
            minute++;
            if(minute == 60)
                {
                minute = 0;
                }
        }
    
    let m = minute < 10 ? "0" + minute : minute;
    let s = second < 10 ? "0" + second : second;
    
    timerRef.innerHTML = ` ${m} : ${s} `;


    }
