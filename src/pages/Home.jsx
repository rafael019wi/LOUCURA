import Header from "../components/Header";
import Footer from "../components/footer";
import padlet from "../assets/aa.png";
function Home() {
  return (
    <>
      <Header />

      <main>
        <p><h1>Bem-vindo</h1></p>
  
        
        <h2>
          Meu nome é Rafael Alves de Oliveira, sou técnico em desenvolvimento de sistemas pelo cotuca,
          <br></br>
          atualmente estudante de Ciência da Computação no Ifsp.
          <br></br><br></br>
          Tenho muito interesse em seguir na área e evoluir como pessoa.
          <br></br><br></br><br></br><br></br>
          Esse padlet mostra um pouco sobre minha trajetória como profissional
          <br></br><br></br>
          <a href="https://padlet.com/rafael019wi/meu-resumo-profissional-i8l78w51z8emo7om" target="_blank" rel="noopener noreferrer">
          <img src={padlet} alt="Descrição da imagem" />
          </a>
        </h2>
        
        
      </main>
      <Footer />
    </>
  );
}

export default Home;