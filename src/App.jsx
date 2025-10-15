import { Routes, Route } from "react-router-dom"
import Navbar_Menu from './assets/components/Navbar_menu'

import Home from './pages/Home'
import Login from './pages/Login'
import Evento from './Evento'
import Perfil_Usuario from './Perfil_Usuario'

function App() {

  return (
    <>
      {/* Navbar fuera de Routes para que se muestre en todas las rutas */}
      <Navbar_Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/evento" element={<Evento />} />
        <Route path="/perfil" element={<Perfil_Usuario />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App
