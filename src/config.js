// Edite aqui os dados do site. Itens marcados com [PLACEHOLDER] devem ser substituídos.
export const doctor = {
  name: "Dr. Ivan Oliveira",
  title: "Ginecologista e Obstetra",
  crm: "CRM PB 10686",
  rqe: "RQE 6421",
  specialties: ["Ginecologia", "Pré-natal", "Assistência ao parto"],
  city: "João Pessoa - PB",
  address: [
    "Shopping Liv Mall",
    "7º Andar / Sala 715",
    "Av. Gov. Flávio Ribeiro Coutinho, 500",
    "Jardim Oceania, João Pessoa - PB, 58037-005",
  ],
  mapQuery:
    "Shopping Liv Mall, Av. Gov. Flávio Ribeiro Coutinho, 500, Jardim Oceania, João Pessoa - PB, 58037-005",
  hours: "[PLACEHOLDER: dias e horários de atendimento]",
  instagram: "https://www.instagram.com/ivanmedbm",
  instagramHandle: "@ivanmedbm",
  role: "Tenente-Coronel do Corpo de Bombeiros Militar da Paraíba",
  photo: "/ivan.png",
  aboutPhoto: "/avatar.jpg", // ex.: '/ivan.jpg' (coloque a foto em /public)
};

export const whatsappNumber = "5583988628734";
export const whatsappMessage =
  "Olá! Gostaria de agendar uma consulta com o Dr. Ivan Oliveira.";
export const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
export const phoneDisplay = "(83) 98862-8734";

export const areas = [
  {
    title: "Pré-natal",
    text: "Acompanhamento da gestação do início ao fim, com consultas, exames e orientações claras para você viver cada fase com segurança e tranquilidade.",
  },
  {
    title: "Assistência ao parto",
    text: "Cuidado e presença no momento do nascimento, com informação para que você participe das decisões. A avaliação médica vem antes de qualquer orçamento.",
  },
  {
    title: "Ginecologia",
    text: "Consultas de rotina, prevenção, planejamento reprodutivo e cuidado com a saúde da mulher em todas as fases da vida.",
  },
];

export const steps = [
  {
    n: "01",
    title: "Fale pelo WhatsApp",
    text: "Nossa equipe responde, tira dúvidas iniciais e verifica a melhor data para você.",
  },
  {
    n: "02",
    title: "Consulta de avaliação",
    text: "Uma conversa sem pressa para conhecer sua história e suas necessidades.",
  },
  {
    n: "03",
    title: "Plano de cuidado",
    text: "Com a avaliação feita, definimos juntos o acompanhamento e, no caso do parto, o orçamento.",
  },
];

export const faqs = [
  {
    q: "O Dr. Ivan atende por plano de saúde?",
    a: "Não. O atendimento é particular. Esse aviso existe para que você tenha clareza antes de agendar.",
  },
  {
    q: "Como funciona o orçamento da assistência ao parto?",
    a: "O orçamento é feito somente após a avaliação médica, pois depende das características de cada gestação.",
  },
  {
    q: "Quando devo começar o pré-natal?",
    a: "O ideal é iniciar assim que souber da gravidez, de preferência no primeiro trimestre. Chame no WhatsApp para agendar sua primeira consulta.",
  },
  {
    q: "Como agendo minha consulta?",
    a: "Pelo botão de WhatsApp desta página. Nossa assistente responde e combina data e horário com você.",
  },
];

// [PLACEHOLDER] Depoimentos: use apenas relatos reais, autorizados pelas pacientes,
// sem promessa de resultado (Resolução CFM 2.336/2023). Deixe a lista vazia para ocultar a seção.
// export const testimonials = [
//   { text: '[PLACEHOLDER: depoimento real e autorizado de paciente]', author: 'Paciente, iniciais' },
//   { text: '[PLACEHOLDER: depoimento real e autorizado de paciente]', author: 'Paciente, iniciais' },
//   { text: '[PLACEHOLDER: depoimento real e autorizado de paciente]', author: 'Paciente, iniciais' },
// ]

// Texto "Sobre" (revisado a partir do texto enviado pelo Dr. Ivan)
export const about = {
  lead: "Cristão, parteiro, esposo da Keity e pai do Heitor, do Ivan, da Beatriz e da Isadora.",
  paragraphs: [
    "Minha história começa no sertão da Paraíba, em São Mamede, de onde meus pais vieram para tentar a vida na cidade grande. Meu pai, Ivan Oliveira, foi garçom; minha mãe, Rivaldete, é professora. Foi com eles que aprendi o valor do trabalho e do cuidado com o outro.",
    "Estudei em escola pública a vida inteira e sempre sonhei em ser médico. Antes de chegar lá, fui muita coisa: sacristão, estudante de Química, de Eletrônica e de Farmácia, professor de Biologia e de Matemática, soldado e oficial do Corpo de Bombeiros.",
    "Hoje sou médico pela UFPB, por vocação; ginecologista, obstetra e parteiro pela SES-PB, por amor; e oficial médico do Corpo de Bombeiros Militar da Paraíba, por missão.",
    "Sou aprendiz da humanização: no parto, no cuidado com as pessoas e na vida. Aprendo todos os dias e quero nunca parar de aprender.",
  ],
  formation: [
    "Medicina pela Universidade Federal da Paraíba (UFPB)",
    "Residência em Ginecologia e Obstetrícia pela SES-PB",
  ],
};
