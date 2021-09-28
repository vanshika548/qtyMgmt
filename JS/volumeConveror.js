var userInput = document.getElementById('text1');
var userResult = document.getElementById('text2');
let inputType = document.getElementById('volume1');
let resultType = document.getElementById('volume2');
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
        case "mililitre-litre" :              
                userResult.value =  unitMultiply(userInput.value,0.001);
                console.log(userResult.value);
                break;
        case "mililitre-gallon" :
                userResult.value =  unitMultiply(userInput.value,0.000264);
                console.log(userResult.value);
                break;
        case "mililitre-mililitre" :
                userResult.value = userInput.value ;
                console.log(userResult.value);
                break;
        case "litre-mililitre" :
                userResult.value =  unitMultiply(userInput.value,1000);                      
                console.log(userResult.value);
                break;
        case "litre-gallon":
                userResult.value =  unitMultiply(userInput.value,0.264172);    
                console.log(userResult.value);
                break;
        case "litre-litre":
                userResult.value = userInput.value ;
                console.log(userResult.value);
                break;
        case "gallon-mililitre" :
                userResult.value =  unitMultiply(userInput.value,3785.411784);                          
                console.log(userResult.value);
                break;
        case "gallon-litre":
                userResult.value =  unitMultiply(userInput.value,3.7854117);  
                console.log(userResult.value);
                break;
        case "gallon-gallon":
                userResult.value = userInput.value ;
                console.log(userResult.value);
                break;
       
    }
}