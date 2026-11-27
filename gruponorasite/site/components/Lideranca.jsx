"use client";

import Reveal from "./Reveal";
import LeaderCard from "./LeaderCard";

export default function Lideranca() {
  return (
    <section className="section" id="lideranca">
      <div className="container">
        <Reveal className="section-head">
          <div className="eyebrow">Nossa Liderança</div>
          <h2 className="section-title">Quem conduz o ecossistema.</h2>
        </Reveal>
        <div className="leaders-grid">
          <LeaderCard
            name="Fernando Rocha"
            role="Médico intensivista · MBA em Gestão em Saúde"
            img="/assets/dr-fernando.png"
            objectPosition="50% 20%"
            shortBio="Médico formado em 2012, com título em Terapia Intensiva e experiência em cuidados pós-operatórios."
            fullBio="Possui MBA em Gestão em Saúde e trajetória marcada pela atuação na interface entre assistência médica e gestão. Empreendedor no setor da saúde, participa da criação e desenvolvimento de soluções voltadas à gestão médica, contábil e estratégica para profissionais e instituições, com foco em qualidade assistencial, eficiência operacional e segurança jurídica."
            from="left"
          />
          <LeaderCard
            name="Bruno Alves Rocha"
            role="Economista · MBA em Finanças (FGV)"
            img="/assets/bruno-rocha.png"
            objectPosition="50% 18%"
            shortBio="Economista formado pela Universidade Federal de Juiz de Fora, com MBA em Finanças pela Fundação Getulio Vargas."
            fullBio="Também possui formação em Contabilidade pela Universidade Cruzeiro do Sul e em Direito pelo Centro Universitário Processus. Atuou como diretor da consultoria de Orçamentos e Fiscalização Financeira na Câmara dos Deputados, com experiência em análise econômica, finanças públicas e gestão orçamentária."
            from="right"
            delay={100}
          />
        </div>
      </div>
    </section>
  );
}
