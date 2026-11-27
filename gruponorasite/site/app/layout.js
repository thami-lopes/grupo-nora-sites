import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "Grupo Nora — Um ecossistema completo para a gestão da saúde",
  description:
    "Grupo Nora: ecossistema integrado de gestão médica e hospitalar, contabilidade e gestão financeira, e seguros especializados para profissionais e instituições de saúde.",
  icons: {
    icon: "/assets/nora-symbol.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={poppins.variable}>
      <body>{children}</body>
    </html>
  );
}
