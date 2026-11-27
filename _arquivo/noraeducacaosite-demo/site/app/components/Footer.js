import Image from "next/image";
import Link from "next/link";
import ScrollLink, {
  ContatoLink,
  CursosLink,
  SobreLink,
  FaqLink,
} from "./ScrollLink";
import { SITE_LINKS } from "../lib/siteLinks";
import { COURSES } from "../lib/courses";
import styles from "./Footer.module.css";

const BRANDS = [
  { name: "Nora Care", logo: "/assets/nora-care-horizontal.png", href: SITE_LINKS.care },
  { name: "Nora Capital", logo: "/assets/nora-capital-horizontal.png", href: SITE_LINKS.capital },
  { name: "Nora Safe", logo: "/assets/nora-safe-horizontal.png", href: SITE_LINKS.safe },
  { name: "Nora Educação", logo: "/assets/nora-educacao-horizontal.png", current: true },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrap}>
        <div className={styles.grid}>
          <div>
            <Image
              src="/assets/nora-educacao-horizontal.png"
              alt="Nora Educação"
              width={2709}
              height={355}
              className={styles.logo}
            />
            <p className={styles.blurb}>
              Centro de Ensino do Grupo Nora: cursos de suporte de vida e
              emergência com certificação internacional HSI.
            </p>
            <ContatoLink className={styles.cta}>
              Fale Conosco <span>→</span>
            </ContatoLink>
          </div>

          <div>
            <div className={styles.colTitle}>Cursos</div>
            <div className={styles.colLinks}>
              {COURSES.map((c) => (
                <Link key={c.slug} href={`/cursos/${c.slug}`} className={styles.link}>
                  {c.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className={styles.colTitle}>Institucional</div>
            <div className={styles.colLinks}>
              <SobreLink className={styles.link}>Sobre nós</SobreLink>
              <FaqLink className={styles.link}>FAQ</FaqLink>
              <Link href="/area-do-aluno" className={styles.link}>
                Área do Aluno
              </Link>
              <Link href="/treinamento" className={styles.link}>
                Solicitar Treinamento
              </Link>
              <a href={SITE_LINKS.grupoNora} title="Voltar ao site do Grupo Nora" className={styles.link}>
                Grupo Nora <span className={styles.tiny}>↗</span>
              </a>
              <ContatoLink className={styles.link}>Fale Conosco</ContatoLink>
            </div>
          </div>

          <div>
            <div className={styles.colTitle}>Legal</div>
            <div className={styles.colLinks}>
              <Link href="/privacidade" className={styles.link}>
                Política de privacidade
              </Link>
              <ContatoLink className={styles.link}>Fale Conosco</ContatoLink>
            </div>
          </div>
        </div>

        <div className={styles.brandsRow}>
          <span className={styles.brandsLabel}>Ecossistema Grupo Nora</span>
          {BRANDS.map((b) =>
            b.current ? (
              <ScrollLink
                key={b.name}
                id="top"
                offset={0}
                aria-current="page"
                className={`${styles.brandChip} ${styles.brandChipCurrent}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element -- small static brand logo, no resizing needed */}
                <img src={b.logo} alt={b.name} className={styles.brandLogo} />
              </ScrollLink>
            ) : (
              <a key={b.name} href={b.href} className={styles.brandChip}>
                {/* eslint-disable-next-line @next/next/no-img-element -- small static brand logo, no resizing needed */}
                <img src={b.logo} alt={b.name} className={styles.brandLogo} />
              </a>
            )
          )}
        </div>

        <div className={styles.bottomBar}>
          <div className={styles.copyright}>
            © 2026 Grupo Nora. Todos os direitos reservados.
          </div>
          <div className={styles.bottomLinks}>
            <CursosLink className={styles.bottomLink}>Cursos</CursosLink>
            <span className={styles.sep} />
            <a href={SITE_LINKS.news} className={styles.bottomLink}>
              Blog
            </a>
            <span className={styles.sep} />
            <ScrollLink id="top" offset={0} className={styles.bottomLink}>
              Voltar ao topo ↑
            </ScrollLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
