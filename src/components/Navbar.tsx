import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'

const menuItems = [
  { name: 'ACCUEIL', href: '/', id: 'home' },
  {
    name: 'MENU',
    href: '/menu-dining',
    id: 'menu',
    hasDropdown: true,
    dropdownItems: [
      { name: 'Menu salle à manger', href: '/menu-dining' },
      { name: 'Menu livraison', href: '/menu-delivery' },
      { name: 'Carte des vins', href: '/menu-wines' }
    ]
  },
  { name: 'PHOTOS', href: '/photos', id: 'photos' },
  { name: 'RÉSERVATIONS', href: '/reservations', id: 'reservations' },
  { name: 'NOUS JOINDRE', href: '/nous-joindre', id: 'nous-joindre' }
]

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const location = useLocation()

  // Determine active section by pathname
  const activeSection = menuItems.find(item => item.href === location.pathname)?.id || 'home'

  // Menu click handler
  const handleMenuClick = (item: typeof menuItems[0], e: React.MouseEvent) => {
    if (item.hasDropdown) {
      e.preventDefault()
      setIsDropdownOpen((open) => !open)
    } else {
      setIsMenuOpen(false)
      setIsDropdownOpen(false)
    }
  }

  // Mobile menu variants
  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1] as const
      }
    },
    open: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1] as const
      }
    }
  }

  // Mobile item variants
  const mobileItemVariants = {
    closed: { x: -20, opacity: 0 },
    open: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.3
      }
    })
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-black/95 backdrop-blur-md border-b border-yellow-600/20 shadow-lg`}
    >
      {/* Top decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-600/30 to-transparent" />
      {/* Main navbar container */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col items-center">
              <h1 className="text-xl lg:text-2xl font-bold tracking-[0.2em] text-white font-playfair leading-tight">
                LA PORTE
              </h1>
              <div className="flex items-center justify-center space-x-2 mt-1">
                <div className="w-6 lg:w-8 h-px bg-yellow-600"></div>
                <span className="text-xs lg:text-sm font-light tracking-[0.25em] text-yellow-600 font-inter whitespace-nowrap">
                  DES LAURENTIDES
                </span>
                <div className="w-6 lg:w-8 h-px bg-yellow-600"></div>
              </div>
            </div>
          </motion.div>

          {/* Desktop Menu - Centered */}
          <div className="hidden lg:flex items-center justify-center flex-1 ml-16 mr-8">
            <div className="flex items-center space-x-8">
              {menuItems.map((item) => (
                <div key={item.id} className="relative group">
                  {item.hasDropdown ? (
                    <>
                      <button
                        className={`relative px-3 py-2 text-sm font-medium tracking-[0.1em] transition-all duration-300 flex items-center ${
                          activeSection === item.id
                            ? 'text-yellow-600'
                            : 'text-white hover:text-yellow-600'
                        }`}
                        onClick={(e) => handleMenuClick(item, e)}
                        onMouseEnter={() => setIsDropdownOpen(true)}
                        onMouseLeave={() => setIsDropdownOpen(false)}
                      >
                        {item.name}
                        <svg className="ml-1 w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                        <span className="absolute bottom-0 left-0 w-0 h-px bg-yellow-600 transition-all duration-300 group-hover:w-full"></span>
                        {activeSection === item.id && (
                          <motion.span
                            layoutId="activeIndicator"
                            className="absolute bottom-0 left-0 w-full h-px bg-yellow-600"
                            transition={{ duration: 0.3 }}
                          />
                        )}
                      </button>
                      <AnimatePresence>
                        {isDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="absolute left-0 mt-2 w-56 bg-black border border-yellow-600/20 rounded-lg shadow-lg z-20"
                            onMouseEnter={() => setIsDropdownOpen(true)}
                            onMouseLeave={() => setIsDropdownOpen(false)}
                          >
                            {item.dropdownItems?.map((dropdown) => (
                              <Link
                                key={dropdown.href}
                                to={dropdown.href}
                                className="block px-4 py-2 text-sm text-white hover:bg-yellow-600/10 hover:text-yellow-600 transition-colors duration-200"
                                onClick={() => {
                                  setIsDropdownOpen(false)
                                  setIsMenuOpen(false)
                                }}
                              >
                                {dropdown.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={item.href}
                      className={`relative px-3 py-2 text-sm font-medium tracking-[0.1em] transition-all duration-300 flex items-center ${
                        activeSection === item.id
                          ? 'text-yellow-600'
                          : 'text-white hover:text-yellow-600'
                      }`}
                      onClick={() => {
                        setIsMenuOpen(false)
                        setIsDropdownOpen(false)
                      }}
                    >
                      {item.name}
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-yellow-600 transition-all duration-300 group-hover:w-full"></span>
                      {activeSection === item.id && (
                        <motion.span
                          layoutId="activeIndicator"
                          className="absolute bottom-0 left-0 w-full h-px bg-yellow-600"
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>


          {/* Mobile menu button */}
          <div className="lg:hidden flex-shrink-0">
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative w-8 h-8 text-white focus:outline-none focus:ring-2 focus:ring-yellow-600/50 rounded"
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              <span className="sr-only">Open main menu</span>
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span
                  className={`absolute h-0.5 w-6 bg-current transition-all duration-300 ${
                    isMenuOpen ? 'rotate-45' : '-translate-y-1.5'
                  }`}
                />
                <span
                  className={`absolute h-0.5 w-6 bg-current transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`absolute h-0.5 w-6 bg-current transition-all duration-300 ${
                    isMenuOpen ? '-rotate-45' : 'translate-y-1.5'
                  }`}
                />
              </div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="lg:hidden overflow-hidden bg-black/95 backdrop-blur-md border-t border-yellow-600/20"
          >
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
              <div className="py-4 space-y-2">
                {menuItems.map((item, idx) => (
                  <div key={item.id}>
                    <motion.a
                      href={item.href}
                      variants={mobileItemVariants}
                      custom={idx}
                      className={`flex items-center justify-between px-4 py-3 text-base font-medium tracking-[0.1em] transition-all duration-300 border-l-2 rounded-r ${
                        activeSection === item.id
                          ? 'text-yellow-600 border-yellow-600 bg-yellow-600/10'
                          : 'text-white border-transparent hover:text-yellow-600 hover:border-yellow-600/50 hover:bg-yellow-600/5'
                      }`}
                      onClick={(e) => handleMenuClick(item, e)}
                    >
                      {item.name}
                      {item.hasDropdown && (
                        <svg className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </motion.a>
                    {/* Mobile Dropdown */}
                    {item.hasDropdown && isDropdownOpen && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        {item.dropdownItems?.map((dropdownItem, idx2) => (
                          <motion.a
                            key={idx2}
                            href={dropdownItem.href}
                            className="block pl-8 pr-4 py-2 text-sm text-gray-400 hover:text-yellow-600 hover:bg-yellow-600/5 transition-all duration-200"
                            onClick={(e) => {
                              setIsMenuOpen(false)
                              setIsDropdownOpen(false)
                              setIsMenuOpen(false)
                              const section = document.querySelector(dropdownItem.href)
                              if (section) {
                                e.preventDefault()
                                section.scrollIntoView({ behavior: 'smooth' })
                                window.history.replaceState(null, '', dropdownItem.href)
                              }
                            }}
                          >
                            {dropdownItem.name}
                          </motion.a>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ))}
                {/* Mobile CTA Button */}
                <motion.div
                  variants={mobileItemVariants}
                  custom={menuItems.length}
                  className="px-4 pt-4"
                >
                  <button className="w-full px-6 py-3 bg-yellow-600 text-black font-medium text-sm tracking-[0.1em] transition-all duration-300 hover:bg-yellow-500 rounded">
                    RÉSERVER
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-600/20 to-transparent" />
    </motion.nav>
  )
}

export default Navbar 