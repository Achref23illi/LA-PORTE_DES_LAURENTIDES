import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

interface HeroProps {
  openReservationModal: () => void
}

const Hero = ({ openReservationModal }: HeroProps) => {
  const navigate = useNavigate()
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full"
        style={{
          backgroundImage: `url('/hero.jpg')`
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 w-full"></div>
      
      {/* Gradient Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40 w-full"></div>
      
      {/* Hero Content - Full Width */}
      <div className="relative z-10 text-center w-full px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="space-y-8 max-w-6xl mx-auto w-full"
        >
          {/* Main Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider hero-title font-playfair leading-tight"
          >
            <span className="block">LA PORTE DES</span>
            <span className="block text-yellow-600">LAURENTIDES</span>
          </motion.h1>
          
          {/* Decorative Line - Percentage Width */}
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-px bg-yellow-600 mx-auto w-1/4 md:w-1/6 lg:w-1/12"
          />
          
          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed hero-subtitle font-inter font-light"
          >
            Restaurant familial de 220 places avec un bar central et permis de boisson. Découvrez notre cuisine raffinée mettant en valeur les meilleurs ingrédients locaux.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          >
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(234, 179, 8, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-600 hover:bg-yellow-500 text-black font-semibold py-4 px-8 transition-all duration-300 tracking-wider text-sm font-inter relative overflow-hidden group"
              onClick={() => navigate('/menu-dining')}
            >
              <span className="relative z-10">VOIR LE MENU</span>
              <div className="absolute inset-0 bg-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-semibold py-4 px-8 transition-all duration-300 tracking-wider text-sm font-inter"
              onClick={() => navigate('/reservations')}
            >
              RÉSERVER UNE TABLE
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
          />
        </motion.div>
        <p className="text-white/70 text-xs mt-2 font-inter tracking-wider">DÉFILER</p>
      </motion.div>
    </section>
  )
}

export type { HeroProps }
export default Hero 