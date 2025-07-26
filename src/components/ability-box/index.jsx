import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPokemonAbilities, getPokemons } from "../../js/pokemons";
import styled from "styled-components";
import { styles } from "../styles";


export const Ability = () => {
    const [descriptions, setDescriptions] = useState([])

    const { id } = useParams()

    useEffect(() => {
        const fetchData = async () => {
            const pokemon = await getPokemons(id);
            const abilities = pokemon.abilities;

            const abilitiesDescription = await Promise.all(
                abilities.map(async ability => {

                    const abilityInfos = await getPokemonAbilities(ability.ability.name);

                    const description = abilityInfos.effect_entries.find(language => language.language.name === 'en')

                    
                    

                    return {
                        name: ability.ability.name,
                        description: description.effect
                    };
                })
            );

            setDescriptions(abilitiesDescription);

        };

        fetchData();
    }, [id]);

    return (
        <>
            {
                descriptions.map((item, index) => {
                    return (
                        <StyledDiv key={index}>
                            <StyledTitle>{item.name}</StyledTitle>
                            <p><strong>About:</strong> {item.description}</p>
                        </StyledDiv>
                    )
                })
            }
        </>
    )
}

const StyledDiv = styled.div`
    font-size: 1.5rem;
    border: 1px solid #aaa;
    background-color: rgba(255, 255, 255, 60%);
    border-radius: 5px;
    padding: 10px;
    width: 100%;
    text-align: justify;
    ${styles.firstLetter}

    @media(max-width: 1025px){
        text-align: center;
    }
`

const StyledTitle = styled.h3`
    font-size: 2rem;
    margin-bottom: 3px;
`