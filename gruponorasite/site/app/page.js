import { NavProvider } from "@/lib/NavContext";
import ScrollProgress from "@/components/ScrollProgress";
import SiteHeader from "@/components/SiteHeader";
import MobileDrawer from "@/components/MobileDrawer";
import Hero from "@/components/Hero";
import BrandsGrid from "@/components/BrandsGrid";
import QuemSomos from "@/components/QuemSomos";
import Lideranca from "@/components/Lideranca";
import Mvv from "@/components/Mvv";
import NossoEspaco from "@/components/NossoEspaco";
import Parceiros from "@/components/Parceiros";
import News from "@/components/News";
import Depoimentos from "@/components/Depoimentos";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <NavProvider>
      <ScrollProgress />
      <SiteHeader />
      <MobileDrawer />
      <main id="top">
        <Hero />
        <BrandsGrid />
        <QuemSomos />
        <Lideranca />
        <Mvv />
        <NossoEspaco />
        <Parceiros />
        <News />
        <Depoimentos />
        <Contato />
      </main>
      <Footer />
    </NavProvider>
  );
}
