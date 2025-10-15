import { Routes, Route } from "react-router-dom"
import Navbar_Menu from './assets/components/Navbar_menu'
import Home from './App/Home'
import Login from './App/Login'
import Evento from './App/Evento'
import Perfil_Usuario from './App/Perfil_Usuario'
import Crear_Cruzada from './App/Crear_Cruzada'
import Historial from './App/Historial'
import './assets/style/App.css';
import './assets/style/Navbar.css';

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
