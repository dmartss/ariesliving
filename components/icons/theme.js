import { useTheme } from 'next-themes'
import { Moon, Sun } from './'

export default function ThemeIcon(props) {
  const { theme, setTheme } = useTheme()

  if (theme === 'light') return <Moon onClick={() => setTheme('dark')} {...props} />
  return <Sun onClick={() => setTheme('light')} {...props} />
}
