import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/footer";
import mapaMental from "../assets/mapa_mental.png";

function Sobre() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.4 }}
    >
      <Header />

      <main>
        <img src={mapaMental} alt="Mapa mental" />
      </main>

      <Footer />
    </motion.div>
  );
}

export default Sobre;