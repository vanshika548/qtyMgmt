var userInput = document.getElementById('text1');
var userResult = document.getElementById('text2');
let inputType = document.getElementById('length1');
let resultType = document.getElementById('length2');
let inputTypeValue,resultTypeValue;

window.addEventListener("keyup",myResult);
inputType.addEventListener("change",myResult);
resultType.addEventListener("change",myResult);
inputTypeValue = inputType.value;
resultTypeValue = resultType.value;

function myResult(){
    inputTypeValue = inputType.value;
    resultTypeValue = resultType.value;
    let option = inputTypeValue + "-" +resultTypeValue;

    function unitMultiply(input1,input2){
        let answer = input1 * input2;;
        return answer;
     }

     switch(option){
        case "meter-kilometer" :              
                userResult.value =  unitMultiply(userInput.value,0.001);
                console.log(userResult.value);
                break;
                case "meter-centimeter" :
                    userResult.value =  unitMultiply(userInput.value,100);
                    console.log(userResult.value);
                    break;
            case "meter-meter" :
                    userResult.value = userInput.value;                       
                    console.log(userResult.value);
                    break;
            case "meter-millimeter":
                    userResult.value =  unitMultiply(userInput.value,1000);
                    console.log(userResult.value);
                    break;
            case "meter-micrometer":
                    result.value =  unitMultiply(input.value,1000000);
                    console.log(result.value);
                    break;
            case "meter-mile":
                    result.value =  unitMultiply(input.value,0.000621371);
                    console.log(result.value);
                    break;
            case "meter-foot":
                    result.value =  unitMultiply(input.value,3.28084);
                    console.log(result.value);
                    break;
            case "meter-inch":
                    result.value =  unitMultiply(input.value,39.3701);
                    console.log(result.value);
                    break;
    
            case "centimeter-centimeter" :
                    userResult.value = userInput.value;                        
                    console.log(userResult.value);
                    break;
            case "centimeter-kilometer":
                    userResult.value =  unitMultiply(userInput.value,0.00001);
                    console.log(userResult.value);
                    break;
            case "centimeter-meter":
                    userResult.value =  unitMultiply(userInput.value,0.01);
                    console.log(userResult.value);
                    break;
            case "centimeter-millimeter":
                    userResult.value =  unitMultiply(userInput.value,10);
                    console.log(userResult.value);
                    break;
            case "centimeter-micrometer":
                    result.value =  unitMultiply(input.value,10000);
                    console.log(result.value);
                    break;
            case "centimeter-mile":
                    result.value =  unitMultiply(input.value,0.0000062137);
                    console.log(result.value);
                    break;
            case "centimeter-foot":
                    result.value =  unitMultiply(input.value,0.0328084);
                    console.log(result.value);
                    break;
            case "centimeter-inch":
                    result.value =  unitMultiply(input.value,0.393701);
                    console.log(result.value);
                    break;
    
    
    
            case "millimeter-millimeter" :
                    userResult.value = userInput.value;                        
                    console.log(userResult.value);
                    break;
            case "millimeter-kilometer":
                    userResult.value =  unitMultiply(userInput.value,0.000001);
                    console.log(userResult.value);
                    break;
            case "millimeter-meter":
                    userResult.value =  unitMultiply(userInput.value,0.001);
                    console.log(userResult.value);
                    break;
            case "millimeter-centimeter":
                    userResult.value =  unitMultiply(userInput.value,0.1);
                    console.log(userResult.value);
                    break;
            case "millimeter-micrometer":
                    result.value =  unitMultiply(input.value,1000);
                    console.log(result.value);
                    break;
            case "millimeter-mile":
                    result.value =  unitMultiply(input.value,0.00000062137);
                    console.log(result.value);
                    break;
            case "millimeter-foot":
                    result.value =  unitMultiply(input.value,0.00328084);
                    console.log(result.value);
                    break;
            case "millimeter-inch":
                    result.value =  unitMultiply(input.value,0.0393701);
                    console.log(result.value);
                    break;
    
    
            case "kilometer-kilometer" :
                    userResult.value = userInput.value;                        
                    console.log(userResult.value);
                    break;
            case "kilometer-millimeter":
                    userResult.value =  unitMultiply(userInput.value,1000000);
                    console.log(userResult.value);
                    break;
            case "kilometer-meter":
                    userResult.value =  unitMultiply(userInput.value,1000);
                    console.log(userResult.value);
                    break;
            case "kilometer-centimeter":
                    userResult.value =  unitMultiply(userInput.value,100000);
                    console.log(userResult.value);
                 break;
            case "kilometer-micrometer":
                    result.value =  unitMultiply(input.value,1000000000);
                    console.log(result.value);
                    break;
            case "kilometer-mile":
                    result.value =  unitMultiply(input.value,0.621371);
                    console.log(result.value);
                    break;
            case "kilometer-foot":
                    result.value =  unitMultiply(input.value,3280.84);
                    console.log(result.value);
                    break;
            case "kilometer-inch":
                    result.value =  unitMultiply(input.value,39370.1);
                    console.log(result.value);
                    break;
    
    
            case "inch-kilometer":
                    result.value =  unitMultiply(input.value,0.000025400276352);
                    console.log(result.value);
                    break;
            case "inch-meter":
                    result.value =  unitMultiply(input.value,0.025400276352);
                    console.log(result.value);
                    break;
            case "inch-centimeter":
                    result.value =  unitMultiply(input.value,2.5400276352);
                    console.log(result.value);
                    break;
            case "inch-millimeter":
                    result.value =  unitMultiply(input.value,25.400276352);
                    console.log(result.value);
                    break;
            case "inch-micrometer" :
                    result.value =  unitMultiply(input.value,25400.276352);
                    console.log(result.value);
                    break;
            case "inch-mile":
                    result.value =  unitMultiply(input.value,0.000015783);
                    console.log(result.value);
                    break;
            case "inch-foot":
                    result.value =  unitMultiply(input.value,0.0833333);
                    console.log(result.value);
                    break;
            case "inch-inch":
                    result.value = input.value;                        
                    console.log(result.value);
                    break;
    
    
            case "mile-kilometer":
                    result.value =  unitMultiply(input.value,1.60934);
                    console.log(result.value);
                    break;
            case "mile-meter":
                    result.value =  unitMultiply(input.value,1609.34);
                    console.log(result.value);
                    break;
            case "mile-centimeter":
                    result.value =  unitMultiply(input.value,160934);
                    console.log(result.value);
                    break;
            case "mile-millimeter":
                    result.value =  unitMultiply(input.value,1609340);
                    console.log(result.value);
                    break;
            case "mile-micrometer" :
                    result.value =  unitMultiply(input.value,1609340000);
                    console.log(result.value);
                    break;
            case "mile-mile":
                    result.value = input.value;                        
                    console.log(result.value);
                    break;
            case "mile-foot":
                    result.value =  unitMultiply(input.value,5280);
                    console.log(result.value);
                    break;
            case "mile-inch":
                    result.value =  unitMultiply(input.value,63360);
                    console.log(result.value);
                    break;
    
    
            case "foot-kilometer":
                    result.value =  unitMultiply(input.value,0.0003048);
                    console.log(result.value);
                    break;
            case "foot-meter":
                    result.value =  unitMultiply(input.value,0.3048);
                    console.log(result.value);
                    break;
            case "foot-centimeter":
                    result.value =  unitMultiply(input.value,30.48);
                    console.log(result.value);
                    break;
            case "foot-millimeter":
                    result.value =  unitMultiply(input.value,304.8);
                    console.log(result.value);
                    break;
            case "foot-micrometer" :
                    result.value =  unitMultiply(input.value,304800);
                    console.log(result.value);
                    break;
            case "foot-mile":
                    result.value =  unitMultiply(input.value,0.000189394);
                    console.log(result.value);
                    break;
            case "foot-foot":
                    result.value = input.value;                        
                    console.log(result.value);
                    break;
            case "foot-inch":
                    result.value =  unitMultiply(input.value,12);
                    console.log(result.value);
                    break;
    
    
            case "micrometer-kilometer":
                    result.value =  unitMultiply(input.value,0.000000001);
                    console.log(result.value);
                    break;
            case "micrometer-meter":
                    result.value =  unitMultiply(input.value,0.000001);
                    console.log(result.value);
                    break;
            case "micrometer-centimeter":
                    result.value =  unitMultiply(input.value,0.0001);
                    console.log(result.value);
                    break;
            case "micrometer-millimeter":
                    result.value =  unitMultiply(input.value,0.001);
                    console.log(result.value);
                    break;
            case "micrometer-micrometer" :
                    result.value = input.value;                        
                    console.log(result.value);
                    break;
            case "micrometer-mile":
                    result.value =  unitMultiply(input.value,0.00000000062137);
                    console.log(result.value);
                    break;
            case "micrometer-foot":
                    result.value =  unitMultiply(input.value,0.00000328084);
                    console.log(result.value);
                    break;
            case "micrometer-inch":
                    result.value =  unitMultiply(input.value,0.000039370079);
                    console.log(result.value);
                    break;
     }
    }     