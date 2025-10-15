import { Routes, Route } from "react-router-dom"
import Navbar_Menu from './assets/components/Navbar_menu'
import Navbar_Evento from './assets/components/Navbar_Evento'
import Home from './App/Home'
import Login from './App/Login'
import Evento from './App/Evento'
import Perfil_Usuario from './App/Perfil_Usuario'
import Crear_Cruzada from './App/Crear_Cruzada'
import Historial from './App/Historial'

import './assets/style/App.css';
import Emparejamiento from "./App/Emparejamiento"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<><Navbar_Menu /><Home /></>} />
        <Route path="/Crear_Cruzada" element={<><Navbar_Menu /><Crear_Cruzada/></>} />
        <Route path="/Historial" element={<><Navbar_Menu /><Historial/></>} />
        <Route path="/Perfil" element={<><Navbar_Menu /><Perfil_Usuario /></>} />
        <Route path="/Login" element={<><Navbar_Menu /><Login /></>} />

        <Route path="/Evento" element={<><Navbar_Evento /><Evento /></>} />
        <Route path="/Emparejamiento" element={<><Navbar_Evento /><Emparejamiento /></>} />

      </Routes>
    </>
  )
}

export default App
