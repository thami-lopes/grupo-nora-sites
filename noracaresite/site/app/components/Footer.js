import Image from "next/image";
import ScrollLink, {
  ContatoLink,
  ServicosLink,
  SobreLink,
  FaqLink,
} from "./ScrollLink";
import { SITE_LINKS } from "../lib/siteLinks";
import styles from "./Footer.module.css";

const SERVICES = [
  "Gestão de Escalas",
  "Capacitação Médica",
  "Gestão de Processos",
  "Comissões Obrigatórias",
  "Pagamento de Honorários",
];

const BRANDS = [
  { name: "Nora Care", color: "#92E0CD", current: true },
  { name: "Nora Capital", color: "#BC9466", href: SITE_LINKS.capital },
  { name: "Nora Safe", color: "#9FA7BB", href: SITE_LINKS.safe },
  { name: "Nora Educação", color: "#EF8F53", href: SITE_LINKS.educacao },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrap}>
        <div className={styles.grid}>
          <div>
            <Image
              src="/assets/nora-care-horizontal.png"
              alt="Nora Care"
              width={1510}
              height={219}
              className={styles.logo}
            />
            <p className={styles.blurb}>
              Gestão profissional de equipes médicas para clínicas e
              hospitais.
            </p>
            <ContatoLink className={styles.cta}>
              Fale Conosco <span>→</span>
            </ContatoLink>
          </div>

          <div>
            <div className={styles.colTitle}>Serviços</div>
            <div className={styles.colLinks}>
              {SERVICES.map((s) => (
                <ServicosLink key={s} className={styles.link}>
                  {s}
                </ServicosLink>
              ))}
            </div>
          </div>

          <div>
            <div className={styles.colTitle}>Institucional</div>
            <div className={styles.colLinks}>
              <a href={SITE_LINKS.news} className={styles.link}>
                News
              </a>
              <SobreLink className={styles.link}>Sobre nós</SobreLink>
              <FaqLink className={styles.link}>FAQ</FaqLink>
              <a href={SITE_LINKS.grupoNora} title="Voltar ao site do Grupo Nora" className={styles.link}>
                Grupo Nora <span className={styles.tiny}>↗</span>
              </a>
              <ContatoLink className={styles.link}>Fale Conosco</ContatoLink>
            </div>
          </div>

          <div>
            <div className={styles.colTitle}>Legal</div>
            <div className={styles.colLinks}>
              <a href="#" className={styles.link}>
                Política de privacidade
              </a>
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
                className={styles.brandChip}
                style={{ "--chip-color": b.color }}
              >
                <span className={styles.brandDot} />
                <span className={styles.brandName}>{b.name}</span>
              </ScrollLink>
            ) : (
              <a
                key={b.name}
                href={b.href}
                className={styles.brandChip}
                style={{ "--chip-color": b.color }}
              >
                <span className={styles.brandDot} />
                <span className={styles.brandName}>{b.name}</span>
              </a>
            )
          )}
        </div>

        <div className={styles.bottomBar}>
          <div className={styles.copyright}>
            2026 Grupo Nora. All Rights Reserved.
          </div>
          <div className={styles.bottomLinks}>
            <ServicosLink className={styles.bottomLink}>
              Serviços
            </ServicosLink>
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
