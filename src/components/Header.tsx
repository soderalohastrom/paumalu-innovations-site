import { ThemeToggle } from './ThemeToggle'

export const Header: React.FC = () => {
  return (
    <header className="relative z-20 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">🌺</span>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">
              Paumalu Innovations
            </h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#journey" 
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              Journey
            </a>
            <a 
              href="#challenge" 
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              Share Challenge
            </a>
            <a 
              href="/privacy-policy" 
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              Privacy
            </a>
            <ThemeToggle />
          </nav>
          
          <div className="md:hidden">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}
