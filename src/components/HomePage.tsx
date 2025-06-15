import React from 'react'
import Hero from './Hero'
import AboutSection from './AboutSection'
import FeatureGrid from './FeatureGrid'
import ReservationSection from './ReservationSection'

interface HomePageProps {
  openReservationModal: () => void
}

const HomePage: React.FC<HomePageProps> = ({ openReservationModal }) => {
  return (
    <>
      <Hero openReservationModal={openReservationModal} />
      {/* <ClosureNotice /> */}
      <AboutSection />
      <FeatureGrid />
      <ReservationSection openReservationModal={openReservationModal} />
    </>
  )
}

export default HomePage 