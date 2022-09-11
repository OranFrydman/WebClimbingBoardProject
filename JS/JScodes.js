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


var [second,minute,] = [0,0];
let timerRef = document.querySelector('.mainTime');
let int = null;
var SSclicked=0;
const btn = document.getElementById('StartStopButton')

//start+stop

document.getElementById('StartStopButton').addEventListener('click', ()=>
{
    if(level>0)
    {
        if(int!==null)
        {
            clearInterval(int);
            
        }
        
        if(SSclicked==0)
        {
            int = setInterval(mainTime,1000);
            SSclicked=1;
            btn.textContent='Stop Climbing';
            btn.style.background="pink";
            StartAlgo();
           
        }
        else
        {
            clearInterval(int);
            SSclicked=0;
            btn.textContent='Start Climbing';
            btn.style.background="";
            HideHold(RightName);
            HideHold(LeftName);
            [second,minute] = [0,0];
            timerRef.innerHTML = '00 : 00 ';
    
            //Later on send details to DataBase for statistics results
        }
    }
    else
    alert("Please choose youre level difficulty first")

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
    HideHold(RightName);
    HideHold(LeftName);
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

    
    if(second%5==0)
    {
        ChangeHold();
    }
}

    var level;
   level=0;
    const easy_btn = document.getElementById('Easy');
    const med_btn = document.getElementById('Medium');
    const hard_btn = document.getElementById('Hard');
    document.getElementById('Easy').addEventListener('click', ()=>
{
    if(SSclicked==0)
    {
        level=1;
        easy_btn.style.background="lightgreen";
        med_btn.style.background="";
        hard_btn.style.background="";
    }

});
document.getElementById('Medium').addEventListener('click', ()=>
{
    if(SSclicked==0)
    {
        level=2;
        easy_btn.style.background="";
        med_btn.style.background="lightgreen";
        hard_btn.style.background="";
    }
});
document.getElementById('Hard').addEventListener('click', ()=>
{
    if(SSclicked==0)
    {
        level=3;
        easy_btn.style.background="";
        med_btn.style.background="";
        hard_btn.style.background="lightgreen"
    }
});
//Pop Up Divs
function ShowDiv(name){document.getElementById(name).style.visibility = "visible"; }
function HideDiv(name){document.getElementById(name).style.visibility ="hidden"; }



//HangBoard Algorithm
const [H1,H2,H3,H4,H5,H6,H7,H8,H10,H11,H12,H13,H14,H15,H16,H18,H19,H20,H21,H22,H23,H24,H25,H26]=[7,7,8,8,7,7,4,6,2,4,3,10,3,4,2,5,1,2,3,7,3,2,1,5];
var [H9,H17]=[4,4];
const ArrayHolds = [H1,H2,H3,H4,H5,H6,H7,H8,H9,H10,H11,H12,H13,H14,H15,H16,H17,H18,H19,H20,H21,H22,H23,H24,H25,H26];
const [MaxEasy,MaxMed,MaxHard]= [14,6,1];
const MaxScore = [MaxEasy,MaxMed,MaxHard];
var [leftH,rightH]=[H9,H17];
var [leftI,rightI]=[8,16];
var [LeftName,RightName]=["H9","H17"];
var score=leftH+rightH;
var prob=0;
function StartAlgo()
{
    if(level==1)
    {
            H9=10;
            H17=10;
    }
    else if(level==2)
    {
        H9=6;
        H17=6;
    }
    ShowHold('H17');
    ShowHold('H9');
    
}
function ShowHold(name)
{
    document.getElementById(name).style.visibility="visible" 
}
function HideHold(name)
{
    document.getElementById(name).style.visibility="hidden" 
}

//HoldIndex 0-25
//array[HoldIndex] = actual hold score
//RightName = "H(XX)"

function ChangeHold()
{
  
  let flag=0
  while(flag<1)
  {
    let HoldIndex=Math.floor(Math.random() * 26); 
    let side = Math.random();
    if(HoldIndex!=leftI&&HoldIndex!=rightI)
    {
        console.log("Side is "+side)
        console.log("prob is "+prob)
        console.log(prob+side)
        if(prob+side<0.5)
        {
          if(ArrayHolds[HoldIndex]+leftH>=MaxScore[level-1])
          {

              prob=0.5;
              rightH=ArrayHolds[HoldIndex];
              HideHold(RightName);
              RightName="H"+(HoldIndex+1);
              RightI=HoldIndex;
              ShowHold(RightName);
              score=leftH+ArrayHolds[HoldIndex];
              flag=1;
              
          }
        }
        else
        {
          if(ArrayHolds[HoldIndex]+rightH>=MaxScore[level-1])
          {
              prob=-0.5;
              leftH=ArrayHolds[HoldIndex];
              HideHold(LeftName);
              LeftName="H"+(HoldIndex+1);
              LeftI=HoldIndex;
              ShowHold(LeftName);
              score=leftH+ArrayHolds[HoldIndex];
              flag=1;
          }
        }
    }
    else
    {
        console.log("now");
    }
    
  }//while

}
/*
function Score()
{
    score=leftH+rightH;
}

// Continue steps: 
/* 
1. Get level from user
2. Value holds with scores
3. Set Max score function 
4. Randomly display holds that passes the Max Score test
*/