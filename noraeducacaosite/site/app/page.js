import Header from "./components/Header";
import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import Cursos from "./components/Cursos";
import ComoFunciona from "./components/ComoFunciona";
import Certificacao from "./components/Certificacao";
import Instalacoes from "./components/Instalacoes";
import Seguranca from "./components/Seguranca";
import Faq from "./components/Faq";
import Contato from "./components/Contato";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Cursos />
        <ComoFunciona />
        <Certificacao />
        <Instalacoes />
        <Seguranca />
        <Faq />
        <Contato />
      </main>
      <Footer />
    </>
  );
}
