const { databaseConnection } = require('./connection')


async function salvarPokemons(pokemon) {
    const insertComments = {
        comentario: pokemon.comentario
    }
    const result = await databaseConnection('tabelafilmes').insert(insertComments)

    console.log(result)

    if (result) {
        return {
            comentario: pokemon.comentario,
            id: result[0].insertId
        }
    } else {
        console.log("Deu erro")
        return {
            error: "Deu erro na inserção"
        }
    }
}

async function mostrarPokemon(id){
    
    const result = await databaseConnection('tabelafilmes').where({ id })

    return result[0]

}


module.exports = { salvarPokemons, mostrarPokemon /*mostrarPokemons*/ }