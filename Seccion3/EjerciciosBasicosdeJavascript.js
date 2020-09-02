//Ejercicios Basicos de Javascript.js


/*
1 - Solicita un nombre, la edad y muestra por consola el mensaje "Hola ____, tienes ____ años y el año que viene tendrás ____ años" Realiza el ejercicio con prompt(mensaje) y haz uso de los template strings 
 

const datos = document.getElementById('datos'); //obtengo del div datos
const result= document.getElementById('resultado'); //obtengo del div resultado

datos.textContent = `Solicita un nombre, la edad y muestra el mensaje "Hola ____, tienes ____ años y el año que viene tendrás ____ años" Realiza el ejercicio con prompt(mensaje) y haz uso de los template strings `;

let flag= true;

while(flag){

let x=prompt('Introduzca el nombre'); //Sale una ventanita con el mensaje y formulario para ingresar.
let y=prompt('Introduzca la edad');
//let z=prompt('Introduzca el tercer número');
// alert("Datos ingresados incorrectos, el nombre debe ser una cadena no vacia y la edad un número entero mayo a 0");
z=parseInt(y, 10);
console.log(z);

if( x==="" || z<=0 || (z % 1 != 0)) {

 alert("Datos ingresados incorrectos, el nombre debe ser una cadena no vacia y la edad un número entero mayo a 0");

flag=true;
}else{
z+=1;
resultado.textContent = `Hola ${x}, tenes ${y} años y el año que viene tendrás ${z} años`; //Escribo en el div datos lo obtenido en los prompts
flag= false;

}

}

*/


/*
2 - Escribe un programa que pueda calcular el área de 3 figuras geométricas, triángulo, rectángulo y círculo. En primer lugar pregunta de qué figura se quiere calcular el área, después solicita los datos que necesites para calcularlo. triángulo = b * h/2 rectángulo = b * h círculo = π * r2 (pi * radio al cuadrado)


const datos = document.getElementById('datos'); //obtengo del div datos
const result= document.getElementById('resultado'); //obtengo del div resultado

datos.textContent = `Escribe un programa que pueda calcular el área de 3 figuras geométricas, triángulo, rectángulo y círculo. En primer lugar pregunta de qué figura se quiere calcular el área, después solicita los datos que necesites para calcularlo. triángulo = b * h/2 rectángulo = b * h círculo = π * r2 (pi * radio al cuadrado)`;

let b;
let h;
let radio;
let pi=Math.PI;

let areaTriangulo;
let areaRectangulo;
let areaCirculo;

let flag1= true;
while(flag1){

let x=prompt('Escriba la figura geométrica a la cual le quiere calcular el área (triángulo, rectángulo y círculo)');

switch (x) {
case 'triángulo': 
// b=prompt('Ingrese la base del triangulo');
 let flag2= true;
 while(flag2){
 b=parseInt(prompt('Ingrese la base del triángulo'));
 if (b<=0){
 	alert("la base tiene que ser un número mayor a 0");
}else{
flag2=false;
}
 }
let flag3= true;
 while(flag3){
 h=parseInt(prompt('Ingrese la altura del triángulo'));
 if (h<=0){
 	alert("la altura tiene que ser un número mayor a 0");
}else{
flag3=false;
}
 }

areaTriangulo= (b*h)/2;
resultado.textContent = `El area de su triángulo es igual ${areaTriangulo}`; 
flag1= false;
break;

case 'rectángulo': 
 let flag4= true;
 while(flag4){
 b=parseInt(prompt('Ingrese la base del rectángulo'));
 if (b<=0){
 	alert("la base tiene que ser un número mayor a 0");
}else{
flag4=false;
}
 }
let flag5= true;
 while(flag5){
 h=parseInt(prompt('Ingrese la altura del rectángulo'));
 if (h<=0){
 	alert("la altura tiene que ser un número mayor a 0");
}else{
flag5=false;
}
 }
areaRectangulo= b*h;
resultado.textContent = `El area de su rectángulo es igual ${areaRectangulo}`; 
flag1= false;

break;

case 'círculo': 
 let flag6= true;
 while(flag6){
 radio=parseInt(prompt('Ingrese el radio del círculo'));
 if (b<=0){
 	alert("El radio tiene que ser mayor a 0");
}else{
flag6=false;
}
 }
areaCirculo= Math.round(pi*(Math.pow(radio,2)));
resultado.textContent = `El area de su círculo es igual ${areaCirculo}`; 
flag1= false;
break;

default: 
 alert('Escriba bien triángulo, rectángulo o círculo');
}

}
*/

