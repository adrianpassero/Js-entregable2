
const form = document.getElementById("formulario")


form.addEventListener("submit", (e) => {
    crearUsuario(e)
})



function crearUsuario(e) {
    e.preventDefault()

    let inputNombre = document.getElementById("nombre")
    let inputApellido = document.getElementById("apellido")
    let inputEmail = document.getElementById("email")

    const user = {
        nombre: inputNombre.value,
        edad: inputApellido.value,
        email: inputEmail.value,
    }

    console.log(user)

    localStorage.setItem("user", JSON.stringify(user))

    form.reset()

}




const contenedorCards = document.querySelector("#contenedorCards")
const contenedorCarrito = document.querySelector("#contenedorCarrito")

const carrito = []

const alimentos = [{
    id: 1,
    nombre: "ROYAL CANIN CAT HIPOALARGENICO X 1.5 KG",
    precio: 11.285,
    img: "./img/hypoallergenic-feline.webp"
},
{
    id: 2,
    nombre: "ROYAL CANIN CAT CALM X 2 KG",
    precio: 10.475,
    img: "./img/calm-feline.webp"
},
{
    id: 3,
    nombre: "ROYAL CANIN CAT DIABETIC X 1.5 KG",
    precio: 8.785,
    img: "./img/diabetic-feline.webp"
},
{
    id: 4,
    nombre: "ROYAL CANIN CAT GASTROINTESTINAL X 2 KG",
    precio: 9.685,
    img: "./img/gastrointestinal-feline.webp"
},
{
    id: 5,
    nombre: "ROYAL CANIN GASTROINTESTINAL MOD CALORIE X 2 KG",
    precio: 9.725,
    img: "./img/gastrointestinal-mod-calorie-feline.webp"
}, 
{
    id: 6,
    tnombre: "ROYAL CANIN CAT HEPATIC X 1.5 KG",
    precio: 7.290,
    img: "./img/hepatic-feline.webp"
}, 
{
    id: 7,
    nombre: "ROYAL CANIN CAT RENAL X 2 KG",
    precio: 8.605,
    img: "./img/renal-feline.webp"
}, 
{
    id: 8,
    nombre: "ROYAL CANIN CAT EARLY RENAL",
    precio: 6.860,
    img: "./img/early-renal-feline.webp"
}, 
{
    id: 9,
    nombre: "ROYAL CANIN CAT URINARY S/O",
    precio: 2.440,
    img: "./img/urinary-feline.webp"
}, 
{
    id: 10,
    nombre: "ROYAL CANIN CAT MATURE CONSULT",
    precio: 7.105,
    img: "./img/mature-consult-feline.webp"
}, 
{
    id: 11,
    nombre: "ROYAL CANIN CAT WEIGHT CONTROL CASTRADOS",
    precio: 12.455,
    img: "./img/gatos-castrados-weight-control-feline.webp"
}, 
{
    id: 12,
    nombre: "ROYAL CANIN CAT GASTROINTESTINAL FIBRE RESPONSE X 2 KG",
    precio: 9.855,
    img: "./img/gastro-fibre-response-feline.webp"
}, 
{
    id: 13,
    nombre: "ROYAL CANIN CAT SATIETY SUPPORT X 1.5 KG",
    precio: 6.595,
    img: "./img/satiety-support-feline.webp"
}
]


function crearCards() {
    alimentos.forEach((alimento) => {
        let contenedorAlimento = document.createElement("div")
        contenedorAlimento.innerHTML = `<div id = ${alimento.id} class="card" style="width: 14rem  ;">
        <img src="${alimento.img}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${alimento.nombre}</h5>
            <p class="card-text"> $ ${alimento.precio} </p>
            <a href="#" class="btnComprar">Comprar</a>
        </div>
        </div>`


        contenedorCards.appendChild(contenedorAlimento)

        const btnComprar= document.getElementById(`${alimento.id}`)
        btnComprar.addEventListener("click" , () => agregarCarrito(alimento.id))
    })
}

crearCards()


function agregarCarrito(id){
    const alimentoEncontrado= alimentos.find((alimento) => alimento.id == id)
    carrito.push(alimentoEncontrado)
    console.log(carrito)
    mostrarCarrito()
}

function mostrarCarrito (){
    contenedorCarrito.innerHTML = "<ul>"
    carrito.forEach((alimento) => {
        let contenedorProducto = document.createElement("li")
        contenedorProducto.innerHTML = `
            <p>${alimento.nombre}</p>
            <p> $ ${alimento.precio}</p>
        `;
        contenedorCarrito.appendChild(contenedorProducto)
    })
    contenedorCarrito.innerHTML += "</ul>"
}
mostrarCarrito()




