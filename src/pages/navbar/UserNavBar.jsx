import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaHome, FaDonate, FaSignOutAlt, FaTint } from 'react-icons/fa';

export default function UserNavBar({ role }) {
  const [menuOpen, setMenuOpen] = useState(false);
const handleLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  navigate("/connexionU"); // ou /connexionH selon le rôle
};

  return (
    <header className="bg-red-600 shadow-md fixed top-0 w-full px-2 z-50">
      <div className="container mx-auto">
        {/* Première ligne - Barre principale */}
        <div className="flex justify-between items-center px-4 py-3">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl md:text-2xl font-bold text-white">🩸 Banque de Sang</h1>
          </div>

          {/* Menu desktop */}
          <nav className="hidden md:flex space-x-6 px-3">
            <NavLink to="/accueil" icon={<FaHome />} text="Accueil" />
            <NavLink to="/controle_don" icon={<FaTint />} text="Faire un Don" />
            <NavLink to="/demander_sang" icon={<FaDonate />} text="Demander du Sang" />
            <NavLink to="/premiere" onclick={handleLogout} icon={<FaSignOutAlt /> } text="Déconnexion" />
          </nav>

          {/* Menu burger mobile */}  
          <div className="md:hidden">
            <button 
              onClick={() => setMenuOpen(!menuOpen)} 
              className="text-white focus:outline-none"
              aria-label="Menu"
            >
              {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Deuxième ligne - Rôle utilisateur */}
        <div className="text-center text-xs text-white font-semibold py-1 bg-red-700">
          Connecté en tant que: {role || 'utilisateur'}
        </div>

        {/* Menu mobile */}
        {menuOpen && (
          <div className="md:hidden bg-amber-50 w-full px-4 py-3 space-y-3 shadow-lg">
            <MobileNavLink 
              to="/accueil" 
              icon={<FaHome />} 
              text="Accueil" 
              onClick={() => setMenuOpen(false)} 
            />
            <MobileNavLink
              to="/controle_don"
              icon={<FaTint />}
              text="Faire un Don"
              onClick={() => setMenuOpen(false)}
            />
            <MobileNavLink
              to="/demander_sang"
              icon={<FaDonate />}
              text="Demander du Sang"
              onClick={() => setMenuOpen(false)}
            />
            <MobileNavLink
              to="/premiere"
              icon={<FaSignOutAlt />}
              text="Déconnexion"
              onclick={handleLogout} 
              onClick={() => setMenuOpen(false)}
            />
          </div>
        )}
      </div>
    </header>
  );
}

// Composant pour les liens desktop
const NavLink = ({ to, icon, text }) => (
  <Link 
    to={to} 
    className="flex items-center text-white hover:text-gray-200 transition-colors duration-200"
  >
    <span className="mr-2">{icon}</span>
    {text}
  </Link>
);

// Composant pour les liens mobile
const MobileNavLink = ({ to, icon, text, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className="block py-2 px-3 text-red-700 hover:bg-red-50 rounded transition-colors duration-200"
  >
    <span className="inline-block mr-2">{icon}</span>
    {text}
  </Link>
);