

function holaMundo() {
        console.log("Hola mundo!")
}

holaMundo();


function sumar (a,b) {
    var resultado = a+b

    return resultado;
}

suma = sumar(3,4)
console.log(suma);

suma2 = sumar(5,5);
suma3 = sumar(7,7);

//Otra forma de return

function sumar (a,b) {
    return a+b;
}

suma = sumar(3,4)
console.log(suma);
