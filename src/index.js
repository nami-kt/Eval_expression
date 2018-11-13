function solveExpression() {
  var expression = document.getElementById("expression").value;
  let left = 0,
    right = 0;
  var isFirst = true;
  var operator = "+";
  var result = 0;

  for (let i = 0; i < expression.length; i++) {
    if (
      expression.charAt(i) === "+" ||
      expression.charAt(i) === "-" ||
      expression.charAt(i) === "*" ||
      expression.charAt(i) === "/"
    ) {
      if (!isFirst) {
        left = mathUp[operator](left, right);
        right = 0;
      } else {
        isFirst = false;
      }

      operator = expression.charAt(i);
    } else {
      if (isFirst) {
        left = left * 10 + parseInt(expression.charAt(i));
      } else {
        right = right * 10 + parseInt(expression.charAt(i));
      }
    }
  }

  result += mathUp[operator](left, right);
  document.getElementById("result").innerHTML = "Vysledek je: " + result;
}

const mathUp = {
  "/": (a, b) => a / b,
  "*": (a, b) => a * b,
  "-": (a, b) => a - b,
  "+": (a, b) => a + b
};

var input = document.getElementById("expression");
//spusti f-ci, kdyz uzivatel zmackne enter
input.addEventListener("keyup", function(event) {
  //zrusi vychozi f-ci klavesy, pokus nejaka existuje
  event.preventDefault();
  //13 je hodnota enteru
  if (event.keyCode === 13) {
    solveExpression();
  }
});
