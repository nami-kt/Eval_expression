function solveExpression() {
  var vyraz = document.getElementById("vyraz").value;
  document.getElementById("vysledek").innerHTML = "Vysledek je: " + vyraz;
}

var input = document.getElementById("vyraz");

//spusti f-ci, kdyz uzivatel zmackne enter
input.addEventListener("keyup", function(event) {
  //zrusi vychozi f-ci klavesy, pokus nejaka existuje
  event.preventDefault();
  //13 je hodnota enteru
  if (event.keyCode === 13) {
    solveExpression();
  }
});
