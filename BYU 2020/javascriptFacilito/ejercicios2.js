function miNombreCompleto() {
  let all = "";
  let names = document.getElementById("nombre").value;
  let lastName = document.getElementById("apellido").value;
  let secondLastName = document.getElementById("segundoApellido").value;
  all = names + lastName + secondLastName;
  document.getElementById("outPut").innerHTML = all;
}


function nombre(uno, dos, tres) {

  return uno + dos + tres;

}
console.log(nombre(5, 5, 5));
let info = ""
let capturar = () => {
  let favorites = document.getElementsByClassName("color"),
    array = [];
  for (let i = 0; i < favorites.length; i++) {
    array[i] = favorites[i].value;
    info += favorites[i].value + "<br>";
    document.getElementById("outPut2").innerHTML = info;


  }
}