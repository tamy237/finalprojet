import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import NavBar from '../../navbar/NavBar';
import MedicalNavBar from '../../navbar/MedicalNavBar';

function Lcollectes() {

    const [collectes, setCollectes] = useState([]);

    useEffect(() => {
      axios
        .get("https://api.monsite.com/collectes", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((res) => setCollectes(res.data))
        .catch((err) => console.error("Erreur:", err));
    }, []);
  
    const handleExportPDF = () => {
      // À implémenter plus tard avec jsPDF ou autre
      alert("Export PDF à venir...");
    };
  
    const handleDelete = (id) => {
      if (!window.confirm("Confirmer la suppression ?")) return;
      axios
        .delete(`https://api.monsite.com/collectes/${id}`, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then(() => {
          setCollectes((prev) => prev.filter((item) => item.id !== id));
          alert("Collecte supprimée !");
        });
    };
  return (
<div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-black text-white">
    <MedicalNavBar/>
        <div className="flex justify-between items-center m-4 mt-21">
            <h1 className="text-3xl font-bold">Collectes de sang</h1>
            <button
            onClick={handleExportPDF}
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
            >
            Exporter PDF
            </button>
        </div>

        <table className="w-full bg-white text-black rounded overflow-hidden">
            <thead className="bg-red-700 text-white">
                <tr>
                    <th className="p-2">Type</th>
                    <th>Date</th>
                    <th>Heure</th>
                    <th>Lieu</th>
                    <th>CTS</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {collectes.map((col) => (
                    <tr key={col.id} className="text-center border-t">
                        <td className="p-2">{col.type}</td>
                        <td>{col.date}</td>
                        <td>{col.heure}</td>
                        <td>{col.lieu}</td>
                        <td>{col.cts}</td>
                        <td>
                            <button
                            onClick={() => alert("Édition à venir")}
                            className="bg-yellow-500 hover:bg-yellow-600 text-white px-2 py-1 rounded mr-2"
                            >
                            Modifier
                            </button>
                            <button
                            onClick={() => handleDelete(col.id)}
                            className="bg-red-600 hover:bg-red-700 text-white px-2 py-1 rounded"
                            >
                            Supprimer
                            </button>
                        </td>
                     </tr>
                ))}
            </tbody>
        </table>

        {collectes.length === 0 && (
            <p className="text-center mt-6 text-gray-300">
            Aucune collecte enregistrée pour l’instant.
            </p>
        )}
     </div>
      )
}

export default Lcollectes;
