
//Curso JavaScript

//SECCION 3: Basicos de Javasrcrpt
console.log("SECCION 3: Basicos de Javasrcrpt");
//4.Sintaxis y tipo de datos:
console.log("4.Sintaxis y tipo de datos");

//las variables son dinamicas y casesensitive
//se declaran con let
let cadena= "olaquease";
let boleano= true;
let num= 5;
console.log(num);
num=3;

//document.getElementById("resultado").innerHTML = cadena; //esto se ve en el body por el div
console.log(num);
function suma(num) {
	// body...
const numero0=5;
let numero1=num;
let numero2=4;
console.log(numero2);
numero2+=numero1*numero0;
return numero2;
}
cadena="String452353453";
//document.getElementById("resultado").innerHTML = cadena;
console.log(suma(num));
console.log("hola"+cadena);

///5.TIPOS DE OPERADORES (FALTAN LOS CONDICIONALES):
console.log("5.TIPOS DE OPERADORES (FALTAN LOS CONDICIONALES)");
/*Operadores matematicos*/
console.log("Operadores matematicos");
let a=5;
let b=2;
let usuario= "mechu";
console.log(a+b); //suma, tambien sirve para concatenar cadenas
console.log(a-b); //resta
console.log(a*b); //producto
console.log(a/b); //division
console.log(a%b); //modulo, devuelve el resto de una division
console.log("Hola "+ usuario);
//Operadores de incremento y decremento
console.log("Operadores de incremento y decremento");
let c=6;
console.log(c); //imprime 6, valor asignado
console.log(c++); //imprime 6 y despues incementa en 1
console.log(c);   //imprime 7 por que se incremento en 1 en la linea anterior
console.log(++c); //incrementa en 1 y despues imprime, en este caso 8
console.log(c--); //imprime 8 y luego decrementa en 1
console.log(c);  //imprime 7 por que se decremento en la linea anterior
console.log(--c); //decrementa en 1 y luego imprime, en este caso 6
console.log(c);   //imprime 6 por que se decremento en la linea anterior
//Operadores asignacion
console.log("Operadores asignacion");
let d= 10;
console.log(d);
d +=3;
console.log(d);
d -=3;
console.log(d);
d *=3;
console.log(d);
d /=3;
console.log(d);
d %=3;
console.log(d);

/*6. METODOS Y PROPIEDADES DE LOS STRINGS
Metodo: Es todo aquello que la cadena que puede hacer Ej:Convertirse en mayuscula
Propiedad: Son las caracteristicas que la cadena tiene por ser una cadena. Ej: Longitud
Se emplean usando la nomenclatura del punto: cadena.metodo() y cadena.propiedad */
console.log("6. METODOS Y PROPIEDADES DE LOS STRINGS");
let string= "Hola Mechudo";
console.log(string);
//Propiedades mas conocidas:
console.log("Propiedades:");
//length -> Devuelve la longitud de la cadena
console.log("longitud "+cadena.length);
/*Metodos: todos los metodos devuelven una cadena nueva, 
la cadena original no sera modificada*/
console.log("Metodos:");
//toUpperCase() -> Devuelve la cadena en mayuscula
console.log("toUpperCase: "+string.toUpperCase());
//toLowerCase() -> Devuelve la cadena en minusculas.
console.log("toLowerCase: "+string.toLowerCase());
//indexOf(sring) -> Devuelve la posicion en la que se encuentra o donde empieza la subcadena, si no lo encuentra devuelve -1
console.log("indexOf('o')= "+ string.indexOf('o') + " (esa la posicion de la primer subcadena 'o' de izq a der)");
console.log("indexOf('Hola')= "+ string.indexOf('Hola')+" (en esta posicion empieza esta subcadena)");
console.log("indexOf('Mechudo')= "+ string.indexOf('Mechudo')+" (en esta posicion empieza esta subcadena)");
//replace(valor a buscar, valor nuevo)-> Reemplaza el fragmento de la cadena que le digamos y pone valor nuevo
console.log("replace('Mechudo','Juan'): "+string.replace('Mechudo','Juan'));
//substring((inicio,fin)) -> extrae los caracteres desde inicio hasta fin. Si no se iindica el fin extrae hsta el final.
console.log("substring(3)= "+string.substring(3)+ " (extrae los caracteres desde la pos. 3 hasta el final de la cadena)");
console.log("substring(3,7)= "+string.substring(3,7)+" (extrae los caracteres desde la posicion 3 hasta la poscion 7)");
//slice(inicio,fin) -> Igual que substring pero admite valores negativos, si ponemos valores negativos empezara desde atras
//Si no se indica el final, extrae hasta el final de la cadena
console.log("slice(3)= "+string.slice(3)+ " (Me corta la cadena a partir de la posicion 3)");
console.log("slice(-3)= "+string.slice(-3)+ " (Me corta la cadena y devuelve los últimos 3  caracteres)");
console.log("string.slice(0,-7)= "+string.slice(0,-7)+ " (Me corta la cadena a partir de la posicon 0 ignorando los ultimos 7) ");
//trim()-> Elimina los espacios al inicio y al final de una cadena
console.log("cadena ejemplo para metodo trim():")
let string2= '   Hola Mechudo, estamos trabajando con cadenas  ';
console.log(string2);
console.log(string2.trim());
console.log("cadena.trim() Me sacó los espacios del principio y el final");
//startsWith(valor[,inicio]) ->Sirve para saber si la cadena empieza con ese valor. Devuelve true o false.
console.log("string.startsWith('H')= "+string.startsWith('H'));
console.log("string.startsWith('h')= "+string.startsWith('h'));
console.log("string.startsWith('M',5)= "+string.startsWith('M',5)+ " (Empieza a contar desde la posicion 5)");
 //endsWith(valor[,longitud]) ->Sirve para saber si la cadena termina con ese valor. Devuelve true o false.
