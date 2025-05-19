import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { FaUserShield, FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function ConnexionPersonnelH() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

const handleLogin = async (e) => {
  e.preventDefault();
  try {
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    console.log("Réponse de l’API :", data);

    if (!data || !data.user) {
      alert("Connexion échouée : utilisateur ou mot de passe incorrect");
      return;
    }

    // ✅ Stockage
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));

    // ✅ Redirection
    if (data.user.role === "personnel") {
      navigate("/personnelHopital");
    } else if (data.user.role === "utilisateur") {
      navigate("/accueil");
    } else {
      navigate("/");
    }
  } catch (err) {
    console.error("Erreur lors de la connexion :", err);
    alert("Erreur serveur lors de la connexion");
  }
};




  return (
    <div 
      className="min-h-screen flex items-center justify-center bg-cover bg-center" 
      style={{ backgroundImage: "url('/ds3.png')" }} // Remplace par ton URL d'image
    >
      <div className="bg-gradient-to-r from-red-400  to-red-300 p-8 rounded-2xl shadow-md w-full max-w-lg lg:max-w-3xl xl:max-w-4xl">
        <h2 className="text-2xl font-bold text-center text-white mb-6">Connexion personnel Médical</h2>
        <form onSubmit={handleLogin} className="space-y-4">

          <div className="flex items-center border border-gray-300 p-2 rounded-lg hover:border-amber-400">
            <FaUserShield className="text-white mr-2" />
            <input
              type="email"
              placeholder="Email professionnel"
              className="w-full outline-none bg-transparent text-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="flex items-center border border-gray-300 p-2 rounded-lg hover:border-amber-400">
            <FaLock className="text-white mr-2" />
            <input
              type="password"
              placeholder="Mot de passe"
              className="w-full outline-none bg-transparent text-white"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-700 text-white py-2 rounded-xl hover:bg-red-900 transition"
          >
            Se connecter
          </button>
          <Link to="/register" onClick={() => setMenuOpen(false)} className="text-white hover:text-amber-600">
            <span>Vous n'avez pas encore de compte? Cliquez ici</span>
          </Link>
        </form>
      </div>
    </div>
  );
}
