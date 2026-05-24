export type QuizTag = "shopee-tiktok" | "vender-servicos" | "fechar-parcerias" | "neutro"

export type ProfileType = QuizTag | "indefinido"

export interface QuizOption {
  id: string
  text: string
  tag: QuizTag
  badge?: string
  image?: string
  bullets?: string[]
}

export interface QuizQuestion {
  id: number
  title: string
  subtitle?: string
  options: QuizOption[]
}

export interface QuizAnswer {
  questionId: number
  optionId: string
  tag: QuizTag
}

export interface LeadData {
  name: string
  whatsapp: string
  email: string
}

export interface QuizResult {
  profile: ProfileType
  tags: Record<QuizTag, number>
  leadData: LeadData
}
