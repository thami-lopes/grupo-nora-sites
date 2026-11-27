"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { ContatoLink } from "./ScrollLink";
import styles from "./Faq.module.css";

const ITEMS = [
  {
    q: "O que é a Nora Educação?",
    a: "A Nora Educação é o Centro de Ensino do Grupo Nora, focado em capacitação prática em suporte de vida e emergência para médicos e equipes de saúde, com certificação internacional HSI.",
  },
  {
    q: "Os certificados ACLS e BLS são reconhecidos internacionalmente?",
    a: "Sim. Esses dois cursos seguem o currículo do HSI — Health & Safety Institute, com certificado internacional válido por 2 anos.",
  },
  {
    q: "E os demais cursos (POCUS, Via Aérea Difícil, Punção Venosa e Punção Intraóssea)?",
    a: "Esses cursos têm certificado emitido pelo Centro de Ensino Nora Educação, com carga horária e conteúdo prático detalhados na página de cada curso.",
  },
  {
    q: "Como funciona a compra pelo site?",
    a: "Você escolhe o curso, preenche seus dados de inscrição e é redirecionado ao ambiente seguro do Mercado Pago para concluir o pagamento com cartão, Pix ou boleto.",
  },
  {
    q: "Meus dados de pagamento ficam seguros?",
    a: "Sim. O pagamento é processado inteiramente pelo Mercado Pago, certificado PCI-DSS. Não armazenamos número de cartão, validade ou CVV em nenhum momento.",
  },
  {
    q: "Posso parcelar o pagamento?",
    a: "As opções de parcelamento disponíveis (cartão de crédito) aparecem diretamente na tela de pagamento do Mercado Pago, de acordo com o curso escolhido.",
  },
  {
    q: "O que acontece depois que eu pago?",
    a: "Você recebe a confirmação da inscrição por e-mail com os próximos passos, incluindo o pré-teste online, o local e a data da etapa presencial e as orientações para o dia do curso.",
  },
  {
    q: "Existe política de cancelamento e reembolso?",
    a: "Sim. As condições de cancelamento e reembolso constam no e-mail de confirmação da inscrição. Em caso de dúvida, fale com a nossa coordenação.",
  },
  {
    q: "Como funciona o formato híbrido dos cursos?",
    a: "Todos os cursos têm uma etapa online e uma presencial. Primeiro você faz o pré-teste, que é obrigatório e exige 70% de aproveitamento para avançar. Aprovado, imprime o certificado do pré-teste e leva no dia da etapa presencial (a parte prática). Depois do curso, refaz o teste (pós-teste) e, com 70% de aproveitamento, recebe o certificado.",
  },
  {
    q: "E se eu não atingir 70% no pré-teste ou no pós-teste?",
    a: "Nos dois casos é preciso se reinscrever no curso para tentar novamente. Por isso vale estudar o material antes de fazer o pré-teste.",
  },
  {
    q: "Quando é a próxima turma?",
    a: "A data da próxima turma aparece no card e na página de cada curso, no campo \"Próxima turma\". Quando estiver como \"a definir\", fale com a nossa coordenação para ser avisado assim que abrir.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className={styles.section}>
      <Reveal className={styles.card}>
        <div className={styles.blobTop} />
        <div className={styles.blobBottom} />
        <div className={styles.topLine} />
        <div className={styles.grid}>
          <Reveal from="left" className={styles.header}>
            <h2 className={styles.title}>Perguntas Frequentes</h2>
            <p className={styles.text}>
              Não encontrou o que procurava? Fale com a nossa equipe.
            </p>
            <ContatoLink className={styles.cta}>
              Fale Conosco <span>→</span>
            </ContatoLink>
          </Reveal>

          <div className={styles.list}>
            {ITEMS.map((item, i) => {
              const open = i === openIndex;
              return (
                <Reveal
                  key={item.q}
                  from="up"
                  delay={i * 60}
                  className={`${styles.item} ${open ? styles.itemOpen : ""}`}
                >
                  <button
                    type="button"
                    className={styles.itemBtn}
                    onClick={() => setOpenIndex(open ? -1 : i)}
                    aria-expanded={open}
                  >
                    <span className={styles.num}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className={styles.q}>{item.q}</span>
                    <span className={styles.icon}>+</span>
                  </button>
                  <div className={styles.panelWrap}>
                    <div className={styles.panelInner}>
                      <p className={styles.a}>{item.a}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
