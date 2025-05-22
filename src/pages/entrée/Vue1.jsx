import { useState } from 'react';
import React from 'react-dom'
import { Menu, X } from 'lucide-react'; // Lucide icons pour les traits du menu burger
import { FaHandHoldingHeart, FaHospitalAlt, FaTint, FaUser, FaUserMd } from 'react-icons/fa'; // Import des FaIcons
import MedicalNavBar from '../navbar/MedicalNavBar';

export default function Vue1() {
    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-100 via-white to-red-50 flex flex-col">
{/*         
        {/* Navbar */}
        {/* <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
        <h1 className="text-2xl font-bold text-red-700">Banque de Sang</h1> */} 

        {/* Menu classique
        <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-red-600">Accueil</a>
            <a href="#" className="text-gray-600 hover:text-red-600">À propos</a>
            <a href="#" className="text-gray-600 hover:text-red-600">Contact</a>
        </nav> */}

        {/* Menu burger
        <div className="md:hidden">
            {menuOpen ? (
            <X onClick={() => setMenuOpen(false)} className="w-8 h-8 text-red-700" />
            ) : (
            <Menu onClick={() => setMenuOpen(true)} className="w-8 h-8 text-red-700" />
            )}
        </div> */}
        {/* </header> */}

        {/* Menu mobile
        {menuOpen && (
        <div className="md:hidden bg-white shadow-md flex flex-col items-center py-4 space-y-4">
            <a href="#" className="text-gray-600 hover:text-red-600">Accueil</a>
            <a href="#" className="text-gray-600 hover:text-red-600">À propos</a>
            <a href="#" className="text-gray-600 hover:text-red-600">Contact</a>
        </div>
        )} */}

        {/* Contenu principal */}
        <main className="flex-grow flex flex-col items-center justify-center text-center px-6 mt-26">
        <h2 className="text-4xl font-bold text-gray-800 mb-10">Bienvenue à la Banque de Sang</h2>

        <div className="flex flex-col md:flex-row gap-8">
            
            {/* Carte Faire un don
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 flex flex-col items-center w-72">
            <FaHandHoldingHeart className="text-red-400 w-20 h-20 mb-4" />
            <h3 className="text-xl font-semibold mb-4 text-red-700">Faire un Don</h3>
            <a href="/fairedon" className="bg-blue-400 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition">
                Commencer
            </a>
            </div> */}

            {/* Carte Demander du sang */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 flex flex-col items-center w-72">
            <FaUser className="text-gray-400 w-20 h-20 mb-4" />
            <h3 className="text-xl font-semibold mb-4 text-red-700">Utilisateur</h3>
            <a href="/register" className="bg-blue-400 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition">
                Demander
            </a>
            </div>

            {/* Carte Personnel de l'Hôpital */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 flex flex-col items-center w-72">
            <FaHospitalAlt className="text-amber-600 w-20 h-20 mb-4" />
            <h3 className="text-xl font-semibold mb-4 text-red-700">Personnel de l'Hôpital</h3>
            <a href="/register" className="bg-blue-400 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition">
                Accéder
            </a>
            </div>

        </div>
        </main>

        {/* Footer */}
        <footer className="text-center py-6 text-gray-500 text-sm">
        © 2025 Banque de Sang - Tous droits réservés
        </footer>

  </div>
  )
}
