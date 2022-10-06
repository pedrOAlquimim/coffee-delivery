import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { defaultTheme } from './styles/themes/default'
import { ThemeProvider } from "styled-components"
import { GlobalStyles } from './styles/global'


export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
        <GlobalStyles />
      </BrowserRouter>
    </ThemeProvider>
  )
}