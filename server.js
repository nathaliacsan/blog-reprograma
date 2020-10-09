const app = require("./src/app")
const porta = 9090

app.listen(porta, () => {
    console.log(`O servidor está rodando em http://localhost:${porta}`)
})

