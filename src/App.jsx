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

  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <>
      <ThemeContext.Provider value={{setTheme, theme}}>
        <ThemeProvider theme={themeStyle} >
          <BrowserRouter>
            <Container className={sidebarOpen ? 'active':''}>
                <Sidebar open={sidebarOpen} setOpen={setSidebarOpen}/>
                <MyRoutes />
            </Container>
          </BrowserRouter>
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 90px auto;
  background: ${({theme}) => theme.bgtotal};
  color: ${({theme}) => theme.text};
  transition: all 0.3s;
  &.active {
    grid-template-columns: 300px auto;
  }
`

export default App
