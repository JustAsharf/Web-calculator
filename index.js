var string =[];
var text;

var num1;
var num2;
document.querySelector(".AC ").addEventListener("click", AC);
document.querySelector(".eq ").addEventListener("click", equal);
document.querySelector(".ma ").addEventListener("click", mains);
document.querySelector(".X ").addEventListener("click", multyplication);
document.querySelector(".div ").addEventListener("click", dev);
document.querySelector(".pl ").addEventListener("click", plus );
document.querySelector(".zero ").addEventListener("click", zero );
document.querySelector(".one ").addEventListener("click", one );
document.querySelector(".tow ").addEventListener("click", tow );
document.querySelector(".three ").addEventListener("click", three );
document.querySelector(".four ").addEventListener("click", four );
document.querySelector(".five ").addEventListener("click", five );
document.querySelector(".six ").addEventListener("click", six );
document.querySelector(".seven ").addEventListener("click", seven );
document.querySelector(".eight ").addEventListener("click", eight );
document.querySelector(".nine").addEventListener("click", nine);

function plus(){
    string.push("+");
    text=string.toString();
text = text.replaceAll(",","");
document.querySelector(".secreen").innerHTML=text;
}
function AC(){
    string=[""]
    text=string.toString();
text = text.replaceAll(",","");
document.querySelector(".secreen").innerHTML=text;
}
function dev(){
    string.push("/");
    text=string.toString();
text = text.replaceAll(",","");
document.querySelector(".secreen").innerHTML=text;}

function mains(){
    string.push("-")
    text=string.toString();
text = text.replaceAll(",","");
document.querySelector(".secreen").innerHTML=text;}

function multyplication(){
    string.push("*");
    text=string.toString();
text = text.replaceAll(",","");
document.querySelector(".secreen").innerHTML=text;
}
function equal(){
    string.push("");
    text=string.toString();
text = text.replaceAll(",","");
num1=eval(text);
document.querySelector(".secreen").innerHTML=num1;
string=[""]
}
function nine()
{
    string.push(9);
text=string.toString();
text = text.replaceAll(",","");
document.querySelector(".secreen").innerHTML=text;
}
function eight ()
{
    string.push(8);
text=string.toString();
text = text.replaceAll(",","");
document.querySelector(".secreen").innerHTML=text;
}
function seven ()
{
    string.push(7);
text=string.toString();
text = text.replaceAll(",","");
document.querySelector(".secreen").innerHTML=text;
}
function six ()
{
    string.push(6);
text=string.toString();
text = text.replaceAll(",","");
document.querySelector(".secreen").innerHTML=text;
}
function five ()
{
    string.push(5);
text=string.toString();
text = text.replaceAll(",","");
document.querySelector(".secreen").innerHTML=text;
}
function four ()
{
    string.push(4);
text=string.toString();
text = text.replaceAll(",","");
document.querySelector(".secreen").innerHTML=text;
}
function three ()
{
    string.push(3);
text=string.toString();
text = text.replaceAll(",","");
document.querySelector(".secreen").innerHTML=text;
}
function tow ()
{
    string.push(2);
text=string.toString();
text = text.replaceAll(",","");
document.querySelector(".secreen").innerHTML=text;
}
function one ()
{
    string.push(1);
text=string.toString();
text = text.replaceAll(",","");
document.querySelector(".secreen").innerHTML=text;
}
function zero ()
{
    string.push(0);
text=string.toString();
text = text.replaceAll(",","");
document.querySelector(".secreen").innerHTML=text;
}