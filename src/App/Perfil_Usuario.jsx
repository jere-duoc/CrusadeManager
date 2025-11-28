import React from "react"; // Ya no necesitamos useState para los datos
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Perfil_Usuario = () => {
  const navigate = useNavigate();
  
  const { usuario, logout, updateUser } = useAuth();

  if (!usuario) return null;

  const handleChangeAvatar = (event) => {
    const file = event.target.files[0];
    if (file) {
      // FileReader convierte la imagen en texto (Base64)
      const reader = new FileReader();
      
      reader.onload = () => {
        const imagenEnTexto = reader.result; 
        
        updateUser({ avatar: imagenEnTexto });
      };
      
      reader.readAsDataURL(file);
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleClose = () => {
    navigate(-1);
  };

  const handleViewRoster = () => {
    navigate("/roster");
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ backgroundColor: "rgba(18, 18, 18, 0.6)" }}
    >
      <div
        className="card position-relative shadow-lg p-5 text-center bg-dark text-white d-flex flex-column align-items-center"
        style={{
          maxWidth: "400px",
          width: "90%",
          borderRadius: "20px",
          boxShadow: "0 8px 25px rgba(0,0,0,0.6)",
        }}
      >
        <button
          type="button"
          className="btn-close btn-close-white position-absolute top-0 end-0 m-3"
          aria-label="Close"
          onClick={handleClose}
        ></button>

        {/* Foto de perfil */}
        <div className="position-relative mb-4">
          <img
            // 3. LEEMOS LA FOTO REAL (O EL PLACEHOLDER SI ES NUEVO)
            src={usuario.avatar || "https://via.placeholder.com/150"}
            alt="Foto de perfil"
            className="rounded-circle mx-auto d-block"
            style={{
              width: "130px",
              height: "130px",
              objectFit: "cover",
              border: "3px solid #6c757d",
              transition: "transform 0.3s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
          
          {/* Input invisible para subir foto */}
          <input
            type="file"
            accept="image/*"
            onChange={handleChangeAvatar}
            className="position-absolute top-0 start-0 w-100 h-100 opacity-0"
            style={{ cursor: "pointer" }}
            title="Cambiar foto de perfil"
          />
        </div>

        {/* 4. NOMBRE Y CORREO REALES */}
        <h4 className="fw-bold">{usuario.name}</h4>
        <p className="text-muted mb-4">{usuario.email}</p>

        <div className="d-flex flex-column align-items-center w-100 gap-3">
          <button
            className="btn btn-primary w-75"
            style={{ transition: "all 0.3s" }}
            onClick={handleViewRoster}
          >
            Ver Roster
          </button>

          <button
            className="btn btn-secondary w-75"
            style={{ transition: "all 0.3s" }}
            onClick={handleLogout}
          >
            Cerrar sesión
          </button>
        </div>
      </div>
    </div>
  );
};

export default Perfil_Usuario;