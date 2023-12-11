/*javascripts goes here*/
/*buttons*/
const history=document.getElementById("history");
const current=document.getElementById("current");
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

/*displays*/
let historyDisplay="0";
let currentDisplay="0";
let defaultDisplay=0;
function updateDisplay(){
  if(currentDisplay[0]==="0"&&currentDisplay[1]!=null){
    currentDisplay=currentDisplay.substring(1);
  }
  history.textContent=historyDisplay;
  current.textContent=currentDisplay;
}
function updateHistory(input){
  if(historyDisplay==="0"){
    historyDisplay=currentDisplay.concat(input);
    currentDisplay="0";
    updateDisplay();
  }else{
    let holder=currentDisplay.concat(input)
    historyDisplay=historyDisplay.concat(holder);
    currentDisplay="0";
    updateDisplay();
  }
}

/*number button listeners*/
one.addEventListener('click',()=>{
  currentDisplay=currentDisplay.concat("1");
  updateDisplay();
});
two.addEventListener('click',()=>{
  currentDisplay=currentDisplay.concat("2");
  updateDisplay();
});
three.addEventListener('click',()=>{
  currentDisplay=currentDisplay.concat("3");
  updateDisplay();
});
four.addEventListener('click',()=>{
  currentDisplay=currentDisplay.concat("4");
  updateDisplay();
});
five.addEventListener('click',()=>{
  currentDisplay=currentDisplay.concat("5");
  updateDisplay();
});
six.addEventListener('click',()=>{
  currentDisplay=currentDisplay.concat("6");
  updateDisplay();
});
seven.addEventListener('click',()=>{
  currentDisplay=currentDisplay.concat("7");
  updateDisplay();
});
eight.addEventListener('click',()=>{
  currentDisplay=currentDisplay.concat("8");
  updateDisplay();
});
nine.addEventListener('click',()=>{
  currentDisplay=currentDisplay.concat("9");
  updateDisplay();
});

/*math button listeners*/
ac.addEventListener('click',()=>{
  if(currentDisplay==="0"){
    historyDisplay="0";
  }else{
    currentDisplay="0";
  }
  updateDisplay();
});
negative.addEventListener('click',()=>{
  //change current to a negative number
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
  //is there already a decimal? dont add one : add one
  currentDisplay=currentDisplay.concat(".");
  updateDisplay();
});
equal.addEventListener('click',()=>{
  //calculate
  updateDisplay();
});