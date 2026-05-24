"use client"

import { PrimaryButton } from "./primary-button"
import { useQuizContext } from "./quiz-context"

interface ScreenUltimaCoisaProps {
  onNext: () => void
}

const benefits = [
  "Não precisa aparecer",
  "IAs 100% gratuitas",
  "Primeiros ganhos em menos de 1 semana",
  "Garantia de 90 dias",
  "Mais fácil que usar o WhatsApp",
]

const strategies = [
  { emoji: "💄", text: "Publis com grandes marcas" },
  { emoji: "🛍️", text: "TikTok Shop e afiliação" },
  { emoji: "🌶️", text: "Conteúdo NSFW" },
  { emoji: "🚀", text: "Remuneração por views" },
]

export function ScreenUltimaCoisa({ onNext }: ScreenUltimaCoisaProps) {
  const { profileType } = useQuizContext()
  const isCompleta = profileType === "vender-servicos"

  return (
    <div className="flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Title */}
      <h2 className="font-heading text-[24px] md:text-[26px] font-bold tracking-[-0.02em] mb-4 text-black text-balance">
        {isCompleta
          ? "Você Também Terá Acesso à Estratégia Completa"
          : "Última Coisa Antes de Você Conhecer o Método..."}
      </h2>

      {isCompleta && (
        <>
          <p className="text-black text-[15px] leading-relaxed mb-6 max-w-[380px]">
            Além do módulo NSFW exclusivo, você domina TODAS as outras formas de monetização:
          </p>

          <ul className="w-full space-y-2 mb-6 text-left">
            {strategies.map((s) => (
              <li key={s.text} className="flex items-start gap-2 text-black text-[15px] leading-relaxed">
                <span className="shrink-0">{s.emoji}</span>
                <span>{s.text}</span>
              </li>
            ))}
          </ul>
        </>
      )}

      {/* Benefits list */}
      <ul className="w-full space-y-2 mb-4 text-left">
        {benefits.map((benefit) => (
          <li key={benefit} className="flex items-start gap-2 text-black text-[15px] leading-relaxed">
            <span className="shrink-0">✅</span>
            <span>{benefit}</span>
          </li>
        ))}
      </ul>

      {isCompleta && (
        <p className="w-full flex items-start gap-2 text-black text-[15px] font-bold leading-relaxed mb-6 text-left">
          <span className="shrink-0">🎁</span>
          <span>Bônus Criativo com IA só hoje!!!</span>
        </p>
      )}

      {/* Video placeholder */}
      <div className="w-full rounded-2xl overflow-hidden mb-6 mt-2 relative aspect-[9/16] bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center">
        <div className="flex flex-col items-center gap-2 text-gray-500">
          <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
            <span className="text-2xl">▶</span>
          </div>
          <span className="text-sm font-medium">Coloque o vídeo aqui</span>
        </div>
      </div>

      {/* Scarcity text */}
      <p className="text-black text-[15px] leading-relaxed mb-8 max-w-[360px]">
        <span className="text-[#FF0000] font-bold">Apenas 27 vagas disponíveis.</span>{" "}
        Depois, só em 6 meses com preço mais alto.
      </p>

      {/* CTA */}
      <PrimaryButton onClick={onNext} large>
        QUERO MEU ACESSO AO INFLUENCER AI
      </PrimaryButton>
    </div>
  )
}
