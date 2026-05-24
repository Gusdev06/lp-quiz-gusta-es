"use client"

import { useState, useEffect, useRef } from "react"
import { ScreenEntrada } from "@/components/quiz/screen-entrada"
import { ScreenQuestion } from "@/components/quiz/screen-question"
import { ScreenAfiliadaIntro } from "@/components/quiz/screen-afiliada-intro"
import { ScreenRealidadeMundial } from "@/components/quiz/screen-realidade-mundial"
import { ScreenConsistenciaLuna } from "@/components/quiz/screen-consistencia-luna"
import { ScreenNsfwIntro } from "@/components/quiz/screen-nsfw-intro"
import { ScreenNsfwIaSemCensura } from "@/components/quiz/screen-nsfw-ia-sem-censura"
import { ScreenNsfwQualquerVideo } from "@/components/quiz/screen-nsfw-qualquer-video"
import { ScreenNsfwPreparado } from "@/components/quiz/screen-nsfw-preparado"
import { ScreenNsfwToqueRoupa } from "@/components/quiz/screen-nsfw-toque-roupa"
import { ScreenNsfw2kDia } from "@/components/quiz/screen-nsfw-2k-dia"
import { filterQuestion, quizBranches, fallbackQuestions } from "@/data/quiz-questions"
import { useQuizContext } from "@/components/quiz/quiz-context"
import { ScreenDesafio } from "@/components/quiz/screen-desafio"
import { ScreenRevelacao } from "@/components/quiz/screen-revelacao"
import { ScreenProvaResultado } from "@/components/quiz/screen-prova-resultado"
import { ScreenUgcDemo } from "@/components/quiz/screen-ugc-demo"
import { ScreenVideosNegocios } from "@/components/quiz/screen-videos-negocios"
import { ScreenPossibilidades } from "@/components/quiz/screen-possibilidades"
import { ScreenDecisao } from "@/components/quiz/screen-decisao"
import { ScreenOferta } from "@/components/quiz/screen-oferta"
import { ProgressBar } from "@/components/quiz/progress-bar"
import { BackButton } from "@/components/quiz/back-button"
import { PromoBanner } from "@/components/quiz/promo-banner"
import { trackEvent } from "@/lib/track-events"

// Telas válidas pro Caminho A (shopee-tiktok): só as que criamos juntos + oferta
const SHOPEE_FLOW = [1, 2, 3, 4, 5, 21]
// Telas válidas pro Caminho B (fechar-parcerias / NSFW): NSFW intro + IA sem censura + qualquer video + preparado + toque roupa + 2k dia + oferta
const NSFW_FLOW = [1, 2, 6, 7, 8, 9, 10, 11, 21]

