import React, { useState } from "react";
import "../assets/style/Evento.css"; 

export default function Crear_Cruzada() {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    redes: "",
    cantidadJugadores: "",
    duracion: "",
    archivo: null,
    banner: null,
    bannerPreview: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      if (name === "banner") {
        const preview = URL.createObjectURL(files[0]);
        setFormData({ ...formData, banner: files[0], bannerPreview: preview });
      } else {
        setFormData({ ...formData, [name]: files[0] });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Evento creado (ficticio). Revisa la consola para ver los datos.");
    console.log("Datos del evento:", formData);
  };

  return (
    <div className="crear-evento-bg min-vh-100 d-flex flex-column justify-content-center py-5">
      <div className="container">
        <div className="row">
          {/* Formulario */}
          <div className="col-12 col-md-6 mb-4">
            <form
              className="bg-dark bg-opacity-75 p-4 rounded-lg shadow-2xl text-white"
              onSubmit={handleSubmit}
            >
              <h2 className="text-center mb-4">Crear Evento</h2>

              <h4 className="mb-3">Datos del Organizador</h4>
              <div className="mb-3">
                <label className="form-label">Nombre:</label>
                <input
                  type="text"
                  className="form-control"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Correo:</label>
                <input
                  type="email"
                  className="form-control"
                  name="correo"
                  value={formData.correo}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Teléfono:</label>
                <input
                  type="tel"
                  className="form-control"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Redes Sociales:</label>
                <input
                  type="text"
                  className="form-control"
                  name="redes"
                  value={formData.redes}
                  onChange={handleChange}
                />
              </div>

              <h4 className="mb-3 mt-4">Detalles del Evento</h4>
              <div className="mb-3">
                <label className="form-label">Cantidad de jugadores:</label>
                <input
                  type="number"
                  className="form-control"
                  name="cantidadJugadores"
                  value={formData.cantidadJugadores}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Duración (en horas):</label>
                <input
                  type="number"
                  className="form-control"
                  name="duracion"
                  value={formData.duracion}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Subir archivos (reglamentos, documentos):</label>
                <input
                  type="file"
                  className="form-control"
                  name="archivo"
                  onChange={handleChange}
                />
                {formData.archivo && (
                  <small className="text-white mt-2 d-block">
                    Archivo: {formData.archivo.name}
                  </small>
                )}
              </div>

              <div className="mb-3">
                <label className="form-label">Imagen de Banner:</label>
                <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  name="banner"
                  onChange={handleChange}
                />
                {formData.bannerPreview && (
                  <img
                    src={formData.bannerPreview}
                    alt="Banner Preview"
                    className="img-fluid rounded mt-3"
                    style={{ maxHeight: "200px", objectFit: "cover", width: "100%" }}
                  />
                )}
              </div>

              <button type="submit" className="btn btn-primary w-100 mt-3">
                Crear Evento
              </button>
            </form>
          </div>

          {/* Preview como página Evento */}
          <div className="col-12 col-md-6 mb-4">
            <div className="contenido">
              <div className="bg-dark bg-opacity-75 rounded-lg shadow-2xl p-4 text-white">
                {formData.bannerPreview && (
                  <img
                    src={formData.bannerPreview}
                    alt="Banner del evento"
                    className="img-fluid rounded mb-3"
                    style={{ maxHeight: "200px", objectFit: "cover", width: "100%" }}
                  />
                )}

                <h4 className="mb-3 texto-enmarcado">Organizador del Evento</h4>
                <p><strong>Nombre:</strong> {formData.nombre || "..."}</p>
                <p><strong>Correo:</strong> {formData.correo || "..."}</p>
                <p><strong>Teléfono:</strong> {formData.telefono || "..."}</p>
                <p><strong>Redes Sociales:</strong> {formData.redes || "..."}</p>

                <h4 className="mb-3 mt-4 texto-enmarcado">Detalles del Evento</h4>
                <p><strong>Cantidad de jugadores:</strong> {formData.cantidadJugadores || "..."}</p>
                <p><strong>Duración:</strong> {formData.duracion || "..."} horas</p>
                <p><strong>Archivos:</strong> {formData.archivo ? formData.archivo.name : "..."}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
