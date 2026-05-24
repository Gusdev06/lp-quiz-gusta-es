import { track } from '@vercel/analytics'

// Declaração para o Window DataLayer do Tag Manager/GA4
declare global {
    interface Window {
        dataLayer: any[];
        gtag?: (...args: any[]) => void;
    }
}

/**
 * Função global unificada para disparar eventos Customizados
 * Vai disparar tanto na Vercel Analytics quanto no Google Tag Manager / GA4
 */
export const trackEvent = (eventName: string, eventProperties?: Record<string, any>) => {
    try {
        // 1. Vercel Analytics
        track(eventName, eventProperties)

        // 2. Google Analytics 4 (via gtag ou dataLayer)
        if (typeof window !== 'undefined') {
            if (window.gtag) {
                window.gtag('event', eventName, eventProperties)
            } else if (window.dataLayer) {
                window.dataLayer.push({
                    event: eventName,
                    ...eventProperties
                })
            }
        }

        // Debug em ambiente de desenvolvimento
        if (process.env.NODE_ENV === 'development') {
            console.log(`[Tracking] ${eventName}`, eventProperties)
        }
    } catch (err) {
        console.error(`Failed to track event: ${eventName}`, err)
    }
}