export default function QuizFunil() {
  const [currentScreen, setCurrentScreen] = useState(1)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const { setAnswer, calculateProfile, profileType } = useQuizContext()

  // Fluxo: 1 Entrada + Q1 + (caminho A: 3 telas) + (caminho B: 2 telas) + Q2 + Q3 + 8 telas VSL/Oferta
  const totalScreens = 21

  // Lógica de Ramificação Multi-Quiz — usa fallback se a branch não tiver perguntas (caso do shopee-tiktok)
  const branchQuestions = profileType !== "indefinido" ? quizBranches[profileType] : fallbackQuestions
  const specificQuestions = branchQuestions && branchQuestions.length > 0 ? branchQuestions : fallbackQuestions

  const goToNext = (overrideProfile?: string) => {
    if (isTransitioning) return
    setIsTransitioning(true)

    // Valida: aceita só string válida; ignora MouseEvent que vem de onClick
    const validOverride = typeof overrideProfile === "string" ? overrideProfile : undefined
    const effectiveProfile = validOverride ?? profileType

    setTimeout(() => {
      setCurrentScreen((prev) => {
        // Caminho A (shopee-tiktok): navega só entre as telas do fluxo definido
        if (effectiveProfile === "shopee-tiktok") {
          const idx = SHOPEE_FLOW.indexOf(prev)
          if (idx >= 0 && idx < SHOPEE_FLOW.length - 1) return SHOPEE_FLOW[idx + 1]
          return Math.min(prev + 1, totalScreens)
        }

        // Caminho B (fechar-parcerias / NSFW): navega só entre as telas do fluxo definido
        if (effectiveProfile === "fechar-parcerias") {
          const idx = NSFW_FLOW.indexOf(prev)
          if (idx >= 0 && idx < NSFW_FLOW.length - 1) return NSFW_FLOW[idx + 1]
          return Math.min(prev + 1, totalScreens)
        }

        let next = prev + 1
        // Telas 3, 4 e 5 só aparecem para shopee-tiktok
        if (next === 3) next++
        if (next === 4) next++
        if (next === 5) next++
        // Telas 6 a 11 (NSFW) só aparecem para fechar-parcerias
        if (next === 6) next++
        if (next === 7) next++
        if (next === 8) next++
        if (next === 9) next++
        if (next === 10) next++
        if (next === 11) next++
        return Math.min(next, totalScreens)
      })
      setIsTransitioning(false)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 400)
  }

  const jumpToScreen = (screen: number) => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentScreen(screen)
      setIsTransitioning(false)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 400)
  }

  const goBack = () => {
    if (isTransitioning || currentScreen === 1) return
    setIsTransitioning(true)

    setTimeout(() => {
      setCurrentScreen((prev) => {
        // Caminho A: navega só entre as telas do fluxo definido
        if (profileType === "shopee-tiktok") {
          const idx = SHOPEE_FLOW.indexOf(prev)
          if (idx > 0) return SHOPEE_FLOW[idx - 1]
          return Math.max(prev - 1, 1)
        }

        // Caminho B: navega só entre as telas do fluxo definido
        if (profileType === "fechar-parcerias") {
          const idx = NSFW_FLOW.indexOf(prev)
          if (idx > 0) return NSFW_FLOW[idx - 1]
          return Math.max(prev - 1, 1)
        }

        // Outros caminhos: lógica padrão
        let prevScreen = prev - 1
        if (prevScreen === 11) prevScreen--
        if (prevScreen === 10) prevScreen--
        if (prevScreen === 9) prevScreen--
        if (prevScreen === 8) prevScreen--
        if (prevScreen === 7) prevScreen--
        if (prevScreen === 6) prevScreen--
        if (prevScreen === 5) prevScreen--
        if (prevScreen === 4) prevScreen--
        if (prevScreen === 3) prevScreen--
        return Math.max(prevScreen, 1)
      })
      setIsTransitioning(false)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 400)
  }

  // Tracking de carregamento inicial
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    trackEvent('funnel_started', { step: 1 })
  }, [])

  // Tracking quando troca de página
  useEffect(() => {
    if (currentScreen > 1) {
      trackEvent('step_viewed', { step: currentScreen })
    }
  }, [currentScreen])

  // Safety net: cada caminho só pode estar nas telas válidas. Se sair, redireciona pra oferta.
  useEffect(() => {
    if (profileType === "shopee-tiktok" && !SHOPEE_FLOW.includes(currentScreen)) {
      setCurrentScreen(21)
    }
    if (profileType === "fechar-parcerias" && !NSFW_FLOW.includes(currentScreen)) {
      setCurrentScreen(21)
    }
  }, [profileType, currentScreen])

  const renderScreen = () => {
    const screenProps = { onNext: goToNext }

    switch (currentScreen) {
      case 1:
        return <ScreenEntrada {...screenProps} />
      case 2:
        return (
          <ScreenQuestion
            question={filterQuestion}
            currentQuestion={1}
            totalQuestions={3}
            onAnswer={(option) => {
              setAnswer({ questionId: 1, optionId: option.id, tag: option.tag || 'neutro' })
              calculateProfile(option.tag)
              goToNext(option.tag)
            }}
          />
        )
      case 3:
        return <ScreenAfiliadaIntro {...screenProps} />
      case 4:
        return <ScreenRealidadeMundial {...screenProps} />
      case 5:
        return <ScreenConsistenciaLuna onNext={() => jumpToScreen(21)} />
      case 6:
        return <ScreenNsfwIntro {...screenProps} />
      case 7:
        return <ScreenNsfwIaSemCensura {...screenProps} />
      case 8:
        return <ScreenNsfwQualquerVideo {...screenProps} />
      case 9:
        return <ScreenNsfwPreparado {...screenProps} />
      case 10:
        return <ScreenNsfwToqueRoupa {...screenProps} />
      case 11:
        return <ScreenNsfw2kDia onNext={() => jumpToScreen(21)} />
      case 12:
        return (
          <ScreenQuestion
            question={specificQuestions[0]}
            currentQuestion={2}
            totalQuestions={3}
            onAnswer={(option) => {
              setAnswer({ questionId: 2, optionId: option.id, tag: option.tag || 'neutro' })
              goToNext()
            }}
          />
        )
      case 13: {
        const isShopee = profileType === "shopee-tiktok"
        return (
          <ScreenQuestion
            question={specificQuestions[1]}
            currentQuestion={isShopee ? 2 : 3}
            totalQuestions={isShopee ? 2 : 3}
            onAnswer={(option) => {
              setAnswer({ questionId: 3, optionId: option.id, tag: option.tag || 'neutro' })
              goToNext()
            }}
          />
        )
      }
      case 14:
        return <ScreenDesafio {...screenProps} />
      case 15:
        return <ScreenRevelacao {...screenProps} />
      case 16:
        return <ScreenProvaResultado {...screenProps} />
      case 17:
        return <ScreenUgcDemo {...screenProps} />
      case 18:
        return <ScreenVideosNegocios {...screenProps} />
      case 19:
        return <ScreenPossibilidades {...screenProps} />
      case 20:
        return <ScreenDecisao {...screenProps} />
      case 21:
        return <ScreenOferta onNext={() => { }} />
      default:
        return <ScreenEntrada {...screenProps} />
    }
  }

  const isOfertaScreen = currentScreen === 21

  return (
    <>
      {/* Banner promo fixo no topo — só na tela final de oferta, fora do container transformado */}
      {isOfertaScreen && <PromoBanner />}

      <main className="min-h-screen bg-background relative overflow-hidden">
        {/* Subtle grid background */}
        <div
          className="fixed inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />

        {/* Gradient orb effects */}
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#00FF88] opacity-[0.03] rounded-full blur-[150px] pointer-events-none" />
        <div className="fixed bottom-0 right-0 w-[400px] h-[400px] bg-[#00D4FF] opacity-[0.02] rounded-full blur-[120px] pointer-events-none" />

        {/* Progress bar */}
        <ProgressBar current={currentScreen} total={totalScreens} />

        {/* Back button */}
        {currentScreen > 1 && <BackButton onClick={goBack} />}

        {/* Main content */}
        <div
          ref={containerRef}
          className="relative z-10 w-full max-w-[480px] mx-auto px-5 md:px-6 pt-16 pb-12"
        >
          <div
            className={`transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] ${isTransitioning
              ? "opacity-0 translate-y-5"
              : "opacity-100 translate-y-0"
              }`}
          >
            {renderScreen()}
          </div>
        </div>
      </main>
    </>
  )
}
