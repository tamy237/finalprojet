import React from 'react'
import { FaTint, FaUserMd, FaPlusCircle, FaListAlt, FaMapMarkerAlt,
  FaChartBar, FaPhoneAlt, FaCalendarAlt, FaFileMedical, FaHeartbeat, FaPhone, FaEnvelope, 
  FaHome} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import MedicalNavBar from '../../navbar/MedicalNavBar';



export default function Hpersonel() {
  return (
    <div className="pt-22 px-0 md:px-0 min-h-screen bg-red-50"
      style={{ backgroundImage: "url('/dds2.png')", backgroundSize: "cover", backgroundPosition: "center" }}
>
      <MedicalNavBar/>
      <h2 className="text-4xl font-bold text-red-700 mb-10 text-center mt-8">
        🎯 Espace Personnel de l'Hôpital
      </h2>

      {/* Statistiques principales */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        <div className="bg-white shadow rounded-xl p-4 flex items-center gap-4">
          <FaTint className="text-red-600 text-3xl" />
          <div>
            <h3 className="text-gray-500 text-sm">Poches en stock</h3>
            <p className="text-xl font-bold text-black ">132</p>
          </div>
        </div>

        <div className="bg-white shadow rounded-xl p-4 flex items-center gap-4 text-black">
          <FaCalendarAlt className="text-blue-600 text-3xl" />
          <div>
            <h3 className="text-gray-500 text-sm">Collectes à venir</h3>
            <p className="text-xl font-bold text-black">4</p>
          </div>
        </div>

        <div className="bg-white shadow rounded-xl p-4 flex items-center gap-4 text-black">
          <FaFileMedical className="text-green-600 text-3xl" />
          <div>
            <h3 className="text-gray-500 text-sm">Demandes en attente</h3>
            <p className="text-xl font-bold ">7</p>
          </div>
        </div>
      </div>

      {/* Section collectes */}
      <div className="p-4 text-black">
        <h2 className="text-lg font-semibold mb-2">Collectes récentes</h2>
        <div className="bg-white p-4 shadow rounded-xl">
          <ul className="space-y-2 ">
            <li className="border-b pb-2">Collecte à Douala - 17 Mai 2025 - 10h00</li>
            <li className="border-b pb-2">Collecte à Yaoundé - 15 Mai 2025 - 09h30</li>
            <li>Collecte à Bafoussam - 12 Mai 2025 - 13h00</li>
          </ul>
        </div>
      </div>

      {/* Section demandes */}
      <div className="p-4 text-black">
        <h2 className="text-lg font-semibold mb-2">Demandes urgentes</h2>
        <div className="bg-white p-4 shadow rounded-xl">
          <ul className="space-y-2">
            <li className="border-b pb-2">Groupe O+ pour Douala - Besoin avant 16 Mai</li>
            <li className="border-b pb-2">Groupe AB- pour Yaoundé - Besoin immédiat</li>
            <li>Groupe A+ pour Garoua - Besoin avant 18 Mai</li>
          </ul>
        </div>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Ajouter un Donneur */}
        <motion.div whileHover={{ scale: 1.05 }} className="rounded-xl overflow-hidden shadow-xl bg-gradient-to-br from-red-400 to-pink-500 p-6 text-white">
          <Link to="/ajouterdonneurH" className="flex flex-col items-center space-y-4">
            <FaPlusCircle className="text-5xl" />
            <h3 className="text-2xl font-bold">Ajouter un Donneur</h3>
            <p className="text-center text-sm opacity-90">Enregistrer facilement un nouveau donneur.</p>
          </Link>
        </motion.div>

        {/* Voir les Demandes */}
        <motion.div whileHover={{ scale: 1.05 }} className="rounded-xl overflow-hidden shadow-xl bg-gradient-to-br from-blue-400 to-blue-600 p-6 text-white">
          <Link to="/liste_demandes" className="flex flex-col items-center space-y-4">
            <FaListAlt className="text-5xl" />
            <h3 className="text-2xl font-bold">Voir les Demandes</h3>
            <p className="text-center text-sm opacity-90">Suivre les besoins urgents en sang.</p>
          </Link>
        </motion.div>

        {/* Gérer le Stock */}
        <motion.div whileHover={{ scale: 1.05 }} className="rounded-xl overflow-hidden shadow-xl bg-gradient-to-br from-purple-400 to-indigo-600 p-6 text-white">
          <Link to="/gestion-stock" className="flex flex-col items-center space-y-4">
            <FaTint className="text-5xl" />
            <h3 className="text-2xl font-bold">Gérer le Stock</h3>
            <p className="text-center text-sm opacity-90">Contrôler la disponibilité du sang.</p>
          </Link>
        </motion.div>

        {/* Suivi des Collectes */}
        <motion.div whileHover={{ scale: 1.05 }} className="rounded-xl overflow-hidden shadow-xl bg-gradient-to-br from-green-400 to-teal-600 p-6 text-white mb-8">
          <Link to="/listecollecte" className="flex flex-col items-center space-y-4">
            <FaChartBar className="text-5xl" />
            <h3 className="text-2xl font-bold">Suivi des Collectes</h3>
            <p className="text-center text-sm opacity-90">Voir les opérations de dons programmées.</p>
          </Link>
        </motion.div>

        {/* Gérer les appels */}
        <motion.div whileHover={{ scale: 1.05 }} className="rounded-xl overflow-hidden shadow-xl bg-gradient-to-br from-amber-400 to-red-600 p-6 text-white mb-8">
          <Link to="/appeldon" className="flex flex-col items-center space-y-4">
            <FaPhoneAlt className="text-5xl" />
            <h3 className="text-2xl font-bold">Gérer les appels</h3>
            <p className="text-center text-sm opacity-90">Faire un nouvel appel</p>
          </Link>
        </motion.div>

        {/* liste des collectes */}
        <motion.div whileHover={{ scale: 1.05 }} className="rounded-xl overflow-hidden shadow-xl bg-gradient-to-br from-green-400 to-pink-600 p-6 text-white mb-8">
          <Link to="/listecollecte" className="flex flex-col items-center space-y-4">
            <FaHome className="text-5xl" />
            <h3 className="text-2xl font-bold">Voir les collectes</h3>
            <p className="text-center text-sm opacity-90">lister les collectes</p>
          </Link>
        </motion.div>

         
      </div>
       <footer className="bg-red-800 text-white py-8 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* À propos */}
        <div>
          <h3 className="text-lg font-semibold mb-3 flex items-center">
            <FaHeartbeat className="mr-2 text-white" /> Banque de Sang
          </h3>
          <p className="text-sm text-gray-200">
            Plateforme de gestion des dons de sang, collectes et stock. Nous œuvrons pour sauver des vies chaque jour.
          </p>
        </div>

        {/* Liens utiles */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Liens rapides</h3>
          <ul className="space-y-2 text-sm text-white">
            <li><a href="/accueil" className="hover:underline">Tableau de bord</a></li>
            <li><a href="/collectes" className="hover:underline">Collectes</a></li>
            <li><a href="/demandes" className="hover:underline">Demandes</a></li>
            <li><a href="/utilisateurs" className="hover:underline">Utilisateurs</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <ul className="space-y-2 text-sm text-white">
            <li className="flex items-center"><FaPhone className="mr-2 text-white" /> +237 659 12 02 35</li>
            <li className="flex items-center"><FaEnvelope className="mr-2 text-white" /> tchiosteve@banquedesang.cm</li>
            <li className="flex items-center"><FaMapMarkerAlt className="mr-2 text-white" /> Yaoundé, Cameroun</li>
          </ul>
        </div>

        
      </div>

      <div className="mt-8 border-t border-gray-600/70 pt-4 text-center text-sm text-gray-300">
        &copy; {new Date().getFullYear()} Banque de Sang. Tous droits réservés.
      </div>
    </footer>
  </div>
  )
}
