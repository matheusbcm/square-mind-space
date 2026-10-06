export const profile = {
  name: "Matheus Carvalho",
  crp: "CRP 13/8301",
  title: "Psicólogo Clínico",
  approach: "Terapia Cognitivo-Comportamental (TCC)",
  email: "matheusnr2019@gmail.com",
  phoneDisplay: "(83) 98128-1837",
  whatsappNumber: "5583981281837",
  whatsappMessage: "Olá, Matheus! Gostaria de agendar uma consulta.",
};

export const whatsappUrl = `https://wa.me/${profile.whatsappNumber}?text=${encodeURIComponent(profile.whatsappMessage)}`;

export const about = [
  "Psicólogo Clínico com 6 anos de experiência consolidada em atendimento, atuando com a abordagem da Terapia Cognitivo-Comportamental (TCC).",
  "Integro práticas de atenção plena (Mindfulness) no suporte ao bem-estar, à regulação emocional e ao desenvolvimento pessoal.",
  "Busco aprimoramento contínuo para oferecer intervenções baseadas em evidências, com escuta ativa, empatia e um plano terapêutico individualizado.",
];

export const experiences = [
  "Atendimento psicoterápico individual utilizando a abordagem da Terapia Cognitivo-Comportamental (TCC) para auxílio no manejo de ansiedade, depressão e outros desafios emocionais.",
  "Incorporação de práticas de atenção plena (Mindfulness) como ferramenta terapêutica para redução de estresse, promoção da autoconsciência e regulação emocional.",
  "Elaboração e implementação de planos de intervenção individualizados e baseados em evidências.",
  "Orientação e suporte a familiares e cuidadores.",
  "Colaboração com equipes multidisciplinares para garantir o suporte integrado e o progresso do paciente.",
];

export const education = [
  {
    degree: "Bacharelado em Psicologia",
    institution: "UNIPE",
    period: "2013 – 2018",
    details: [
      "Abordagem de atuação: TCC.",
      "Participação em pesquisas e projetos de monitoria.",
      "Desenvolvimento de raciocínio clínico e compreensão do comportamento humano.",
    ],
  },
];

export const additionalTraining = [
  {
    degree: "Formação de Terapeuta ABA",
    institution: "Especialização em Análise do Comportamento Aplicada",
    period: "Em andamento",
    details: [
      "Aplicação de estratégias comportamentais baseadas em evidências.",
      "Intervenções focadas em autonomia, regulação emocional e desenvolvimento de habilidades.",
    ],
  },
  {
    degree: "Formação em Processo de Analista do Comportamento",
    institution: "Formação complementar em Análise do Comportamento",
    period: "Em andamento",
    details: [
      "Compreensão funcional do comportamento e dos contextos de aprendizagem.",
      "Avaliação e intervenção em situações com foco em estratégias comportamentais sustentáveis.",
    ],
  },
];

export const skills = [
  "Psicologia Clínica",
  "Terapia Cognitivo-Comportamental",
  "Mindfulness",
  "Intervenção em Crise",
  "Aconselhamento",
  "Empatia e Escuta Ativa",
  "Comunicação Efetiva",
  "Trabalho em Equipe",
];
