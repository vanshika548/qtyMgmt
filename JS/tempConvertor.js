var userInput = document.getElementById('text1');
var userResult = document.getElementById('text2');
let inputType = document.getElementById('temp1');
let resultType = document.getElementById('temp2');
let inputTypeValue,resultTypeValue;
let result , result1;


window.addEventListener("keyup",myResult);
inputType.addEventListener("change",myResult);
resultType.addEventListener("change",myResult);
inputTypeValue = inputType.value;
resultTypeValue = resultType.value;

function unitMultiply(input1,input2){
    let answer = input1 * input2;;
     return answer;
 }
 
function myResult(){
    inputTypeValue = inputType.value;
    resultTypeValue = resultType.value;
    let option = inputTypeValue + "-" +resultTypeValue;
    
    switch(option){
        case "celsius-fahrenheit" :              
                result =  unitMultiply(userInput.value,1.8);
                userResult.value = result + 32;
                console.log(userResult.value);
                break;
        case "celsius-Kelvin" :
                userResult.value = (userInput.value * 1) + 273.15;
                console.log(userResult.value);
                break;
        case "celsius-celsius" :
                userResult.value = userInput.value ;
                console.log(userResult.value);
                break;
        case "fahrenheit-celsius" :
                result = userInput.value - 32;
                userResult.value =  unitMultiply(result,0.5556);                      
                console.log(userResult.value);
                break;
        case "fahrenheit-Kelvin":
                userResult.value = (userInput.value - 32) *( 5/9) + 273.15;
                console.log( userResult.value);
                break; 
        case "fahrenheit-fahrenheit":
                userResult.value = userInput.value ;
                console.log(userResult.value);
                break;
        case "Kelvin-celsius" :
                userResult.value = (userInput.value * 1) - 273.15;                        
                console.log(userResult.value);
                break;
        case "Kelvin-fahrenheit":
                userResult.value = (userInput.value  - 273.15) * (9/5) + 32;
                console.log( userResult.value);
                break;
        case "Kelvin-Kelvin":
                userResult.value = userInput.value ;
                console.log(userResult.value);
                break;
       
    }
}