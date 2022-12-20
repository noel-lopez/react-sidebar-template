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

  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <ThemeContext.Provider value={{setTheme, theme}}>
        <ThemeProvider theme={themeStyle} >
          <BrowserRouter>
            <Container>
              <main className={sidebarOpen?'sidebarState active':'sidebarState'}>
                <Sidebar />
                <MyRoutes />
              </main>
            </Container>
          </BrowserRouter>
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  )
}

const Container = styled.div`
  .sidebarState {
    display: grid;
    grid-template-columns: 90px auto;
    background: ${({theme}) => theme.bgtotal};
    &.active {
      grid-template-columns: 300px auto;
    }
  }
`

export default App
