import { motion } from 'framer-motion'

interface FeatureCardProps {
  title: string
  buttonText: string
  backgroundImage: string
  delay?: number
}

const FeatureCard = ({ title, buttonText, backgroundImage, delay = 0 }: FeatureCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      className="relative h-96 group overflow-hidden"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-105"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${backgroundImage}')`
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-4 tracking-wider font-playfair">{title}</h3>
          <button className="btn-outline">
            {buttonText}
          </button>
        </div>
      </div>
    </motion.div>
  )
}

const FeatureGrid = () => {
  const features = [
    {
      title: "SALLE PRIVÉE",
      buttonText: "RÉSERVER",
      backgroundImage: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      delay: 0
    },
    {
      title: "ÉVÉNEMENTS & CÉLÉBRATIONS",
      buttonText: "PLANIFIER VOTRE ÉVÉNEMENT",
      backgroundImage: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      delay: 0.2
    },
    {
      title: "SPÉCIALITÉS DU CHEF",
      buttonText: "VOIR LE MENU",
      backgroundImage: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2081&q=80",
      delay: 0.4
    },
    {
      title: "EXPÉRIENCE VINICOLE",
      buttonText: "CARTE DES VINS",
      backgroundImage: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      delay: 0.6
    }
  ]

  return (
    <section id="menu" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeatureGrid