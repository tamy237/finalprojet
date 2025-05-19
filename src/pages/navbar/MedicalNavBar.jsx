import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaBars,FaTimes,FaHome, FaDonate, FaUserMd,FaSignOutAlt,FaTint, FaBox,FaPlusSquare,
} from 'react-icons/fa';

export default function MedicalNavBar({ role }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);
  const handleLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  navigate("/connexionU"); // ou /connexionH selon le rôle
};


  return (
    <header className="bg-red-600 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <h1 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
          🩸 Banque de Sang
        </h1>

        {/* Desktop menu */}
          <nav className="hidden md:flex space-x-6">
            <Link to="/personnelHopital" className="flex items-center text-white hover:text-yellow-300">
              <FaHome className="mr-2" /> Accueil
            </Link>
            <Link to="/collectes" className="flex items-center text-white hover:text-yellow-300">
              <FaBox className="mr-2" /> Collectes
            </Link>
            <Link to="/ajoutercollecte" className="flex items-center text-white hover:text-yellow-300">
              <FaPlusSquare className="mr-2" /> Ajouter une Collecte
            </Link>
            <Link to="/lieu-collecte" className="flex items-center text-white hover:text-yellow-300">
              <FaDonate className="mr-2" /> Liste de Collecte
            </Link>
            <Link to="/premiere" className="flex items-center text-white hover:text-yellow-300">
              <FaSignOutAlt className="mr-2" /> Déconnexion
            </Link>
          </nav>
        
        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-6 py-4 space-y-4 shadow-md">
          <Link to="/personnelHopital" onClick={closeMenu} className="flex items-center text-red-700 hover:text-red-500">
            <FaHome className="mr-2" /> Accueil
          </Link>
          <Link to="/collectes" onClick={closeMenu} className="flex items-center text-red-700 hover:text-red-500">
            <FaBox className="mr-2" /> Collectes
          </Link>
          <Link to="/ajoutercollecte" onClick={closeMenu} className="flex items-center text-red-700 hover:text-red-500">
            <FaPlusSquare className="mr-2" /> Ajouter une Collecte
          </Link>
          <Link to="/lieu-collecte" onClick={closeMenu} className="flex items-center text-red-700 hover:text-red-500">
            <FaDonate className="mr-2" /> Liste de Collecte
          </Link>
          <Link to="/listedonneurs" onClick={closeMenu} className="flex items-center text-red-700 hover:text-red-500">
            <FaDonate className="mr-2" /> Liste des donneurs
          </Link>
          <Link to="/premiere" onClick={closeMenu[handleLogout] } className="flex items-center text-red-700 hover:text-red-500">
            <FaSignOutAlt className="mr-2" /> Déconnexion
          </Link>
        </div>
      )}

      {/* Rôle affiché */}
      <div className="text-center text-xs text-white font-semibold py-1 bg-red-700">
        Connecté en tant que personnel médical
      </div>
    </header>
  );
}
