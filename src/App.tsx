import { FC } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme/theme';
import { Home } from './pages/Home'

import './styles/reset.css'
import './App.css'

const App: FC = () => (
  <ThemeProvider theme={theme}>
    <Home />
  </ThemeProvider>
)

export default App
