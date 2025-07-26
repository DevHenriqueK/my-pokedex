// Packages Imports
import styled from "styled-components";
import { useEffect, useState, useContext } from "react";
import { ThemeContext } from "../../contexts/theme-context";

// Components Imports
import { Pokedex } from "../pokedex";
import { Loading } from "../loading-circle";
import { getPokemonAbilities, getPokemons, newPokedex } from "../../js/pokemons";
import { pokemonsLimit, pokemonsOffset } from "../../js/variables";
import { ThemeTogglerButton } from "../theme-toggler-button";


export const Home = () => {
    const [pokemons, setPokemons] = useState([]);
    const [search, setSearch] = useState("");
    const [offset, setOffset] = useState(pokemonsOffset)

    useEffect(() => {
        const fetchData = async () => {
            const response = await newPokedex(pokemonsOffset);
            const pokemonsData = await Promise.all(
                response.map(url => getPokemons(url.split('/').slice(-2)[0]))
            );
            setPokemons(pokemonsData);
            setOffset(pokemonsOffset + pokemonsLimit);
        };
        fetchData();
    }, []);

    const filteredPokemons = pokemons.filter(pokemon =>
        pokemon.name.toLowerCase().includes(search.toLowerCase())
    );

    const loadMorePokemons = async () => {
        setOffset(previous => previous + pokemonsLimit)
        const response = await newPokedex(offset);
        const pokemonsData = await Promise.all(
            response.map(url => getPokemons(url.split('/').slice(-2)[0]))
        );
    
        setPokemons(previous => [...previous, ...pokemonsData]);
    };

    const { theme } = useContext(ThemeContext)

    return (
        <>
            <StyledMain
                style={{ backgroundColor: theme.backgroundColor }}>

                <StyledHeader>
                    <StyledInput
                        type="text"
                        placeholder="Buscar Pokémon..."
                        onChange={event => setSearch(event.target.value)}
                        value={search} />

                    <ThemeTogglerButton />
                </StyledHeader>

                {pokemons.length > 0 ?
                    <Pokedex
                        pokemons={filteredPokemons}
                        onLoadMore={loadMorePokemons} />

                    : <Loading />
                }
            </StyledMain>
        </>
    );
};

const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 50px 0;
    min-height: 100dvh;
`

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    width: 88%;
`

const StyledInput = styled.input`
    font-size: 20px;
    padding: 12px 20px;
    width: 85%;
    border: none;
    border-radius: 100px;
    box-shadow: 0 0 7px rgba(0, 0, 0, 30%);

    &::placeholder { color: rgba(0, 0, 0, 70%); }
`