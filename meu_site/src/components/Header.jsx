import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h2>Rafael Oliveira</h2>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/projetos">Projetos</Link>
      </nav>
    </header>
  );
}

export default Header;