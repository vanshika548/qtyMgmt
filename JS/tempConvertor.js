var userInput = document.getElementById('text1');
var userResult = document.getElementById('text2');
let inputType = document.getElementById('temp1');
let resultType = document.getElementById('temp2');
let result,result1;
let inputTypeValue,resultTypeValue;
let inputTypeValue1, resultTypeValue1;


userInput.addEventListener("keyup", myResult);
userResult.addEventListener("keyup", myResult1);
let input;
if (input = userInput) {
        inputType.addEventListener("change", myResult);
        resultType.addEventListener("change", myResult1);
} else {
        inputType.addEventListener("change", myResult);
        resultType.addEventListener("change", myResult1);
}



function unitMultiply(input1,input2){
    let answer = input1 * input2;;
     return answer;
 }


 
function myResult1() {

        inputTypeValue1 = resultType.value;
        resultTypeValue1 = inputType.value;
        let option1 = inputTypeValue1 + "-" + resultTypeValue1;

        switch(option1){
                case "celsius-fahrenheit" :              
                        result =  unitMultiply(userResult.value,1.8);
                        userInput.value = result + 32;
                        console.log(userInput.value);
                        break;
                case "celsius-Kelvin" :
                        userInput.value = (userResult.value * 1) + 273.15;
                        console.log(userInput.value);
                        break;
                case "celsius-celsius" :
                        userInput.value = userResult.value ;
                        console.log(userInput.value);
                        break;
                case "fahrenheit-celsius" :
                        result = userResult.value - 32;
                        userInput.value =  unitMultiply(result,0.5556);                      
                        console.log(userInput.value);
                        break;
                case "fahrenheit-Kelvin":
                        userInput.value = (userResult.value - 32) *( 5/9) + 273.15;
                        console.log( userInput.value);
                        break; 
                case "fahrenheit-fahrenheit":
                        userInput.value = userResult.value ;
                        console.log(userInput.value);
                        break;
                case "Kelvin-celsius" :
                        userInput.value = (userResult.value * 1) - 273.15;                        
                        console.log(userInput.value);
                        break;
                case "Kelvin-fahrenheit":
                        userInput.value = (userResult.value  - 273.15) * (9/5) + 32;
                        console.log( userInput.value);
                        break;
                case "Kelvin-Kelvin":
                        userInput.value = userResult.value ;
                        console.log(userInput.value);
                        break;
        }
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