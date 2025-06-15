import { useState } from 'react'
import { motion } from 'framer-motion'

const NousJoindre = () => {
  const [formData, setFormData] = useState({
    date: '',
    heure: '',
    appreciation: '5',
    nom: '',
    courriel: '',
    ville: '',
    commentaire: '',
    appreciations: [] as string[]
  })

  const villes = [
    'Chertsey', 'Joliette', 'Laplaine', 'Mascouche', 'Rawdon', 'St-Alexis',
    'St-Calixte', 'St-Esprit', 'St-Jacques', 'St-Jérôme', 'St-Lin-Laurentides',
    'Ste-Julienne', 'Ste-Sophie', 'Terrebonne', 'Autre...'
  ]

  const appreciationItems = [
    'La rapidité du service',
    'La courtoisie du personnel',
    'L\'aspect du restaurant',
    'La propreté du restaurant',
    'Le choix de menu',
    'La qualité de la nourriture',
    'Stationnement à proximité',
    'L\'atmosphère agréable',
    'La quantité de nourriture dans les assiettes',
    'Nombre de places assises disponibles',
    'Les heures d\'ouvertures',
    'La rapidité de livraison',
    'Service de livraison en général',
    'Commodités de paiement (intérieur et livraison)'
  ]

  const heuresOuverture = [
    { jour: 'Lundi', heures: '11h00 -- 21h00' },
    { jour: 'Mardi', heures: '11h00 -- 21h00' },
    { jour: 'Mercredi', heures: '11h00 -- 21h00' },
    { jour: 'Jeudi', heures: '11h00 -- 22h00' },
    { jour: 'Vendredi', heures: '11h00 -- 22h00' },
    { jour: 'Samedi', heures: '11h00 -- 22h00' },
    { jour: 'Dimanche', heures: '11h00 -- 21h00' }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (item: string) => {
    setFormData(prev => ({
      ...prev,
      appreciations: prev.appreciations.includes(item)
        ? prev.appreciations.filter(a => a !== item)
        : [...prev.appreciations, item]
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Merci pour vos commentaires!')
  }

  return (
    <div id="nous-joindre" className="min-h-screen bg-black text-white pt-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative py-20 text-center"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-600/10 via-transparent to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 font-playfair">
            Nous <span className="text-yellow-600">Joindre</span>
          </h1>
          <div className="w-24 h-px bg-yellow-600 mx-auto mb-8" />
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Contactez-nous pour réservations, questions ou commentaires
          </p>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-yellow-600/5 to-transparent border border-yellow-600/20 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-yellow-600 font-playfair">Informations de Contact</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-yellow-600/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Adresse</h3>
                    <p className="text-gray-300">802 rue St-Isidore</p>
                    <p className="text-gray-300">St-Lin-Laurentides, QC J5M 2V4</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-yellow-600/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Téléphone</h3>
                    <a href="tel:450-439-1711" className="text-yellow-600 hover:text-yellow-500">
                      450-439-1711
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-yellow-600/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Courriel</h3>
                    <a href="mailto:clo472@hotmail.com" className="text-yellow-600 hover:text-yellow-500">
                      clo472@hotmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-600/5 to-transparent border border-yellow-600/20 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-yellow-600 font-playfair">
                Heures d'ouverture
              </h2>
              <div className="text-center mb-4">
                <span className="text-lg font-semibold text-yellow-600">◄ Ouvert 7 jours ►</span>
              </div>
              <div className="space-y-3">
                {heuresOuverture.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-yellow-600/10 last:border-b-0">
                    <span className="font-medium text-white">{item.jour}:</span>
                    <span className="text-gray-300">{item.heures}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-600/5 to-transparent border border-yellow-600/20 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-yellow-600 font-playfair">Postuler pour un emploi</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">Par courriel</p>
                    <p className="text-gray-300 text-sm">Envoyez votre CV à: </p>
                    <a href="mailto:clo472@hotmail.com" className="text-yellow-600 hover:text-yellow-500">
                      clo472@hotmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">En personne</p>
                    <p className="text-gray-300 text-sm">Avec votre CV (entre 11h00 et 21h00)</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-br from-yellow-600/5 to-transparent border border-yellow-600/20 rounded-xl p-8"
          >
            <h2 className="text-2xl font-bold mb-6 text-yellow-600 font-playfair">
              Aidez-nous à nous améliorer
            </h2>
            <p className="text-gray-300 mb-8">
              Veuillez remplir le questionnaire ci-dessous pour nous aider à améliorer nos services.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Date</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-black/50 border border-yellow-600/30 rounded-lg text-white focus:border-yellow-600 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Heure</label>
                  <input
                    type="time"
                    name="heure"
                    value={formData.heure}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-black/50 border border-yellow-600/30 rounded-lg text-white focus:border-yellow-600 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Appréciation (0-10)
                </label>
                <select
                  name="appreciation"
                  value={formData.appreciation}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-black/50 border border-yellow-600/30 rounded-lg text-white focus:border-yellow-600 focus:outline-none"
                >
                  {[...Array(11)].map((_, i) => (
                    <option key={i} value={i}>{i}</option>
                  ))}
                </select>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Nom</label>
                  <input
                    type="text"
                    name="nom"
                    value={formData.nom}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-black/50 border border-yellow-600/30 rounded-lg text-white focus:border-yellow-600 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Courriel</label>
                  <input
                    type="email"
                    name="courriel"
                    value={formData.courriel}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-black/50 border border-yellow-600/30 rounded-lg text-white focus:border-yellow-600 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Ville (optionnel)</label>
                <select
                  name="ville"
                  value={formData.ville}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-black/50 border border-yellow-600/30 rounded-lg text-white focus:border-yellow-600 focus:outline-none"
                >
                  <option value="">Sélectionnez votre ville</option>
                  {villes.map((ville, index) => (
                    <option key={index} value={ville}>{ville}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-4">
                  Ce que vous avez apprécié:
                </label>
                <div className="grid md:grid-cols-1 gap-3 max-h-64 overflow-y-auto">
                  {appreciationItems.map((item, index) => (
                    <label key={index} className="flex items-start space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.appreciations.includes(item)}
                        onChange={() => handleCheckboxChange(item)}
                        className="mt-1 w-4 h-4 text-yellow-600 bg-black/50 border-yellow-600/30 rounded"
                      />
                      <span className="text-sm text-gray-300">{item}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Commentaire</label>
                <textarea
                  name="commentaire"
                  value={formData.commentaire}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-2 bg-black/50 border border-yellow-600/30 rounded-lg text-white focus:border-yellow-600 focus:outline-none resize-none"
                  placeholder="Vos commentaires..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-3 bg-yellow-600 text-black font-semibold rounded-lg hover:bg-yellow-500 transition-colors duration-300"
              >
                Envoyer le questionnaire
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default NousJoindre 