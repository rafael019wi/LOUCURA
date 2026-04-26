import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/footer";

function Contatos() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <Header />

      <main>
        <h1>Meus Contatos</h1>
        <p>Entre em contato comigo pelas plataformas abaixo:</p>

        <ul>
          <li>
            GitHub:{" "}
            <a
              href="https://github.com/rafael019wi"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/rafael019wi
            </a>
          </li>

          <li>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/rafael-alves-de-oliveira/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/rafael-alves-de-oliveira
            </a>
          </li>

          <li>
            WhatsApp:{" "}
            <a
              href="https://wa.me/5519971293595"
              target="_blank"
              rel="noopener noreferrer"
            >
              (55) 1997129-3595
            </a>
          </li>

          <li>
            E-mail:{" "}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=rafael019wi@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              rafael019wi@gmail.com
            </a>
          </li>
        </ul>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </main>

      <Footer />
    </motion.div>
  );
}

export default Contatos;