/*
3 - Solicita un número e imprime todos los números pares e impares desde 1 hasta ese número con el mensaje "es par" o "es impar" si el número es 5 el resultado será: 1 - es impar 2 - es par 3 - es impar 4 - es par 5 - es impar


const datos = document.getElementById('datos'); //obtengo del div datos
const resultado= document.getElementById('resultado'); //obtengo del div resultado

datos.textContent = `Solicita un número e imprime todos los números pares e impares desde 1 hasta ese número con el mensaje "es par" o "es impar"`;

//let n=parseInt(prompt('Escriba un numero entero mayor a 0 y le indico que numeros son pares y cuales numeros son impares hasta ese numero'));

let flag= true;

while (flag){

let n=parseInt(prompt('Escriba un numero entero mayor a 0 y le digo que numeros son pares y cuales son impares hasta ese numero'));

if(n>0){

flag=false;
resultado.textContent =  `El numero ingresado es ${n}`;

for (let i= 1; i<=n; i++){
	
(i % 2 == 0) ? console.log(`${i} es par`) : console.log(`${i} es impar`);

}


}else{

	console.log("Número ingresado debe ser mayor a 0");
}

}

*/

/*
4 - Escribe un programa que pida un número entero mayor que 1 y que escriba si el número primo o no. Un número primo es aquel que solo es divisible por sí mismo y la unidad


const datos = document.getElementById('datos'); //obtengo del div datos
const resultado= document.getElementById('resultado'); //obtengo del div resultado

datos.textContent = `Escribe un programa que pida un número entero mayor que 1 y que escriba si el número primo o no.`;

let flag= true;

while (flag){

let n=parseInt(prompt('Ingrese número entero mayor que 1'));

if(n>1) {

	if(primo(n)){

        	resultado.textContent = `${n} es primo.`;
        	flag=false;
        }else{
        	resultado.textContent = `${n} no es primo.`;
        	flag=false;

        }
        
}else{

	alert("Ingrese un numero mayor a 1.");
}

}

function primo(n){

for(let i=2; i<n; i++){
		console.log(n%i);
		if(n%i===0){
			return false;
        }
}
return true;
}
*/

/*
5 - Escriba un programa que pida un número entero mayor que cero y calcule su factorial. El factorial es el resultado de multiplicar ese número por sus anteriores hasta la unidad.

!5 = 5*4*3*2*1 = 120
*/

const datos = document.getElementById('datos'); //obtengo del div datos
const resultado= document.getElementById('resultado'); //obtengo del div resultado

datos.textContent = `Escriba un programa que pida un número entero mayor que cero y calcule su factorial.`;

let flag= true;

while (flag){

let n=parseInt(prompt('Ingrese número entero mayor que 1'));

if(n>1) {

	    resultado.textContent = `El factorial de ${n} es ${factorial(n)}.`;
        	flag=false;
        
}else{

	alert("Ingrese un numero mayor a 1.");
}

}

function factorial(n){
let resultado=n;
for(let i=n-1; i>=1; i--){
		resultado=resultado*i;
        }
return resultado;

}


/*
6 - Escribe un programa que permita ir introduciendo una serie indeterminadade números mientras su suma no supere 50. Cuando esto ocurra, se debe mostrar el total acumulado y el contador de cuantos números se han introducido
*/

/*
7 - Crea 3 arrays. El primero tendra 5 números y el segundo se llamará pares y el tercero impares, ambos estarán vacíos. Después multiplica cada uno de los números del primer array por un número aleatorio entre 1 y 10, si el resultado es par guarda ese número en el array de pares y si es impar en el array de impares. Muestra por consola: -la multiplicación que se produce junto con su resultado con el formato 2 x 3 = 6 -el array de pares e impares
*/

/*
8 - Dado un array de letras, solicita un número de DNI y calcula que letra le corresponde. El número no puede ser negativo ni tener más de 8 dígitos. La posición de la letra es el resultado del módulo del número introducido entre 23

const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
*/

/*
9 - Solicitar al usuario una palabra y mostrar por consola el número de consonantes, vocales y longitud de la palabra.
*/

/*
10 - Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "rosa"] determinar si un color introducido por el usuario a través de un prompt se encuentra dentro del array o no.
*/


