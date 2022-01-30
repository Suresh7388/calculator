export default function evaluate({currentOperand,  previousOperand, operation}){
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if(isNaN(prev) || isNaN(current)){
      return "";
    }
    let computation = ""; 
    switch(operation){
      case "+":
        computation = prev + current;
        break;
      case "-":
        computation = prev - current;
        break;
      case "*":
        computation = prev * current;
        break;
      case "/":
        computation = prev / current;
        break;
      default:
        return null;
    }
    return computation.toString();
  }