interface IconData { name: string; class?: string | string[]; size?: string }
export type IconProp = string | IconData

export function useTgIcon(icon: IconProp | undefined, defaults: Partial<IconData> = {}) {
  return computed(() =>
    icon
      ? typeof icon === 'object'
        ? icon
        : { name: icon, size: '25', class: '', ...defaults }
      : null,
  )
}
