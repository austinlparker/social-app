import {TextStyle, ViewStyle} from 'react-native'
import {useTheme, PaletteColorName, PaletteColor} from '../ThemeContext'

export interface UsePaletteValue {
  colors: PaletteColor
  view: ViewStyle
  btn: ViewStyle
  border: ViewStyle
  borderDark: ViewStyle
  text: TextStyle
  textLight: TextStyle
  textInverted: TextStyle
  link: TextStyle
  icon: TextStyle
}
export function usePalette(color: PaletteColorName): UsePaletteValue {
  const palette = useTheme().palette[color]
  return {
    colors: palette,
    view: {
      backgroundColor: palette.background,
    },
    btn: {
      backgroundColor: palette.backgroundLight,
    },
    border: {
      borderColor: palette.border,
    },
    borderDark: {
      borderColor: palette.borderDark,
    },
    text: {
      color: palette.text,
    },
    textLight: {
      color: palette.textLight,
    },
    textInverted: {
      color: palette.textInverted,
    },
    link: {
      color: palette.link,
    },
    icon: {
      color: palette.icon,
    },
  }
}