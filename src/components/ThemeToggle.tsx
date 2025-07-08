import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-full bg-white/20 dark:bg-black/20 backdrop-blur-md border border-white/30 dark:border-gray-700 transition-all duration-300 hover:scale-105 hover:bg-white/30 dark:hover:bg-black/30"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div className="relative w-6 h-6">
        <Sun 
          className={`absolute inset-0 w-6 h-6 text-yellow-500 transition-all duration-300 ${
            theme === 'light' ? 'rotate-0 opacity-100' : 'rotate-90 opacity-0'
          }`} 
        />
        <Moon 
          className={`absolute inset-0 w-6 h-6 text-blue-400 transition-all duration-300 ${
            theme === 'dark' ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'
          }`} 
        />
      </div>
    </button>
  )
}
