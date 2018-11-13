function solveExpression() {
  var expression = document.getElementById("expression").value;
  var sepExp = [];
  let number = 0,
    power = 0;
  for (let i = 0; i < expression.length; i++) {
    if ("1234567890".includes(expression.charAt(i))) {
      if (power === 0) {
        number *= 10;
      }
      number += parseInt(expression.charAt(i)) * Math.pow(10, power);
    } else if (".,".includes(expression.charAt(i))) {
      power--;
    } else if ("+-*/".includes(expression.charAt(i))) {
      power = 0;
      sepExp.push(number);
      number = 0;
      sepExp.push(expression.charAt(i));
    }
  }
  sepExp.push(number);

  for (let i = 0; i < sepExp.length; i++) {
    if ("*/".includes(sepExp[i])) {
      let num = mathUp[sepExp[i]](sepExp[i - 1], sepExp[i + 1]);
      sepExp.splice(i - 1, 3, num);
      i--;
    }
  }

  for (let i = 0; i < sepExp.length; i++) {
    if ("+-".includes(sepExp[i])) {
      let num = mathUp[sepExp[i]](sepExp[i - 1], sepExp[i + 1]);
      sepExp.splice(i - 1, 3, num);
      i--;
    }
  }

  document.getElementById("result").innerHTML = "Vysledek je: " + sepExp[0];
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
