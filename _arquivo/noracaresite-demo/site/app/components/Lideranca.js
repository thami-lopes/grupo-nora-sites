import Reveal from "./Reveal";
import LeadershipCard from "./LeadershipCard";
import styles from "./Lideranca.module.css";

const LEADERS = [
  {
    name: "Fernando Rocha",
    role: "CEO",
    photo: "/assets/dr-fernando.png",
    objectPosition: "50% 20%",
    short:
      "Médico formado em 2012, com título em Terapia Intensiva e experiência em cuidados pós-operatórios.",
    full: "Possui MBA em Gestão em Saúde e trajetória marcada pela atuação na interface entre assistência médica e gestão. Empreendedor no setor da saúde, participa da criação e desenvolvimento de soluções voltadas à gestão médica, contábil e estratégica para profissionais e instituições, com foco em qualidade assistencial, eficiência operacional e segurança jurídica.",
    from: "left",
    delay: 0,
  },
  {
    name: "Drª Deborah Peron",
    role: "Diretora Médica",
    photo: "/assets/dra-deborah.jpg",
    objectPosition: "50% 16%",
    short:
      "Com sólida atuação no setor da saúde, construiu uma trajetória marcada pela excelência assistencial, liderança estratégica e desenvolvimento de equipes.",
    full: "Com ampla experiência em gestão hospitalar e qualidade em saúde, contribuiu para a otimização de processos e o fortalecimento da eficiência nas instituições em que atuou. Hoje, na contadoc, Dr.ª Deborah conecta gestão, estratégia e cuidado para desenvolver soluções que impactam diretamente a jornada de profissionais e instituições da área da saúde, unindo visão estratégica, inovação e compromisso com a excelência.",
    from: "scale",
    delay: 100,
  },
  {
    name: "Drª Cíntia Mello",
    role: "Gerente Médica RJ",
    photo: "/assets/dra-cintia.jpg",
    objectPosition: "50% 16%",
    short:
      "Sólida formação acadêmica e trajetória construída na interface entre assistência médica, pesquisa e gestão em saúde.",
    full: "Médica formada pela Universidade Federal do Estado do Rio de Janeiro, também é graduada em Biomedicina pela mesma instituição, mestre pela Fundação Oswaldo Cruz e doutora pela Universidade Federal do Rio de Janeiro. Especialista em Clínica Médica pela Sociedade Brasileira de Clínica Médica e pós-graduada em Cardiologia pela Afya. Com experiência em instituições de referência como a Rede Américas/Amil e Rede D’Or, atua hoje na Contadoc conectando conhecimento técnico, gestão de prática médica e visão estratégica.",
    from: "right",
    delay: 200,
  },
];

export default function Lideranca() {
  return (
    <section className={styles.section}>
      <div className={styles.wrap}>
        <Reveal className={styles.header}>
          <div className={styles.pill}>Quem Somos</div>
          <h2 className={styles.title}>Nossa Liderança</h2>
        </Reveal>
        <div className={styles.grid}>
          {LEADERS.map((leader) => (
            <LeadershipCard key={leader.name} {...leader} />
          ))}
        </div>
      </div>
    </section>
  );
}
