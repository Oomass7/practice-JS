//Ver el sistema interactivo desde el navegdor

//Le damos la bienvenida al usuario con un alert
alert("Bienvenido al Sistema interactivo de mensajes");

//Le pedimos los datos necesarios al usuario
let name = prompt("Ingresa tu nombre:")
let age = prompt("Ingresa tu edad:")

//Cambiamos el tipo de la variable edad para que sea un numero
age = parseInt(age)

//Y creamos un condicional para que actue de forma diferente dependiento de la edad
if (isNaN(age) || age <= 0) {
    alert("Ingresa una edad valida")
} else if (age < 18) {
    alert(`Hola ${name}, eres menor de edad. Sigue disfrutando del codigo`)
} else {
    alert(`Hola ${name}, eres mayor de edad. Preparate para grandes oportunidades dentro del mundo de la progrmación`)
}

//Ver el sistema interactivo desde la consola
//En este caso cambie el nombre de las varibales y cambie los alert por console.log para que mostrara los mensajes en la consola


// console.log("Bienvenido al Sistema interactivo de mensajes");

// let nombre = prompt("Ingresa tu nombre:")
// let edad = prompt("Ingresa tu edad:")

// edad = parseInt(edad)

// if (isNaN(edad) || edad <= 0) {
//     console.log("Ingresa una edad valida")
// } else if (edad < 18) {
//     console.log(`Hola ${nombre}, eres menor de edad. Sigue disfrutando del codigo`)
// } else {
//     console.log(`Hola ${nombre}, eres mayor de edad. Preparate para grandes oportunidades dentro del mundo de la progrmación`)
// }


