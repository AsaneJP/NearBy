import { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { Router } from './router/Router'
import { theme } from './theme/theme'

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