console.log("string.endsWith('o')= "+string.endsWith('o'));
console.log("string.endsWith('a',4)= "+string.endsWith('a',4)+ " (considera si el ultimo de los primeros 4 caracteres es 'a')");
console.log("string.endsWith('Mechudo')= "+string.endsWith('Mechudo'));
//includes(valor[,inicio]) -> Igual que indexOf pero devuelve true o false
console.log("string.includes('c')= "+string.includes('c')+" (Por que 'Hola Mechudo' contiene una 'c')" );
console.log("string.includes('a',5)= "+string.includes('a',5)+" (Por que busca la 'a' a partir de la posicion 5)");
console.log("string.includes('a',5)= "+string.includes('a',2)+" (Por que busca la 'a' a partir de la posicion 2)");
//repeat(valor) -> Repite la cadena el numero de veces que le indiques
console.log("string.repeat(2)= "+string.repeat(2));
//Template Strings
let nombre = 'Juan';
let apellido = 'de la Fuente';
let edad = 28;
console.log('Hola '+nombre+" "+apellido+". Tenes "+edad+" años.");
console.log(`Hola ${nombre} ${apellido}. Tienes ${edad} años.`) //(Alt+96)con acento grave 

/*7.OBJETO MATH: 
Es un objeto estatico que se utiliza para operaciones 
matematicas mas especificas. Tenemos que usar su nombre 
(Math) respetando la mayuscula y las minunsculas 
para utilizarlo*/
console.log("7. OBJETO Math:");
//Propiedades:
//Math.E : Constante e (valor que se utiliza en trigonometria y algoritmos)
console.log(Math.E);
//Math.PI: Constante pi (valor que se utiliza para trabajar en matematicas para circunferencia por ej.)
console.log(Math.PI);
//Metodos mas utilizados:
console.log("Metodos mas utilizados:");
//Math.abs(x) Devuelve el valor absoluto de x.
//Math.ceil(x) Devuelve el enetero mas grande mayor o igual que un numero.
//Math.floor(x) Devuelve el entro mas pequeño menor o igual que un numero.
//Math.pow(x,y) Devuelve la potencia de x elevado a y.
//Math.random() Genera un valor pseudoaleatorio entre 0 y 1.
//Math.random()*x Genera un numero aleatorio entre 0 y x
//Math.random()*(max-min)+min Genera un numero aleatorio entre un min y un max 
//Math.round(x) Devuelve el valor de un numero redondeado al entrero mas cercano.
//Math.sign(x) Devuel el signo de x, que indica si x es positivo, negativo o cero.
//Math.sqrt(x) Devuelve la reaiz cuadrada de x
let n = -5;
console.log(`numero ${n}`);
console.log(`valor absoluto ${Math.abs(n)}`);
n=5.3;
console.log(`numero ${n}`);
console.log(`Entero cercano mas grande ${Math.ceil(n)}`);
n=5.9;
console.log(`numero ${n}`);
console.log(`Entero cercano mas pequeño ${Math.floor(n)}`);
console.log(`Math.pow(2,3)= ${Math.pow(2,3)} (2 elevado a la 3)`);
console.log('Math.random() numero aleatorio entre 0 y 1:');
console.log(Math.random());
console.log(Math.random());
console.log('Math.random() numero aleatorio entre 0 y x:');
console.log('Math.random()*100 (entre 0 y 100)');
console.log(Math.random()*100);
console.log(Math.random()*100);
console.log('Math.random()*1000 (entre 0 y 1000)');
console.log(Math.random()*1000);
console.log('Math.random()*(max-min)+min (entre 100 y 50)');
let n2 = Math.random()*(100-50)+50;
console.log(n2);
console.log('Math.round(x): Redondeamos el ultimo Math.random()')
console.log(Math.round(n2));
console.log(`Math.sign() devuelve -1 si es negativo, 0 si es es un 0 y 1 si es positivo`);
console.log(`Math.sign(-7)= ${Math.sign(-7)}`);
console.log(`Math.sign(0)= ${Math.sign(0)}`);
console.log(`Math.sign(7)= ${Math.sign(7)}`);                                          
console.log(`Math.sqrt(4)= ${Math.sqrt(4)} (Raiz cuadrada)`);

