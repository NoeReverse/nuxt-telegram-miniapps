type Platform = 'android' | 'android_x' | 'ios' | 'macos' | 'tdesktop' | 'weba' | 'webk' | 'unigram' | 'unknown'

export default function usePlatform(platform: Platform = 'android'): { platform: Platform, isApple: boolean } {
  if (import.meta.dev) {
    const savedPlatform = useState('platform-dev', () => platform)
    return { platform: savedPlatform.value ?? 'unknown', isApple: ['ios', 'macos'].includes(savedPlatform.value) }
  }

  if (import.meta.client) {
    const platform = window.Telegram.WebApp.platform as Platform ?? 'unknown'
    const isApple = ['ios', 'macos'].includes(platform)
    return { platform, isApple }
  }
  return { platform: 'unknown', isApple: false }
}
