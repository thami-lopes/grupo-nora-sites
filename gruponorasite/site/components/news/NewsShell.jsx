import { NavProvider } from "@/lib/NavContext";
import ScrollProgress from "../ScrollProgress";
import SiteHeader from "../SiteHeader";
import MobileDrawer from "../MobileDrawer";
import BrandsGrid from "../BrandsGrid";
import Contato from "../Contato";
import Footer from "../Footer";
import "@/app/news/news.css";

// Moldura das páginas do News: o mesmo cabeçalho, "Nossas Marcas", contato e
// rodapé da home do Grupo Nora.
export default function NewsShell({ children }) {
  return (
    <NavProvider>
      <ScrollProgress />
      <SiteHeader />
      <MobileDrawer />
      <main id="top">{children}</main>
      <BrandsGrid />
      <Contato />
      <Footer />
    </NavProvider>
  );
}
