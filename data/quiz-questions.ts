import { QuizQuestion } from "@/types/quiz"

// A Primeira Pergunta (P1) que define o rumo de tudo
export const filterQuestion: QuizQuestion = {
  id: 1,
  title: "¿Qué camino quieres seguir?",
  subtitle: "¿Cómo piensas monetizar tus influencers de IA?",
  options: [
    {
      id: "1a",
      text: "📱 Influencer Monetizada",
      badge: "OPCIÓN A (Soft Content)",
      image: "/images/opcaoA.webp",
      tag: "shopee-tiktok",
      bullets: [
        "Publis con grandes marcas",
        "TikTok Shop y afiliación",
        "Remuneración por views",
        "UGC para empresas"
      ]
    },
    {
      id: "1b",
      text: "🔥 Estrategia Premium +18",
      badge: "OPCIÓN B (NSFW)",
      image: "/images/opcaob.webp",
      tag: "fechar-parcerias",
      bullets: [
        "Contenido exclusivo adulto",
        "Plataformas de suscripción",
        "Facturación de US$ 20k/mes"
      ]
    },
    {
      id: "1c",
      text: "👻 Creativos Sin Aparecer",
      badge: "OPCIÓN C (Anunciantes)",
      image: "/images/opcaoC.jpeg",
      tag: "shopee-tiktok",
      bullets: [
        "Contenido para creativos",
        "ROAS 4x Mayor"
      ]
    }
  ]
}

// Bancos Secundários de perguntas baseadas na resposta da P1 (Cada array tem 2 perguntas)
export const quizBranches: Record<string, QuizQuestion[]> = {
  // Caminho 1: Afiliados Shopee/TikTok — fluxo direto pra oferta, sem perguntas P2/P3
  "shopee-tiktok": [],

  // Caminho 2: Freelancers / Agências vendendo serviços
  "vender-servicos": [
    {
      id: 2,
      title: "O que está te travando de ter clientes de IA hoje?",
      options: [
        { id: "2a", text: "Não consigo mostrar o que faço de forma visual e convincente", tag: "vender-servicos" },
        { id: "2b", text: "Os clientes não entendem o valor e acham caro", tag: "vender-servicos" },
        { id: "2c", text: "Não sei como precificar e empacotar esse serviço", tag: "vender-servicos" },
        { id: "2d", text: "Não tenho clientes ainda, não sei por onde começar", tag: "vender-servicos" }
      ]
    },
    {
      id: 3,
      title: "Qual você acha que é a maior trava na hora de fechar um contrato?",
      options: [
        { id: "3a", text: "Os clientes acham muito caro pagar um social media", tag: "vender-servicos" },
        { id: "3b", text: "Eu não tenho um portfólio visual que gere interesse de cara", tag: "vender-servicos" },
        { id: "3c", text: "Preciso de um diferencial para esmagar meus concorrentes", tag: "vender-servicos" },
        { id: "3d", text: "Falta de prospecção de vendas da minha parte", tag: "vender-servicos" }
      ]
    }
  ],

  // Caminho 4: Influenciadora Genérica e Patrocínios
  "fechar-parcerias": [
    {
      id: 2,
      title: "O que te limita ou impede de ser a sua própria influenciadora original?",
      options: [
        { id: "2a", text: "Não me sinto fotogênico(a), muita vergonha e não tenho dicção", tag: "fechar-parcerias" },
        { id: "2b", text: "Eu não quero que conhecidos saibam dessa minha conta", tag: "fechar-parcerias" },
        { id: "2c", text: "Não posso gastar fortunas em viagens, cenários e roupas estéticas", tag: "fechar-parcerias" },
        { id: "2d", text: "Não tenho o biótipo 'tradicional' que o Instagram engaja", tag: "fechar-parcerias" }
      ]
    },
    {
      id: 3,
      title: "Quanto você quer ganhar por mês com a sua influenciadora de IA?",
      options: [
        { id: "3a", text: "R$1.000 a R$3.000 — já bate minha conta", tag: "fechar-parcerias" },
        { id: "3b", text: "R$3.000 a R$8.000 — muda minha vida de verdade", tag: "fechar-parcerias" },
        { id: "3c", text: "Mais de R$8.000 — quero independência total", tag: "fechar-parcerias" },
        { id: "3d", text: "Não sei o número, mas quero liberdade de verdade", tag: "fechar-parcerias" }
      ]
    }
  ]
}

// Uma constante provisória genérica pra não quebrar referências mortas
export const fallbackQuestions: QuizQuestion[] = quizBranches["fechar-parcerias"]
