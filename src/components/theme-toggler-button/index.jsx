import { useContext } from "react"
import { ThemeContext, themes } from "../../contexts/theme-context"
import styled from "styled-components"

export const ThemeTogglerButton = () => {

    const {theme, setTheme} = useContext(ThemeContext)
    
    return <StyledButton
            onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)}
            style={{backgroundImage: `url(${theme.buttonImage})`, 
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: 'cover',
                    backgroundSize: '24px',
                    backgroundPosition: 'left 50% bottom 50%'
                }} />
}

const StyledButton = styled.button`
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 30%);
    border: none;
    border-radius: 100px;
    cursor: pointer;
    background: #fff;
`