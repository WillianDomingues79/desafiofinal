const express = require('express')
const app = express()
const dataBase = require('./database/database')
const bodyParser = require('body-parser')
const cors = require('cors');

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))

app.get("/saudacao", (req, res) => {
    res.send("Teste de mensagem")
})

app.post("/pokemons", async (req ,res) => {
    //console.log(req.body)
    console.log("rota")
    const pokemon = await dataBase.salvarPokemons({
        comentario: req.body.comentario
        
    })
    res.send(pokemon)
    //console.log(pokemon);
})

app.get("/pokemons/:id", async (req, res) => {
    res.send(await dataBase.mostrarPokemon(req.params.id))
})

app.listen(3005)