import { motion } from 'framer-motion'

interface MenuItem {
  name: string
  price: string
  description?: string
  options?: { name: string; price: string }[]
}

interface MenuSection {
  title: string
  items: MenuItem[]
  note?: string
}

const MenuSalleAManger = () => {
  const menuSections: MenuSection[] = [
    {
      title: "TABLE D'HÔTE",
      items: [
        { 
          name: "Table d'hôte", 
          price: "3,95$",
          description: "Comprend: soupe, café/thé, dessert"
        }
      ]
    },
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
        { name: "Salade du chef", price: "13,95$" },
        { name: "Salade César", price: "13,95$" },
        { 
          name: "Salade César au poulet", 
          price: "18,95$",
          description: "Grillé ou croustillant"
        },
        { name: "Salade combinée", price: "18,95$" },
        { name: "Salade au poulet", price: "18,95$" },
        { name: "Salade grecque", price: "18,95$" },
        { name: "Salade maison", price: "19,95$" }
      ],
      note: "Servi avec choix de soupe, frites, salade ou riz"
    },
    {
      title: "CLUB SANDWICHS",
      items: [
        { name: "Club poutine", price: "20,95$" },
        { name: "Club sandwich", price: "17,95$" },
        { name: "Club spécial maison", price: "18,95$" }
      ],
      note: "Servi avec choix de soupe, frites, salade ou riz"
    },
    {
      title: "PÂTES ET ESCALOPES DE VEAU",
      items: [
        { name: "Spaghetti sauce à la viande", price: "12,95$" },
        { name: "Spaghetti sauce tomate", price: "10,95$" },
        { name: "Linguine alfredo", price: "13,95$" },
        { name: "Linguine alfredo au poulet", price: "18,95$" },
        { name: "Linguine aux fruits de mer", price: "21,95$" },
        { name: "Escalope de veau parmigiana", price: "20,95$" },
        { name: "Escalope de veau maison", price: "21,95$" }
      ],
      note: "Servi avec choix de soupe, frites, salade ou riz"
    },
    {
      title: "NOTRE GRILL",
      items: [
        { name: "Filet mignon AAA 8oz", price: "42,95$" },
        { name: "Entrecôte AAA 12oz", price: "31,95$" },
        { name: "Côtes levées", price: "23,95$" },
        { name: "Steak haché", price: "17,95$" },
        { name: "Brochette de poulet", price: "21,95$" },
        { name: "Brochettes de porc souvlaki", price: "19,95$" },
        { name: "Assiette souvlaki (2 brochettes)", price: "23,95$" },
        { name: "Assiette gyros", price: "20,95$" },
        { name: "Pita au porc", price: "13,95$" },
        { name: "Pita au poulet", price: "19,95$" }
      ],
      note: "Servi avec choix de soupe, frites, salade ou riz"
    },
    {
      title: "LES POULETS",
      items: [
        { name: "Poitrine de poulet", price: "19,95$" },
        { name: "Poulet parmigiana", price: "21,95$" },
        { name: "Poulet aux champignons", price: "21,95$" },
        { name: "Poulet cordon bleu", price: "23,95$" },
        { name: "Poulet général Tao", price: "20,95$" }
      ],
      note: "Servi avec choix de soupe, frites, salade ou riz"
    },
    {
      title: "NOS RIZ",
      items: [
        { name: "Riz au poulet", price: "17,95$" },
        { name: "Riz aux crevettes", price: "18,95$" },
        { name: "Riz aux fruits de mer", price: "21,95$" }
      ],
      note: "Servi avec choix de soupe, frites, salade ou riz"
    },
    {
      title: "POISSONS ET FRUITS DE MER",
      items: [
        { name: "Filet de sole", price: "21,95$" },
        { name: "Filet de saumon", price: "23,95$" },
        { name: "Fish & chips (2 filets)", price: "19,95$" },
        { name: "Crevettes à l'ail", price: "22,95$" },
        { name: "Crevettes papillon", price: "22,95$" },
        { name: "Assiette de fruits de mer", price: "29,95$" },
        { name: "Langostines (6)", price: "24,95$" },
        { name: "Assiette surf'n turf", price: "48,95$" }
      ],
      note: "Servi avec choix de soupe, frites, salade ou riz"
    },
    {
      title: "MENU ENFANT",
      items: [
        { name: "Spaghetti", price: "7,95$" },
        { name: "Croquettes de poulet", price: "8,95$" },
        { name: "Mini pizza pepperoni fromage", price: "8,95$" },
        { name: "Grilled cheese", price: "7,95$" }
      ],
      note: "Pour 12 ans et moins. Inclut breuvage et dessert"
    },
    {
      title: "SOUS-MARINS",
      items: [
        { name: "Sous-marin steak", price: "13,95$" },
        { name: "Sous-marin poulet", price: "12,95$" },
        { name: "Sous-marin pizza", price: "11,95$" },
        { name: "Sous-marin végétarien", price: "10,95$" }
      ],
      note: "Servis avec frites"
    },
    {
      title: "FRITES ET POUTINES",
      items: [
        { name: "Frites", price: "Petite: 4,95$ | Grande: 6,95$" },
        { name: "Frites sauce", price: "Petite: 6,95$ | Grande: 8,95$" },
        { name: "Poutine", price: "Petite: 8,95$ | Grande: 11,95$" },
        { name: "Poutine italienne", price: "12,95$" },
        { name: "Poutine au poulet", price: "16,95$" }
      ]
    },
    {
      title: "LES PIZZAS",
      items: [
        { 
          name: "Pizza toute garnie", 
          price: "10\": 14,95$ | 12\": 20,95$ | 14\": 24,95$" 
        },
        { 
          name: "Pizza végétarienne", 
          price: "10\": 13,95$ | 12\": 19,95$ | 14\": 23,95$" 
        },
        { 
          name: "Pizza pepperoni fromage", 
          price: "10\": 12,95$ | 12\": 18,95$ | 14\": 22,95$" 
        },
        { 
          name: "Pizza hawaienne", 
          price: "10\": 13,95$ | 12\": 19,95$ | 14\": 23,95$" 
        },
        { 
          name: "Pizza mexicaine", 
          price: "10\": 14,95$ | 12\": 20,95$ | 14\": 24,95$" 
        },
        { 
          name: "Pizza fruits de mer", 
          price: "10\": 15,95$ | 12\": 21,95$ | 14\": 25,95$" 
        },
        { 
          name: "Pizza-Ghetti", 
          price: "17,95$",
          description: "Pizza 10\" avec spaghetti"
        },
        { 
          name: "Pizza-poutine", 
          price: "19,95$",
          description: "Pizza 10\" avec poutine"
        }
      ]
    },
    {
      title: "BREUVAGES",
      items: [
        { name: "Boissons gazeuses", price: "3,50$" },
        { name: "Jus", price: "3,95$" },
        { name: "Café / Thé", price: "2,95$" },
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
          
          <h1 className="text-4xl md:text-5xl font-bold pt-16 mb-4 font-playfair tracking-wider">
            MENU SALLE À MANGER
          </h1>
          <div className="w-24 h-1 bg-yellow-600 mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg font-inter">
            Découvrez notre sélection de plats préparés avec passion
          </p>
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
                      <span className="text-yellow-600 font-bold font-inter whitespace-nowrap">
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
                  </motion.div>
                ))}
              </div>
            </motion.section>
          ))}
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16 p-8 bg-gray-900 rounded-lg"
        >
          <p className="text-gray-400 font-inter">
            Les prix sont sujets à changement sans préavis. Taxes en sus.
          </p>
          <p className="text-gray-400 font-inter mt-2">
            Informez-nous de toute allergie alimentaire.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default MenuSalleAManger