// 8. CONDICIONALES I: Existen Simples (if), Compuesto (if else) y Multiples */
console.log("8. CONDICIONALES I:");
/*Condicional simple*/
console.log("Condicional simple:");
num=5;
console.log(num);
if (num>0) { 
	console.log(`${num} es mayor que 0 `);
    console.log(`${num} es mayor que 0 `);
}

/*Condicional compuesto*/
console.log("Condicional compuesto:");
num=-5;
console.log(num);
if (num>0) { 
	console.log(`${num} es mayor que 0 `);
    
}else{
     console.log(`${num} es menor que 0 `);
     }

/*Condicional multiple*/
console.log("Condicional multiple:");
num=0;
console.log(num);
if (num>0) { 
	console.log(`${num} es mayor que 0 `);
    
}else if (num<0) {
	console.log(`${num} es menor que 0 `);
}else {
	console.log(`${num} es igual que 0 `);
}

/* Operadores  logicos*/
/* && and*/
/*|| or*/

let num1=Math.round(Math.random()*(1000000-(-1000000))+(-1000000));
let num2=Math.round(Math.random()*(1000000-(-1000000))+(-1000000));
console.log(`${num1} y ${num2}`);

if (num1>0) {
	if (num2>0) {console.log(`${num1} es mayor que 0  y ${num2} es mayor que 0 `);
}
	else if (num2<0) {

		console.log(`${num1} es mayor que 0  y ${num2} es menor que 0 `); 
}
	     else { console.log(`${num1} es mayor que 0  y ${num2} es igual que 0 `);
}
} else if (num1<0) {
	if (num2>0) 

		{console.log(`${num1} es menor que 0  y ${num2} es mayor que 0 `);
}
	else if (num2<0) { 
		console.log(`${num1} es menor que 0  y ${num2} es menor que 0 `); 
}
	     else { console.log(`${num1} es menor que 0  y ${num2} es igual que 0 `);
}
}
else { 
	if (num2<0){ console.log(`${num1} es igual que 0  y ${num2} es menor que 0 `);
}   else if (num2> 0) { console.log(`${num1} es igual que 0  y ${num2} es mayor que 0 `); 
}
	    else { console.log(`${num1} es igual que 0  y ${num2} es igual que 0 `);
}
}

let flag = false;

if(flag==true) {console.log(`Flag es true`);}
if (flag== false) {console.log(`Flag es false`);}

flag= true;

if (flag) {console.log(`Flag es true`);}
if(!flag) {console.log(`Flag es false`);}


/* 9. Ejercicio ordenar 3 números  */

/*
x,y,z
x,z,y
y,x,z
y,z,x
z,x,y
z,y,x



const numero = document.getElementById('numero'); //obtengo del div numero
const result= document.getElementById('resultado'); //obtengo del div resultado

let x=prompt('Introduzca el primer número'); //Sale una ventanita con el mensaje y formulario para ingresar.
let y=prompt('Introduzca el segundo número');
let z=prompt('Introduzca el tercer número');

numero.textContent = `Los numero introducidos son ${x}, ${y}, ${z}`; //Escribo en el div numero lo obtenido en los prompts 

*/
//Ejercicio

