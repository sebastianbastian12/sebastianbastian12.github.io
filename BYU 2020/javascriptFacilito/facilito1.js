function practice (){
let info1 = document.getElementById("nombre").value;
let info2 = parseFloat(document.getElementById("edad").value);
let info3 = document.getElementById("estadoCivil").value;
let info4 = document.getElementById("pais").value;
let info5 = document.getElementById("libro1").value;
info5 = document.getElementById("libro2").value;
info5 = document.getElementById("libro3").value;
let answer1 = info1;
let answer2 = info2;
let answer3 = info4;
document.getElementById("outPut1").innerHTML = answer1;
document.getElementById("outPut2").innerHTML = answer2;
document.getElementById("outPut3").innerHTML = answer3;

alert("El ultimo libro que leiste fue"+" "+ info5);
if (info2 < 28 && info3 == "soltero"){
    alert( info1+" "+"Puedes ir al paseo");
} else if (info2 >= 28 && info3 === "casado"){
    alert( info1+" "+"no puedes ir al paseo");
} else {
    alert(info1+" "+"quedate en casa mejor");
}
let info6 = document.getElementById("h/m").value;
if (info6 == "hombre" || info6 =="mujer"){
    document.getElementById("outPut4").innerHTML = "Eres una hija o hijo de Dios!";
}
let info7 = document.getElementById("lie").value;
let change = info7;
if (change === "no"){
  
    document.getElementById("outPut5").innerHTML = "no seas mentiroso no sabes";
} else{
    document.getElementById("outPut5").innerHTML = "Que bueno que seas sincero : )";
}
}

