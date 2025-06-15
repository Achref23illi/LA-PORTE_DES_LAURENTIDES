import { motion } from 'framer-motion'
import { useState } from 'react'

interface ReservationForm {
  firstName: string
  lastName: string
  email: string
  phone: string
  date: string
  time: string
  guests: string
  occasion: string
  specialRequests: string
}

const ReservationScreen = () => {
  const [formData, setFormData] = useState<ReservationForm>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    occasion: '',
    specialRequests: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const timeSlots = [
    '17:00', '17:30', '18:00', '18:30', '19:00', '19:30',
    '20:00', '20:30', '21:00', '21:30', '22:00'
  ]

  const occasions = [
    'Repas d\'affaires',
    'Anniversaire',
    'Anniversaire de mariage',
    'Rendez-vous romantique',
    'Célébration familiale',
    'Autre'
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-black text-white py-20">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="bg-green-900 border-2 border-green-600 rounded-lg p-12 mb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="mb-6"
              >
                <svg className="w-16 h-16 text-green-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </motion.div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4 font-playfair tracking-wider text-white">
                RÉSERVATION CONFIRMÉE!
              </h1>
              
              <p className="text-green-100 text-lg mb-6 font-inter">
                Merci {formData.firstName}! Votre réservation a été reçue avec succès.
              </p>
              
              <div className="bg-black/30 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold mb-4 text-yellow-600 font-playfair">DÉTAILS DE VOTRE RÉSERVATION</h3>
                <div className="grid md:grid-cols-2 gap-4 text-left">
                  <div>
                    <p className="text-gray-300 font-inter"><span className="text-white font-semibold">Nom:</span> {formData.firstName} {formData.lastName}</p>
                    <p className="text-gray-300 font-inter"><span className="text-white font-semibold">Date:</span> {formData.date}</p>
                    <p className="text-gray-300 font-inter"><span className="text-white font-semibold">Heure:</span> {formData.time}</p>
                  </div>
                  <div>
                    <p className="text-gray-300 font-inter"><span className="text-white font-semibold">Nombre de personnes:</span> {formData.guests}</p>
                    <p className="text-gray-300 font-inter"><span className="text-white font-semibold">Téléphone:</span> {formData.phone}</p>
                    <p className="text-gray-300 font-inter"><span className="text-white font-semibold">Email:</span> {formData.email}</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 text-green-100 font-inter">
                <p>📧 Un email de confirmation a été envoyé à {formData.email}</p>
                <p>📞 Nous vous appellerons au {formData.phone} pour confirmer votre réservation</p>
                <p>⏰ Veuillez arriver 15 minutes avant votre heure de réservation</p>
              </div>
            </div>
            
            <div className="space-x-4">
              <button
                onClick={() => {
                  setIsSubmitted(false)
                  setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    date: '',
                    time: '',
                    guests: '2',
                    occasion: '',
                    specialRequests: ''
                  })
                }}
                className="bg-yellow-600 hover:bg-yellow-500 text-black font-semibold py-3 px-8 transition-all duration-300 tracking-wider text-sm font-inter"
              >
                NOUVELLE RÉSERVATION
              </button>
              
              <a
                href="#home"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-semibold py-3 px-8 transition-all duration-300 tracking-wider text-sm font-inter inline-block"
              >
                RETOUR À L'ACCUEIL
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <a 
            href="#home" 
            className="inline-flex items-center text-yellow-600 hover:text-yellow-500 mb-8 transition-colors duration-300"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Retour à l'accueil
          </a>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-playfair tracking-wider">
            RÉSERVATIONS
          </h1>
          <div className="w-24 h-1 bg-yellow-600 mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg font-inter">
            Réservez votre table pour une expérience culinaire inoubliable
          </p>
        </motion.div>

        {/* Important Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-red-900 border-2 border-red-600 rounded-lg p-6 mb-12"
        >
          <div className="flex items-center mb-4">
            <svg className="w-6 h-6 mr-3 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
            <h3 className="text-xl font-bold text-white font-playfair">AVIS IMPORTANT</h3>
          </div>
          <p className="text-red-100 font-inter leading-relaxed">
            <strong>FERMETURE TEMPORAIRE:</strong> Notre restaurant est actuellement fermé temporairement. 
            Cependant, vous pouvez soumettre votre demande de réservation et nous vous contacterons 
            dès la réouverture pour confirmer votre réservation.
          </p>
        </motion.div>

        {/* Reservation Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gray-900 rounded-lg p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-yellow-600 font-playfair">INFORMATIONS PERSONNELLES</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2 font-inter">
                    Prénom *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-yellow-600 focus:border-transparent transition-all duration-300 font-inter"
                    placeholder="Votre prénom"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2 font-inter">
                    Nom de famille *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-yellow-600 focus:border-transparent transition-all duration-300 font-inter"
                    placeholder="Votre nom de famille"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2 font-inter">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-yellow-600 focus:border-transparent transition-all duration-300 font-inter"
                    placeholder="votre.email@exemple.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2 font-inter">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-yellow-600 focus:border-transparent transition-all duration-300 font-inter"
                    placeholder="(514) 123-4567"
                  />
                </div>
              </div>
            </div>

            {/* Reservation Details */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-yellow-600 font-playfair">DÉTAILS DE LA RÉSERVATION</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-300 mb-2 font-inter">
                    Date *
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-yellow-600 focus:border-transparent transition-all duration-300 font-inter"
                  />
                </div>
                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-gray-300 mb-2 font-inter">
                    Heure *
                  </label>
                  <select
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-yellow-600 focus:border-transparent transition-all duration-300 font-inter"
                  >
                    <option value="">Sélectionner l'heure</option>
                    {timeSlots.map(time => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="guests" className="block text-sm font-medium text-gray-300 mb-2 font-inter">
                    Nombre de personnes *
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-yellow-600 focus:border-transparent transition-all duration-300 font-inter"
                  >
                    {[...Array(12)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1} {i === 0 ? 'personne' : 'personnes'}
                      </option>
                    ))}
                    <option value="13+">13+ personnes</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Special Occasion */}
            <div>
              <label htmlFor="occasion" className="block text-sm font-medium text-gray-300 mb-2 font-inter">
                Occasion spéciale
              </label>
              <select
                id="occasion"
                name="occasion"
                value={formData.occasion}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-yellow-600 focus:border-transparent transition-all duration-300 font-inter"
              >
                <option value="">Sélectionner une occasion (optionnel)</option>
                {occasions.map(occasion => (
                  <option key={occasion} value={occasion}>{occasion}</option>
                ))}
              </select>
            </div>

            {/* Special Requests */}
            <div>
              <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-300 mb-2 font-inter">
                Demandes spéciales
              </label>
              <textarea
                id="specialRequests"
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-yellow-600 focus:border-transparent transition-all duration-300 font-inter"
                placeholder="Allergies alimentaires, préférences de table, célébrations spéciales, etc."
              />
            </div>

            {/* Submit Button */}
            <div className="text-center pt-6">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-4 font-semibold text-lg tracking-wider transition-all duration-300 font-inter ${
                  isSubmitting
                    ? 'bg-gray-600 text-gray-300 cursor-not-allowed'
                    : 'bg-yellow-600 hover:bg-yellow-500 text-black'
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    ENVOI EN COURS...
                  </div>
                ) : (
                  'CONFIRMER LA RÉSERVATION'
                )}
              </motion.button>
            </div>
          </form>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12 p-8 bg-gray-900 rounded-lg"
        >
          <h3 className="text-xl font-bold mb-4 text-yellow-600 font-playfair">BESOIN D'AIDE?</h3>
          <p className="text-gray-400 font-inter mb-4">
            Pour les groupes de 13+ personnes ou pour toute question spéciale, contactez-nous directement.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-8">
            <a href="tel:8195550123" className="text-yellow-600 hover:text-yellow-500 font-inter font-semibold">
              📞 (819) 555-0123
            </a>
            <a href="mailto:info@laportelaurentides.com" className="text-yellow-600 hover:text-yellow-500 font-inter font-semibold">
              ✉️ info@laportelaurentides.com
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ReservationScreen