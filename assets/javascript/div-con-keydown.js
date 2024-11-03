//Punto 3.3:
let colores = ""
const divKey = document.getElementById("key")

document.addEventListener("keydown", function (event) {
    if (event.key === "a" || event.key === "A") {
        colores = "pink"
        divKey.style.backgroundColor = colores
    } else if (event.key === "s" || event.key === "S") {
        colores = "orange"
        divKey.style.backgroundColor = colores;

    } else if (event.key === "d" || event.key === "D") {
        colores = "skyblue"
        divKey.style.backgroundColor = colores;

    }
})

//Punto 3.4:
const DivletraQ = document.addEventListener("keydown", function (event) {
    if (event.key === "q" || event.key === "Q") {
        agregarElementoQ()
    }
})

function agregarElementoQ() {
    contenedor = document.getElementById("masdivs")
    nuevoDiv = document.createElement("div")
    nuevoDiv.style.width = "200px"
    nuevoDiv.style.height = "200px"
    nuevoDiv.style.marginTop = "10px"
    nuevoDiv.style.backgroundColor = "pink"
    contenedor.appendChild(nuevoDiv)
}
 
const DivletraW = document.addEventListener("keydown", function (event) {
  if (event.key === "w" || event.key === "W") {
    agregarElementoW();
  }
});

function agregarElementoW() {
  contenedor = document.getElementById("masdivs");
  nuevoDiv = document.createElement("div");
  nuevoDiv.style.width = "200px";
  nuevoDiv.style.height = "200px";
  nuevoDiv.style.marginTop = "10px";
  nuevoDiv.style.backgroundColor = "orange";
  contenedor.appendChild(nuevoDiv);
}

const DivletraE = document.addEventListener("keydown", function (event) {
  if (event.key === "e" || event.key === "E") {
    agregarElementoE();
  }
});

function agregarElementoE() {
  contenedor = document.getElementById("masdivs");
  nuevoDiv = document.createElement("div");
  nuevoDiv.style.width = "200px";
  nuevoDiv.style.height = "200px";
  nuevoDiv.style.marginTop = "10px";
  nuevoDiv.style.backgroundColor = "brown";
  contenedor.appendChild(nuevoDiv);
}