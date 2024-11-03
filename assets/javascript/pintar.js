function pintar(divVerde, color = "green") {
    divVerde.style.backgroundColor = color
}
const divVerde = document.getElementById("ele")
divVerde.addEventListener("click", function () {
    pintar(divVerde, "yellow")
})