// Packages Imports
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useContext } from "react";

// Objects Imports
import { styles } from "../styles";
import { ThemeContext } from "../../contexts/theme-context";

// Images Imports
import confused from '../../assets/images/geral/confused.png'

export const Pokedex = ({ pokemons, onLoadMore }) => {
    const {theme} = useContext(ThemeContext)

    return (
        <StyledMain>
            <StyledGrid>
                {pokemons.length > 0 ?
                    pokemons.map(pokemon => (
                        <StyledArticle key={pokemon.id} className={pokemon.types[0].type.name}>

                            <Link to={`/pokemon/${pokemon.id}`}>

                                <img src={pokemon.sprites.other.home.front_default} alt={pokemon.name} />
                                <StyledName
                                    style={{color: theme.fontColor}}>{pokemon.name}</StyledName>

                                <ul>
                                    {pokemon.types.map((type, index) => {
                                        return <StyledType 
                                                key={index}
                                                style={{color: theme.fontColor}}> {type.type.name} </StyledType>
                                    })}
                                </ul>

                            </Link>

                        </StyledArticle>))

                    : <StyledDiv>
                        <img src={confused} alt="Pikachu Confuso" style={{ width: '20%' }} />
                        <StyledMessage
                        style={{color: theme.fontColor}}>Pokémon não encontrado!</StyledMessage>
                    </StyledDiv>}
            </StyledGrid>

            <StyledButton
                onClick={onLoadMore}>Mais Pokémons</StyledButton>

        </StyledMain>
    )
}

const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 0 50px;
`

const StyledGrid = styled.section`
    display: grid;
    grid-template-columns: repeat(4, minmax(50px, ${styles.gridWidth}));
    gap: 50px;
    justify-content: center;
    align-items: center;
    margin: 40px 0;
    min-height: 62dvh;

    @media(max-width: 1151px){
        grid-template-columns: repeat(3, minmax(50px, ${styles.gridWidth}));
    }

    @media(max-width: 761px){
        grid-template-columns: repeat(2, minmax(50px, ${styles.gridWidth}));
    }

    @media(max-width: 401px){
        grid-template-columns: repeat(1, minmax(50px, ${styles.gridWidth}));
    }
`

const StyledArticle = styled.article`
    height: ${styles.articleHeight};
    border-radius: 20px;
    text-align: center;
    padding: 10px;
    scale: 98%;
    transition: ${styles.transitionSettings};
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);

    &:hover {
        scale: 100%;
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.4);
    }


    &.fire {background-color: ${styles.fire.backgroundColor}}
    &.water {background-color: ${styles.water.backgroundColor}}
    &.grass {background-color: ${styles.grass.backgroundColor}}
    &.electric {background-color: ${styles.electric.backgroundColor}}
    &.fighting {background-color: ${styles.fighting.backgroundColor}}
    &.ground {background-color: ${styles.ground.backgroundColor}}
    &.bug {background-color: ${styles.bug.backgroundColor}}
    &.fairy {background-color: ${styles.fairy.backgroundColor}}
    &.ice {background-color: ${styles.ice.backgroundColor}}
    &.dragon {background-color: ${styles.dragon.backgroundColor}}
    &.steel {background-color: ${styles.steel.backgroundColor}}
    &.poison {background-color: ${styles.poison.backgroundColor}}
    &.psychic {background-color: ${styles.psychic.backgroundColor}}
    &.rock {background-color: ${styles.rock.backgroundColor}}
    &.dark {background-color: ${styles.dark.backgroundColor}}
    &.ghost {background-color: ${styles.ghost.backgroundColor}}
    &.normal {background-color: ${styles.normal.backgroundColor}}
`

const StyledName = styled.h2`
    font-size: 2.5rem;
    margin: 5px 0;
    width: 100%;
    font-weight: 600;

    ${styles.firstLetter}


    @media(max-width: 1151px){
        font-size: 2.2rem;
    }

    @media(max-width: 401px){
        font-size: 2.2rem;
    }
`

const StyledType = styled.li`
    font-weight: 500;
    font-size: 1.8rem;

    ${styles.firstLetter}


    @media(max-width: 1151px){
        font-size: 1.5rem;
    }

    @media(max-width: 401px){
        font-size: 1.5rem;
    }
`

const StyledButton = styled.button`
    font-size: 20px;
    padding: 12px;
    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.3);
    border: none;
    border-radius: 7px;
    transition: ${styles.transitionSettings};
    cursor: pointer;

    &:hover {
        scale: 1.03;
    }
`

const StyledDiv = styled.div`
    width: 1350px;
    text-align: center;
`

const StyledMessage = styled.p`
    font-size: 35px;
`