import Reveal from "./Reveal";

const SPACES = [
  { img: "esp-recepcao.jpg", label: "Recepção e lounge" },
  { img: "esp-estudio-ead.jpg", label: "Estúdio de gravação EAD" },
  { img: "esp-sala-aula.jpg", label: "Sala de aula" },
  { img: "esp-circulacao.jpg", label: "Circulação e biblioteca" },
  { img: "esp-sala-reuniao.jpg", label: "Sala de reunião" },
];

export default function NossoEspaco() {
  return (
    <section className="section" id="espaco">
      <div className="container">
        <Reveal className="section-head">
          <div className="eyebrow">Nosso Espaço</div>
          <h2 className="section-title" style={{ maxWidth: "22ch" }}>
            Um espaço feito para aprender, praticar e produzir.
          </h2>
        </Reveal>
        <div className="space-grid">
          {SPACES.map((space, i) => (
            <Reveal key={space.img} as="figure" from="scale" delay={i * 70} className="space-card">
              <div className="space-card__photo">
                <img src={`/assets/${space.img}`} alt={space.label} />
              </div>
              <figcaption>{space.label}</figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
