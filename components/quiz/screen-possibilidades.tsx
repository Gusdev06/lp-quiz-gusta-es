"use client"

import { Coins, Infinity, Globe, Clock, ShieldCheck, TrendingUp, Handshake, Video } from "lucide-react"
import { PrimaryButton } from "./primary-button"
import Image from "next/image"
import { useQuizContext } from "./quiz-context"

interface ScreenPossibilidadesProps {
  onNext: () => void
}

export function ScreenPossibilidades({ onNext }: ScreenPossibilidadesProps) {
  const { profileType } = useQuizContext()

  const getBenefits = () => {
    switch (profileType) {
      case "shopee-tiktok":
        return [
          { icon: <TrendingUp className="w-5 h-5 text-[#00FF88]" />, text: "Vendas orgânicas diárias — sem pagar tráfego" },
          { icon: <Infinity className="w-5 h-5 text-[#00D4FF]" />, text: "Conteúdo infinito para reviews — teste centenas de produtos" },
          { icon: <ShieldCheck className="w-5 h-5 text-[#00FF88]" />, text: "Conta Blindada — adeus bloqueios por reutilizar vídeos" },
          { icon: <Clock className="w-5 h-5 text-[#00D4FF]" />, text: "Operação Automática — rodando Shopee e TikTok 24h" }
        ]
      case "vender-servicos":
        return [
          { icon: <TrendingUp className="w-5 h-5 text-[#00FF88]" />, text: "Margem de lucro alta — serviço percebido como Premium" },
          { icon: <Infinity className="w-5 h-5 text-[#00D4FF]" />, text: "Sem custos adicionais — você não paga modelo nem estúdio" },
          { icon: <Handshake className="w-5 h-5 text-[#00FF88]" />, text: "Contratos Retentivos — agências assinarão mensalidade" },
          { icon: <Clock className="w-5 h-5 text-[#00D4FF]" />, text: "Criação Rápida — monte e entregue vídeos em minutos" }
        ]
      case "fechar-parcerias":
      default:
        return [
          { icon: <Coins className="w-5 h-5 text-[#00FF88]" />, text: "Parcerias pagas com marcas — sem precisar de seguidores" },
          { icon: <Infinity className="w-5 h-5 text-[#00D4FF]" />, text: "Conteúdo ilimitado — todos os dias, sem esforço" },
          { icon: <Globe className="w-5 h-5 text-[#00FF88]" />, text: "Alcance global — venda pra qualquer lugar do mundo" },
          { icon: <Clock className="w-5 h-5 text-[#00D4FF]" />, text: "Liberdade total — trabalhe onde e quando quiser" }
        ]
    }
  }

  const benefits = getBenefits()


  return (
    <div className="flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Title */}
      <h2 className="font-heading text-[26px] md:text-[28px] font-bold tracking-[-0.02em] mb-4 text-black text-balance">
        O que você conquista com sua própria influenciadora de IA:
      </h2>

      {/* Benefits List */}
      <div className="w-full space-y-0 mb-8">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex items-center gap-4 py-4 border-b border-gray-200 last:border-b-0 animate-in fade-in slide-in-from-left-4 duration-500"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Icon */}
            <div className="w-11 h-11 rounded-full gradient-border flex items-center justify-center shrink-0">
              {benefit.icon}
            </div>

            {/* Text */}
            <p className="text-gray-700 text-[15px] leading-relaxed text-left">
              {benefit.text}
            </p>
          </div>
        ))}
      </div>

      {/* Highlight Block */}
      <div className="w-full bg-gradient-to-r from-[#00FF88]/10 to-[#00D4FF]/10 border-l-[3px] border-[#00FF88] rounded-xl p-5 mb-8">
        <p className="text-gray-800 font-semibold leading-relaxed text-[15px]">
          Ela não cansa. Não reclama. Não pede aumento. Não tira férias.
        </p>
        <p className="text-gray-500 text-[13px] mt-1">
          Trabalha 24/7 enquanto você dorme, almoça, vive.
        </p>
      </div>

      {/* Button */}
      <PrimaryButton onClick={onNext}>
        Quero criar a minha agora
      </PrimaryButton>
    </div>
  )
}
