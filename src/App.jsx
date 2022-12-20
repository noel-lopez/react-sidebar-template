import React, { useState } from "react"
import { MyRoutes } from "./routers/routes"
import styled from "styled-components"
import { BrowserRouter } from "react-router-dom"
import { Sidebar } from "./components/Sidebar"
import {Light, Dark} from './styles/Themes'
import { ThemeProvider } from "styled-components"

export const ThemeContext = React.createContext(null)

function App() {
  const [theme, setTheme] = useState('light')
  const themeStyle = theme === 'light'
    ? Light
    : Dark

  const swapTheme = () => {
    setTheme((theme) => (theme==='light'?'dark':'light'))
  }

  return (
    <>
      <ThemeContext.Provider value={{setTheme, theme}}>
        <ThemeProvider theme={themeStyle} >
          <BrowserRouter>
            <Container>
              <input type="checkbox" onClick={swapTheme}></input>
              <Sidebar />
              <MyRoutes />
            </Container>
          </BrowserRouter>
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  )
}

const Container = styled.div`
  background-color: ${({theme}) => theme.body};
  color: ${({theme}) => theme.text}
`

export default App
