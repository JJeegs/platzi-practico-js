var nombre = "Jhonn";
var apellido = "Gutierrez"
var nickname = "Jeegs";
var edad = 17;
var correo = "jhonnelmejor110@gmail.com"
var mayor_edad = edad >= 18;
var ahorros = 600000;
var deudas = 20000;

var completeName = nombre + " " + apellido;
console.log(completeName);
console.log(ahorros - deudas);

function imprimirNombre(){
    console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
}

imprimirNombre();

const tipoDeSuscripcion = "Basic";

if (tipoDeSuscripcion=="Free"){
    console.log("Solo puedes tomar los cursos gratis");
}
else if (tipoDeSuscripcion == "Basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}
else if (tipoDeSuscripcion == "Espert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}
else if (tipoDeSuscripcion == "EspertPlus"){
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}

i=0;
while (i < 5){
    console.log("El valor de i es: " + i);
    i++
}


var aguacate = ["delicioso", "nutritivo", "verde", "mi besto friento"];

function imprimirTodo(array){
    for (i = 0; i < array.length; i++)
        console.log(array[i]);
}

imprimirTodo(aguacate);