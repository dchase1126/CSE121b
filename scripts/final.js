         
    
// get child to input a number, an arithmetic operator (+, -, *, or /), another number, and the child's answer to the problem.  
function MathQuiz() {
        let number1 = parseFloat(document.getElementById('number1Box').value);
        let number2 = parseFloat(document.getElementById('number2Box').value);
        let mathOperator = (document.getElementById('operatorBox').value);
        let childsAnswer = parseFloat(document.getElementById('childsAnswerBox').value);

        let answer;
        let message;
            
        switch (mathOperator) {

            case '+': 
            answer = number1 + number2;
            break;
            case '-': 
            answer = number1 - number2;
            break;
            case '*': 
            answer = number1 * number2;
            break;
            case '/': 
            answer = number1 / number2;
            break;
        }
        if (answer == childsAnswer) {
            message = 'Correct! Good job!'
        }
        else {     
            message = 'Incorrect! Try again!'
        };
        // Display the  correct message to the user.
        document.getElementById('correctMessageOutput').innerHTML = message;
        //document.querySelector("#onClick").addEventListener("click", message);
 }
    
        
     
    

