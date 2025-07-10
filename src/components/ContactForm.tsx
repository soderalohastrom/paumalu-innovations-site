import { useState } from 'react'

interface FormData {
  name: string
  email: string
  phone: string
  challenge: string
  solution: string
  smsOptIn: boolean
}

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    challenge: '',
    solution: '',
    smsOptIn: true
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Show personalized thank you
    let message = 'Thank you for sharing your story! '
    if (formData.challenge) {
      message += 'Your challenge resonates with us, and '
    }
    message += 'we\'ll be in touch soon to explore how we can help you find your flow.'
    
    alert(message)
    
    // In production, send to your Convex backend
    if (import.meta.env.DEV) console.log('Form submitted:', formData)
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
      {/* Form Introduction */}
      <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">🤝 Let's Connect</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Whether you're looking to streamline operations, unlock hidden insights, or build something entirely new—we're here to help you find your flow.
        </p>
        
        <div className="space-y-4">
          <h4 className="font-semibold text-gray-900 dark:text-white">What we offer:</h4>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
              <span>AI Strategy & Implementation</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
              <span>Custom Development Solutions</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
              <span>Innovation Workshops</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
              <span>Technical Consulting</span>
            </li>
          </ul>
        </div>
        
        <p className="mt-6 text-primary-600 dark:text-primary-400 italic">
          Your story helps us create AI that truly serves.
        </p>
      </div>

      {/* Contact Form */}
      <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-md rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
              Your Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="How should we address you?"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="For urgent project communications"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
            />
          </div>

          <div>
            <label htmlFor="challenge" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
              What challenge are you facing?
            </label>
            <textarea
              id="challenge"
              name="challenge"
              value={formData.challenge}
              onChange={handleChange}
              rows={4}
              placeholder="Tell us about your current challenge—whether it's staying focused, capturing ideas, understanding yourself better, or something entirely different. No challenge is too small or too big."
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
            />
          </div>

          <div>
            <label htmlFor="solution" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
              What would the perfect solution feel like?
            </label>
            <textarea
              id="solution"
              name="solution"
              value={formData.solution}
              onChange={handleChange}
              rows={3}
              placeholder="Describe how you'd feel if this challenge was beautifully solved. Paint us a picture of your ideal day."
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
            />
          </div>

          {/* SMS Consent - Required for 10DLC Registration */}
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
            <h4 className="text-lg font-medium text-blue-900 dark:text-blue-300 mb-4 flex items-center">
              📱 Communication Preferences
            </h4>
            <label className="flex items-start space-x-3 cursor-pointer">
              <input
                type="checkbox"
                name="smsOptIn"
                checked={formData.smsOptIn}
                onChange={handleChange}
                className="mt-1 w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300">
                It's okay to text me at the phone number above for project communications and responses to my messages
              </span>
            </label>
            <p className="mt-3 text-xs text-gray-600 dark:text-gray-400">
              We'll only text you about your projects or in response to your messages. 
              Reply STOP anytime to opt out. Message and data rates may apply. 
              See our <a href="/privacy-policy" className="text-blue-600 dark:text-blue-400 hover:underline">Privacy Policy</a> for details.
            </p>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 focus:ring-4 focus:ring-primary-500/50"
          >
            Share Your Story 🚀
          </button>
          
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            Your story helps us create AI that truly serves. Mahalo for sharing!
          </p>
        </form>
      </div>
    </div>
  )
}
