import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/footer";
import Moodboard from "../assets/moodboard.jpg";
import mapaEmpatia from "../assets/mapa_empatia.jpg";

function Projetos() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <Header />

      <main>
        <h1>Meus Projetos</h1>

        <h2>Moodboard</h2>
        <img src={Moodboard} alt="Moodboard" />

        <h2>Mapa de empatia</h2>
        <img src={mapaEmpatia} alt="Mapa de empatia" />
      </main>

      <Footer />
    </motion.div>
  );
}

export default Projetos;