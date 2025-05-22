import React, { useState, useEffect } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import MedicalNavBar from '../../navbar/MedicalNavBar';

function Appeldonneurs() {
  const [showForm, setShowForm] = useState(false);
  const [centres, setCentres] = useState([]);
  const [collectes, setCollectes] = useState([]);
  const [appels, setAppels] = useState([]);

  const [nouvelAppel, setNouvelAppel] = useState({
    centre_id: '',
    collecte_id: '',
    groupeSanguin: '',
    date: '',
    heure: '',
  });
useEffect(() => {
  const token = localStorage.getItem('token');
  if (!token) {
    console.error('Aucun token trouvé');
    return;
  }

  fetch('http://localhost:5000/api/centresroutes', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  })
    .then(res => {
    // console.log('Centres récupérés:', res); // 👈 Vérifie ici
      if (!res.ok) {
        throw new Error(`Erreur autorisation ou serveur - code ${res.status}`);
      }
      return res.json();
    })
    .then(data => {
  // console.log('✅ Données des centres :', data); // <--- Ajoute ça
  setCentres(data);
})
    .catch(err => console.error('Erreur chargement centres :', err));
}, []);


useEffect(() => {
  const token = localStorage.getItem('token');

  fetch('http://localhost:5000/api/collectes', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  })
    .then(res => {
      if (!res.ok) {
        throw new Error('Erreur autorisation ou serveur');
      }
      return res.json();
    })
    .then(data => setCollectes(data))
    .catch(err => console.error('Erreur chargement collectes :', err));
}, []);


  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!nouvelAppel.lieu || !nouvelAppel.cts || !nouvelAppel.groupeSanguin || !nouvelAppel.date || !nouvelAppel.heure) {
    alert('Tous les champs sont requis.');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/appels', {  // Remplace l’URL si besoin
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(nouvelAppel)
    });

    if (!response.ok) {
      const errorData = await response.json();
      alert(`Erreur: ${errorData.message}`);
      return;
    }

    const data = await response.json();
    alert(data.message); // "Appel créé et donneurs notifiés."

    // Ajouter localement à l’état pour affichage instantané
    const nouvelId = appels.length + 1;
    setAppels([...appels, { id: nouvelId, ...nouvelAppel }]);

    // Réinitialisation
    setShowForm(false);
    setNouvelAppel({
      lieu: '',
      cts: '',
      groupeSanguin: '',
      date: '',
      heure: '',
    });
    setShowForm(false);

  } catch (error) {
    console.error('Erreur lors de la soumission de l’appel :', error);
    alert('Une erreur est survenue. Vérifie ta connexion ou réessaye.');
  }
};


const handleChange = (e) => {
  const { name, value } = e.target;
  setNouvelAppel((prev) => ({ ...prev, [name]: value }));
};

  return (
    <div className="min-h-screen bg-red-100 p-6">
      <MedicalNavBar />
      <div className="flex items-center justify-between mb-10 mt-18">
        <h2 className="text-2xl font-bold text-red-700">📣 Appels aux Donneurs</h2>
        <button
          className="bg-red-600 text-black px-4 py-2 rounded hover:bg-red-700 transition"
          onClick={() => setShowForm(!showForm)}
        >
          ➕ Nouvel Appel
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="bg-gray-300 p-4 rounded shadow-md mb-6 text-black hover:bg-blue-300">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Sélection du centre */}
            <select
            name="centre_id"
            className="border p-2 rounded text-black"
            value={nouvelAppel.centre_id}
            onChange={handleChange}
            required
          >
            <option value="">Sélectionnez un centre</option>
            {centres.length === 0 ? (
              <option disabled>Aucun centre disponible</option>
            ) : (
              centres.map((centre) => (
                <option key={centre.id} value={centre.id}>
                  {centre.name}
                </option>
              ))
            )}
          </select>


            {/* Sélection de la collecte */}
            <select
              name="collecte_id"
              className="border p-2 rounded text-black"
              value={nouvelAppel.collecte_id}
              onChange={handleChange}
              required
            >
              <option value="">Choisir une collecte</option>
              {collectes.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.type} - {c.date}
                </option>
              ))}
            </select>

            {/* Groupe sanguin */}
            <select
              name="groupeSanguin"
              className="border p-2 rounded text-black"
              value={nouvelAppel.groupeSanguin}
              onChange={handleChange}
              required
            >
              <option value="">Groupe sanguin ciblé</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>

            {/* Date et heure */}
            <input
              type="date"
              name="date"
              className="border p-2 rounded text-black"
              value={nouvelAppel.date}
              onChange={handleChange}
              required
            />
            <input
              type="time"
              name="heure"
              className="border p-2 rounded text-black"
              value={nouvelAppel.heure}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mt-4 text-right">
            <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-900">
              ✅ Valider l’appel
            </button>
          </div>
        </form>
      )}

      {/* Liste des appels */}
      <div className="bg-gray-200 p-4 rounded shadow">
        <h3 className="text-lg font-semibold mb-4 text-gray-700">📋 Appels en cours</h3>
        {appels.length > 0 ? (
          appels.map((appel) => (
            <div
              key={appel.id}
              className="bg-gray-300 rounded-2xl shadow-md mb-6 p-6 border-l-8 border-red-600"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <div>
                  <h2 className="text-xl font-semibold text-red-700 mb-2">
                    {appel.centreNom}
                  </h2>
                  <p>
                    <FaMapMarkerAlt className="inline mr-1 text-red-500" />
                    <strong>Collecte :</strong> {appel.collecte?.type} - {appel.collecte?.date}
                  </p>
                  <p>
                    <strong>Date :</strong> {appel.date} à {appel.heure}
                  </p>
                  <p>
                    <strong>Groupe ciblé :</strong> {appel.groupeSanguin}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">Aucun appel en cours.</p>
        )}
      </div>
    </div>
  );
}

export default Appeldonneurs;
