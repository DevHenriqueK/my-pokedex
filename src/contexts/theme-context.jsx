import { createContext, useState } from "react";

import sun from '../assets/images/icons/sun-icon.png'
import moon from '../assets/images/icons/moon-icon.png'


export const themes = {
    light: {fontColor: `#000`, backgroundColor: `#eee`, buttonImage: `${moon}`},
    dark: {fontColor: `#fff`, backgroundColor: `#222`, buttonImage: `${sun}`},
}

export const ThemeContext = createContext({})

export const ThemeProvider = (props) => {
    const [theme, setTheme] = useState(themes.light)

    return(
        <ThemeContext.Provider value={{theme, setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}