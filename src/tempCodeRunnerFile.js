const messages = [
    "Hola",
    "Como estas?",
    "Buen dia",
    "Buenas noches",
    "Yo, bien",
    "Me gusta el agua",
    "Soy de Argentina",
    "pepa pig"
]

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
}

randomMsg();