/*if (x>=y && x>=z) {
     
     if (y>z) {
     	resultado.textContent = `El orden es ${x}, ${y}, ${z}`;
      }else {
      	resultado.textContent = `El orden es ${x}, ${z}, ${y}`;
      }
}else if (y>=x && y>=z) {
	if (x>z){
      resultado.textContent = `El orden es ${y}, ${x}, ${z}`;   
} else{
	resultado.textContent = `El orden es ${y}, ${z}, ${x}`;   
}
} else if (z>=x && z>=y){

	if (x>y){
		resultado.textContent = `El orden es ${z}, ${x}, ${y}`;

	}else{
		resultado.textContent = `El orden es ${z}, ${y}, ${x}`;
	}
}

if(x>=y && x>=z){
    if(y>z){
        result.textContent = `El orden es: ${x}, ${y}, ${z}`
    }else{
        result.textContent = `El orden es: ${x}, ${z}, ${y}`
    }
}else if(y>=x && y>=z){
    if(x>z){
        result.textContent = `El orden es: ${y}, ${x}, ${z}`
    }else{
        result.textContent = `El orden es: ${y}, ${z}, ${x}`
    }
}else if(z>=x && z>=y){
    if(x>y){
        result.textContent = `El orden es: ${z}, ${x}, ${y}`
    }else{
        result.textContent = `El orden es: ${z}, ${y}, ${x}`
    }
}
*/
/* 10. CONDICIONALES SWITCH:

//Sintaxis simple:
 switch(evaluacion){
	case n1:
	//codigo;
    break;
    case n2:
    //codigo;
    break;
     default:
     //codigo;
 }

//Sintaxis multiple:

switch(evaluacion){
	case n1:
	case n2:
	case n3:
	//codigo;
	break;
	default:
	codigo;
	}
*/


let numb = 2;

switch (numb) {
case 1: 
 console.log(`${numb} tiene el valor 1`);
break;
case 2: 
 console.log(`${numb} tiene el valor 2`);
break;
default: 
 console.log(`${numb} no vale ni 1 ni 2`);
}
numb= 3;
switch(numb){
case 1:
case 3:
case 5:
console.log (`${numb} es impar`);
break;
case 2:
case 4:
case 6:
console.log (`${numb} es par`);
}

/* 11. Operador ternario:
No es condicional, es un operador
Se utiliza cuando una condicion sera true o false.
Pueden tener una o varias sentencias, separadas por comas

(condicion)? true : false

(condicion)?
    (primera sentencia, segunda sentencia)
     :
     (primera sentencia, segunda sentencia)
*/

numb= 3;

(numb % 2 == 0) ? console.log(`${numb} es par`) : console.log(`${numb} es impar`);

(numb % 2 == 0) ? 
(
console.log(`${numb} es par`),
console.log(`${numb} es par`)  
)
: 
(
console.log(`${numb} es impar`),
console.log(`${numb} es impar 2`)
)

//12.ARRAYS I:

let array=[];
console.log(array);

let numbers=[1, 2, 3, 4, 5];
let palabras=['hola', 'estoy', 'en', 'Diadema'];
console.log(numbers);
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[0]+numbers[1]);
console.log(palabras);
console.log(palabras[1]);
console.log(palabras[1].length);
console.log(`La palabra "${palabras[1]}" tiene ${palabras[1].length} letras`);

//13.ARRAYS II:

//Metoddos

/*
Array.isArray(variableaevaluar) - Devuelve true 
si es un array
*/

/*
let nu= 5;
let numeros=[1, 2, 3, 4, 5];
Array.isArray(nu);
Array.isArray(numeros);
*/

/*Eliminar elemento
.shift() = Elimina el primer elemento y lo devuelve
.pop() = Elimina el ultimo elemento y lo devuelve
*/
console.log(numbers);
numbers.shift();
let deleteElement = numbers.shift();
console.log(deleteElement);
console.log(numbers);
numbers.pop();
console.log(numbers);


/*Agregar elemento
.push(element1, element2,...)= Añade uno o mas elementos 
al final y devuelve la nueva longitud
.unshift(element1, element2,...)=  Añade uno o mas elementos 
al comienzo y devuelve la nueva longitud
*/
console.log(numbers);
let newLength = numbers.push(6);
console.log(newLength);
numbers.push(6);
console.log(numbers);
let newLength2 = numbers.unshift(7);
console.log(newLength2);
numbers.unshift(7);
console.log(numbers);

