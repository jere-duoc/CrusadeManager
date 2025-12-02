import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
// Importamos tu contexto real
import { useAuth } from "../context/AuthContext";
import "../assets/style/Perfil.css";

const Perfil_Usuario = () => {
  const navigate = useNavigate();
  const { usuario, logout, updateUser } = useAuth();

  // Estados locales para el formulario
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  // Cargar datos cuando el componente se monta o cambia el usuario
  useEffect(() => {
    if (usuario) {
      setUserName(usuario.name || "");
      setUserEmail(usuario.email || "");
    }
  }, [usuario]);

  // Manejadores de eventos
  const handleClose = () => navigate("/");
  
  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleSaveChanges = () => {
    if (usuario) {
      updateUser({ name: userName, email: userEmail });
      // Aquí podrías poner una alerta bonita o un toast
      alert("Perfil actualizado correctamente");
    }
  };

  const handleChangeAvatar = (event) => {
    const file = event.target.files[0];
    if (file) {
      const mockUrl = URL.createObjectURL(file);
      updateUser({ avatar: mockUrl });
    }
  };

  // Si no hay usuario, mostrar carga o nada
  if (!usuario) return null;

  return (
    <>

      {/* --- ESTRUCTURA BOOTSTRAP --- */}
      <div className="profile-container">
        
        <div className="custom-card p-4 p-md-5">
          {/* Botón Cerrar */}
          <button className="btn-close-floating" onClick={handleClose}>
            <span className="material-symbols-outlined">close</span>
          </button>

          {/* Header */}
          <div className="d-flex justify-content-between align-items-start mb-4">
            <div>
              <h1 className="display-6 fw-bold text-white mb-1 text-display">Perfil</h1>
              <p className="text-muted-custom mb-0">Visualiza y administra los detalles de tu perfil.</p>
            </div>
          </div>

          <hr style={{ borderColor: 'var(--border-color)' }} />

          {/* Sección Superior: Avatar e Info */}
          <div className="row py-4 align-items-center">
            <div className="col-12 col-md-8 d-flex align-items-center gap-4 mb-3 mb-md-0">
              
              {/* Avatar con Input de Archivo */}
              <div className="avatar-container">
                <div 
                  className="avatar-img" 
                  style={{ backgroundImage: `url("${usuario.avatar || 'https://placehold.co/128x128/f20d18/ffffff?text=U'}")` }}
                ></div>
                
                {/* Input transparente para subir foto */}
                <input 
                    type="file" 
                    accept="image/*" 
                    onChange={handleChangeAvatar}
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0, cursor: 'pointer', zIndex: 5 }}
                />
                
                <button className="btn-edit-avatar">
                  <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>edit</span>
                </button>
              </div>

              <div>
                <h3 className="fw-bold m-0 text-display">{usuario.name}</h3>
                <p className="text-muted-custom m-0">{usuario.email}</p>
              </div>
            </div>

            <div className="col-12 col-md-4 text-md-end">
              <button className="btn btn-outline-light border-secondary text-white fw-bold" style={{ backgroundColor: '#271b1c' }}>
                Cambiar Contraseña
              </button>
            </div>
          </div>

          <hr style={{ borderColor: 'var(--border-color)' }} />

          {/* Sección Principal: Formulario y Roster */}
          <div className="row g-5 mt-2">
            
            {/* Columna Izquierda: Formulario */}
            <div className="col-12 col-md-6">
              <h4 className="fw-bold mb-4 text-display">Datos de la Cuenta</h4>
              
              <div className="mb-4">
                <label className="form-label text-white">Nombre de Usuario</label>
                <input 
                    type="text" 
                    className="form-control custom-input" 
                    value={userName} 
                    onChange={(e) => setUserName(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label text-white">Dirección de Correo</label>
                <input 
                    type="email" 
                    className="form-control custom-input" 
                    value={userEmail} 
                    onChange={(e) => setUserEmail(e.target.value)}
                />
              </div>
            </div>

            {/* Columna Derecha: Roster */}
            <div className="col-12 col-md-6">
              <h4 className="fw-bold mb-4 text-display">Roster Favorito</h4>
              
              <div className="roster-card d-flex flex-col align-items-center justify-content-center gap-3">
                <div className="position-absolute top-0 end-0 p-3 text-muted">
                    <span className="material-symbols-outlined">info</span>
                </div>
                
                <img 
                    src="https://placehold.co/80x80/f20d18/ffffff?text=Icon" 
                    alt="Faction Icon" 
                    style={{ width: '80px', height: '80px', objectFit: 'contain' }}
                />
                
                <div>
                    <h5 className="fw-bold m-0 text-display">Indomitus Crusade</h5>
                    <small className="text-muted-custom">Ultramarines</small>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Botones */}
          <div className="d-flex flex-column flex-sm-row justify-content-end gap-3 mt-5 pt-3 border-top" style={{ borderColor: 'var(--border-color)' }}>
            <button className="btn-custom-ghost" onClick={handleClose}>
                Cancelar
            </button>
            <button className="btn-custom-primary" onClick={handleSaveChanges}>
                Guardar Cambios
            </button>
            <button className="btn-custom-secondary" onClick={handleLogout}>
                Cerrar Sesión
            </button>
          </div>

        </div>
      </div>
    </>
  );
};

export default Perfil_Usuario;