/* 2)crear un programa que pida
un numero al usuario y devuelva un mensaje
diciendo si el numero es primo o no
*/
let a;
function signo(x) {
  if (x * -1 > 0) {
    console.log("es negativo");
    a=-1;
  } else if (x * -1 < 0) {
    console.log("es positivo");
    a=1;
  } else {
    console.log("es cero");
    a=0;
  }
  return a;
}

let num2 = Number(prompt("ingrese un numero"));
num2=signo(num2);
//let typenum1 = typeof num1;
//console.log(typenum1);
if (Number.isNaN(num2)) {
  console.log("ingreso NaN");
} else if (num2){
  console.log("es un numero");
  signo(num1);