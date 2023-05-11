/*Напиши всі можливі варіанти створення функцій
Function Declaration
function showMessage () {
    console.log (`Hello`);
};
showMessage ();
Function Expression
const showMessage = () => {
     console.log (`Hello`);
};
showMessage();


Напиши функцію, яка обчислює факторіал переданого їй числа.
  function factorial(n){
    let result = 1;
    while(n){
        result *= n--;
    }
    return result;
};
alert( factorial(4) ); 

Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. 

function calcRectangle () {
    const sideA = prompt (`enter side a`);
    const sideB = prompt (`enter side b`);
    const Rectangle = sideA * sideB;
   return Rectangle;
}
 alert (calcRectangle ());
;

Створи функцію, яка буде виводити кількість переданих їй аргументів??????

function calcArgument () {
 return `in function ${arguments.length} arguments `;
};
calcArgument ();

Напиши функцію, яка приймає 2 числа і повертає :
-1, якщо перше число менше, ніж друге; 
1 - якщо перше число більше, ніж друге; 
0 - якщо числа рівні.

 const function = (firstNumber, secondNumber) => {
       if (firstNumber < secondNumber) {
        return -1;
     } 
     else if (firstNumber > secondNumber) {
       return 1;
       }
      return 0;
     };
     
 Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.*/

     const Number = [1, 4, 9];
     function string ( ) {
        console.log (Number.join(''));
     }
     string ();

