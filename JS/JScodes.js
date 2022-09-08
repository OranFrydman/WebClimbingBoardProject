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
var SSclicked=0;
const btn = document.getElementById('StartStopButton')

//start+stop

document.getElementById('StartStopButton').addEventListener('click', ()=>
{if(int!==null)
    {
        clearInterval(int);
        
    }
    if(SSclicked==0)
    {
        int = setInterval(mainTime,1000);
        SSclicked=1;
        btn.textContent='Stop Climbing';
        btn.style.background="pink";
    }
    else
    {
        clearInterval(int);
        SSclicked=0;
        btn.textContent='Start Climbing';
        btn.style.background="";

        //Later on send details to DataBase for statistics results
    }
});

//reset

document.getElementById('reset').addEventListener('click', ()=>
{
    SSclicked=0;
    btn.textContent='Start Climbing';
    btn.style.background="";
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

    var easy_c,med_c,hard_c;
    easy_c=0;
    med_c=0;
    hard_c=0;
    const easy_btn = document.getElementById('Easy');
    const med_btn = document.getElementById('Medium');
    const hard_btn = document.getElementById('Hard');
    document.getElementById('Easy').addEventListener('click', ()=>
{
    if(SSclicked==0)
    {
        easy_c=1;
        med_c=0;
        hard_c=0;
        easy_btn.style.background="lightgreen";
        med_btn.style.background="";
        hard_btn.style.background="";
    }

});
document.getElementById('Medium').addEventListener('click', ()=>
{
    if(SSclicked==0)
    {
        easy_c=0;
        med_c=2;
        hard_c=0;
        easy_btn.style.background="";
        med_btn.style.background="lightgreen";
        hard_btn.style.background="";
    }
});
document.getElementById('Hard').addEventListener('click', ()=>
{
    if(SSclicked==0)
    {
        easy_c=0;
        med_c=0;
        hard_c=3;
        easy_btn.style.background="";
        med_btn.style.background="";
        hard_btn.style.background="lightgreen"
    }
});

function Hello()
{
    alert("Wasssup Niga")
}