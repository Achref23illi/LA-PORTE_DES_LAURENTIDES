import { motion } from 'framer-motion'

interface MenuItem {
  name: string
  price: string
  description?: string
  options?: { name: string; price: string }[]
  sizes?: { size: string; price: string }[]
}

interface MenuSection {
  title: string
  items: MenuItem[]
  note?: string
}

const MenuLivraison = () => {
  const menuSections: MenuSection[] = [
    {
      title: "ENTRÉES",
      items: [
        { 
          name: "Crevettes ou escargots", 
          price: "7,95$",
          options: [
            { name: "Gratinés", price: "+2,00$" },
            { name: "Sur pâte à pizza", price: "+2,00$" }
          ]
        },
        { name: "Coquille St-Jacques", price: "14,95$" },
        { name: "Bâtonnets de fromage (4)", price: "7,95$" },
        { name: "Soupe du jour", price: "3,95$" },
        { name: "Soupe à l'oignon gratinée", price: "10,95$" },
        { name: "Salade César (petite)", price: "10,95$" },
        { name: "Salade du chef (petite)", price: "9,95$" },
        { name: "Bruschetta", price: "9,95$" },
        { name: "Féta et olives noires", price: "9,95$" },
        { name: "Pain à l'ail", price: "4,95$" },
        { name: "Pain à l'ail gratiné", price: "7,25$" },
        { name: "Ailes de poulet (12)", price: "16,95$" }
      ]
    },
    {
      title: "NOS SALADES",
      items: [
        { 
          name: "Salade maison", 
          price: "Petite: 17,95$ | Grande: 19,95$" 
        },
        { 
          name: "Salade du chef", 
          price: "Petite: 10,95$ | Grande: 13,95$" 
        },
        { 
          name: "Salade César", 
          price: "Petite: 10,95$ | Grande: 13,95$" 
        },
        { name: "Salade César au poulet", price: "18,95$" },
        { name: "Salade combinée", price: "18,95$" },
        { name: "Salade au poulet", price: "18,95$" },
        { name: "Salade grecque", price: "18,95$" }
      ]
    },
    {
      title: "LES PIZZAS",
      items: [
        { 
          name: "Pizza spécial La Porte", 
          price: "10\": 16,95$ | 12\": 22,95$ | 14\": 26,95$ | 16\": 30,95$ | 17\": 32,95$ | 18\": 34,95$" 
        },
        { 
          name: "Pizza toute garnie", 
          price: "10\": 14,95$ | 12\": 20,95$ | 14\": 24,95$ | 16\": 28,95$ | 17\": 30,95$ | 18\": 32,95$" 
        },
        { 
          name: "Pizza pepperoni/bacon", 
          price: "10\": 13,95$ | 12\": 19,95$ | 14\": 23,95$ | 16\": 27,95$ | 17\": 29,95$ | 18\": 31,95$" 
        },
        { 
          name: "Pizza fruits de mer", 
          price: "10\": 15,95$ | 12\": 21,95$ | 14\": 25,95$ | 16\": 29,95$ | 17\": 31,95$ | 18\": 33,95$" 
        },
        { 
          name: "Pizza spéciale St-Lin", 
          price: "10\": 15,95$ | 12\": 21,95$ | 14\": 25,95$ | 16\": 29,95$ | 17\": 31,95$ | 18\": 33,95$" 
        },
        { 
          name: "Pizza spécial Laurentides", 
          price: "10\": 15,95$ | 12\": 21,95$ | 14\": 25,95$ | 16\": 29,95$ | 17\": 31,95$ | 18\": 33,95$" 
        },
        { 
          name: "Pizza spéciale Déli", 
          price: "10\": 14,95$ | 12\": 20,95$ | 14\": 24,95$ | 16\": 28,95$ | 17\": 30,95$ | 18\": 32,95$" 
        },
        { 
          name: "Pizza nature", 
          price: "10\": 9,95$ | 12\": 14,95$ | 14\": 18,95$ | 16\": 22,95$ | 17\": 24,95$ | 18\": 26,95$" 
        },
        { 
          name: "Pizza grecque", 
          price: "10\": 14,95$ | 12\": 20,95$ | 14\": 24,95$ | 16\": 28,95$ | 17\": 30,95$ | 18\": 32,95$" 
        },
        { 
          name: "Pizza végétarienne", 
          price: "10\": 13,95$ | 12\": 19,95$ | 14\": 23,95$ | 16\": 27,95$ | 17\": 29,95$ | 18\": 31,95$" 
        },
        { 
          name: "Pizza hawaienne", 
          price: "10\": 13,95$ | 12\": 19,95$ | 14\": 23,95$ | 16\": 27,95$ | 17\": 29,95$ | 18\": 31,95$" 
        }
      ],
      note: "Ingrédients supplémentaires: 1,50$ à 3,50$ selon la taille"
    },
    {
      title: "SOUS-MARINS (14\")",
      items: [
        { name: "Sous-marin steak", price: "21,95$" },
        { name: "Sous-marin poulet", price: "20,95$" },
        { name: "Sous-marin pizza", price: "19,95$" },
        { name: "Sous-marin végétarien", price: "17,95$" },
        { name: "Sous-marin italien", price: "20,95$" },
        { name: "Sous-marin jambon", price: "19,95$" },
        { name: "Sous-marin viande fumée", price: "21,95$" },
        { name: "Sous-marin mixte", price: "20,95$" }
      ],
      note: "Légumes extra: 3,00$ à 4,00$ | Viande/fromage extra: 4,00$ à 5,00$"
    },
    {
      title: "FRITES ET POUTINES",
      items: [
        { 
          name: "Poutine régulière", 
          price: "Petite: 9,95$ | Grande: 14,95$" 
        },
        { name: "Poutine italienne", price: "15,95$" },
        { name: "Poutine pepperoni", price: "16,95$" },
        { name: "Poutine au poulet", price: "18,95$" },
        { name: "Poutine viande fumée", price: "19,95$" },
        { 
          name: "Frites", 
          price: "Petite: 5,95$ | Grande: 7,95$" 
        },
        { 
          name: "Frites sauce", 
          price: "Petite: 7,95$ | Grande: 9,95$" 
        }
      ],
      note: "Fromage extra: +4,00$ | Viande extra: +5,00$"
    },
    {
      title: "PÂTES",
      items: [
        { 
          name: "Spaghetti spécial La Porte", 
          price: "Petit: 14,95$ | Grand: 20,95$" 
        },
        { 
          name: "Spaghetti aux boulettes", 
          price: "Petit: 12,95$ | Grand: 18,95$" 
        },
        { 
          name: "Spaghetti sauce à la viande", 
          price: "Petit: 11,95$ | Grand: 17,95$" 
        },
        { 
          name: "Spaghetti à la crème et à l'ail", 
          price: "Petit: 13,95$ | Grand: 19,95$" 
        },
        { 
          name: "Spaghetti sauce rosée", 
          price: "Petit: 13,95$ | Grand: 19,95$" 
        }
      ]
    },
    {
      title: "POULET",
      items: [
        { name: "Assiette doigts de poulet", price: "18,95$" },
        { name: "Assiette ailes de poulet", price: "15,95$" }
      ]
    },
    {
      title: "NOS RIZ",
      items: [
        { name: "Riz frit au poulet et légumes", price: "16,95$" },
        { name: "Riz frit aux légumes", price: "14,95$" },
        { name: "Riz frit aux crevettes", price: "18,95$" }
      ]
    },
    {
      title: "POISSONS ET FRUITS DE MER",
      items: [
        { name: "Assiette de fruits de mer", price: "42,95$" },
        { name: "Crevettes papillon", price: "24,95$" },
        { 
          name: "Filet de sole", 
          price: "Petit: 18,95$ | Grand: 20,95$" 
        }
      ]
    },
    {
      title: "CLUB SANDWICHS",
      items: [
        { name: "Club poutine", price: "20,95$" },
        { name: "Club sandwich", price: "17,95$" },
        { name: "Club spécial maison", price: "18,95$" }
      ]
    },
    {
      title: "BREUVAGES",
      items: [
        { name: "Boissons gazeuses", price: "2,95$" },
        { name: "Thé/Café", price: "2,95$" },
        { name: "Jus", price: "3,95$" },
        { name: "Lait", price: "3,50$" }
      ]
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
            MENU LIVRAISON
          </h1>
          <div className="w-24 h-1 bg-yellow-600 mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg font-inter mb-4">
            Commandez en ligne et faites-vous livrer à domicile
          </p>
          
          {/* Delivery Notice */}
          <div className="bg-yellow-600 text-black p-4 rounded-lg max-w-2xl mx-auto">
            <div className="flex items-center justify-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="font-semibold font-inter">
                Frais de livraison de 5,00$ peuvent s'appliquer selon la distance
              </p>
            </div>
          </div>
        </motion.div>

        {/* Menu Sections */}
        <div className="grid gap-16">
          {menuSections.map((section, sectionIndex) => (
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
                {section.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: itemIndex * 0.05 }}
                    viewport={{ once: true }}
                    className="border-b border-gray-800 pb-4 hover:border-yellow-600/50 transition-colors duration-300"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold text-white font-inter flex-1 pr-4">
                        {item.name}
                      </h3>
                      <span className="text-yellow-600 font-bold font-inter whitespace-nowrap text-sm">
                        {item.price}
                      </span>
                    </div>
                    
                    {item.description && (
                      <p className="text-gray-400 text-sm font-inter mb-2">
                        {item.description}
                      </p>
                    )}
                    
                    {item.options && (
                      <div className="ml-4 space-y-1">
                        {item.options.map((option, optionIndex) => (
                          <div key={optionIndex} className="flex justify-between text-sm">
                            <span className="text-gray-400 font-inter">{option.name}</span>
                            <span className="text-yellow-600/80 font-inter">{option.price}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {item.sizes && (
                      <div className="ml-4 space-y-1">
                        {item.sizes.map((size, sizeIndex) => (
                          <div key={sizeIndex} className="flex justify-between text-sm">
                            <span className="text-gray-400 font-inter">{size.size}</span>
                            <span className="text-yellow-600/80 font-inter">{size.price}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.section>
          ))}
        </div>

        {/* Footer Notes */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16 space-y-4"
        >
          <div className="p-8 bg-gray-900 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-yellow-600 font-playfair">INFORMATIONS LIVRAISON</h3>
            <div className="space-y-2 text-gray-400 font-inter">
              <p>Les prix sont sujets à changement sans préavis. Taxes en sus.</p>
              <p>Frais de livraison de 5,00$ peuvent s'appliquer selon la distance.</p>
              <p>Informez-nous de toute allergie alimentaire.</p>
              <p>Commande minimum pour la livraison: vérifiez avec le restaurant.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default MenuLivraison