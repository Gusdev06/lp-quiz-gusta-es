"use client"

import { PrimaryButton } from "./primary-button"
import { useQuizContext } from "./quiz-context"

interface ScreenDecisaoProps {
  onNext: () => void
}

export function ScreenDecisao({ onNext }: ScreenDecisaoProps) {
  const { profileType } = useQuizContext()

  const getPitch = () => {
    switch (profileType) {
      case "shopee-tiktok":
        return "criar sua influencer de IA para vender na Shopee e TikTok sem aparecer"
      case "vender-servicos":
        return "criar influencers e vender como serviço cobrando R$2.000+ por cliente"
      case "fechar-parcerias":
      default:
        return "criar sua própria influencer de IA do absoluto zero"
    }
  }

  return (
    <div className="flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Title */}
      <h2 className="font-heading text-[24px] md:text-[30px] font-bold tracking-[-0.02em] mb-4 text-black relative max-w-[600px] leading-tight">
        Em <span className="text-[#00C62B]">menos de 10 minutos</span> você pode {getPitch()}.
      </h2>

      <p className="text-[17px] md:text-[19px] font-semibold text-black mb-8">
        Pronto pra ver exatamente como?
      </p>

      {/* Value props */}
      <div className="w-full max-w-[500px] flex flex-col gap-2.5 mb-8 text-left">
        <div className="flex items-start gap-3 bg-gray-50 rounded-xl p-3.5">
          <div className="w-5 h-5 rounded-full bg-[#00C62B]/15 flex items-center justify-center shrink-0 mt-0.5">
            <span className="text-[#00C62B] text-xs font-bold">✓</span>
          </div>
          <p className="text-[14px] text-gray-800 leading-snug">
            <b>Sem programação.</b> Sem experiência prévia. Sem design.
          </p>
        </div>
        <div className="flex items-start gap-3 bg-gray-50 rounded-xl p-3.5">
          <div className="w-5 h-5 rounded-full bg-[#00C62B]/15 flex items-center justify-center shrink-0 mt-0.5">
            <span className="text-[#00C62B] text-xs font-bold">✓</span>
          </div>
          <p className="text-[14px] text-gray-800 leading-snug">
            <b>Ferramentas gratuitas.</b> Você começa sem gastar nada extra.
          </p>
        </div>
        <div className="flex items-start gap-3 bg-gray-50 rounded-xl p-3.5">
          <div className="w-5 h-5 rounded-full bg-[#00C62B]/15 flex items-center justify-center shrink-0 mt-0.5">
            <span className="text-[#00C62B] text-xs font-bold">✓</span>
          </div>
          <p className="text-[14px] text-gray-800 leading-snug">
            <b>Acesso vitalício</b> ao método + atualizações grátis.
          </p>
        </div>
      </div>

      {/* Buttons */}
      <div className="w-full flex flex-col gap-3 max-w-[500px]">
        {/* Yes Button - strong commit */}
        <button
          onClick={onNext}
          className="w-full p-5 rounded-2xl bg-[#00A13C] hover:bg-[#008A33] text-white font-bold text-[16px] shadow-[0_8px_25px_rgba(0,161,60,0.3)] hover:-translate-y-0.5 hover:shadow-[0_12px_35px_rgba(0,161,60,0.4)] transition-all duration-300 text-center"
        >
          SIM, quero criar a minha agora 🚀
        </button>

        {/* Soft Button - leads to same place (curiosity) */}
        <button
          onClick={onNext}
          className="w-full p-4 rounded-2xl bg-white border border-gray-200 text-gray-700 font-medium text-[14px] hover:bg-gray-50 transition-all duration-300 text-center"
        >
          Quero ver quanto custa primeiro
        </button>
      </div>
    </div>
  )
}