/*
.indexOf() - Devuelve el primer indice 
del elemento que concida con el valor especificado, o -1 
si ninguno es encontrado 
*/
numbers=[1, 2, 3, 4, 5, 1];
console.log(numbers.indexOf(1));

/*
.lastIndexOf() - Devuelve el ultimo indice 
del elemento que concida con el valor especificado, o -1 
si ninguno es encontrado 
*/
console.log(numbers.lastIndexOf(1));

/*
.reverse() -Invierte el orden de los elementos
*/

console.log(numbers);
numbers.reverse();
console.log(numbers);

/*
.join('separador') - Devuelve el contenido del 
vector como cadena con el separador que indquemos,
por defecto son comas.
*/

console.log(numbers);
console.log(numbers.join('-'));
let vectorCadena= numbers.join('*');
console.log(vectorCadena);

/* .splice(a,b,items) - Cambia el contenido de un array
eliminando elementos existentes y/o agregando nuevo elemento
a - Indice de inicio
b - Numero de elementos (opcional)
items - Elementos a añadir en ele caso de que se añaden.
*/
console.log(numbers);
numbers.splice(3); //Elimina desde la posicion 3 hast al final
console.log(numbers);
numbers=[1, 2, 3, 4, 5, 1];
console.log(numbers);
numbers.splice(2,2); //Elimina dos elementos desde la pos. 2
console.log(numbers);
numbers=[1, 2, 3, 4, 5, 1];
console.log(numbers);
numbers.splice(3,1,7,159,58); // Elimina un elemento a partir de la pos. 3 y agrega los numeros.
console.log(numbers);
numbers.splice(0,0,54,278,96); //Agrega desde la posicion 0 sin eliminar
console.log(numbers);

/*
.slice(a,b) -  Extrae elementos de un arrglo desde 
el indice a hasta el indice b. Si no existe b lo hace
hasta al y si no existye ni a ni b hace una copia del array.

let newNumbers = numbers.Slice();
console.log(numbers);
console.log(newNumber);

newNumbers = numbers.Slice(2);
console.log(numbers);
console.log(newNumber);

newNumbers = numbers.Slice(2,4);//La ultima pos. no se contempla. Termina de contar, no la incluye en la exraccion
console.log(numbers);
console.log(newNumber);
*/
/*14.BULCE WHILE Y DO WHILE:

Bucles indeterminados ya que no se sabe cuantas vueltas dara

Bucle while si no se cumple no se ejecuta ni una vez
while(condicion){
	//codigo a ejecutar
}

Bucle do..while se ejecuta al menos una vez
do{
	//codigo a ejecutar
while(condicion)	
}


let pass = '';

while (pass != 'hola'){
	pass =prompt ('Introduzca su contraseña');
}

console.log('fin del bucle'); 

do{
	pass =prompt ('Introduzca su contraseña');
}while (pass != 'hola');
*/

/*15. BUCLE FOR

Su sintaxis se compone de 3 partes
Iniciacion de variable
numero de vueltas
incremento o decremento
 
 for (let i= 0; i <10, i--){
	Codigo de ejecutar
 }

 */

numbers= [56,14,23,37,41,59];

for (let i= 0; i<numbers.length; i++){
	console.log(`i vale ${i} y el valor de esa posicion en el array es ${numbers[i]}`);
 }

/*15. BUCLE FOR OF / FOR IN 
Simplica el bucle for tradicional sin tener que darle
un numero de vueltas ni realizar un incremento


for(let variable of estructura) {
	
	Codigo a ejecutar
}

*/

let names = ['Juan', 'Jose', 'Debora', 'Corina'];

/*dentro del for se declara la variable name 
sin inicializarla*/
for (let name of names) {//Devuelve el valor de cada posicion
    
    console.log(name);
}

/*dentro del for se declara la variable index 
sin inicializarla*/
for (let index in names) { //Devuelve la posicion
	console.log(index);
}

/* 
Palabras reservdadas en el for
break cuando la condicion se cumple rompe el bulce y pasa a la siguiente linea
continue cuando la condicion se cumple salta la posicion y sigue con la siguiente
*/

for (let name of names) {//Devuelve el valor de cada posicion
    if(name==='Debora'){
     break; //rompe el bulce y pasa a la siguiente line
    }
    console.log(name);
}
for (let index in names) { //Devuelve la posicion
	if (names[index]==='Debora'){
		continue //salta la

		 posicion y sigue con la siguiente
	}
	console.log(index);
}