var x = 0;

document.getElementById("accionButton").addEventListener("click", cambiarTexto);

function cambiarTexto() {
    const parrafo = document.getElementById("Texto"); // 

    alert("Mensaje");
    
    parrafo.textContent = "Mensaje";  //

x = x + 1;  

    console.log("Mensaje");
}
