import { useState } from 'react';

const Login = () => {

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  //Se puede cambiar esta parte simulada por un llammado real al backend con una API

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos del login: ", formData);
    alert("Inicio de secion simulado");
  }

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h2 className="text-center mb-4">Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Correo electrónico</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Ingresa tu correo"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Ingresa tu contraseña"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button className="btn btn-primary w-100" type="submit">
          Entrar
        </button>
      </form>
    </div>
  );
};

export default Login;