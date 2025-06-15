import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ClosureNotice from './components/ClosureNotice'
import AboutSection from './components/AboutSection'
import FeatureGrid from './components/FeatureGrid'
import Footer from './components/Footer'
import MenuSalleAManger from './components/MenuSalleAManger'
import MenuLivraison from './components/MenuLivraison'
import CarteDesVins from './components/CarteDesVins'
import PhotosGallery from './components/PhotosGallery'
import NousJoindre from './components/NousJoindre'
import ReservationScreen from './components/ReservationScreen'
import ReservationSection from './components/ReservationSection'
import './App.css'

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

function HomePage({ openReservationModal }: { openReservationModal: () => void }) {
  return (
    <>
      <Hero />
      {/* <ClosureNotice /> */}
      <AboutSection />
      <FeatureGrid />
      <ReservationSection openReservationModal={openReservationModal} />
    </>
  )
}

function App() {
  const [showModal, setShowModal] = useState(false)
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
    "Repas d'affaires",
    'Anniversaire',
    'Anniversaire de mariage',
    'Rendez-vous romantique',
    'Célébration familiale',
    'Autre'
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const closeModal = () => {
    setShowModal(false)
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
  }

  return (
    <div className="w-full min-h-screen bg-black text-white">
      <Navbar openReservationModal={() => setShowModal(true)} />
      <Routes>
        <Route path="/" element={<HomePage openReservationModal={() => setShowModal(true)} />} />
        <Route path="/menu-dining" element={<MenuSalleAManger />} />
        <Route path="/menu-delivery" element={<MenuLivraison />} />
        <Route path="/menu-wines" element={<CarteDesVins />} />
        <Route path="/photos" element={<PhotosGallery />} />
        <Route path="/reservations" element={<ReservationScreen />} />
        <Route path="/nous-joindre" element={<NousJoindre />} />
      </Routes>
      <Footer />
      {/* Reservation Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="bg-white text-black rounded-lg shadow-lg max-w-lg w-full p-8 relative">
            <button
              className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-black"
              onClick={closeModal}
              aria-label="Fermer"
            >
              ×
            </button>
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="text-2xl font-bold mb-4 text-yellow-600 font-playfair text-center">Réservation en ligne</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Prénom</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-yellow-600/30 rounded-lg focus:border-yellow-600 focus:outline-none"
                      required
                      title="Prénom"
                      placeholder="Prénom"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Nom</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-yellow-600/30 rounded-lg focus:border-yellow-600 focus:outline-none"
                      required
                      title="Nom"
                      placeholder="Nom"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-yellow-600/30 rounded-lg focus:border-yellow-600 focus:outline-none"
                      required
                      title="Email"
                      placeholder="Email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Téléphone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-yellow-600/30 rounded-lg focus:border-yellow-600 focus:outline-none"
                      required
                      title="Téléphone"
                      placeholder="Téléphone"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Date</label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-yellow-600/30 rounded-lg focus:border-yellow-600 focus:outline-none"
                      required
                      title="Date"
                      placeholder="Date"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Heure</label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-yellow-600/30 rounded-lg focus:border-yellow-600 focus:outline-none"
                      required
                      title="Heure"
                    >
                      <option value="">Sélectionnez une heure</option>
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>{slot}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nombre de personnes</label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-yellow-600/30 rounded-lg focus:border-yellow-600 focus:outline-none"
                      required
                      title="Nombre de personnes"
                    >
                      {[...Array(12)].map((_, i) => (
                        <option key={i+1} value={i+1}>{i+1}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Occasion</label>
                    <select
                      name="occasion"
                      value={formData.occasion}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-yellow-600/30 rounded-lg focus:border-yellow-600 focus:outline-none"
                      title="Occasion"
                    >
                      <option value="">Aucune</option>
                      {occasions.map((o) => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Demandes spéciales</label>
                  <textarea
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-2 border border-yellow-600/30 rounded-lg focus:border-yellow-600 focus:outline-none resize-none"
                    placeholder="Ex: Allergies, chaise haute, etc."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-yellow-600 text-black font-semibold rounded-lg hover:bg-yellow-500 transition-colors duration-300"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer la réservation'}
                </button>
              </form>
            ) : (
              <div className="text-center py-12">
                <div className="bg-green-900 border-2 border-green-600 rounded-lg p-8 mb-6 text-white">
                  <div className="mb-4">
                    <svg className="w-12 h-12 text-green-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 font-playfair tracking-wider">RÉSERVATION CONFIRMÉE!</h3>
                  <p className="text-green-100 text-lg mb-4 font-inter">
                    Merci {formData.firstName}! Votre réservation a été reçue avec succès.
                  </p>
                  <div className="bg-black/30 rounded-lg p-4 mb-4">
                    <h4 className="text-lg font-bold mb-2 text-yellow-600 font-playfair">DÉTAILS DE VOTRE RÉSERVATION</h4>
                    <div className="grid md:grid-cols-2 gap-2 text-left">
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
                  <div className="space-y-2 text-green-100 font-inter">
                    <p>📧 Un email de confirmation a été envoyé à {formData.email}</p>
                    <p>📞 Nous vous appellerons au {formData.phone} pour confirmer votre réservation</p>
                    <p>⏰ Veuillez arriver 15 minutes avant votre heure de réservation</p>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="bg-yellow-600 hover:bg-yellow-500 text-black font-semibold py-3 px-8 transition-all duration-300 tracking-wider text-sm font-inter mt-4"
                >
                  Nouvelle réservation
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default App
