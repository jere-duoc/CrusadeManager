import { Routes, Route } from "react-router-dom"
import Navbar_Menu from './assets/components/Navbar_menu'
import Home from './pages/Home'
import Login from './pages/Login'
import Evento from './Evento'
import Perfil_Usuario from './Perfil_Usuario'
import Crear_Cruzada from './Crear_Cruzada'
import Historial from './Historial'

function App() {

  return (
    <>
      {/* Navbar fuera de Routes para que se muestre en todas las rutas */}
      <Navbar_Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Crear_Cruzada" element={<Crear_Cruzada/>} />
        <Route path="/Historial" element={<Historial/>} />
        <Route path="/Evento" element={<Evento />} />
        <Route path="/Perfil" element={<Perfil_Usuario />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App
