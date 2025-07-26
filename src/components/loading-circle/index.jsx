import styled from "styled-components"
import { styles } from "../styles"

export const Loading = () => {
    return (
        <StyledContainer>
            <StyledLoading />
            <h2 style={{fontSize: '2.5rem'}}>Carregando Pokémons...</h2>
        </StyledContainer>
    )
}

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 70dvh;
    gap: 20px;
`

const StyledLoading = styled.div`
    position: relative;

    width: 150px;
    height: 150px;

    border-width: 15px;
    border-style: solid;
    border-color: #aaa transparent;
    border-radius: 100px;

    animation: loading 1.1s linear infinite;
    transition: ${styles.transitionSettings};

    @keyframes loading {
        0% {
            rotate: 0deg;
    
        }

        50% {
            rotate: 180deg;
            
        }

        100% {
            rotate: 360deg;
    
        }
    }
`