import { FC } from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { theme } from './theme/theme'
import { Router } from './router/Router'

import './styles/reset.css'
import './App.css'

const App: FC = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  </BrowserRouter>
)

export default App
