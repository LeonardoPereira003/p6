// Importa o BrowserRouter para navegação
import { BrowserRouter } from 'react-router-dom'

// Importa as rotas da aplicação
import AppRoutes from './routes'

// Importa os estilos globais
import { GlobalStyle } from './styles/GlobalStyle'

// Componente raiz da aplicação
function App() {
  return (
    <BrowserRouter>
      {/* Estilos globais */}
      <GlobalStyle />

      {/* Rotas */}
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
