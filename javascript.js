/*javascripts goes here*/

/*create buttons*/
const history=document.getElementById("history");
const current=document.getElementById("current");
const zero=document.getElementById("zeroButton");
const one=document.getElementById("oneButton");
const two=document.getElementById("twoButton");
const three=document.getElementById("threeButton");
const four=document.getElementById("fourButton");
const five=document.getElementById("fiveButton");
const six=document.getElementById("sixButton");
const seven=document.getElementById("sevenButton");
const eight=document.getElementById("eightButton");
const nine=document.getElementById("nineButton");
const ac=document.getElementById("acButton");
const negative=document.getElementById("negativeButton");
const percent=document.getElementById("percentButton");
const divide=document.getElementById("divideButton");
const multiply=document.getElementById("multiplyButton");
const subtract=document.getElementById("subtractButton");
const plus=document.getElementById("plusButton");
const decimal=document.getElementById("decimalButton");
const equal=document.getElementById("equalButton");

/*functions to manipulate and correctly organize the display*/
let historyDisplay="0";
let currentDisplay="0";
let defaultDisplay=0;
let theAnswer=0;
let atTheEnd=false;
function updateDisplay(){
  if(currentDisplay[0]==="0"&&currentDisplay[1]!=null){
    currentDisplay=currentDisplay.substring(1);
  }
  if(historyDisplay.length>21){//do nothing
  }else{
    history.textContent=historyDisplay;
  }
  if(currentDisplay.length>7){//do nothing
  }else{
    current.textContent=currentDisplay;
  }
}
function updateHistory(input){
  if(input==="equal"){
    currentDisplay=theAnswer;
    updateDisplay();
    atTheEnd=true;
  }else if(atTheEnd==true){
    atTheEnd=false;
    historyDisplay=theAnswer.concat(input);
    currentDisplay="0";
    theAnswer=0;
    updateDisplay();
  }else if(historyDisplay==="0"){
    historyDisplay=currentDisplay.concat(input);
    currentDisplay="0";
    updateDisplay();
  }else{
    let holder=currentDisplay.concat(input)
    historyDisplay=historyDisplay.concat(holder);
    currentDisplay="0";
    updateDisplay();
  }
}function updateCurrent(input){
  if(atTheEnd==true){
    atTheEnd=false;
    historyDisplay="0";
    currentDisplay=input;
  }else{
    currentDisplay=currentDisplay.concat(input);
  }
  updateDisplay();
}

/*number button listeners*/
zero.addEventListener('click',()=>{
  updateCurrent("0");
});
one.addEventListener('click',()=>{
  updateCurrent("1");
});
two.addEventListener('click',()=>{
  updateCurrent("2");
});
three.addEventListener('click',()=>{
  updateCurrent("3");
});
four.addEventListener('click',()=>{
  updateCurrent("4");
});
five.addEventListener('click',()=>{
  updateCurrent("5");
});
six.addEventListener('click',()=>{
  updateCurrent("6");
});
seven.addEventListener('click',()=>{
  updateCurrent("7");
});
eight.addEventListener('click',()=>{
  updateCurrent("8");
});
nine.addEventListener('click',()=>{
  updateCurrent("9");
});

/*math button listeners*/
ac.addEventListener('click',()=>{
  if(currentDisplay==="0"){
    historyDisplay="0";
  }else{
    currentDisplay="0";
  }
  theAnswer=0;
  updateDisplay();
});
negative.addEventListener('click',()=>{
  currentDisplay=String(0-currentDisplay);
  if(theAnswer!==0){
    theAnswer=currentDisplay;
  }
  updateDisplay();
});
percent.addEventListener('click',()=>{
  updateHistory(" % ");
});
divide.addEventListener('click',()=>{
  updateHistory(" / ");
});
multiply.addEventListener('click',()=>{
  updateHistory(" * ");
});
subtract.addEventListener('click',()=>{
  updateHistory(" - ");
});
plus.addEventListener('click',()=>{
  updateHistory(" + ");
});
decimal.addEventListener('click',()=>{
  if(!currentDisplay.includes(".")){
    currentDisplay=currentDisplay.concat(".");
    updateDisplay();
  }
});

/*calculate*/
equal.addEventListener('click',()=>{
  historyDisplay=historyDisplay.concat(currentDisplay);
  let work=historyDisplay.split(" ");
  let pos=0;
  let ans=0;
  while(work.includes("%")){
    pos=work.indexOf("%");
    ans=work[pos-1]*(work[pos+1]/100);
    work.splice(pos-1,3,ans);
  }
  while(work.includes("*")){
    pos=work.indexOf("*");
    ans=work[pos-1]*work[pos+1];
    work.splice(pos-1,3,ans);
  }
  while(work.includes("/")){
    pos=work.indexOf("/");
    ans=work[pos-1]/work[pos+1];
    work.splice(pos-1,3,ans);
  }
  while(work.includes("+")){
    pos=work.indexOf("+");
    ans=Number(work[pos-1])+Number(work[pos+1]);
    work.splice(pos-1,3,ans);
  }
  while(work.includes("-")){
    pos=work.indexOf("-");
    ans=work[pos-1]-work[pos+1];
    work.splice(pos-1,3,ans);
  }
  theAnswer=String(work[0]);
  updateHistory("equal");
});
