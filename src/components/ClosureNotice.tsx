import { motion } from 'framer-motion'

const ClosureNotice = () => {
  return (
    <section className="py-16 bg-red-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-red-800 border-2 border-red-600 rounded-lg p-8 text-center"
        >
          <h2 className="text-3xl font-bold mb-6 text-white tracking-wider font-playfair">
            MESSAGE IMPORTANT
          </h2>
          <div className="space-y-4 text-white">
            <p className="text-xl font-semibold mb-6">
              FERMETURE TEMPORAIRE DE NOTRE RESTAURANT
            </p>
            <p className="text-lg leading-relaxed max-w-4xl mx-auto font-inter">
              NOUS VOUS AVISERONS LORS DE LA RÉOUVERTURE.
            </p>
            <p className="text-lg leading-relaxed max-w-4xl mx-auto font-inter">
              Nous tenons à remercier toutes les équipes de pompier qui sont intervenus lors du sinistre. 
              Nous sommes vraiment touchés par la sympathie et les paroles d'encouragement de nos clients 
              et du public. Merci de tout cœur à tous et très hâte de vous revoir!
            </p>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Restaurant Info */}
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-yellow-600 font-playfair">INFORMATIONS DU RESTAURANT</h3>
            <div className="space-y-3 text-gray-300 font-inter">
              <p className="text-lg">Restaurant familial de 220 places avec un bar central et permis de boisson.</p>
              <p className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Accès aux personnes à mobilité réduite
              </p>
            </div>
          </div>
          
          {/* Opening Hours */}
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-yellow-600 font-playfair">HEURES D'OUVERTURE</h3>
            <div className="space-y-2 text-gray-300 font-inter">
              <p>Dimanche à mercredi: <span className="text-white font-semibold">11h00 - 21h00</span></p>
              <p>Jeudi au samedi: <span className="text-white font-semibold">11h00 - 22h00</span></p>
              <p className="text-yellow-600 pt-2 font-semibold">Au plaisir de vous rencontrer!</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ClosureNotice