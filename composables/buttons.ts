import type { RouteLocationRaw } from 'vue-router'

export interface DefaultButtonProps {
  type?: 'button' | 'submit' | 'reset'
  to?: RouteLocationRaw
  href?: string
  disabled?: boolean
  rel?: string
  target?: string
  color?:
    | 'default'
    | 'primary'
    | 'danger'
}

export function useTgButton(props: DefaultButtonProps) {
  const externalDefaultRelationship = 'noopener noreferrer'
  const externalDefaultTarget = '_blank'

  const NuxtLink = defineNuxtLink({})

  const component = computed(() => {
    return props.to
      ? NuxtLink
      : props.href
        ? 'a'
        : props.type ? 'button' : 'div'
  },
  )

  const type = computed(() => {
    if (component.value === 'button')
      return props.type || 'button'
  })

  const external = computed(() => {
    if (typeof props.to === 'string' && props.to.startsWith('http'))
      return true
    else if (
      typeof props.to === 'object'
      && 'path' in props.to
      && props.to.path.startsWith('http')
    )
      return true
    return false
  })

  const relationship = computed(() => {
    if (!external.value)
      return props.rel
    return props.rel ?? externalDefaultRelationship
  })

  const target = computed(() => {
    if (!external.value)
      return props.target
    return props.target ?? externalDefaultTarget
  })

  const attributes = computed(() => (props.to || props.href
    ? {
        to: props.disabled ? undefined : props.to,
        href: props.disabled ? undefined : props.href,
        disabled: props.disabled,
        type: type.value,
        rel: relationship.value,
        target: target.value,
      }
    : undefined))

  const className = computed(() => {
    const colorClasses = {
      default: 'tg-secondary-bg tg-hint',
      primary: 'tg-button',
      success: 'bg-success-500 tg-button-text',
      info: 'bg-info-500 tg-button-text',
      warning: 'bg-warning-500 tg-button-text',
      danger: 'bg-danger-500 tg-button-text',
    }
    return colorClasses[props.color ?? 'default']
  })

  return {
    attributes,
    component,
    className,
  }
}
