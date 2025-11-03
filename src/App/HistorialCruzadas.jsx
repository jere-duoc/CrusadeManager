import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/style/HistorialCruzadas.css";

export default function HistorialCruzadas() {
  const navigate = useNavigate();
  const [busqueda, setBusqueda] = useState("");

  const cruzadas = [
    {
      id: 1,
      nombre: "La quinta Cruzada",
      organizador: "Isaac Rivas",
      jugadores: 24,
      banner:
        "https://warhammer40000.com/wp-content/uploads/2023/07/q2AbCEAP5wfRAgzw.jpeg",
    },
    {
      id: 2,
      nombre: "nombre2",
      organizador: "...",
      jugadores: 18,
      banner:
        "https://pressover.news/wp-content/uploads/2022/03/warhammer-40K.jpg",
    },
    {
      id: 3,
      nombre: "nombre3",
      organizador: "...",
      jugadores: 32,
      banner:
        "https://www.nintendo.com/eu/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_Warhammer40000Mechanicus_image1600w.jpg",
    },
    {
      id: 4,
      nombre: "nombre4",
      organizador: "...",
      jugadores: 20,
      banner:
        "https://pressover.news/wp-content/uploads/2022/02/Warhammer-40000-SoB-Gallery-art-2-1200x800-1.jpg",
    },
  ];

  
  const cruzadasFiltradas = cruzadas.filter((c) =>
    c.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="historial-bg min-vh-100 d-flex flex-column justify-content-center py-5">
      <div className="container text-white">
        
        <div className="d-flex justify-content-start mb-4">
          <button
            className="btn btn-outline-light rounded-pill px-4 fw-bold"
            onClick={() => navigate("/")}
          >
            ← Volver
          </button>
        </div>

        
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3">Historial de Cruzadas</h2>
          <input
            type="text"
            className="form-control mx-auto buscador"
            placeholder="Buscar cruzada por nombre..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </div>

        
        <div className="scroll-container">
          {cruzadasFiltradas.length > 0 ? (
            cruzadasFiltradas.map((cruzada) => (
              <div
                key={cruzada.id}
                className="cruzada-card bg-dark bg-opacity-75 shadow-lg"
              >
                <img
                  src={cruzada.banner}
                  alt={cruzada.nombre}
                  className="banner-img rounded-top"
                />
                <div className="p-3">
                  <h5 className="fw-bold">{cruzada.nombre}</h5>
                  <p className="mb-1">
                    <strong>Organizador:</strong> {cruzada.organizador}
                  </p>
                  <p>
                    <strong>Jugadores:</strong> {cruzada.jugadores}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center w-100 mt-5">
              No se encontraron cruzadas con ese nombre 
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
