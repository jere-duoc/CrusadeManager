import { Routes, Route } from "react-router-dom"
import Navbar_Menu from './assets/components/Navbar_menu'
import Navbar_Evento from './assets/components/Navbar_Evento'
import Register from './App/Register'
import HomeLog from './App/HomeLog'
import Home from './App/Home'
import Login from './App/Login'
import Evento from './App/Evento'
import Perfil_Usuario from './App/Perfil_Usuario'
import Crear_Cruzada from './App/Crear_Cruzada'
import HistorialCruzadas from './App/HistorialCruzadas'
import Jugadores from './App/Jugadores'
import Placings from './App/Placings'
import ArmyBuilder from './assets/components/Datasheet'
import Emparejamiento from "./App/Emparejamiento"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<><Navbar_Menu /><Home /></>} />
        <Route path="/Crear_Cruzada" element={<><Navbar_Menu /><Crear_Cruzada/></>} />
        <Route path="/Historial" element={<><Navbar_Menu /><HistorialCruzadas/></>} />
        <Route path="/Perfil" element={<><Navbar_Menu /><Perfil_Usuario /></>} />
        <Route path="/Login" element={<><Navbar_Menu /><Login /></>} />
        <Route path="/register" element={<><Navbar_Menu /><Register /></>} />
        <Route path="/home-log" element={<><Navbar_Menu /><HomeLog /></>} />

        <Route path="/Evento" element={<><Navbar_Evento /><Evento /></>} />
        <Route path="/Jugadores" element={<><Navbar_Evento /><Jugadores /></>} />
        <Route path="/Emparejamiento" element={<><Navbar_Evento /><Emparejamiento /></>} />
        <Route path="/Placings" element={<><Navbar_Evento /><Placings /></>} />
        <Route path="/Perfil_Usuario" element={<><Navbar_Evento /><Perfil_Usuario /></>} />
        <Route path="/roster" element={<><Navbar_Evento /><ArmyBuilder /></>} />
      </Routes>
    </>
  )
}

export default App
