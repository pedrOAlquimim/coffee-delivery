import { defaultTheme } from './styles/themes/default'
import { ThemeProvider } from "styled-components"
import { GlobalStyles } from './styles/global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
    </ThemeProvider>
  )
}