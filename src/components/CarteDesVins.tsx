import { motion } from 'framer-motion'

interface Wine {
  name: string
  region?: string
  vintage?: string
  size: string
  description?: string
  price?: string
}

interface WineSection {
  title: string
  items: Wine[]
  note?: string
}

const CarteDesVins = () => {
  const wineSections: WineSection[] = [
    {
      title: "VINS ROUGES",
      items: [
        { name: "Donini Merlot", size: "1 L", region: "Italie" },
        { name: "Rosso del Camul", size: "750 ml", region: "Italie" },
        { name: "Giacondi Sangiovese Rubicone", size: "1 L", region: "Italie" },
        { name: "Carpineto Chianti Classico", size: "750 ml", region: "Toscane, Italie" },
        { name: "Mascota Mendoza", size: "750 ml", region: "Argentine" },
        { name: "Folonari Valpolicella", size: "750 ml", region: "Vénétie, Italie" },
        { name: "Cusumano Syrah Sicilia", size: "750 ml", region: "Sicile, Italie" },
        { name: "Fontana di Papa", size: "1 L", region: "Italie" },
        { name: "Farnese Soluna", size: "750 ml", region: "Abruzzes, Italie" },
        { name: "Niepoort Dialogo", size: "750 ml", region: "Portugal" },
        { name: "Woodbridge Merlot", size: "750 ml", region: "Californie, États-Unis" },
        { name: "Umberto Cesari Liano Rubicone", size: "750 ml", region: "Émilie-Romagne, Italie" },
        { name: "Citra Montepulciano d'Abruzzo", size: "1 L", region: "Abruzzes, Italie" }
      ]
    },
    {
      title: "VINS BLANCS",
      items: [
        { name: "Donini Trebbiano", size: "1 L", region: "Italie" },
        { name: "Murari Pinot Grigio", size: "1 L", region: "Italie" },
        { name: "Jamelles Sauvignon", size: "750 ml", region: "Languedoc, France" },
        { name: "Pascal Jolivet Attitude", size: "750 ml", region: "Loire, France" },
        { name: "Ruffino Lumina", size: "750 ml", region: "Toscane, Italie" },
        { name: "Hanns Christof", size: "750 ml", region: "Allemagne" },
        { name: "Grand Sud Chardonnay", size: "750 ml", region: "Languedoc, France" }
      ]
    },
    {
      title: "VINS ROSÉS",
      items: [
        { name: "Jacobs Creek", size: "750 ml", region: "Australie" },
        { name: "Roseline", size: "750 ml", region: "Provence, France" }
      ]
    },
    {
      title: "SÉLECTION 375 ML",
      items: [
        { name: "Marquis de Jouennes", size: "375 ml", region: "France" },
        { name: "Sablette Muscadet", size: "375 ml", region: "Loire, France" },
        { name: "Mouton Cadet", size: "375 ml", region: "Bordeaux, France" },
        { name: "Folonari Valpolicella", size: "375 ml", region: "Vénétie, Italie" },
        { name: "Ruffino Chianti", size: "375 ml", region: "Toscane, Italie" }
      ],
      note: "Parfait pour une dégustation ou un repas pour deux"
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
            
          <h1 className="text-4xl md:text-5xl font-bold pt-16 mb-4 font-playfair tracking-wider">
            CARTE DES VINS
          </h1>
          <div className="w-24 h-1 bg-yellow-600 mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg font-inter mb-4">
            Une sélection soignée de vins du monde entier
          </p>
          
          {/* Wine Notice */}
          <div className="bg-yellow-600 text-black p-4 rounded-lg max-w-2xl mx-auto">
            <div className="flex items-center justify-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-1l-4 4z" />
              </svg>
              <p className="font-semibold font-inter">
                Demandez à votre serveur pour les prix et disponibilité
              </p>
            </div>
          </div>
        </motion.div>

        {/* Wine Sections */}
        <div className="grid gap-16">
          {wineSections.map((section, sectionIndex) => (
            <motion.section
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: sectionIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-yellow-600 font-playfair tracking-wider text-center">
                {section.title}
              </h2>
              
              {section.note && (
                <p className="text-center text-gray-400 font-inter text-sm mb-6 italic">
                  {section.note}
                </p>
              )}
              
              <div className="grid md:grid-cols-2 gap-6">
                {section.items.map((wine, wineIndex) => (
                  <motion.div
                    key={wineIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: wineIndex * 0.05 }}
                    viewport={{ once: true }}
                    className="border-b border-gray-800 pb-4 hover:border-yellow-600/50 transition-colors duration-300"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex-1 pr-4">
                        <h3 className="text-lg font-semibold text-white font-inter">
                          {wine.name}
                        </h3>
                        {wine.region && (
                          <p className="text-gray-400 text-sm font-inter">
                            {wine.region}
                          </p>
                        )}
                      </div>
                      <div className="text-right">
                        <span className="text-yellow-600 font-bold font-inter text-sm">
                          {wine.size}
                        </span>
                        {wine.vintage && (
                          <p className="text-gray-400 text-sm font-inter">
                            {wine.vintage}
                          </p>
                        )}
                      </div>
                    </div>
                    
                    {wine.description && (
                      <p className="text-gray-400 text-sm font-inter mb-2">
                        {wine.description}
                      </p>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.section>
          ))}
        </div>

        {/* Wine Service Information */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16 space-y-6"
        >
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-900 rounded-lg">
              <div className="text-yellow-600 mb-4">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-white font-playfair">SERVICE EXPERT</h3>
              <p className="text-gray-400 text-sm font-inter">
                Notre équipe vous conseille pour accorder parfaitement vins et mets
              </p>
            </div>
            
            <div className="p-6 bg-gray-900 rounded-lg">
              <div className="text-yellow-600 mb-4">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-white font-playfair">SÉLECTION QUALITÉ</h3>
              <p className="text-gray-400 text-sm font-inter">
                Vins soigneusement sélectionnés des meilleures régions viticoles
              </p>
            </div>
            
            <div className="p-6 bg-gray-900 rounded-lg">
              <div className="text-yellow-600 mb-4">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-white font-playfair">TEMPÉRATURE IDÉALE</h3>
              <p className="text-gray-400 text-sm font-inter">
                Tous nos vins sont conservés et servis à la température optimale
              </p>
            </div>
          </div>
          
          <div className="p-8 bg-gray-900 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-yellow-600 font-playfair">INFORMATIONS</h3>
            <div className="space-y-2 text-gray-400 font-inter">
              <p>Tous nos prix sont sujets à changement sans préavis!</p>
              <p>Demandez à votre serveur pour connaître nos vins du jour et nos suggestions d'accord mets-vins.</p>
              <p>Nous proposons également des vins au verre pour accompagner votre repas.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default CarteDesVins