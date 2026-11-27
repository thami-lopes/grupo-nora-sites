// Preço em BRL (não em centavos) — é o formato que a API de preferências do
// Mercado Pago espera em unit_price. Esta lista é a fonte única da verdade:
// a rota /api/checkout relê o preço daqui pelo slug, nunca confia no valor
// que vier do navegador.
export const COURSES = [
  {
    slug: "acls",
    name: "ACLS",
    fullName: "Advanced Cardiovascular Life Support",
    certifier: "hsi",
    price: 1500,
    duration: "16 horas",
    format: "Híbrido: pré-teste online + prática presencial",
    // Próxima turma (texto livre, ex.: "15 de março de 2027"). Vazio = "a definir".
    nextClass: null,
    summary:
      "Suporte avançado de vida em cardiologia para reconhecer e tratar paradas cardiorrespiratórias e emergências cardiovasculares críticas.",
    highlights: [
      "Algoritmos de parada cardiorrespiratória e SCA",
      "Manejo avançado de via aérea e acesso vascular",
      "Estações práticas em manequins de alta fidelidade",
      "Certificação internacional HSI com carteira de ACLS",
    ],
    overview:
      "Curso baseado em cenários (case-based), voltado a profissionais de saúde treinados que lideram ou participam de emergências cardiovasculares e esforços de ressuscitação. Aprofunda o suporte básico de vida com o reconhecimento e tratamento de arritmias, síndromes coronarianas agudas e cuidados pós-parada, com ênfase em dinâmica de equipe de profissionais de saúde preparados para atuação em PCR.",
    programTopics: [
      "Suporte básico de vida (BLS) de alta qualidade e uso do DEA",
      "Reconhecimento e manejo de arritmias pré e pós-parada",
      "Manejo avançado de via aérea em ressuscitação",
      "Farmacologia da parada cardiorrespiratória",
      "Reconhecimento de infarto agudo do miocárdio e síndromes coronarianas agudas",
      "Algoritmos de parada cardiorrespiratória (FV/TV sem pulso, AESP/assistolia)",
      "Cuidados pós-parada cardíaca",
      "Dinâmica de equipe e comunicação em emergências",
    ],
    audience:
      "Médicos e enfermeiros que atuam ou podem atuar na linha de frente de emergências cardiovasculares: pronto-socorro, UTI, centro cirúrgico, atendimento pré-hospitalar e intra-hospitalar.",
    prerequisites:
      "Profissionais de saúde: médicos e enfermeiros, ou acadêmicos de medicina a partir do 8º período.",
    certificationDetail:
      "Certificado internacional HSI, com validade de 2 anos, alinhado às diretrizes do ILCOR e da American Heart Association (AHA) para ressuscitação cardiopulmonar. Inclui a carteira de ACLS.",
  },
  {
    slug: "bls",
    name: "BLS",
    fullName: "Basic Life Support",
    certifier: "hsi",
    price: 600,
    duration: "4 horas",
    format: "Híbrido: pré-teste online + prática presencial",
    // Próxima turma (texto livre, ex.: "15 de março de 2027"). Vazio = "a definir".
    nextClass: null,
    summary:
      "Suporte básico de vida para profissionais de saúde: RCP de alta qualidade, uso de DEA e desengasgo em adultos, crianças e lactentes.",
    highlights: [
      "RCP de alta qualidade em adulto, criança e lactente",
      "Uso do desfibrilador externo automático (DEA)",
      "Manobra de desobstrução de vias aéreas",
      "Certificação internacional HSI com carteira de BLS",
    ],
    overview:
      "Ensina o reconhecimento da parada cardiorrespiratória súbita, a realização de RCP de alta performance em adultos, crianças e lactentes, o uso do desfibrilador externo automático (DEA) e o manejo da obstrução de vias aéreas, em cenários de socorrista único ou múltiplos socorristas, alinhado às diretrizes ILCOR/AHA.",
    programTopics: [
      "Reconhecimento de parada cardiorrespiratória súbita",
      "RCP de alta performance em adulto, criança e lactente",
      "Ventilação com bolsa-válvula-máscara",
      "Atendimento com um e múltiplos socorristas",
      "Uso do desfibrilador externo automático (DEA)",
      "Desobstrução de vias aéreas (engasgo)",
    ],
    audience:
      "Profissionais de saúde de qualquer especialidade que precisam de certificação vigente em suporte básico de vida.",
    prerequisites: "Não há pré-requisitos.",
    certificationDetail:
      "Certificado internacional HSI, com validade de 2 anos, conforme as diretrizes 2025. Inclui a carteira de BLS.",
  },
  {
    slug: "pocus",
    name: "POCUS",
    fullName: "Point of Care UltraSound",
    certifier: "nora",
    comingSoon: true,
    price: 1250,
    duration: "8 horas",
    format: "Híbrido: pré-teste online + prática presencial",
    // Próxima turma (texto livre, ex.: "15 de março de 2027"). Vazio = "a definir".
    nextClass: null,
    summary:
      "Ultrassom point-of-care aplicado à beira-leito: protocolos de avaliação rápida para suporte diagnóstico em urgência e emergência.",
    highlights: [
      "Protocolos eFAST, POCUS cardíaco e pulmonar",
      "Avaliação de via aérea e acesso vascular guiado",
      "Prática supervisionada em estações de ultrassom",
      "Certificado emitido pelo Centro de Ensino Nora Educação",
    ],
    overview:
      "Curso prático de ultrassom point-of-care para diagnóstico rápido à beira-leito em cenários de urgência e emergência, cobrindo os protocolos mais usados na prática clínica (eFAST, BLUE, RUSH) com prática intensiva em estações de ultrassom sob supervisão.",
    programTopics: [
      "Princípios físicos do ultrassom e manuseio do aparelho",
      "Protocolo eFAST (avaliação de trauma)",
      "Protocolo BLUE (avaliação pulmonar)",
      "POCUS cardíaco básico (FOCUS) e avaliação da função cardíaca",
      "Protocolo RUSH (avaliação do paciente em choque)",
      "Avaliação de veias para trombose venosa profunda",
      "Introdução à punção vascular guiada por ultrassom",
    ],
    audience:
      "Médicos de emergência, intensivistas, anestesiologistas e demais especialidades que atendem pacientes críticos.",
    prerequisites: "Não há pré-requisitos formais; recomendado para médicos em atividade clínica.",
    certificationDetail:
      "Certificado emitido pelo Centro de Ensino Nora Educação, com carga horária teórico-prática detalhada.",
  },
  {
    slug: "via-aerea-dificil",
    name: "Via Aérea Difícil",
    fullName: "Manejo Avançado da Via Aérea Difícil",
    certifier: "nora",
    price: 600,
    duration: "6 horas",
    format: "Híbrido: pré-teste online + prática presencial",
    // Próxima turma (texto livre, ex.: "15 de março de 2027"). Vazio = "a definir".
    nextClass: null,
    summary:
      "Reconhecimento e manejo estruturado da via aérea difícil prevista e não prevista, com algoritmos e dispositivos de resgate.",
    highlights: [
      "Preditores e algoritmos de via aérea difícil",
      "Dispositivos supraglóticos e videolaringoscopia",
      "Cricotireoidostomia em modelo simulado",
      "Certificado emitido pelo Centro de Ensino Nora Educação",
    ],
    overview:
      "Curso prático de manejo da via aérea difícil prevista e não prevista, com base nos algoritmos internacionais atualizados (planos A→B→C→D), priorizando a oxigenação contínua, o uso precoce da videolaringoscopia e o sucesso já na primeira tentativa de intubação.",
    programTopics: [
      "Avaliação da via aérea na emergência e preditores de dificuldade",
      "Algoritmo de via aérea difícil (planos A, B, C, D)",
      "Sequência rápida de intubação (SRI)",
      "Intubação orotraqueal e videolaringoscopia",
      "Dispositivos supraglóticos (máscara laríngea, tubo laríngeo)",
      "Via aérea cirúrgica (cricotireoidostomia por punção e cirúrgica)",
      "Situações especiais: gestantes, obesos e idosos",
    ],
    audience:
      "Médicos emergencistas, anestesiologistas, intensivistas e demais especialidades que realizam manejo de via aérea.",
    prerequisites: "Médicos e acadêmicos de medicina a partir do 8º período.",
    certificationDetail:
      "Certificado emitido pelo Centro de Ensino Nora Educação, com carga horária teórico-prática detalhada.",
  },
  {
    slug: "puncao-venosa-usg",
    name: "Punção Venosa Guiada por USG",
    fullName: "Acesso Venoso Guiado por Ultrassonografia",
    certifier: "nora",
    price: 700,
    duration: "8 horas",
    format: "Híbrido: pré-teste online + prática presencial",
    // Próxima turma (texto livre, ex.: "15 de março de 2027"). Vazio = "a definir".
    nextClass: null,
    summary:
      "Técnica de punção venosa central e periférica guiada por ultrassom, reduzindo complicações e aumentando a taxa de sucesso na primeira tentativa.",
    highlights: [
      "Anatomia ultrassonográfica vascular",
      "Punção guiada em eixo curto e longo",
      "Acesso venoso central e periférico difícil",
      "Certificado emitido pelo Centro de Ensino Nora Educação",
    ],
    overview:
      "Curso prático (hands-on) de acesso vascular guiado por ultrassom, com foco em reduzir complicações e aumentar a taxa de sucesso na primeira tentativa em punções centrais e periféricas, com treino intensivo em phantoms e simuladores.",
    programTopics: [
      "Princípios físicos do ultrassom aplicados à punção vascular",
      "Anatomia ultrassonográfica de jugular interna, subclávia, axilar e femoral",
      "Técnica de punção em eixo curto e em eixo longo",
      "Acesso venoso central guiado por ultrassom",
      "Acesso venoso periférico difícil guiado por ultrassom",
      "Cuidados com cateteres e prevenção de complicações",
    ],
    audience:
      "Médicos e enfermeiros que realizam acessos vasculares em ambiente hospitalar, UTI e emergência.",
    prerequisites: "Não há pré-requisitos formais.",
    certificationDetail:
      "Certificado emitido pelo Centro de Ensino Nora Educação, com carga horária teórico-prática detalhada.",
  },
  {
    slug: "puncao-intraossea",
    name: "Punção Intraóssea",
    fullName: "Acesso Intraósseo na Emergência",
    certifier: "nora",
    price: 500,
    duration: "8 horas",
    format: "Híbrido: pré-teste online + prática presencial",
    // Próxima turma (texto livre, ex.: "15 de março de 2027"). Vazio = "a definir".
    nextClass: null,
    summary:
      "Técnica de acesso vascular intraósseo para situações em que o acesso venoso não é obtido rapidamente: parada cardiorrespiratória, choque e emergências em adultos e crianças.",
    highlights: [
      "Indicações, contraindicações e escolha do sítio de punção",
      "Uso de dispositivos de inserção rápida e manual",
      "Prática supervisionada em modelos anatômicos",
      "Certificado emitido pelo Centro de Ensino Nora Educação",
    ],
    overview:
      "Curso prático sobre o acesso intraósseo (IO) como via de infusão rápida e segura quando a punção venosa periférica falha ou não pode esperar. Cobre a escolha do sítio, a técnica com diferentes dispositivos, a infusão de fluidos e medicações, o reconhecimento de complicações e a integração do acesso IO aos algoritmos de ressuscitação e choque.",
    programTopics: [
      "Indicações e contraindicações do acesso intraósseo",
      "Anatomia e sítios de punção (tíbia proximal e distal, úmero proximal)",
      "Dispositivos de inserção: sistemas automáticos e agulhas manuais",
      "Técnica de punção, confirmação do posicionamento e fixação",
      "Infusão de fluidos e medicações pela via intraóssea",
      "Particularidades do acesso IO em adultos e em crianças",
      "Complicações, remoção do dispositivo e cuidados pós-procedimento",
      "O acesso IO nos algoritmos de parada cardiorrespiratória e choque",
    ],
    audience:
      "Médicos e enfermeiros que atuam em emergência, UTI, atendimento pré-hospitalar e transporte de pacientes críticos.",
    prerequisites: "Não há pré-requisitos formais.",
    certificationDetail:
      "Certificado emitido pelo Centro de Ensino Nora Educação, com carga horária teórico-prática detalhada.",
  },
];

