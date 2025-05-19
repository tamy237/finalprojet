import React, { useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import MedicalNavBar from '../../navbar/MedicalNavBar';

function Appeldonneurs() {
  const [showForm, setShowForm] = useState(false);
  const [nouvelAppel, setNouvelAppel] = useState({
    lieu: '',
    cts: '',
    groupeSanguin: '',
    date: '',
    heure: '',
  });

  // ✅ Initialisation correcte du tableau d'appels
  const [appels, setAppels] = useState([
    {
      id: 1,
      groupeSanguin: 'O+',
      cts: 'CTS Yaoundé',
      date: '2025-05-03',
      heure: '10:00',
      lieu: 'Hôpital Général',
    },
    {
      id: 2,
      groupeSanguin: 'A-',
      cts: 'CTS Douala',
      date: '2025-05-04',
      heure: '09:00',
      lieu: 'Bonamoussadi',
    },
  ]);

  const handleChange = (e) => {
    setNouvelAppel({ ...nouvelAppel, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Vérification rapide des champs (en cas de fail du "required")
    if (!nouvelAppel.lieu || !nouvelAppel.cts || !nouvelAppel.groupeSanguin || !nouvelAppel.date || !nouvelAppel.heure) {
      alert('Tous les champs sont requis.');
      return;
    }

    const nouvelId = appels.length + 1;
    setAppels((prevAppels) => [...prevAppels, { id: nouvelId, ...nouvelAppel }]);

    // 🔁 Réinitialisation
    setShowForm(false);
    setNouvelAppel({
      lieu: '',
      cts: '',
      groupeSanguin: '',
      date: '',
      heure: '',
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <MedicalNavBar/>
      {/* Titre + bouton d’ajout */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-red-700">📣 Appels aux Donneurs</h2>
        <button
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
          onClick={() => setShowForm(!showForm)}
        >
          ➕ Nouvel Appel
        </button>
      </div>

      {/* Formulaire d'ajout */}
      {showForm && (
        <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="lieu"
              placeholder="Lieu de la collecte"
              className="border p-2 rounded"
              value={nouvelAppel.lieu}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="cts"
              placeholder="CTS organisateur"
              className="border p-2 rounded"
              value={nouvelAppel.cts}
              onChange={handleChange}
              required
            />
            <select
              name="groupeSanguin"
              className="border p-2 rounded"
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
            <input
              type="date"
              name="date"
              className="border p-2 rounded"
              value={nouvelAppel.date}
              onChange={handleChange}
              required
            />
            <input
              type="time"
              name="heure"
              className="border p-2 rounded"
              value={nouvelAppel.heure}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mt-4 text-right">
            <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              ✅ Valider l’appel
            </button>
          </div>
        </form>
      )}

      {/* Liste des appels en cours */}
      <div className="bg-white p-4 rounded shadow">
        <h3 className="text-lg font-semibold mb-4 text-gray-700">📋 Appels en cours</h3>
        {Array.isArray(appels) && appels.length > 0 ? (
          appels.map((collecte) => (
            <div
              key={collecte.id}
              className="bg-white rounded-2xl shadow-md mb-6 p-6 border-l-8 border-red-600"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <div>
                  <h2 className="text-xl font-semibold text-red-700 mb-2">
                    {collecte.lieu}
                  </h2>
                  <p>
                    <FaMapMarkerAlt className="inline mr-1 text-red-500" />
                    <strong>CTS :</strong> {collecte.cts}
                  </p>
                  <p>
                    <strong>Date :</strong> {collecte.date} à {collecte.heure}
                  </p>
                  <p>
                    <strong>Groupe ciblé :</strong> {collecte.groupeSanguin}
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
