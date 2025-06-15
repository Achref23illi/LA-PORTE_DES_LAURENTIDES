import Navbar from '../components/Navbar'
import MenuSalleAManger from '../components/MenuSalleAManger'
import Footer from '../components/Footer'

const MenuDining = () => {
  return (
    <div className="w-full min-h-screen bg-black text-white">
      <Navbar />
      <MenuSalleAManger />
      <Footer />
    </div>
  )
}

export default MenuDining