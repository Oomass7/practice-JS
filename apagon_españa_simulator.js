import * as messages from "./constant.js"

let health = 5
let members = 3
let backpack = []

function mostrarEstado(){
    alert("Tus estadisticas son: \nVida: "+ health + "\nMiembros: " + members + "\nMochila:" + backpack)
}

function showQuestions(question) {
    prompt(question,"A-B-C-D")
}

function showAlerts(message) {
    alert(message)
}

function optionValidator (option, itemList, item1, item2) {
    if (option == "A") {
    health -= 1
    itemList.push(item1, item2)
    }
    if (option == "B") {
    members -= 1
    itemList.push(item1)
    }
    mostrarEstado()
}

showAlerts(messages.welcomeMessage)
showAlerts(messages.context1)
showAlerts(messages.context2)
mostrarEstado()
var option = prompt(showQuestions(messages.question1))

optionValidator(option, backpack, "comida", "agua")


var option = prompt(showQuestions(messages.question2))

if (option == "A") {
    backpack.push("botiquin")
    health += 1
    mostrarEstado()
}

if (option == "B") {
    health -= 1
    mostrarEstado()
}

if (option == "C") {
    backpack.push("bateria")
    health -= 1
    mostrarEstado()
}

var option = prompt("Bueno, al menos pudimos descansar algo por la noche. Es mejor emprender nuestro travesía a un lugar más seguro.\nMientras caminas con tu equipo escuchas unos gritos desgarradores pidiendo auxilio.\nEs una familia siendo atacada. ¿Deberian ir a revisar?.\nTienes 4 optiones:\nOpción A: Ayudar a la familia atrapada.\nOpción B: Ignorar y seguir avanzando.\nOpción C: Distraer a los enemigos y liberar a la familia a distancia.\nOpción D: Robar los recursos de la familia sin ser vistos.", "A-B-C-D")

if (option == "A") {
    members += 1
    backpack.push("mapa")
    mostrarEstado()
}

if (option == "B") {
    members -= 1
    mostrarEstado()
}

if (option == "C") {
    backpack.push("linterna")
    health -= 1
    mostrarEstado()
}

if (option == "D") {
    backpack.push("comida")
    members -= 2
    mostrarEstado()
}

var option = prompt("Desde lo alto de un edificio, una columna de humo se eleva a lo lejos. ¿Es una señal de auxilio o una trampa mortal? La decisión podría marcar la diferencia.\nTienes dos optiones: \nOpción A: Investigar la señal.\nOpción B: Evitar la zona.", "A-B")

if (option == "A") {
    backpack.push("llave", "gasolina")
    mostrarEstado()
}

if (option == "B") {
    mostrarEstado()
}

var option = prompt("El grupo necesita información. Las rutas están colapsadas, y moverse sin saber puede ser letal. ¿Mejor buscar una vista panorámica o seguir entre las sombras?\nTienes tres optiones:\nOpción A: Subir un edificio a observar.\nOpción B: Moverse por callejones.\nOpción C: Usar una alcantarilla conectada al metro.", "A-B-C")

if (option == "A") {
    backpack.push("intel")
    mostrarEstado()
}

if (option == "B") {
    health -= 1
    mostrarEstado()
}

if (option == "C") {
    backpack.push("tarjeta de acceso")
    mostrarEstado()
}

var option = prompt("La noche se acerca. Para avanzar rápido deben decidir: improvisar un medio de transporte o confiar en sus propias fuerzas. El tiempo es limitado.\n Tienes dos optiones:\nOpción A: Repara una bicicleta.\nOpción B: Ir a pie.", "A-B")

if (option == "A") {
    backpack.push("medicinas","batería")
    mostrarEstado()
}

if (option == "B") {
    health -= 1
    mostrarEstado()
}

alert("A pesar de los riesgos, tu grupo ha logrado reunir recursos vitales. En medio del silencio de la ciudad, encuentran una compuerta metálica marcada con un símbolo de evacuación. El mapa encontrado coincide con un acceso a los túneles del metro. La verdadera prueba está por comenzar bajo tierra, donde la oscuridad y los restos del colapso pondrán a prueba su determinación.")
alert("Ten encuenta que si tus estadísticas cumplen con lo siguiente significa que ganaste el juego:\nVida mayor o igual que 3\nTienes mas de dos objetos en la backpack\nQue uno de esos objetos sea un mapa\nReza porque tus estadísticas posean lo necesario...")

vida >= 3 && backpack.length >= 2 && backpack.includes("mapa") 
? alert("✅ Si cumplen condiciones, pueden ingresar al Túnel del Metro. \nBienvenido a LATAM")
: alert("❌ No cumples los requisitos, tu y tu equipo quedan atrapados en la ciudad. \nWASTED")