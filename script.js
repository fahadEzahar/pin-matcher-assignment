    const pinResultField = document.getElementById("pinResultField"); 
    const numberPadResults = document.getElementById("numberPadResults");
    function generatePin(){
        const fourDigitsRandom = Math.floor(1000 + Math.random() * 9000);
        pinResultField.value = fourDigitsRandom;
    }
    // To keep each number side by side from the number pad and to display in the case of results.
    function insertNumber(number){
        const existingNumbers = numberPadResults.value;
        numberPadResults.value = existingNumbers + number;
    }
    function clearNumberPadResults(){
        numberPadResults.value = "";
    }
    // To remove the last digit from the result field of the number pad.
    function deleteNumber(){
        let presentValue =  numberPadResults.value;
        numberPadResults.value = presentValue.slice(0,-1);
    }
    // To check whether the value of the PIN result field and the number result field match or not.
    function submitButton(){
        const pinMatched  =  document.getElementById("pinMatched");
        const pinDidNotMatched  =  document.getElementById("pinDidNotMatched");
        const actionLeft = document.getElementById("actionLeft"); //To indicate how many times there is an opportunity to submit. 
        const actionLeftNumber = parseInt(actionLeft.innerText); 
        const submitButton = document.getElementById("submitButton");

        if(pinResultField.value == numberPadResults.value && pinResultField.value != "" ){      
            pinMatched.style.display = 'block';
            pinDidNotMatched.style.display = 'none';
        }
        else if(pinResultField.value != numberPadResults.value && pinResultField.value != "" ){                    
            pinMatched.style.display = 'none'; 
            pinDidNotMatched.style.display = 'block';
            actionLeft.style.display =  'block';
            if(actionLeftNumber > 0 ){
                actionLeft.innerText = actionLeftNumber-1 + " try left";
            }
            else{
                submitButton.disabled = true;  
            }
        } 
        else if(pinResultField.value == ""){
            alert('Please generate the pin first'); 
        }    
    }