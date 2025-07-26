import { createGlobalStyle } from "styled-components"
import { AppRoutes } from "./pages/routes"
import { ThemeProvider } from "./contexts/theme-context"

function App() {
  return (
    <>
      <ResetStyles />

      <ThemeProvider>
        <AppRoutes />
      </ThemeProvider>

    </>
  )
}

const ResetStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Bai Jamjuree', sans-serif;
    outline: none;
  }

  html {
    font-size: 62.5%;
  }

  img {
    width: 100%;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  ul {
    list-style: none;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #aaa;
    border-radius: 100px;
  }
`

export default App
