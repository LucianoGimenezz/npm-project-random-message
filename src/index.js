const messages = [
    "Hola",
    "Como estas?",
    "Buen dia",
    "Buenas noches",
    "Yo, bien",
    "Me gusta el agua",
    "Soy de Argentina",
    "pepa pig",
    "Vamos!!",
    "Tengo hambre",
    "Tengo que estudiar",
]

 const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
}

module.exports = {randomMsg};