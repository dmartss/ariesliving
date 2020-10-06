import useTheme from 'lib/theme'
import Moon from './moon'
import Sun from './sun'

export default function ThemeIcon(props) {
  const { theme, toggleTheme } = useTheme()

  return theme === 'light' ? (
    <Moon onClick={toggleTheme} {...props} />
  ) : (
    <Sun onClick={toggleTheme} {...props} />
  )
}
