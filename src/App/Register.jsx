import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

import '../assets/style_nuevo/index.css';
import '../assets/style_nuevo/styles.css';

export default function Register() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const [error, setError] = useState("");

  const { registrar } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      if (!nombre || !email || !pass)
        throw new Error("Completa todos los campos.");

      if (pass.length < 6)
        throw new Error("La contraseña debe tener al menos 6 caracteres.");

      registrar(nombre, email, pass);

      alert("Cuenta creada. Ahora inicia sesión.");
      navigate("/login");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-dark bg-opacity-25">
      <section
        className="card p-4 shadow-lg text-light bg-secondary bg-opacity-50"
        style={{ maxWidth: "400px", borderRadius: "20px" }}
      >
        <h2 className="text-center mb-3 fw-bold">Crear Cuenta</h2>
        <p>
          Únete a las cruzadas, registra tu ejército y escala en el ranking.
        </p>

        <form onSubmit={handleSubmit} className="form auth-form">
          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input
              type="text"
              className="form-control bg-dark text-light border-0"
              placeholder="Ej. Inquisidor Valeria"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Correo</label>
            <input
              type="email"
              className="form-control bg-dark text-light border-0"
              placeholder="ejemplo@crusade.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Contraseña</label>
            <input
              type="password"
              className="form-control bg-dark text-light border-0"
              placeholder="Mínimo 6 caracteres"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              required
            />
          </div>

          {error && (
            <p className="text-danger text-center fw-semibold">{error}</p>
          )}

          <div className="d-grid mt-3">
            <button className="btn btn-outline-light fw-semibold" type="submit">
              Registrarme
            </button>
          </div>
        </form>

        <p className="text-center mt-4 text-light">
          ¿Ya tienes cuenta?{" "}
          <Link to="/login" className="link-light text-decoration-underline">
            Inicia sesión
          </Link>
        </p>
      </section>
    </div>
  );
}