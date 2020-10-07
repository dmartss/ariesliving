import useTheme from 'lib/theme'
import Moon from './moon'
import Sun from './sun'

export default function ThemeIcon(props) {
  const { theme, toggleTheme } = useTheme()

  return theme === 'dark' ? (
    <Sun onClick={toggleTheme} {...props} />
  ) : (
    <Moon onClick={toggleTheme} {...props} />
  )
}
