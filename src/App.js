import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "./Assets/Login/Login.js";
import { LogoutButton } from "./Assets/Logout/Logout.js";
//import { ProfileButton } from "./Assets/Profile/Profile.js";
import Profile  from "./Assets/Profile/Profile.js";
import React from 'react';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { PrimeReactProvider} from 'primereact/api';
import { Routes, Route } from 'react-router-dom';
import Topbar from './Assets/Components/Topbar/Topbar';
import Dashboard from './Assets/Components/Dashboard/Dashboard';
import Fiscalizacion from "./Assets/Components/Fiscalizacion/Fiscalizacion.js";
import Ext from "./Assets/Components/Ext/Ext.js";
import Configuracion from "./Assets/Components/Configuracion/ConfigPage.js";
import RecursosHumanos from "./Assets/Components/RecursosHumanos/RecursosHumanos.js";
//import CVmenu from "./Assets/Components/CVmenu/CVmenu.js";

import './App.css';

function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <PrimeReactProvider>
      <div className="App">
      {isAuthenticated ? (
          <>
            <Topbar />
            <Routes>
              <Route path="/Dashboard" element={<Dashboard />} />
              <Route path="/Fiscalizacion" element={<Fiscalizacion />} />
              <Route path="/RecursosHumanos" element={<RecursosHumanos />} />
              <Route path="/Extra" element={<Ext />} />
              <Route path="/Configuracion" element={<Configuracion />} />
              {/* Agrega más rutas aquí */}
            </Routes>
            <Profile />
            <LogoutButton />
          </>
        ) : (
          <LoginButton />
        )}
      </div>
    </PrimeReactProvider>
  );
}

export default App;
