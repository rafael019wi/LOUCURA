import { useState } from "react";
import { Link } from "react-router-dom";
import codigo from "../assets/codigo.jpg";

function Header() {
  const [flipped, setFlipped] = useState(false);

  return (
    <header style={{ backgroundImage: `url(${codigo})` }}>
      
      <h1
        className={`nome ${flipped ? "flipped" : ""}`}
        onClick={() => setFlipped(!flipped)}
      >
        Rafael Alves de Oliveira
      </h1>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/projetos">Projetos</Link>
        <Link to="/sobre">Sobre mim</Link>
        <Link to="/contatos">Contatos</Link>
      </nav>
    </header>
  );
}

export default Header;