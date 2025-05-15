import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import { ThemeProvider } from 'styled-components'
import tema from './themes/theme'

import './styles.ts'
import GlobalStyle, { Container } from './styles'

function App() {
  return (
    <ThemeProvider theme={tema}>
      <GlobalStyle />
      <Container>
        <Header />
        <Hero />
        <div className="container">
          <ListaVagas />
        </div>
      </Container>
    </ThemeProvider>
  )
}

export default App
