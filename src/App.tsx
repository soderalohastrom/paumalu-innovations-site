import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { ThemeProvider } from './providers/ThemeProvider'
import { VantaBackground } from './components/VantaBackground'
import { Header } from './components/Header'
import { ContactForm } from './components/ContactForm'
import { PrivacyPolicy } from './components/PrivacyPolicy'
import './index.css'

const MainContent: React.FC = () => {
  return (
    <div className="min-h-screen relative">
      <VantaBackground />
      
      <div className="relative z-10">
        <Header />
        
        {/* Hero Section */}
        <section className="relative px-4 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 bg-gradient-to-r from-primary-600 via-secondary-500 to-primary-600 bg-clip-text text-transparent animate-fade-in">
              The Journey to AI Harmony
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 animate-slide-up">
              Like the perfect wave, great AI isn't forced—it flows. Here's how we transform everyday challenges into breakthrough solutions.
            </p>
          </div>
        </section>

        {/* Journey Cards */}
        <section id="journey" className="px-4 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {/* The Challenge */}
              <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center text-2xl text-white mb-6 mx-auto">
                  🌊
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">The Challenge</h3>
                <p className="text-gray-700 dark:text-gray-300 text-center leading-relaxed">
                  Modern life pulls us in every direction—drowning in notifications, losing brilliant ideas, disconnected from our true selves. The noise overwhelms the signal.
                </p>
              </div>

              {/* The Flow */}
              <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-500 rounded-full flex items-center justify-center text-2xl text-white mb-6 mx-auto">
                  🏄‍♂️
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">The Flow</h3>
                <p className="text-gray-700 dark:text-gray-300 text-center leading-relaxed">
                  We learned to ride the wave of technology instead of fighting it, creating AI that adapts to your natural rhythms and amplifies your authentic voice.
                </p>
              </div>

              {/* The Bloom */}
              <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center text-2xl text-white mb-6 mx-auto">
                  🌺
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">The Bloom</h3>
                <p className="text-gray-700 dark:text-gray-300 text-center leading-relaxed">
                  Breakthrough solutions that don't just solve problems—they transform how you live, work, and connect with yourself and others.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Challenge Section */}
        <section id="challenge" className="px-4 py-20">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Share Your Challenge
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              Every great innovation starts with understanding real challenges. Tell us what you're facing—your story might inspire our next breakthrough.
            </p>
          </div>
          
          <ContactForm />
        </section>

        {/* Ocean Section */}
        <section className="px-4 py-20">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-primary-500/10 to-secondary-500/10 dark:from-primary-500/20 dark:to-secondary-500/20 rounded-3xl p-12 backdrop-blur-md border border-gray-200/50 dark:border-gray-700/50">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              The Ocean Is Calling
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              Your journey to AI harmony starts with a single wave. Dive in and discover what it feels like when technology flows with your natural rhythm.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-4 py-12 border-t border-gray-200/50 dark:border-gray-700/50">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center space-x-8 text-gray-600 dark:text-gray-400">
              <Link to="/privacy-policy" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                Privacy Policy
              </Link>
              <a href="mailto:aloha@paumalu-innovations.com" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                Contact
              </a>
              <a href="#journey" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                Our Journey
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-500">
              © 2025 Paumalu Innovations. Made with aloha in Hawaii.
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
