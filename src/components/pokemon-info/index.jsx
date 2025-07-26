import { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../contexts/theme-context";

export const PokemonInfo = ({ infoTitle, infoList }) => {

    const { theme } = useContext(ThemeContext)

    return (
        <article>
            <StyledTitle
                style={{ color: theme.fontColor }}> {infoTitle} </StyledTitle>

            <StyledList> {infoList} </StyledList>
        </article>
    )
}

const StyledTitle = styled.h3`
    margin-top: 15px;
    font-size: 1.8rem;
`

const StyledList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;

    @media(max-width: 1025px){
        justify-content: center;
    }
`