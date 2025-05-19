import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../navbar/NavBar';
import MedicalNavBar from '../../navbar/MedicalNavBar';

function AjoutCollecte() {
  const [collecte, setCollecte] = useState({
    type: '',
    date: '',
    heure: '',
    centre_id: '',
    cts: '',
    associations: '',
  });

  const [centres, setCentres] = useState([]);
  const navigate = useNavigate();
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-black text-white p-8">
      <MedicalNavBar/>
      <h1 className="text-3xl font-bold mb-6 mt-20">Ajouter une Collecte de Sang</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-lg shadow-md max-w-2xl mx-auto space-y-6"
      >
        <div>
          <label className="block mb-2 text-gray-800">Type de collecte</label>
          <select
            name="type"
            value={collecte.type}
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-gray-800 text-white border focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <option value="">Sélectionner</option>
            <option value="mobile">Mobile</option>
            <option value="fixe">Fixe</option>
            <option value="exceptionnelle">Exceptionnelle</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 text-gray-800">Date</label>
          <input
            type="date"
            name="date"
            value={collecte.date}
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-gray-800 text-white border focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        <div>
          <label className="block mb-2 text-gray-800">Heure</label>
          <input
            type="time"
            name="heure"
            value={collecte.heure}
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-gray-800 text-white border focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        <div>
          <label className="block mb-2 text-gray-800">Centre organisateur</label>
          <select
            name="centre_id"
            value={collecte.centre_id}
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-gray-800 text-white border focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <option value="">Sélectionner un centre</option>
            {centres.map((centre) => (
              <option key={centre.id} value={centre.id}>
                {centre.nom}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-2 text-gray-800">CTS organisateur</label>
          <input
            type="text"
            name="cts"
            value={collecte.cts}
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-gray-800 text-white border focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="CTS Bonanjo"
          />
        </div>

        <div>
          <label className="block mb-2 text-gray-800">Associations participantes</label>
          <textarea
            name="associations"
            value={collecte.associations}
            onChange={handleChange}
            rows={3}
            className="w-full p-3 rounded bg-gray-800 text-white border focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Association A, B, etc."
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-red-700 hover:bg-red-800 text-white py-3 px-6 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Enregistrer la collecte
        </button>
      </form>
    </div>
  );
}

export default AjoutCollecte;
