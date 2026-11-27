import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Nora Educação | Centro de Ensino em Medicina de Emergência",
  description:
    "Cursos de capacitação médica com certificação internacional HSI: ACLS, BLS, POCUS, Via Aérea Difícil, Punção Venosa Guiada por USG e Punção Intraóssea. Inscrição e pagamento 100% seguros pelo site.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={poppins.variable}>
      <body>{children}</body>
    </html>
  );
}
