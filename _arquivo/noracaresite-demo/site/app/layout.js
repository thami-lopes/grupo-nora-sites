import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Nora Care | Gestão profissional de equipes médicas",
  description:
    "Contratamos e gerimos médicos para clínicas e hospitais: escalas cobertas, honorários pagos em dia e compliance tributário do início ao fim.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={poppins.variable}>
      <body>{children}</body>
    </html>
  );
}
