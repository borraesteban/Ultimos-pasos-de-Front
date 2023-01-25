
/**
document.getElementById("Boton").onclick = function () {
    console.log("Capturamos el evento click");
    document.getElementById("demo").innerHTML = "Estamos probando nuestro primer evento en JS"
}
*/

document.getElementById("Boton").addEventListener("click" , function(){

    console.log("Hola mundo desde EventListener");
    document.getElementById("demo").innerHTML = "Estamos probando nuestro primer evento en JS"
});

document.getElementById("Boton_color").addEventListener("click" , function(){
    document.body.style.backgroundColor = "#EE2E05";
    
});

document.getElementById("Boton_default").addEventListener("click" , function(){
    document.body.style.backgroundColor = "aquamarine";
    
});

document.getElementById("Boton_ocultar").addEventListener("click" , function(){
    document.getElementById("demo").style.display = "none";
    
});

const collection = document.getElementsByClassName("prueba");
for (let i = 0; i < collection.length; i++) {
  collection[i].style.backgroundColor = "red";
}