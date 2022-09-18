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

const ActivePage = window.location.pathname;
console.log(ActivePage);
console.log("hello");


const activeNav = document.querySelectorAll('nav a').forEach(
    MyLinks => {
        if (MyLinks.href.includes(`${ActivePage}`)) {
            MyLinks.classList.add('Active');
            console.log("Gotcha Baby");
        }

    }
)

function ShowDiv(name){document.getElementById(name).style.visibility = "visible"; }
function HideDiv(name){document.getElementById(name).style.visibility ="hidden"; }