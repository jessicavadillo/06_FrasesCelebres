const frasesCelebres = [
    "No hay que ir para atrás ni para darse impulso",
    "No hay caminos para la paz; la paz es el camino",
    "Haz el amor y no la guerra",
    "Para trabajar basta estar convencido de una cosa: que trabajar es menos aburrido que divertirse",
    "Lo peor que hacen los malos es obligarnos a dudar de los buenos",
    "Las guerras seguirán mientras el color de la piel siga siendo más importante que el de los ojos",
    "Aprende a vivir y sabrás morir bien ",
    "Cada día sabemos más y entendemos menos",
    "El mundo no está en peligro por las malas personas sino por aquellas que permiten la maldad",
    "La medida del amor es amar sin medida",
];

const autores = [
    "Lao Tsé",
    "Mahatma Gandhi",
    "Jhon Lennon",
    "Charles Baudelaire",
    "Jacinto Benavente",
    "Bob Marley",
    "Confucio",
    "Albert Einstein",
    "Albert Einstein",
    "San Agustín",
    "Casanova"

];

function generaFrase() {
 
    const frase = Math.floor(Math.random()*frasesCelebres.length);

    const lafrase = `${frasesCelebres[frase]} -${autores[frase]}`

    return lafrase;
}

console.log(generaFrase());

function colocaFrase() {
    document.getElementById("frase").innerHTML = generaFrase();

}