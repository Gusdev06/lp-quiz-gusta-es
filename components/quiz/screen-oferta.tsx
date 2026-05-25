"use client"

import { useQuizContext } from "./quiz-context"
import { ShieldCheck, CheckCircle2, ChevronDown, Check } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import { VagasCounter } from "./vagas-counter"

interface ScreenOfertaProps {
  onNext: () => void // Se houver algo após
}

export function ScreenOferta({ onNext }: ScreenOfertaProps) {
  const { profileType } = useQuizContext()
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs = [
    {
      q: "¿Qué es exactamente este entrenamiento?",
      a: "Es un entrenamiento completo desde cero que te enseña, paso a paso, cómo crear Influencers de IA realistas, generar contenidos y videos listos para usar y monetizar todo eso. Es método práctico, no teoría."
    },
    {
      q: "¿Necesito gastar con IA para crear mi Influencer?",
      a: "No. No necesitas gastar nada para crear tu Influencer de IA. Te mostramos cómo usar IAs gratuitas para generar tu Influencer desde cero y, además, presentamos herramientas profesionales para quien quiera escalar después. Empiezas sin invertir y evolucionas cuando tenga sentido."
    },
    {
      q: "¿En cuánto tiempo creo mi Influencer de IA?",
      a: "En menos de 10 minutos ya sales con tu Influencer de IA creada y lista para usar. Nada de semanas estudiando. Es resultado inmediato."
    },
    {
      q: "¿Necesito saber algo sobre IA, edición o marketing?",
      a: "No. El entrenamiento fue creado para quien está empezando desde cero absoluto. Sin programación, sin edición avanzada y sin lenguaje técnico. Solo sigues, aplicas y ejecutas."
    }
  ]

  return (
    <div className="flex flex-col items-center w-full max-w-[500px] mx-auto pb-16 animate-in fade-in duration-700">

      {/* Espaçamento pra compensar o banner fixo (renderizado em app/page.tsx) */}
      <div className="w-full h-10 mb-2" />

      {/* 1. Contador de Vagas Dinâmico */}
      <div className="w-full mb-4">
        <VagasCounter />
      </div>

      {/* Alerta de Oferta */}
      <div className="w-full bg-[#E57373] text-white rounded-2xl p-5 mb-10 shadow-sm relative overflow-hidden flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-6 h-6" />
          <h3 className="font-bold text-lg leading-tight">Oferta de lanzamiento</h3>
        </div>
        <p className="text-sm font-medium leading-snug">
          Acceso inmediato al método + bonos exclusivos de esta clase.
        </p>
      </div>

      {/* 2. Ancoragem de Preço (Quanto custaria) */}
      <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-tight mb-6 text-black text-center text-balance">
        ¿Cuánto te costaría hacer esto solo?
      </h2>

      <div className="w-full flex flex-col gap-2 mb-8">
        <div className="flex items-center justify-between bg-gray-50/80 rounded-xl p-4">
          <span className="text-gray-800 font-medium text-[15px]">Contratar modelo profesional</span>
          <span className="text-gray-400 font-semibold line-through">US$ 100</span>
        </div>
        <div className="flex items-center justify-between bg-gray-50/80 rounded-xl p-4">
          <span className="text-gray-800 font-medium text-[15px]">Editor de video freelance</span>
          <span className="text-gray-400 font-semibold line-through">US$ 60</span>
        </div>
        <div className="flex items-center justify-between bg-gray-50/80 rounded-xl p-4">
          <span className="text-gray-800 font-medium text-[15px]">Producción de contenido</span>
          <span className="text-gray-400 font-semibold line-through">US$ 80</span>
        </div>
        <div className="flex items-center justify-between bg-gray-50/80 rounded-xl p-4">
          <span className="text-gray-800 font-medium text-[15px]">Herramientas y software</span>
          <span className="text-gray-400 font-semibold line-through">US$ 40</span>
        </div>
      </div>

      {/* Divisor 'OU' */}
      <div className="w-full flex items-center justify-center mb-8 relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-[#D9FF02]/30"></div>
        </div>
        <div className="relative bg-white border border-gray-100 px-4 py-2 rounded-full text-xs font-semibold text-gray-400">
          O
        </div>
      </div>

      {/* 3. Box da Oferta e Botão */}
      <div className="bg-[#D9FF02]/20 text-[#00A13C] text-xs font-bold px-4 py-2 rounded-full mb-6 flex items-center gap-2 border border-[#D9FF02]/40">
        🚀 OFERTA EXCLUSIVA DE LANZAMIENTO
      </div>

      <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-tight mb-4 text-black text-center text-balance">
        ¡Bienvenido al <span className="text-[#00A13C]">futuro</span>!
      </h2>

      <p className="text-[15px] md:text-[16px] text-gray-700 leading-relaxed mb-4 text-center text-balance">
        El nuevo negocio es <b>Influencia Digital con IA</b>.
      </p>

      <p className="text-[15px] md:text-[16px] text-gray-700 leading-relaxed mb-8 text-center text-balance">
        Hoy puedes crear una <b>influencer 100% virtual</b> que parece real, habla como una influencer de verdad y aparece en cualquier parte del mundo. Lo mejor: <b>no necesitas gastar nada</b> para empezar, no necesitas aparecer y no necesitas venderle a nadie.
      </p>

      {/* Imagem da Reportagem Exame */}
      <div className="w-full rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)] mb-6 bg-white">
        <Image
          src="/images/exame-influencer.png"
          alt="Influencer hecha por inteligencia artificial factura US$ 11 mil al mes - Exame"
          width={1200}
          height={1600}
          className="w-full h-auto object-contain"
          sizes="(max-width: 768px) 90vw, 500px"
        />
      </div>

      {/* Print Emily Pellegrini / Insights */}
      <div className="w-full rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)] mb-8 bg-white">
        <Image
          src="/images/imgchk1.webp"
          alt="Emily Pellegrini - AI Influencer earnings"
          width={1200}
          height={900}
          className="w-full h-auto object-cover"
          sizes="(max-width: 768px) 90vw, 500px"
        />
      </div>

      {/* Checklist de Entrega */}
      <div className="w-full flex flex-col gap-4 mb-8">
        {(() => {
          let deliverables = []
          switch (profileType) {
            case "shopee-tiktok":
              deliverables = [
                { title: "Entrenamiento Completo:", subtitle: "Crea tu Influencer de IA desde cero" },
                { title: "Contenido Ilimitado:", subtitle: "Aprende a crear assets para cientos de productos" },
                { title: "Estrategia de Ventas:", subtitle: "Rutina de publicaciones para TikTok Shop y afiliados" }
              ]
              break
            case "vender-servicos":
              deliverables = [
                { title: "Entrenamiento Completo:", subtitle: "Domina la creación de modelos hiperrealistas" },
                { title: "Cierre de Contratos:", subtitle: "Cómo empaquetar tu servicio de IA por US$ 400+" },
                { title: "Automatización y Agilidad:", subtitle: "Entrega decenas de videos en minutos y escala" }
              ]
              break
            case "fechar-parcerias":
            default:
              deliverables = [
                { title: "Entrenamiento completo:", subtitle: "Crea tu Influencer de IA hiperrealista" },
                { title: "Contenido +18 sin censura:", subtitle: "IAs ilimitadas para Fanvue y OnlyFans" },
                { title: "Estrategia Premium:", subtitle: "Cómo facturar US$ 4k-20k/mes con suscripciones" }
              ]
              break
          }

          return deliverables.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <div className="mt-0.5"><CheckCircle2 className="w-5 h-5 text-[#00A13C] fill-[#00A13C]/10" /></div>
              <p className="text-gray-700 text-[15px] leading-relaxed">
                <span className="font-semibold text-black block mb-0.5">{item.title}</span>
                {item.subtitle}
              </p>
            </div>
          ))
        })()}
      </div>

      {/* Seção de Provas Sociais */}
      <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-tight mb-3 text-black text-center text-balance">
        Resultado Real de Nuestros <span className="text-[#00A13C]">Alumnos y Mentorados</span>
      </h2>

      <p className="text-[15px] text-gray-700 leading-relaxed mb-2 text-center text-balance max-w-[460px]">
        Sin invertir un solo peso, ni hablar con clientes.
      </p>

      <p className="text-[14px] text-gray-500 leading-relaxed mb-8 text-center text-balance max-w-[460px]">
        Cada resultado de abajo vino de uno de los <b>3 caminos</b> que acabas de conocer.
      </p>

      <div className="w-full flex flex-col gap-6 mb-10">
        {[
          { src: "/images/prova1.webp", alt: "Resultado Bruna Perez", name: "Bruna Perez" },
          { src: "/images/prova4.webp", alt: "Resultado Juan Camacho", name: "Juan Camacho" },
          { src: "/images/prova32.webp", alt: "Resultado Pablo Juan", name: "Pablo Juan" },
        ].map((p) => (
          <div key={p.src} className="w-full rounded-2xl overflow-hidden border border-gray-100 shadow-sm bg-white">
            <div className="px-4 py-3 border-b border-gray-100 flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#00A13C]/10 flex items-center justify-center">
                <span className="text-[#00A13C] font-bold text-sm">{p.name.charAt(0)}</span>
              </div>
              <span className="font-semibold text-black text-[14px]">{p.name}</span>
            </div>
            <Image
              src={p.src}
              alt={p.alt}
              width={1200}
              height={900}
              sizes="(max-width: 768px) 90vw, 500px"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* PLANOS — Premium e Básico */}
      <div className="w-full flex flex-col gap-4 mb-6">

        {/* PLANO PREMIUM */}
        <div className="w-full bg-white rounded-3xl border-2 border-[#00A13C] shadow-[0_8px_40px_rgba(0,161,60,0.12)] p-7 flex flex-col items-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-[#D9FF02]/10 blur-3xl rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-[150px] h-[150px] bg-[#00A13C]/5 blur-3xl rounded-full"></div>

          <div className="absolute top-0 right-0 bg-[#00A13C] text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl tracking-wider z-10">
            MÁS POPULAR
          </div>

          <span className="text-[#00A13C] font-bold text-xs tracking-widest mb-2 relative z-10">PLAN PREMIUM</span>

          <div className="flex items-baseline gap-1 mb-2 relative z-10 whitespace-nowrap">
            <span className="text-2xl font-bold text-black">US$</span>
            <span className="text-5xl md:text-6xl font-sans font-black tracking-[-0.04em] text-[#00A13C] leading-none">
              11,99
            </span>
          </div>

          <span className="text-gray-600 font-medium text-sm mb-5 relative z-10">
            Acceso completo + bonos exclusivos
          </span>

          {/* Benefícios PREMIUM */}
          <div className="w-full flex flex-col gap-3 mb-6 relative z-10">
            {[
              "Entrenamiento completo paso a paso",
              "Crea tu Influencer de IA hiperrealista",
              "Acceso a IAs premium sin censura (+18)",
              "Estrategia de monetización US$ 4k-20k/mes",
              "Plantillas de contenido listas para usar",
              "Comunidad VIP y soporte prioritario",
              "Bonos exclusivos de lanzamiento",
              "Actualizaciones de por vida",
            ].map((b, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#00A13C] fill-[#00A13C]/10 shrink-0 mt-0.5" />
                <span className="text-gray-800 text-[14px] leading-snug text-left">{b}</span>
              </div>
            ))}
          </div>

          <a
            href="https://pay.hotmart.com/E105912753W?off=lytny95c&checkoutMode=10"
            className="w-full py-4 px-6 bg-[#008A33] hover:bg-[#007029] text-white text-[14px] font-bold tracking-wide rounded-2xl shadow-[0_10px_35px_rgba(0,161,60,0.3)] transition-all hover:-translate-y-1 hover:shadow-[0_15px_45px_rgba(0,161,60,0.4)] flex items-center justify-center text-center relative z-10"
          >
            QUIERO EL PLAN PREMIUM
          </a>
        </div>

        {/* PLANO BÁSICO */}
        <div className="w-full bg-white rounded-3xl border border-gray-200 shadow-[0_8px_40px_rgba(0,0,0,0.04)] p-7 flex flex-col items-center relative overflow-hidden">

          <span className="text-gray-500 font-bold text-xs tracking-widest mb-2">PLAN BÁSICO</span>

          <div className="flex items-baseline gap-1 mb-2 whitespace-nowrap">
            <span className="text-2xl font-bold text-black">US$</span>
            <span className="text-5xl md:text-6xl font-sans font-black tracking-[-0.04em] text-black leading-none">
              3,99
            </span>
          </div>

          <span className="text-gray-600 font-medium text-sm mb-5">
            Acceso al método esencial
          </span>

          {/* Benefícios BÁSICO */}
          <div className="w-full flex flex-col gap-3 mb-6">
            {[
              "Entrenamiento base paso a paso",
              "Crea tu Influencer de IA desde cero",
              "Acceso a IAs gratuitas recomendadas",
              "Guía inicial de monetización",
              "Soporte por email estándar",
            ].map((b, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <Check className="w-5 h-5 text-gray-500 shrink-0 mt-0.5" />
                <span className="text-gray-700 text-[14px] leading-snug text-left">{b}</span>
              </div>
            ))}
          </div>

          <a
            href="https://pay.hotmart.com/E105912753W?off=w1m723ny&checkoutMode=10"
            className="w-full py-4 px-6 bg-white hover:bg-gray-50 text-black text-[14px] font-bold tracking-wide rounded-2xl border-2 border-gray-200 transition-all hover:-translate-y-1 flex items-center justify-center text-center"
          >
            QUIERO EL PLAN BÁSICO
          </a>
        </div>

        <p className="text-gray-400 text-xs text-center mt-2">
          Oferta exclusiva de lanzamiento por tiempo limitado.
        </p>
      </div>

      <div className="mb-12"></div>

      {/* 5. Garantia */}
      <div className="w-full flex flex-col items-center mb-16 px-2">
        <Image
          src="/images/90-garantia.webp"
          alt="Garantía de 90 días"
          width={400}
          height={400}
          sizes="(max-width: 768px) 240px, 280px"
          className="w-[220px] md:w-[260px] h-auto"
        />
      </div>

      {/* 6. FAQ */}
      <h2 className="font-heading text-2xl font-bold tracking-tight mb-8 text-black text-center text-[#D9FF02]/10 bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-400">
        Preguntas Frecuentes
      </h2>

      <div className="w-full flex flex-col gap-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="w-full bg-white border border-gray-100 rounded-2xl overflow-hidden transition-all duration-300"
          >
            <button
              onClick={() => toggleFaq(index)}
              className="w-full px-5 py-4 flex items-center justify-between text-left focus:outline-none"
            >
              <span className="font-semibold text-black text-[15px] pr-4">{faq.q}</span>
              <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 shrink-0 ${openFaq === index ? 'rotate-180' : ''}`} />
            </button>

            <div
              className={`transition-all duration-300 ease-in-out px-5 overflow-hidden ${openFaq === index ? 'pb-4 max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <p className="text-[#00A13C] font-medium text-sm leading-relaxed font-sans">
                {faq.a}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}
