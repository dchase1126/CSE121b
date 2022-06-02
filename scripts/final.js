 //if else and switch          
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
    
        document.getElementById('correctMessageOutput').innerHTML = message;
}
    
        
     
    

