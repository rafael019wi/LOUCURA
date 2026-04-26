import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/footer";
import padlet from "../assets/aa.png";

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.4 }}
    >
      <Header />

      <main>
         <p><h1>Bem-vindo</h1></p>

        <p>
          <h2>
          Meu nome é Rafael Alves de Oliveira, sou técnico em desenvolvimento de sistemas pelo cotuca,
          <br />
          atualmente estudante de Ciência da Computação no Ifsp.
          <br /><br />
          Tenho muito interesse em seguir na área e evoluir como pessoa.
          <br /><br />
          Esse padlet mostra um pouco sobre minha trajetória como profissional
          </h2>
        </p>

        <a
          href="https://padlet.com/rafael019wi/meu-resumo-profissional-i8l78w51z8emo7om"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={padlet} alt="Padlet" />
        </a>
      </main>

      <Footer />
    </motion.div>
  );
}

export default Home;