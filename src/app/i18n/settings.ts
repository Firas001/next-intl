export const fallbackLng = 'ar'
export const languages = [fallbackLng, 'en']
export const defaultNS = 'home'
export const cookieName = 'i18next'
export const searchParamName = 'lng'

export function getOptions (lng = fallbackLng, ns: string | string[] = defaultNS) {
  return {
    // debug: true,
    supportedLngs: languages,
    // preload: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
    // backend: {
    //   projectId: '01b2e5e8-6243-47d1-b36f-963dbb8bcae3'
    // }
  }
}
