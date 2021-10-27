const body = document.body;

const revistasStock = [' Olé', ' El grafico', ' Gente', ' Billboard', ' Forbes']

alert('las revistas que poseemos son:' + revistasStock + ' todas al mismo valor')
 
console.log('las revistas que poseemos son:' + revistasStock + ' todas al mismo valor')


console.log('<--------------------->')



const nombre = prompt('Elige el nombre de la revista')
class revistas{

    constructor( nombre, valor, envio) {

        this.nombre = nombre;
        this.valor = valor;
        this.envio = envio;

    }

    
}



if(nombre == 'ole'){

    var nuevoDiv = document.createElement("div");
    var nuevoContenido = document.createTextNode([nombre] + ' es un diario argentino de deportes, editado en Buenos Aires desde el 23 de mayo de 1996, por el Grupo Clarín en formato tabloide.');
    nuevoDiv.appendChild(nuevoContenido)

    var currentDiv = document.getElementById("div")
    document.body.insertBefore(nuevoDiv, currentDiv)

}

if( nombre == 'el grafico'){
    var nuevoDiv = document.createElement("div");
    var nuevoContenido = document.createTextNode([nombre] + ' fue una clásica revista deportiva argentina, nacida como publicación semanal en mayo de 1919 —hasta 2002, cuando pasó a ser mensual—, que se publicó por última vez en enero de 2018.');
    nuevoDiv.appendChild(nuevoContenido)

    var currentDiv = document.getElementById("div")
    document.body.insertBefore(nuevoDiv, currentDiv)}
    
if(nombre == 'gente'){
    var nuevoDiv = document.createElement("div");
    var nuevoContenido = document.createTextNode([nombre] + ' es una revista argentina, perteneciente a Editorial Atlántida. Dedicada a los personajes del espectáculo y la farándula, es una de las mayores revistas del corazón en Argentina.');
    nuevoDiv.appendChild(nuevoContenido)

    var currentDiv = document.getElementById("div")
    document.body.insertBefore(nuevoDiv, currentDiv)}

if(nombre == 'billboard'){
    var nuevoDiv = document.createElement("div");
    var nuevoContenido = document.createTextNode([nombre] + ' es una revista semanal estadounidense y una lista especializada en información sobre la industria musical.');
    nuevoDiv.appendChild(nuevoContenido)

    var currentDiv = document.getElementById("div")
    document.body.insertBefore(nuevoDiv, currentDiv)}

if(nombre == 'forbes'){
    var nuevoDiv = document.createElement("div");
    var nuevoContenido = document.createTextNode([nombre] + ' es una revista especializada en el mundo de los negocios y las finanzas, publicada en Estados Unidos. Fundada en 1917 por B. C. Forbes, cada año publica listas que despiertan gran interés en el ámbito de los negocios como Forbes 500.');
    nuevoDiv.appendChild(nuevoContenido)

    var currentDiv = document.getElementById("div")
    document.body.insertBefore(nuevoDiv, currentDiv)}

console.log('su revista elegida es ' + nombre + ' que tiene un valor de $60 ')
    




