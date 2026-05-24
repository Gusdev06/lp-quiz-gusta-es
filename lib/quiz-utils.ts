import { QuizAnswer, QuizTag, ProfileType } from "@/types/quiz"

export function calculateProfile(answers: QuizAnswer[]): ProfileType {
  // Conta as tags das respostas
  const tagCounts: Record<QuizTag, number> = {
    invisivel: 0,
    afiliado: 0,
    empreendedor: 0,
    neutro: 0
  }

  answers.forEach(answer => {
    tagCounts[answer.tag]++
  })

  // Remove tags neutras da contagem para segmentação
  const { neutro, ...relevantTags } = tagCounts

  // Encontra a tag com maior contagem
  const maxTag = Object.entries(relevantTags).reduce((max, [tag, count]) => {
    return count > max.count ? { tag: tag as QuizTag, count } : max
  }, { tag: "invisivel" as QuizTag, count: 0 })

  // Mapeia tag para perfil
  // Em caso de empate ou nenhuma resposta relevante → RESULTADO A (perfil mais comum)
  if (maxTag.count === 0) {
    return "criador-invisivel"
  }

  switch (maxTag.tag) {
    case "invisivel":
      return "criador-invisivel"
    case "afiliado":
      return "afiliado-estrategico"
    case "empreendedor":
      return "empreendedor-digital"
    default:
      return "criador-invisivel"
  }
}

export function getTagCounts(answers: QuizAnswer[]): Record<QuizTag, number> {
  const tagCounts: Record<QuizTag, number> = {
    invisivel: 0,
    afiliado: 0,
    empreendedor: 0,
    neutro: 0
  }

  answers.forEach(answer => {
    tagCounts[answer.tag]++
  })

  return tagCounts
}
