import { motion } from 'framer-motion'

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold mb-8 tracking-wider font-playfair"
        >
          DÉCOUVREZ LA PORTE DES LAURENTIDES
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-300 text-lg leading-relaxed mb-8 max-w-3xl mx-auto font-inter"
        >
          Bienvenue à La Porte des Laurentides, où l'excellence culinaire rencontre la beauté naturelle époustouflante. Notre restaurant offre une expérience gastronomique inoubliable mettant en vedette des ingrédients locaux et une cuisine innovante inspirée des traditions françaises et des saveurs canadiennes.
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-300 text-lg leading-relaxed mb-12 max-w-3xl mx-auto font-inter"
        >
          Que vous recherchiez un dîner intime à deux ou célébriez une occasion spéciale avec vos amis et votre famille, notre atmosphère élégante et notre service exceptionnel créent le cadre parfait pour des moments mémorables.
        </motion.p>
      </div>
    </section>
  )
}

export default AboutSection