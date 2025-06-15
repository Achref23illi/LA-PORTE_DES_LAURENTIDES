import { motion } from 'framer-motion'

const ReservationSection = ({ openReservationModal }: { openReservationModal: () => void }) => {
  return (
    <section id="reservations" className="py-20 bg-yellow-600">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold mb-6 text-black tracking-wider font-playfair"
        >
          RÉSERVEZ VOTRE TABLE AUJOURD'HUI
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-black text-lg mb-8 max-w-2xl mx-auto font-inter"
        >
          Vivez une expérience gastronomique exceptionnelle dans une atmosphère élégante. Réservez votre table maintenant et laissez-nous créer un voyage culinaire inoubliable pour vous.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            className="bg-black text-white hover:bg-gray-800 font-semibold py-3 px-8 transition-all duration-300 tracking-wider text-sm font-inter"
            onClick={openReservationModal}
          >
            RÉSERVER EN LIGNE
          </button>
          <div className="text-black font-semibold tracking-wider font-inter">
            OU APPELEZ: <span className="text-lg">(819) 555-0123</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ReservationSection