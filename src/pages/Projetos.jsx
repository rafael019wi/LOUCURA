import Header from "../components/Header";
import Footer from "../components/footer";
import Moodboard from "../assets/moodboard.jpg";
import mapaEmpatia from "../assets/mapa_empatia.jpg";
function Projetos() {
  return (
    <>
      <Header />

      <main>
        <h1>Meus Projetos</h1>
        <h2>Moodboard</h2>
        { <img src={Moodboard} alt="Descrição da imagem" /> }
        <br></br><br></br><br></br>
        <h2>Mapa de empatia</h2>
        { <img src={mapaEmpatia} alt="Descrição da imagem" /> }
      </main>
      <Footer />
    </>
  );
}

export default Projetos;