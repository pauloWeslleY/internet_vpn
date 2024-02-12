import { type ThemeConfig, extendTheme } from '@chakra-ui/react'
import type { StyleFunctionProps } from '@chakra-ui/styled-system'
import { mode } from '@chakra-ui/theme-tools'
import { colors } from './colors'


//* Configuration Dark Mode on App
const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: true,
}

export const theme = extendTheme({
  config,
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: mode('whiteAlpha.800', 'blackAlpha.800')(props),
        color: mode('blackAlpha.900', 'whiteAlpha.900')(props),
        fontFamily: "'Poppins', sans-serif",
      },
    }),
  },
  fonts: {
    Poppins: "'Poppins', sans-serif",
    Inter: "'Inter', sans-serif",
  },
  spacing: {
    space: {
      12: '4.5rem',
    },
  },
  colors,
})