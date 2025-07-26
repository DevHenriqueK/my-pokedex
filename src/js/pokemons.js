import { pokemonsLimit, pokemonsOffset } from "./variables"

export async function newPokedex(offset) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${pokemonsLimit}&offset=${offset}`)
        const createdPokedex = await response.json()
        const url = createdPokedex.results.map(result => result.url)
        return url
    }

    catch (error) {
        console.log(error)
    }
}

export async function getPokemons(id) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        return await response.json()
    }

    catch (error) {
        console.log(error)
    }
}

export async function getPokemonAbilities(abilityName){
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/ability/${abilityName}/`)
        return await response.json()
    }

    catch (error) {
        console.log(error)
    }
}