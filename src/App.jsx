import { useState } from "react";
import SlideModal from "./components/SlideModal.jsx";
import menuIcon from "./assets/menu.png";
import gusteauLogo from "./assets/gusteau-logo.webp";

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 relative">
      {/* Logo fijo arriba a la izquierda */}
      <img
        src={gusteauLogo}
        alt="Restaurant Gusteau's"
        className="fixed top-4 left-4 w-32 z-40"
      />

      {/* Botón menú abajo a la derecha */}
      <button
        onClick={() => setModalOpen(true)}
        className="fixed bottom-6 right-6 p-4 bg-[#B97A57] rounded-full shadow-lg hover:bg-[#D4A373] transition z-50"
        title="Ver categorías"
      >
        <img src={menuIcon} alt="Menú" className="w-8 h-8" />
      </button>

      {/* Modal lateral */}
      <SlideModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
