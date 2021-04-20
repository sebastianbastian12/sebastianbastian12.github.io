function choose(){
let number = document.getElementById("numero").value;
if(number%2 == 0){
    alert("El numero que ingresaste es par"+" "+ number);
} else {
    alert("El numero que ingresaste en impar"+" "+ number);
}
}
function calculator(){ 
    const number1 = parseFloat(document.getElementById("numbero1").value);
    const number2 = parseFloat(document.getElementById("numbero2").value);
    const symbol = document.getElementById("simbolo").value;
    let operation;
    
    if(symbol == "+"){
        operation = number1 + number2;
       
    } else if (symbol == "-"){
        operation= number1-number2;
        
    }else if (symbol == "*"){
        operation = number1*number2;
        
    }else if (symbol == "/"){
       operation = number1/number2;
        
    } else{
        alert("ERROR please try again");
    }    document.getElementById("outPut").innerHTML = operation;
}
function fibonacci (){
    
    let times = parseFloat(document.getElementById("fibo").value);
    let numero1 = 0;
    let numero2 = 1;
    let answer = 0;
    let result = "";

    for (let i =0; i<=times; i++){
   answer = numero1 + numero2;
   numero1 = numero2;
   numero2 = answer;
   result+=answer+"<br>";
        }
        document.getElementById("outPut2").innerHTML = result;
    }
    
function magicNumber(){
    let numeroMagico = parseInt(document.getElementById("numeroMagico").value);
    let numero = 12;
    if (numeroMagico > numero){
        alert("Estas cerca, el numero magico es menor");
    } else if (numeroMagico < numero) {
        alert("Casito!  El numero magico es mayor");
    } else {
        alert("Excelente adivinaste el numero!!!");
    }
}