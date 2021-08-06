//crear un programa que pida al usuario que ingrese un numero y le devuelva un mensaje
//indicando si el numero es positivo
// negativo o si es 0

function signo(x) {
  if (x * -1 > 0) {
    console.log("es negativo");
  } else if (x * -1 < 0) {
    console.log("es positivo");
  } else {
    console.log("es cero");
  }
  return 0;
}

let num1 = Number(prompt("ingrese un numero"));
let typenum1 = typeof num1;
//console.log(typenum1);
if (Number.isNaN(num1)) {
  console.log("ingreso NaN");
} else {
  console.log("es un numero");
  signo(num1);
}
