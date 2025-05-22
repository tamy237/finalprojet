import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; // Importation correcte

// import AdminBoard from './pages/adminpages/AdminBoard';
import Vue1 from './pages/entrée/vue1';
import FaireDon from './pages/utilisateur/Donsutilisateur/FaireDon';
import DemanderSang from './pages/utilisateur/Donsutilisateur/DemanderSang';
import Accueil from './pages/accueil/Accueil';
import Acc1 from './pages/accueil/Acc1';
import Ldons from './pages/hopital/listes/Ldons';
import Ajoutdon from './pages/hopital/ajouts/Ajoutdon';
import AjoutCollecte from './pages/hopital/ajouts/AjoutCollecte';
import Lcollectes from './pages/hopital/listes/Lcollectes';
import Historiqdem from './pages/hopital/historique demandes/Historiqdem.jsx/Historiqdem';
import Lieucollecte from './pages/lieucollecte/Lieucollecte';
import Statsdon from './pages/hopital/statistiques/Statsdon';
import Appeldonneurs from './pages/hopital/aappeldonneur/Appeldonneurs';
import ConnexionPersonnelH from './pages/connexions/ConnexionPersonnelH';
import ConnexionUtilisateur from './pages/connexions/ConnexionUtilisateur';
import Controle_don from './pages/utilisateur/control_don/control_don';
import Cartedon from './pages/hopital/donsHopital/carte-donneurs/Cartedon';
import InscriptionPersonnelh from './pages/inscription/InscriptionPersonnelh'
import BloodRequests from './pages/Notifications/BloodResquests';
import MedicalNavBar from './pages/navbar/MedicalNavBar';
import UserNavBar from './pages/navbar/UserNavBar';
import AjouterCentre from './pages/hopital/ajouts/AjouterCentre';
import Control_don from './pages/utilisateur/control_don/control_don';
import Home from './pages/accueil/Home';
import Dash from './pages/navbar/Dash';
import Ldemandes from './pages/hopital/listes/Ldemandes';
import PrivateRoute from './components/PrivateRoute'
import Hpersonnel from './pages/hopital/donsHopital/Hpersonnel';
import ListeCollectes from './pages/hopital/listes/ListeCollectes';
import ListeStock from './pages/hopital/listes/ListeStock';
import Listercollcte from './pages/utilisateur/listes/listercollecte';
import Listerctes from './pages/utilisateur/listes/listerctes';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        {/* Route par défaut */}
        <Route path="/" element={<Navigate to="/premiere" replace />} />
        
        {/* Autres routes */}
        {/* <Route path="/ltcollectes" element={<Listerctes/>} />
        <Route path="/ltc" element={<Listercollcte/>} />
        <Route path="/stocks" element={<ListeStock />} />
        <Route path="/cdcollecte" element={<ListeCollectes />} />
        <Route path="/ajouter_centre" element={<AjouterCentre />} />
        <Route path="/home" element={<Home />} />
        <Route path="/liste_demandes" element={<Ldemandes/>} />
        <Route path="/admin" element={<Dash />} />
        <Route path="/usernavbar" element={<UserNavBar />} />
        <Route path="/medicalnavbar" element={<MedicalNavBar />} />
        {/* <Route path="/inscription" element={<Inscriptionutilisateur />} /> */}
        {/* <Route path="/notifications" element={<BloodRequests role="personnel medical" />} />
        <Route path="/cartedonneur" element={<Cartedon role="donneur" />} />
        <Route path="/fairedon" element={<Control_don role="donneur"/>} />
        <Route path="/faire-un-don" element={<FaireDon role="donneur"/>} />
        <Route path="/ancien-donneur/:id" element={<FaireDon role="donneur"/>} />
        <Route path="/appeldon" element={<Appeldonneurs role="personnel medical"/>} />
        <Route path="/statistiques" element={<Statsdon role="personnel medical"/>} />
        <Route path="/lieudecollecte" element={<Lieucollecte role="personnel medical"/>} />
        <Route path="/historique_demancdes" element={<Historiqdem role="personnel medical"/>} />
        <Route path="/listecollecte" element={<Lcollectes role="personnel medical"/>} />
        <Route path="/ajoutercollecte" element={<AjoutCollecte role="personnel medical"/>} />
        <Route path="ajouterdonneurH" element={<Ajoutdon role="personnel medical"/>} />
        <Route path="/listedonneurs" element={<Ldons role="personnel medical"/>} />
        <Route path="/test" element={<Acc1 role="personnel medical"/>} />
        {/* <Route path="/admin" element={<AdminBoard role="personnel medical"/>} /> */}
        {/* <Route path="/premiere" element={<Vue1 />} />
        <Route path="/controle_don" element={<FaireDon role="donneur"  />} />
        <Route path="/demander_sang" element={<DemanderSang role="donneur"  />} />
        <Route
        path="/accueil"
        element={
          <PrivateRoute allowedRoles={["utilisateur"]}>
            <Accueil />
          </PrivateRoute>
        }/>        
       <Route
        path="/personnelHopital"
        element={
          <PrivateRoute allowedRoles={["personnel"]}>
            <Hpersonnel />
          </PrivateRoute>
        }/>        
//  */} 

          {/* //routes personnel medical */}
            <Route path="/premiere" element={<Vue1 />} />
           <Route path="/connexionH" element={<ConnexionPersonnelH />} />
           <Route path="/connexionU" element={<ConnexionUtilisateur />} />
           <Route path="/register" element={<InscriptionPersonnelh />} />

          <Route path="/personnelHopital" element={<PrivateRoute allowedRoles={["personnel"]}><Hpersonnel/></PrivateRoute>} />
          <Route path="/liste_demandes" element={<PrivateRoute allowedRoles={["personnel"]}><Ldemandes/></PrivateRoute>} />
          <Route path="/ajouter_centre" element={<PrivateRoute allowedRoles={["personnel"]}><AjouterCentre/></PrivateRoute>} />
          <Route path="/appeldon" element={<PrivateRoute allowedRoles={["personnel"]}><Appeldonneurs/></PrivateRoute>} />
          <Route path="/statistiques" element={<PrivateRoute allowedRoles={["personnel"]}><Statsdon/></PrivateRoute>} />
          <Route path="/lieudecollecte" element={<PrivateRoute allowedRoles={["personnel"]}><Lieucollecte/></PrivateRoute>} />
          <Route path="/historique_demancdes" element={<PrivateRoute allowedRoles={["personnel"]}><Historiqdem/></PrivateRoute>} />
          <Route path="/listecollecte" element={<PrivateRoute allowedRoles={["personnel"]}><Lcollectes/></PrivateRoute>} />
          <Route path="/ajoutercollecte" element={<PrivateRoute allowedRoles={["personnel"]}><AjoutCollecte/></PrivateRoute>} />
          <Route path="ajouterdonneurH" element={<PrivateRoute allowedRoles={["personnel"]}><Ajoutdon/></PrivateRoute>} />
          <Route path="/listedonneurs" element={<PrivateRoute allowedRoles={["personnel"]}><Ldons/></PrivateRoute>} />
          <Route path="/cartedonneur" element={<PrivateRoute allowedRoles={["personnel"]}><Cartedon/></PrivateRoute>} />
          <Route path="/notifications" element={<PrivateRoute allowedRoles={["personnel"]}><BloodRequests/></PrivateRoute>} />
          <Route path="/cdcollecte" element={<PrivateRoute allowedRoles={["personnel"]}><ListeCollectes/></PrivateRoute>} />
          <Route path="/stocks" element={<PrivateRoute allowedRoles={["personnel"]}><ListeStock/></PrivateRoute>} />

          {/* routes utilisateur */}

          <Route path="/accueil" element={<PrivateRoute allowedRoles={["utilisateur"]}><Accueil/></PrivateRoute>} />
          {/* <Route path="/faire-un-don" element={<PrivateRoute allowedRoles={["utilisateur"]}><FaireDon/></PrivateRoute>} /> */}
          <Route path="/ancien-donneur/:id" element={<PrivateRoute allowedRoles={["utilisateur"]}><FaireDon/></PrivateRoute>} />
          <Route path="/controle_don" element={<PrivateRoute allowedRoles={["utilisateur"]}><FaireDon/></PrivateRoute>} />
          <Route path="/demander_sang" element={<PrivateRoute allowedRoles={["utilisateur", "personnel"]}><DemanderSang/></PrivateRoute>} />
          <Route path="/ltcollectes" element={<PrivateRoute allowedRoles={["utilisateur"]}><Listerctes/></PrivateRoute>} />
          <Route path="/ltc" element={<PrivateRoute allowedRoles={["utilisateur"]}><Listercollcte/></PrivateRoute>} />

      </Routes>


    </Router>
  );
}

export default App;
