let form = document.getElementById("form");
function handleForm(event) {event.preventDefault();}
form.addEventListener('submit', handleForm);

document.getElementById("add-comment").addEventListener("click", function(){
    let mensajeGracias = document.querySelector(".thank-u");
    mensajeGracias.style = "display: block;";
    document.getElementById("demo").innerHTML = "Gracias por tu comentario";
});
