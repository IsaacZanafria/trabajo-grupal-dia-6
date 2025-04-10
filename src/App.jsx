import { Link, Route, Routes } from "react-router";
import Home from "./pages/Home.jsx";
import { useState } from "react";
import SlideModal from "./components/SlideModal.jsx";
import menuIcon from "./assets/menu.png";
import gusteauLogo from "./assets/gusteau-logo.webp";
import InfPlatos from './pages/InfPlatos'



export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <div className="h-22 w-full bg-[#D4A373]  sticky top-0 z-40 border-b border-b-gray-900">
        {/* Logo fijo arriba a la izquierda */}
        <div className="h-full items-center justify-around flex">
          <img
            src={gusteauLogo}
            alt="Gusteau's Restaurant"
            className=" w-22"
          />

          <p className="text-[#513d33] text-2xl font-bold hover:text-[#0c0806] active:text-[#342821]"><Link to="/">Home</Link></p>
        </div>
        {/* Botón menú abajo a la derecha */}
        <button
          onClick={() => setModalOpen(true)}
          className="fixed bottom-6 right-6 p-4 bg-[#B97A57] rounded-full shadow-lg hover:bg-[#D4A373] active:bg-[#b58c64] transition z-50 cursor-pointer"
          title="Ver categorías"
        >
          <img src={menuIcon} alt="Menú" className="w-8 h-8" />
        </button>

        {/* Modal lateral */}
        <SlideModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      </div>


      <Routes>
        <Route path='/:id?' element= {<Home />} />
        <Route path='/inf'element={<InfPlatos/>}/>
      </Routes>

    </>
  )

}
