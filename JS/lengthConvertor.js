var userInput = document.getElementById('text1');
var userResult = document.getElementById('text2');
let inputType = document.getElementById('length1');
let resultType = document.getElementById('length2');
let inputTypeValue1, resultTypeValue1;
let inputTypeValue, resultTypeValue;


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





function unitMultiply(input1, input2) {
        let answer = input1 * input2;;
        return answer;
}



function myResult1() {

        inputTypeValue1 = resultType.value;
        resultTypeValue1 = inputType.value;
        let option1 = inputTypeValue1 + "-" + resultTypeValue1;

        switch (option1) {
                case "meter-centimeter":
                        userInput.value = unitMultiply(userResult.value, 0.001);
                        console.log(userInput.value);
                        break;

                case "meter-centimeter":
                        userInput.value = unitMultiply(userResult.value, 100);
                        console.log(userInput.value);
                        break;
                case "meter-meter":
                        userInput.value = userResult.value;
                        console.log(userInput.value);
                        break;
                case "meter-millimeter":
                        userInput.value = unitMultiply(userResult.value, 1000);
                        console.log(userInput.value);
                        break;
                case "meter-micrometer":
                        userInput.value = unitMultiply(userResult.value, 1000000);
                        console.log(userInput.value);
                        break;
                case "meter-mile":
                        userInput.value = unitMultiply(userResult.value, 0.000621371);
                        console.log(userInput.value);
                        break;
                case "meter-foot":
                        userInput.value = unitMultiply(userResult.value, 3.28084);
                        console.log(userInput.value);
                        break;
                case "meter-inch":
                        userInput.value = unitMultiply(userResult.value, 39.3701);
                        console.log(userInput.value);
                        break;

                case "centimeter-centimeter":
                        userInput.value = userInput.value;
                        console.log(userInput.value);
                        break;
                case "centimeter-kilometer":
                        userInput.value = unitMultiply(userResult.value, 0.00001);
                        console.log(userInput.value);
                        break;
                case "centimeter-meter":
                        userInput.value = unitMultiply(userResult.value, 0.01);
                        console.log(userInput.value);
                        break;
                case "centimeter-millimeter":
                        userInput.value = unitMultiply(userResult.value, 10);
                        console.log(userInput.value);
                        break;
                case "centimeter-micrometer":
                        userInput.value = unitMultiply(userResult.value, 10000);
                        console.log(result.value);
                        break;
                case "centimetre-mile":
                        userInput.value = unitMultiply(userResult.value, 0.0000062137);
                        console.log(userInput.value);
                        break;
                case "centimetre-foot":
                        userInput.value = unitMultiply(userResult.value, 0.0328084);
                        console.log(userInput.value);
                        break;
                case "centimetre-inch":
                        userInput.value = unitMultiply(userResult.value, 0.393701);
                        console.log(userInput.value);
                        break;



                case "millimeter-millimeter":
                        userInput.value = userResult.value.value;
                        console.log(userInput.value);
                        break;
                case "millimeter-kilometer":
                        userInput.value = unitMultiply(userResult.value, 0.000001);
                        console.log(userInput.value);
                        break;
                case "millimeter-meter":
                        userInput.value = unitMultiply(userResult.value, 0.001);
                        console.log(userInput.value);
                        break;
                case "millimeter-centimeter":
                        userInput.value = unitMultiply(userResult.value, 0.1);
                        console.log(userInput.value);
                        break;
                case "millimeter-micrometer":
                        userInput.value = unitMultiply(userResult.value, 1000);
                        console.log(userInput.value);
                        break;
                case "millimeter-mile":
                        userInput.value = unitMultiply(userResult.value, 0.00000062137);
                        console.log(userInput.value);
                        break;
                case "millimeter-foot":
                        userInput.value = unitMultiply(userResult.value, 0.00328084);
                        console.log(userInput.value);
                        break;
                case "millimeter-inch":
                        userInput.value = unitMultiply(userResult.value, 0.0393701);
                        console.log(userInput.value);
                        break;


                case "kilometer-kilometer":
                        userInput.value = userResult.value;
                        console.log(userInput.value);
                        break;
                case "kilometer-millimeter":
                        userInput.value = unitMultiply(userResult.value, 1000000);
                        console.log(userInput.value);
                        break;
                case "kilometer-meter":
                        userInput.value = unitMultiply(userResult.value, 1000);
                        console.log(userInput.value);
                        break;
                case "kilometer-centimeter":
                        userInput.value = unitMultiply(userResult.value, 100000);
                        console.log(userInput.value);
                        break;
                case "kilometer-micrometer":
                        userInput.value = unitMultiply(userResult.value, 1000000000);
                        console.log(userInput.value);
                        break;
                case "kilometer-mile":
                        userInput.value = unitMultiply(userResult.value, 0.621371);
                        console.log(userInput.value);
                        break;
                case "kilometer-foot":
                        userInput.value = unitMultiply(userResult.value, 3280.84);
                        console.log(userInput.value);
                        break;
                case "kilometer-inch":
                        userInput.value = unitMultiply(userResult.value, 39370.1);
                        console.log(userInput.value);
                        break;


                case "inch-kilometer":
                        userInput.value = unitMultiply(userResult.value, 0.000025400276352);
                        console.log(userInput.value);
                        break;
                case "inch-meter":
                        userInput.value = unitMultiply(userResult.value, 0.025400276352);
                        console.log(userInput.value);
                        break;
                case "inch-centimeter":
                        userInput.value = unitMultiply(userResult.value, 2.5400276352);
                        console.log(userInput.value);
                        break;
                case "inch-millimeter":
                        userInput.value = unitMultiply(userResult.value, 25.400276352);
                        console.log(userInput.value);
                        break;
                case "inch-micrometer":
                        userInput.value = unitMultiply(userResult.value, 25400.276352);
                        console.log(userInput.value);
                        break;
                case "inch-mile":
                        userInput.value = unitMultiply(userResult.value, 0.000015783);
                        console.log(userInput.value);
                        break;
                case "inch-foot":
                        userInput.value = unitMultiply(userResult.value, 0.0833333);
                        console.log(userInput.value);
                        break;
                case "inch-inch":
                        userInput.value = userResult.value;
                        console.log(userInput.value);
                        break;


                case "mile-kilometer":
                        userInput.value = unitMultiply(userResult.value, 1.60934);
                        console.log(userInput.value);
                        break;
                case "mile-meter":
                        userInput.value = unitMultiply(userResult.value, 1609.34);
                        console.log(userInput.value);
                        break;
                case "mile-centimeter":
                        userInput.value = unitMultiply(userResult.value, 160934);
                        console.log(userInput.value);
                        break;
                case "mile-millimeter":
                        userInput.value = unitMultiply(userResult.value, 1609340);
                        console.log(userInput.value);
                        break;
                case "mile-micrometer":
                        userInput.value = unitMultiply(userResult.value, 1609340000);
                        console.log(userInput.value);
                        break;
                case "mile-mile":
                        userInput.value = userResult.value;
                        console.log(userInput.value);
                        break;
                case "mile-foot":
                        userInput.value = unitMultiply(userResult.value, 5280);
                        console.log(userInput.value);
                        break;
                case "mile-inch":
                        userInput.value = unitMultiply(userResult.value, 63360);
                        console.log(userInput.value);
                        break;


                case "foot-kilometer":
                        userInput.value = unitMultiply(userResult.value, 0.0003048);
                        console.log(userInput.value);
                        break;
                case "foot-meter":
                        userInput.value = unitMultiply(userResult.value, 0.3048);
                        console.log(userInput.value);
                        break;
                case "foot-centimeter":
                        userInput.value = unitMultiply(userResult.value, 30.48);
                        console.log(userInput.value);
                        break;
                case "foot-millimeter":
                        userInput.value = unitMultiply(userResult.value, 304.8);
                        console.log(userInput.value);
                        break;
                case "foot-micrometer":
                        userInput.value = unitMultiply(userResult.value, 304800);
                        console.log(userInput.value);
                        break;
                case "foot-mile":
                        userInput.value = unitMultiply(userResult.value, 0.000189394);
                        console.log(userInput.value);
                        break;
                case "foot-foot":
                        userInput.value = userResult.value;
                        console.log(userInput.value);
                        break;
                case "foot-inch":
                        userInput = unitMultiply(userResult.value, 12);
                        console.log(userInput.value);
                        break;


                case "micrometer-kilometer":
                        userInput.value = unitMultiply(userResult.value, 0.000000001);
                        console.log(userInput.value);
                        break;
                case "micrometer-meter":
                        userInput.value = unitMultiply(userResult.value, 0.000001);
                        console.log(userInput.value);
                        break;
                case "micrometer-centimeter":
                        userInput.value = unitMultiply(userResult.value, 0.0001);
                        console.log(userInput.value);
                        break;
                case "micrometer-millimeter":
                        userInput.value = unitMultiply(userResult.value, 0.001);
                        console.log(userInput.value);
                        break;
                case "micrometer-micrometer":
                        userInput.value = userResult.value;
                        console.log(userInput.value);
                        break;
                case "micrometer-mile":
                        userInput.value = unitMultiply(userResult.value, 0.00000000062137);
                        console.log(userInput.value);
                        break;
                case "micrometer-foot":
                        userInput.value = unitMultiply(userResult.value, 0.00000328084);
                        console.log(userInput.value);
                        break;
                case "micrometer-inch":
                        userInput.value = unitMultiply(userResult.value, 0.000039370079);
                        console.log(userInput.value);
                        break;

        }


}

function myResult(){
    inputTypeValue = inputType.value;
    resultTypeValue = resultType.value;
    let option = inputTypeValue + "-" +resultTypeValue;

 
    
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
        case "centimetre-mile":
                result.value =  unitMultiply(input.value,0.0000062137);
                console.log(result.value);
                break;
        case "centimetre-foot":
                result.value =  unitMultiply(input.value,0.0328084);
                console.log(result.value);
                break;
        case "centimetre-inch":
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