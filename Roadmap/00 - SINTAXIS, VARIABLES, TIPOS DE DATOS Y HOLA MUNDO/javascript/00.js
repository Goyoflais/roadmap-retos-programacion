//https://developer.mozilla.org/es/docs/Web/JavaScript

//En un linea

/*En 
Varias
Lineas
*/

//Variable
let rperro = ["Chihuhua", "Pastor Ingles"];
let tproducto = ["Sopa", "Aceite", "Agua", "Salsa"]

//Constante
const razaPerro = rperro;
console.log("La raza de tu perro es: ", razaPerro[1]);
const producto = tproducto;
console.log("Tus productos son: ", producto[0]);
console.log("Tus productos son: ", producto[3]);

//Tipos de Datos
let string = "Tipo Cadena"; //texto
let number = 5000;//numero
let boolean = [true, false];//si o no, verdadero o falso
let array = ["Sopa", "Aceite", "Agua", "Salsa"];
let objeto = {
    "nom": "Jesus",
    "edad": 37,
    "sexo": "Masculino",
    "programador": false
};//Formado por varios 2 elementos, clave  - valor, se separa los valores con ","
console.log (objeto);

let lengselect = "JAVASCRIPT";
console.log("¡Hola, ", lengselect,"!");