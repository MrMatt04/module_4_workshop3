//DISPLAY
var display = document.getElementById("display") //diplays input

display.innerHTML = ""

var optellen = 0;
var operation2 = ""

function play(id) {
    var audio = document.getElementById("audio" + id);
    audio.play();
   
}
//KEYPAD

document.getElementById("1").onclick = function(){
    console.log("1")
    let currentinput = display.innerHTML
    currentinput = currentinput + 1
    let  checkedin = checkinput(currentinput) 
    display.innerHTML= checkedin
    play(1)

}
document.getElementById("2").onclick = function(){
    console.log("2")
    display.innerHTML= display.innerHTML + 2
    play(1)
}
document.getElementById("3").onclick = function(){
    console.log("3")
    display.innerHTML= display.innerHTML + 3
    play(1)
}
document.getElementById("4").onclick = function(){
    console.log("4")
    display.innerHTML= display.innerHTML + 4
    play(1)
}
document.getElementById("5").onclick = function(){
    console.log("5")
    display.innerHTML= display.innerHTML + 5
    play(1)
}
document.getElementById("6").onclick = function(){
    console.log("6")
    display.innerHTML= display.innerHTML + 6
    play(1)
}
document.getElementById("7").onclick = function(){
    console.log("7")
    display.innerHTML= display.innerHTML + 7
    play(1)
}
document.getElementById("8").onclick = function(){
    console.log("8")
    display.innerHTML= display.innerHTML + 8
    play(1)
}
document.getElementById("9").onclick = function(){
    console.log("9")
    display.innerHTML= display.innerHTML + 9
    play(1)
}
document.getElementById("0").onclick = function(){
    console.log("0")
    display.innerHTML= display.innerHTML + 0
    play(1)
}
document.getElementById("/").onclick = function(){
    console.log("/")
    const string = display.innerHTML
    //kijkt voor dubble
    if (string.charAt(string.length - 1) === "+" || string.charAt(string.length - 1) === "-" || string.charAt(string.length - 1) === "/" || string.charAt(string.length - 1) === "*")
    {
    return false;
    }
    //kijkt voor begin
    if (string === "") {
        return false;
      }
    optellen = optellen - parseInt(display.innerHTML)
    display.innerHTML= display.innerHTML + "/"
    console.log(optellen)
    play(1)

}
document.getElementById("*").onclick = function(){
    console.log("*")
    const string = display.innerHTML
    if (string.charAt(string.length - 1) === "+" || string.charAt(string.length - 1) === "-" || string.charAt(string.length - 1) === "/" || string.charAt(string.length - 1) === "*")
    {
    return false;
    }
    if (string === "") {
        return false;
      }
    display.innerHTML= display.innerHTML + "*"
    optellen = optellen - parseInt(display.innerHTML)
    
    console.log(optellen)
    play(1)
}
document.getElementById("-").onclick = function(){
    console.log("-")
    const string = display.innerHTML
    if (string.charAt(string.length - 1) === "+" || string.charAt(string.length - 1) === "-" || string.charAt(string.length - 1) === "/" || string.charAt(string.length - 1) === "*") 
    {
    return false;
    }
    optellen = optellen - parseInt(display.innerHTML)
    display.innerHTML= display.innerHTML + "-"
    console.log(optellen)
    play(1)
}
document.getElementById("+").onclick = function(){
    console.log("+")
    const string = display.innerHTML
    if (string.charAt(string.length - 1) === "+" || string.charAt(string.length - 1) === "-" || string.charAt(string.length - 1) === "/" || string.charAt(string.length - 1) === "*")
    {
    return false;
    }
    if (string === "") {
        return false;
      }
    operation2 = "+"
    optellen = optellen + parseInt(display.innerHTML)
    console.log(optellen)
    display.innerHTML= display.innerHTML + "+"
    play(1)
    
    

}
document.getElementById("=").onclick = function(){
    console.log("=")
    display.innerHTML = eval(display.innerHTML);
    play(1)


}
document.getElementById(".").onclick = function(){
    console.log(".")
    display.innerHTML= display.innerHTML + "."
    play(1)
}
document.getElementById("del").onclick = function(){
    console.log("del")
    removeLastCharacter();
    play(1)
    
    

}
document.getElementById("ac").onclick = function (){
    console.log("ac")
    display.innerHTML= ""
    play(1)
}

//CALCULATOR

var operator;

function checkinput(currentinput) {
    var newvalue = currentinput 
    return newvalue 

    var res = str.charAt(str.length-1);
    console.log = res
    

}
function removeLastCharacter() {
    var str = display.innerHTML;
    str = str.substring(0,str.length-1);
    display.innerHTML = str
    }
function checkforop() {
    
    display.innerHTML = ""
}

//substring kijk laaste charater str
function nooperation(){
    if (check_l(display.innerHTML))
    {

    }
}

function check_opplus(str) {
  if (string.charAt(string.length - 1) === "+") {
        return false;
  }
    //TRUE
    console.log(str)
    return true;

}
