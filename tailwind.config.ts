import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

export default <Partial<Config>>{
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        card: '0px 0px 15px 0px rgba(34, 60, 80, 0.2)',
      },
      colors: {
        primary: colors.sky,
        secondary: colors.slate,
        success: colors.lime,
        info: colors.blue,
        warning: colors.yellow,
        danger: colors.red,
      },
    },
  },
}
