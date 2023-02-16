
function getPin() {
    const pin = pinGenarate();
    const pinString = pin + "";
    if (pinString.length == 4) {
        return pin;
    }
    else {
        return getPin()
    }
}

function pinGenarate() {
    const pinCreate = Math.round(Math.random() * 10000);
    return pinCreate;
}

document.getElementById("generate-btn").addEventListener("click", function () {

    const pin = getPin();
    const displayPin = document.getElementById("displayPin");
    displayPin.value = pin;

})



document.getElementById("Calc").addEventListener("click", function(e){
   const getNumber= e.target.innerText;
  const pinCalculate=  document.getElementById("pin-calculate");
  const pinCalculateValue= pinCalculate.value;


  if(isNaN(getNumber)){
    if(getNumber=== "C"){
        
        pinCalculate.value= "";

    }
    else if(getNumber=== "<"){
        const digit= pinCalculateValue.split("");
        digit.pop()
        const remainingDigit= digit.join("");
        pinCalculate.value= remainingDigit;
    }
  }
  else{
    const newTypeNumber= pinCalculateValue+ getNumber;
    pinCalculate.value= newTypeNumber;
  }
})



document.getElementById("submitbtn").addEventListener("click", function(){
    const displayPin = document.getElementById("displayPin");
    const carntPin= displayPin.value;
   

    const pinCalculate=  document.getElementById("pin-calculate");
    const pinCalculateValue= pinCalculate.value;



    const pinSuccessMessage = document.getElementById('pin-success');
    const pinFailureMessage = document.getElementById('pin-failure');


    if(carntPin==pinCalculateValue){
        pinSuccessMessage.style.display = 'block';
        pinFailureMessage.style.display = 'none';
    }
    else{
        pinFailureMessage.style.display = 'block';
        pinSuccessMessage.style.display = 'none';
    }
})



