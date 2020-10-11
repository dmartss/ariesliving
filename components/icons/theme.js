import { useTheme } from 'next-themes'
import { Moon, Sun } from './'

export default function ThemeIcon(props) {
  const { theme, setTheme } = useTheme()

  return theme === 'light' ? (
    <Moon onClick={() => setTheme('dark')} {...props} />
  ) : (
    <Sun onClick={() => setTheme('light')} {...props} />
  )
}
