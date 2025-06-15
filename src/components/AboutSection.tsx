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
          Le restaurant Le Vieux Terrebonne, une référence dans le milieu depuis près de 60 ans, est certes reconnu pour son incontournable pizza. Mais le succès du commerce est aussi attribuable à la grande variété de mets qui y sont offerts, et à l'ambiance chaleureuse et familiale qui y règne.
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-300 text-lg leading-relaxed mb-12 max-w-3xl mx-auto font-inter"
        >
          Depuis qu'il est arrivé au Québec en 1966, Spiro Mourelatos entretient une vive passion pour le milieu de la restauration. À seulement 19 ans, il a fondé son premier restaurant, Place Mont-Laurier Pizza, en 1970. Onze ans plus tard, lui et M. Tuffié ont créé le Napoli, à Amos en Abitibi, qui connaît toujours une grande popularité. En 1987, trois ans après s'être établis à Terrebonne, les deux complices ont fondé à Saint-Lin La Porte des Laurentides, qui appartient aujourd'hui à M. Tuffié et à son fils.
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-yellow-600 text-xl leading-relaxed mb-12 max-w-3xl mx-auto font-inter italic"
        >
          «J'aime et j'aimerai toujours la cuisine», soutient M. Mourelatos, lui qui n'a d'yeux et de projets que pour ce domaine qui le passionne.
        </motion.p>
      </div>
    </section>
  )
}

export default AboutSection