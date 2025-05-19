import MedicalNavBar from "../../navbar/MedicalNavBar";
import React,{ useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBuilding, FaMapMarkerAlt, FaMapSigns, FaPhone } from "react-icons/fa";

export default function AjouterCentre({ role }) {
    const [nom, setNom] = useState("");
    const [ville, setVille] = useState("");
    const [adresse, setAdresse] = useState("");
    const [telephone, setTelephone] = useState("");
    const [message, setMessage] = useState("");
  
    const navigate = useNavigate();
  
    const handleAjouterCentre = async (e) => {
        e.preventDefault();
    
        if (!nom || !ville || !adresse || !telephone) {
            setMessage("Veuillez remplir tous les champs.");
          return;
        }
    
        try {
            const response = await fetch('http://localhost:5000/api/centresroutes', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                name: nom,
                location: ville,
                address: adresse,
                phone: telephone
              }),
            });
          
            if (!response.ok) {
              const errorData = await response.json();
              setMessage(errorData.message || "Erreur lors de l'ajout.");
              return;
            }
          
            const data = await response.json();
            setMessage("Centre ajouté avec succès !");
            console.log("Centre ajouté :", data);
          
            // ✅ Réinitialisation correcte des champs
            setNom('');
            setVille('');
            setAdresse('');
            setTelephone('');
          } catch (error) {
            console.error("Erreur lors de l'ajout du centre :", error);
            setMessage("Une erreur est survenue lors de l'ajout.");
          }
          
      };
  
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100 flex flex-col mt-24">
        <MedicalNavBar role={role} />
        <main className="flex-grow flex flex-col items-center justify-center px-6 py-12 mt-12">
          <p className="text-gray-700 text-2xl mb-4">
            Veuillez entrer les informations du centre de collecte.
          </p>
          <form className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md space-y-6" onSubmit={handleAjouterCentre}>
            {/* Nom du Centre */}
            <div className="flex flex-col">
              <label className="mb-2 font-semibold text-gray-900 flex items-center">
                <FaBuilding className="mr-2 text-red-600" /> Nom du Centre
              </label>
              <input
                type="text"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                placeholder="Entrez le nom du centre"
                className="border border-gray-300 text-black p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300"
                required
              />
            </div>
  
            {/* Ville */}
            <div className="flex flex-col">
              <label className="mb-2 font-semibold text-gray-700 flex items-center">
                <FaMapMarkerAlt className="mr-2 text-red-600" /> Ville
              </label>
              <input
                type="text"
                value={ville}
                onChange={(e) => setVille(e.target.value)}
                placeholder="Entrez la ville"
                className="border border-gray-300 text-black p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300"
                required
              />
            </div>
  
            {/* Adresse */}
            <div className="flex flex-col">
              <label className="mb-2 font-semibold text-gray-700 flex items-center">
                <FaMapSigns className="mr-2 text-red-600" /> Adresse
              </label>
              <input
                type="text"
                value={adresse}
                onChange={(e) => setAdresse(e.target.value)}
                placeholder="Entrez l'adresse"
                className="border border-gray-300 text-black p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300"
                required
              />
            </div>
  
            {/* Téléphone */}
            <div className="flex flex-col">
              <label className="mb-2 font-semibold text-gray-700 flex items-center">
                <FaPhone className="mr-2 text-red-600" /> Numéro de téléphone
              </label>
              <input
                type="tel"
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
                placeholder="Ex: 0102030405"
                className="border border-gray-300 text-black p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300"
                required
              />
            </div>
  
            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition"
            >
              Ajouter le centre
            </button>
  
            {message && <p className="text-green-600 mt-4">{message}</p>}
          </form>
        </main>
        <footer className="text-center py-6 text-gray-500 text-sm">
          © 2025 Banque de Sang - Tous droits réservés
        </footer>
      </div>
    );
  }
  