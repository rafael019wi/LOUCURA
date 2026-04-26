import { href } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/footer";
import mapaMental from "../assets/mapa_mental.png";
function Sobre() {
  return (
    <>
      <Header />

      <main>
        { <img src={mapaMental} alt="Descrição da imagem" /> }
      </main>
      <Footer />
    </>
  );
}

export default Sobre;