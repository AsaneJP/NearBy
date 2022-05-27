import { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import { ThemeProvider } from 'styled-components'

import { Router } from './router/Router'
import { theme } from './theme/theme'

import './styles/reset.css'
import './App.css'

const App: FC = () => (
  <RecoilRoot>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  </RecoilRoot>
)

export default App
