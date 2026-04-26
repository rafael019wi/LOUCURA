import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projetos from "./pages/Projetos";
import Contatos from "./pages/Contatos";
import Sobre from "./pages/Sobre";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projetos" element={<Projetos />} />
      <Route path="/contatos" element = {<Contatos />}/>
      <Route path="/Sobre" element = {<Sobre />}/>
    </Routes>
  );
}

export default App;