import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getPokemons } from "../../js/pokemons";
import styled from "styled-components";
import { styles } from "../styles";
import { PokemonInfo } from "../pokemon-info";
import { ThemeContext } from "../../contexts/theme-context";
import { Ability } from "../ability-box";

export const PokemonDetails = () => {
    const [details, setDetails] = useState({
        name: '',
        image: '',
        types: [],
        abilities: [],
        moves: [],
    });

    const { id } = useParams()

    useEffect(() => {
        const fetchData = async () => {
            const infos = await getPokemons(id);

            setDetails({
                name: infos.name,
                image: infos.sprites.other.home.front_default,
                types: infos.types.map(type => type.type.name),
                abilities: infos.abilities.map(ability => ability.ability),
                moves: infos.moves.map(move => move.move.name),
            });
        }

        fetchData()
    }, [])

    const { theme } = useContext(ThemeContext)


    return (
        <div style={{ backgroundColor: theme.backgroundColor }}>
            <StyledMain
                className={details.types[0]}>

                <StyledDiv>
                    <StyledLink to="/">Home</StyledLink>
                    <StyledImage src={details.image} alt={details.name} />
                </StyledDiv>

                <section>
                    <StyledPokemonName
                        style={{ color: theme.fontColor }}>{details.name}</StyledPokemonName>

                    <div>
                        <PokemonInfo
                            infoTitle='Type(s):'
                            infoList={details.types.map((type, index) => <StyledListItem key={index}> {type} </StyledListItem>)}
                        />

                        <PokemonInfo
                            infoTitle='Abilities:'
                            infoList={<Ability />}
                        />

                        <PokemonInfo
                            infoTitle='Moves:'
                            infoList={details.moves.map((move, index) => <StyledListItem key={index}> {move} </StyledListItem>)}
                        />
                    </div>
                </section>
            </StyledMain>
        </div>
    );
}


const StyledMain = styled.main`
    min-height: 100dvh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 50px;
    padding: 20px;
    padding-top: 0;

    @media(max-width: 1025px){
        flex-direction: column;
        text-align: center;
        padding: 50px;
    }

    &.fire{
        background: ${styles.fire.backgroundColor};
    }

    &.water{
        background: ${styles.water.backgroundColor};
    }

    &.bug{
        background: ${styles.bug.backgroundColor};
    }

    &.normal {
        background: ${styles.normal.backgroundColor};
    }

    &.poison{
        background: ${styles.poison.backgroundColor};
    }

    &.electric{
        background: ${styles.electric.backgroundColor};
    }

    &.ground{
        background: ${styles.ground.backgroundColor};
    }

    &.grass {
        background: ${styles.grass.backgroundColor};
    }

    &.fighting {
        background: ${styles.fighting.backgroundColor};
    }

    &.fairy {
        background: ${styles.fairy.backgroundColor};
    }

    &.psychic {
        background: ${styles.psychic.backgroundColor};
    }

    &.rock{
        background: ${styles.rock.backgroundColor};
    }

    &.ghost{
        background: ${styles.ghost.backgroundColor};
    }

    &.ice {
        background: ${styles.ice.backgroundColor};
    }

    &.dragon {
        background: ${styles.dragon.backgroundColor};
    }

    &.steel{
        background: ${styles.steel.backgroundColor};
    }

    &.dark{
        background: ${styles.dark.backgroundColor};
    }
`

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const StyledLink = styled(Link)`
    background-color: #eee;
    font-size: 3rem;
    padding: 6px 12px;
    border-radius: 10px;
    position: relative;
    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.2);
    margin-bottom: 50px;
    transition: ${styles.transitionSettings};

    &::before{
        content: '🏠';
        margin-right: 10px;
    }

    &:hover {
        scale: 101%;
    }
`

const StyledImage = styled.img`
    width: 400px;
`

const StyledPokemonName = styled.h1`
    font-size: 5rem;
    ${styles.firstLetter}
`

const StyledListItem = styled.li`
    font-size: 1.5rem;
    border: 1px solid #aaa;
    background-color: rgba(255, 255, 255, 60%);
    border-radius: 5px;
    padding: 5px 10px;
    ${styles.firstLetter}
`