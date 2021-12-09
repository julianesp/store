// arreglo de string
const saludos = [
    'Bienvenidos a mi sitio',
    'Gracias por su compra',
    'Vuelva pronto'
]

const mensajesAleatorios = () => {
    const conjuntoSaludos = saludos[Math.floor(Math.random() * saludos.length)]
    console.log(conjuntoSaludos)
}

module.exports = { mensajesAleatorios }