export function getCourseBySlug(slug) {
  return COURSES.find((c) => c.slug === slug) ?? null;
}

export function formatBRL(value) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

// Só cursos com preço definido e turmas abertas podem ser comprados no site.
export function isPurchasable(course) {
  return !course.comingSoon && typeof course.price === "number";
}

// Texto curto do status comercial do curso, usado nos cards e nas páginas.
export function courseAvailabilityLabel(course) {
  if (course.comingSoon) return "Turmas em breve";
  if (typeof course.price !== "number") return "Valor sob consulta";
  return null;
}

// Data da próxima turma (campo nextClass de cada curso, texto livre).
export function nextClassLabel(course) {
  return course.nextClass || "a definir";
}

// Como funcionam todos os cursos (formato híbrido).
export const PASSING_SCORE = 70;

export const HYBRID_STEPS = [
  {
    title: "Pré-teste online",
    text: `Após a inscrição, você recebe o pré-teste. É obrigatório e exige ${PASSING_SCORE}% de aproveitamento para avançar para a etapa presencial. Sem a nota mínima, é preciso se reinscrever no curso.`,
  },
  {
    title: "Certificado do pré-teste",
    text: "Aprovado, você imprime o certificado do pré-teste e leva no dia da etapa presencial.",
  },
  {
    title: "Etapa presencial (prática)",
    text: "Dia de treinamento prático, com instrutores especialistas, em turmas reduzidas.",
  },
  {
    title: "Pós-teste e certificado",
    text: `Depois do curso, você refaz o teste (pós-teste). Com ${PASSING_SCORE}% de aproveitamento, recebe o certificado do curso. Sem a nota mínima, é preciso se reinscrever no curso.`,
  },
];
