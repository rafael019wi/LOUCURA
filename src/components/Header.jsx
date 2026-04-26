import { Link } from "react-router-dom";
import codigo from "../assets/codigo.jpg";

function Header() {
  return (
    <header style={{ backgroundImage: `url(${codigo})` }}>
      <h1>Rafael Alves de Oliveira</h1>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/projetos">Projetos</Link>
        <Link to="/contatos">Contatos</Link>
        <Link to="/sobre">Sobre mim</Link>
      </nav>
    </header>
  );
}

export default Header;