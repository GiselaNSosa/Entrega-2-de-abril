const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
  ];

  //declaro botón y cards
  const boton=document.getElementById('boton')
  const cardError=document.getElementById('cardError')
  const cardPizza=document.getElementById('cardPizza')

  const ultimaPizzaBuscada=JSON.parse(localStorage.getItem('pizza'))
  if(ultimaPizzaBuscada!=null){
    mostrarPizza(ultimaPizzaBuscada)
  }

  //funcion para encontrar la pizza con el id ingresado
  function encontrarPizza(idPizza){
    let pizzaEncontrada=pizzas.find(
      pizza => pizza.id ===idPizza
      )
    return pizzaEncontrada
  }

  function clickButton(){
    const numeroIngresado=parseInt(document.getElementById('pizza').value)
    if (!isNaN(numeroIngresado)) {
      let pizzaEncontrada= encontrarPizza(numeroIngresado)
      if (pizzaEncontrada === undefined){
        mostrarError("No existe una pizza con ese número. Vuelva a intentar.")
        localStorage.removeItem('pizza')
      } 
      else{
        mostrarPizza(pizzaEncontrada)
        localStorage.setItem('pizza', JSON.stringify(pizzaEncontrada))
      }
    }
    else{
      mostrarError("Ingresa el número de la pizza que deseas")
      localStorage.removeItem('pizza')
    }
  }

boton.addEventListener('click', () => {
  clickButton()
})

function mostrarError(mensaje){
  cardPizza.style.display = 'none'
  const mensajeError=document.getElementById('mensajeError')
  mensajeError.textContent=mensaje
  cardError.style.display = 'block'
}

function mostrarPizza(pizzaEncontrada){
  cardError.style.display = 'none'
  const fotoPizza=document.getElementById('fotoPizza')
  fotoPizza.src=pizzaEncontrada.imagen

  const nombrePizza=document.getElementById('nombrePizza')
  nombrePizza.textContent=pizzaEncontrada.nombre

  const precioPizza=document.getElementById('precioPizza')
  precioPizza.textContent="$" + pizzaEncontrada.precio

  const ingredientes=document.getElementById('ingredientes')
  ingredientes.textContent="Ingredientes: " + pizzaEncontrada.ingredientes
  cardPizza.style.display = 'block'
}

