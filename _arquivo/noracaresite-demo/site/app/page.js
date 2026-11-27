import Header from "./components/Header";
import ScrollProgress from "./components/ScrollProgress";
import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import Servicos from "./components/Servicos";
import Educacao from "./components/Educacao";
import Lideranca from "./components/Lideranca";
import Parceiros from "./components/Parceiros";
import Faq from "./components/Faq";
import Contato from "./components/Contato";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Servicos />
        <Educacao />
        <Lideranca />
        <Parceiros />
        <Faq />
        <Contato />
      </main>
      <Footer />
    </>
  );
}
