import React, { useState, useEffect } from "react";
import {
  FaUser, FaPhone, FaMapMarkerAlt, FaTint, FaCalendarAlt, FaWeight
} from 'react-icons/fa';
import { Outlet, useNavigate } from 'react-router-dom';
import MedicalNavBar from "../../navbar/MedicalNavBar";

export default function Ajoutdon({ role }) {
  const navigate = useNavigate();
  const [nom, setNom] = useState("");
  const [dateNaissance, setDateNaissance] = useState("");
  const [telephone, setTelephone] = useState("");
  const [sexe, setSexe] = useState("");
  const [poids, setPoids] = useState("");
  const [centreId, setCentreId] = useState("");
  const [centres, setCentres] = useState([]);
  const [groupeSanguin, setGroupeSanguin] = useState("");
  const [dateDisponibilite, setDateDisponibilite] = useState("");
  const [donneurId, setDonneurId] = useState("");
  const [erreurTelephone, setErreurTelephone] = useState("");
  const token = localStorage.getItem('token');

useEffect(() => {
  const fetchCentres = async () => {
    const token = localStorage.getItem("token");
    // console.log("Token utilisé :", token); // debug

    try {
      const response = await fetch("http://localhost:5000/api/centresroutes", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Erreur d’authentification");
      }

      const data = await response.json();
      setCentres(data);
    } catch (error) {
      console.error("Erreur lors du chargement des centres :", error);
    }
  };

  fetchCentres();
}, []); // pas besoin de [token]



  useEffect(() => {
  const cleanedPhone = telephone.replace(/\s+/g, '');

  const isValidPhone =
    (cleanedPhone.length === 9 && /^[67]\d{8}$/.test(cleanedPhone)) ||
    (cleanedPhone.length === 13 && cleanedPhone.startsWith('+237'));

  if (isValidPhone) {
    console.log('Recherche téléphone :', cleanedPhone);
    fetch(`http://localhost:5000/api/donation/by-phone/${cleanedPhone}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((res) => {
        // Ici, supprimer la ligne avec possiblePhones, car c'est une variable inconnue en React
        // console.log("Recherche avec :", possiblePhones);  <-- à retirer !
        
        if (!res.ok) throw new Error("Utilisateur non trouvé");
        return res.json();
      })
      .then((data) => {
        if (data && data.id) {
          setNom(data.nom || "");
          setGroupeSanguin(data.groupeSanguin || "");
          setDonneurId(data.id);
          setErreurTelephone("");
        }
      })
      .catch((err) => {
        console.error("Erreur récupération utilisateur :", err.message);
        setDonneurId("");
        setNom("");
        setGroupeSanguin("");
        setErreurTelephone("Aucun utilisateur trouvé avec ce numéro.");
      });
  } else {
    setDonneurId("");
    setNom("");
    setGroupeSanguin("");
    setErreurTelephone("");
  }
}, [telephone, token]);


const handleFairedon = async (e) => {
  e.preventDefault();

  if (!donneurId) {
    alert("Aucun utilisateur associé à ce numéro de téléphone.");
    return;
  }

  if (!dateDisponibilite) {
    alert("Veuillez spécifier la date de disponibilité.");
    return;
  }

  const body = {
    poids,
    groupeSanguin,
    centre_id: centreId,          // ✅ correspond au backend
    date: dateDisponibilite,      // ✅ correspond au backend
    phone: telephone,             // ✅ requis par le backend
    name: nom                     // ✅ requis par le backend
  };

  console.log("Données envoyées :", body);

  try {
    const response = await fetch("http://localhost:5000/api/donation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    if (response.ok) {
      alert("Don enregistré avec succès !");
      navigate("/accueil");
    } else {
      alert(data.error || "Erreur lors de l'enregistrement du don");
    }
  } catch (error) {
    console.error("Erreur lors de l'envoi du don :", error);
    alert("Une erreur est survenue");
  }
};



  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-red-900 to-gray-900 text-white p">
      <MedicalNavBar role={role} />
      <Outlet />

      <main className="flex-grow flex flex-col items-center justify-center px-6 py-12 mt-12">
        <p className="text-white text-2xl mb-4">
          Merci de vouloir sauver des vies 💖. Remplissez les informations nécessaires pour planifier votre don de sang.
        </p>

        <form className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-5xl space-y-6" onSubmit={handleFairedon}>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">

            {/* Nom */}
            <div className="flex flex-col">
              <label className="mb-2 font-semibold text-gray-900 flex items-center">
                <FaUser className="mr-2 text-red-600" /> Nom complet
              </label>
              <input
                type="text"
                placeholder="Entrez votre nom"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                className="border border-gray-300 text-black p-3 rounded-lg"
                required
              />
            </div>

            {/* Date de naissance */}
            <div className="flex flex-col">
              <label className="mb-2 font-semibold text-gray-700 flex items-center">
                <FaCalendarAlt className="mr-2 text-red-600" /> Date de Naissance
              </label>
              <input
                type="date"
                value={dateNaissance}
                onChange={(e) => setDateNaissance(e.target.value)}
                className="border border-gray-400 text-black p-3 rounded-lg"
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
                placeholder="Ex: 653160226"
                className="border border-gray-300 text-black p-3 rounded-lg"
                required
              />
              {erreurTelephone && (
                <p className="text-red-500 text-sm mt-1">{erreurTelephone}</p>
              )}
            </div>

            {/* Sexe */}
            <div className="flex flex-col">
              <label className="mb-2 font-semibold text-gray-700 flex items-center">
                <FaTint className="mr-2 text-red-600" /> Sexe
              </label>
              <select
                value={sexe}
                onChange={(e) => setSexe(e.target.value)}
                className="border border-gray-300 text-black p-3 rounded-lg"
                required
              >
                <option value="">Sélectionnez...</option>
                <option value="Homme">Homme</option>
                <option value="Femme">Femme</option>
              </select>
            </div>

            {/* Poids */}
            <div className="flex flex-col">
              <label className="mb-2 font-semibold text-gray-700 flex items-center">
                <FaWeight className="mr-2 text-red-600" /> Poids
              </label>
              <input
                type="number"
                value={poids}
                onChange={(e) => setPoids(e.target.value)}
                min="50"
                max="150"
                placeholder="Veuillez entrer votre poids"
                className="border border-gray-300 text-black p-3 rounded-lg"
                required
              />
            </div>

            {/* Centre */}
            <div className="flex flex-col">
              <label className="mb-2 font-semibold text-gray-700 flex items-center">
                <FaMapMarkerAlt className="mr-2 text-red-600" /> Centre de collecte
              </label>
              <select
                value={centreId}
                onChange={(e) => setCentreId(e.target.value)}
                className="border border-gray-300 text-black p-3 rounded-lg"
                required
              >
                <option value="">Choisir un centre</option>
                {Array.isArray(centres) && centres.map(centre => (
                  <option key={centre.id} value={centre.id}>
                    {centre.name} - {centre.location}
                  </option>
                ))}
              </select>
            </div>

            {/* Groupe sanguin */}
            <div className="flex flex-col">
              <label className="mb-2 font-semibold text-gray-700 flex items-center">
                <FaTint className="mr-2 text-red-600" /> Groupe Sanguin
              </label>
              <select
                value={groupeSanguin}
                onChange={(e) => setGroupeSanguin(e.target.value)}
                className="border border-gray-300 text-black p-3 rounded-lg"
                required
              >
                <option value="">Sélectionnez...</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>

            {/* Date de disponibilité */}
            <div className="flex flex-col">
              <label className="mb-2 font-semibold text-gray-700 flex items-center">
                <FaCalendarAlt className="mr-2 text-red-600" /> Date de disponibilité
              </label>
              <input
                type="date"
                value={dateDisponibilite}
                onChange={(e) => setDateDisponibilite(e.target.value)}
                className="border border-gray-300 text-black p-3 rounded-lg"
                required
              />
            </div>

          </div>

          <button
            type="submit"
            className="mt-6 bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300"
          >
            Enregistrer le don
          </button>
        </form>
      </main>
    </div>
  );
}
