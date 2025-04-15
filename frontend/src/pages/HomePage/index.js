import { Link } from "react-router-dom"
import { HomeButtonsContainer, HomeContainer, HomeLink, TitleHome } from "./styles"

function App() {
  return (
    <HomeContainer>
        <TitleHome>Bodega Web</TitleHome>
        <HomeButtonsContainer>
          <HomeLink to="/login">Login</HomeLink>
          <HomeLink to="/register">Register</HomeLink>
        </HomeButtonsContainer>
    </HomeContainer>
  )
}

export default App