import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const Perfil_Usuario = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    name: "Juan Pérez",
    email: "juan.perez@example.com",
    avatar: "https://via.placeholder.com/150",
  });

  const handleChangeAvatar = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUserData({ ...userData, avatar: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLogout = () => {
    navigate("/"); 
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
        className="card shadow-lg p-5 text-center bg-dark text-white d-flex flex-column align-items-center"
        style={{
          maxWidth: "400px",
          width: "90%",
          borderRadius: "20px",
          boxShadow: "0 8px 25px rgba(0,0,0,0.6)",
        }}
      >
        {/* Foto editable */}
        <div className="position-relative mb-4">
          <img
            src={userData.avatar}
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
          <input
            type="file"
            accept="image/*"
            onChange={handleChangeAvatar}
            className="position-absolute top-100 start-50 translate-middle opacity-0"
            style={{ width: "130px", cursor: "pointer" }}
          />
        </div>

        {/* Nombre y correo */}
        <h4 className="fw-bold">{userData.name}</h4>
        <p className="text-muted mb-4">{userData.email}</p>

        <div className="d-flex flex-column align-items-center w-100 gap-3">
          <button
            className="btn btn-primary w-75"
            style={{ transition: "all 0.3s" }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "#0056b3";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "";
              e.currentTarget.style.transform = "scale(1)";
            }}
            onClick={handleViewRoster}
          >
            Ver Roster
          </button>

          <button
            className="btn btn-secondary w-75"
            style={{ transition: "all 0.3s" }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "#6c757d";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "";
              e.currentTarget.style.transform = "scale(1)";
            }}
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

