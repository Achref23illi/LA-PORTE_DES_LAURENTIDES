import { motion } from 'framer-motion'
import { useState } from 'react'

interface Photo {
  id: number
  src: string
  alt: string
  category: string
}

interface PhotoCategory {
  name: string
  id: string
}

const PhotosGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)

  const categories: PhotoCategory[] = [
    { name: 'Toutes', id: 'all' },
    { name: 'Salle à manger', id: 'dining' },
    { name: 'Cuisine', id: 'kitchen' },
    { name: 'Plats', id: 'dishes' },
    { name: 'Ambiance', id: 'atmosphere' },
    { name: 'Événements', id: 'events' }
  ]

  // Restaurant photos from local pics folder
  const photos: Photo[] = [
    // Bar and Dining Photos
    {
      id: 1,
      src: '/pics/bar-central.jpg',
      alt: 'Bar central du restaurant',
      category: 'dining'
    },
    {
      id: 2,
      src: '/pics/banquettes.jpg',
      alt: 'Banquettes confortables',
      category: 'dining'
    },
    {
      id: 3,
      src: '/pics/banquettes-3.jpg',
      alt: 'Espace banquettes',
      category: 'dining'
    },
    {
      id: 4,
      src: '/pics/bar-av.jpg',
      alt: 'Vue avant du bar',
      category: 'atmosphere'
    },
    {
      id: 5,
      src: '/pics/bar-arr.jpg',
      alt: 'Vue arrière du bar',
      category: 'atmosphere'
    },
    {
      id: 6,
      src: '/pics/bar-arr-av-entree.jpg',
      alt: 'Bar et entrée',
      category: 'atmosphere'
    },
    {
      id: 7,
      src: '/pics/bar-ban-arr.jpg',
      alt: 'Bar et banquettes arrière',
      category: 'dining'
    },
    {
      id: 8,
      src: '/pics/ban-bar.jpg',
      alt: 'Banquettes près du bar',
      category: 'dining'
    },
    {
      id: 9,
      src: '/pics/spo-entree.jpg',
      alt: 'Entrée du restaurant',
      category: 'atmosphere'
    },
    {
      id: 10,
      src: '/pics/spo-porte-2.jpg',
      alt: 'Porte d\'entrée',
      category: 'atmosphere'
    }
  ]

  const filteredPhotos = selectedCategory === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory)

  const openModal = (photo: Photo) => {
    setSelectedPhoto(photo)
  }

  const closeModal = () => {
    setSelectedPhoto(null)
  }

  const nextPhoto = () => {
    if (!selectedPhoto) return
    const currentIndex = filteredPhotos.findIndex(p => p.id === selectedPhoto.id)
    const nextIndex = (currentIndex + 1) % filteredPhotos.length
    setSelectedPhoto(filteredPhotos[nextIndex])
  }

  const prevPhoto = () => {
    if (!selectedPhoto) return
    const currentIndex = filteredPhotos.findIndex(p => p.id === selectedPhoto.id)
    const prevIndex = (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length
    setSelectedPhoto(filteredPhotos[prevIndex])
  }

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
            GALERIE PHOTOS
          </h1>
          <div className="w-24 h-1 bg-yellow-600 mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg font-inter">
            Découvrez l'atmosphère unique de La Porte des Laurentides
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold text-sm tracking-wider transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-yellow-600 text-black'
                  : 'bg-gray-800 text-white hover:bg-gray-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Photo Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredPhotos.map((photo, index) => (
            <motion.div
              key={photo.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square"
              onClick={() => openModal(photo)}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <p className="text-white text-sm font-inter">{photo.alt}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal */}
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <div className="relative max-w-4xl max-h-full">
              <motion.img
                key={selectedPhoto.id}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                className="max-w-full max-h-full object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
              
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white hover:text-yellow-600 transition-colors duration-300"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              {/* Navigation Arrows */}
              <button
                onClick={(e) => { e.stopPropagation(); prevPhoto(); }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-yellow-600 transition-colors duration-300"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={(e) => { e.stopPropagation(); nextPhoto(); }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-yellow-600 transition-colors duration-300"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              {/* Photo Info */}
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <p className="text-white text-lg font-semibold font-inter bg-black bg-opacity-50 rounded-lg py-2 px-4">
                  {selectedPhoto.alt}
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Gallery Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16 p-8 bg-gray-900 rounded-lg"
        >
          <h3 className="text-xl font-bold mb-4 text-yellow-600 font-playfair">VISITEZ-NOUS</h3>
          <p className="text-gray-400 font-inter">
            Nos photos capturent l'essence de notre restaurant, mais rien ne remplace 
            l'expérience de dîner chez nous. Venez découvrir notre atmosphère chaleureuse 
            et goûter à notre cuisine exceptionnelle.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default PhotosGallery