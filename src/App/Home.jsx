import '../assets/style/Noseaun.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div
        className="home-bg d-flex align-items-center"
        style={{
          background: "rgba(0, 0, 0, 0.2)",
          minHeight: "100vh",
          color: "white",
        }}
      >
        <div className="container">
          <div className="row justify-content-start">
            <div className="col-12 col-md-10 col-lg-7 posicion-text">
              <h1 className="fw-bold mb-3">Gestiona tu ejército y su historia</h1>
              <h3 className="mb-4" style={{ lineHeight: "1.6" }}>
                Digitaliza y organiza tus partidas de Warhammer de forma sencilla.
                Lleva control de unidades, experiencia, niveles, reliquias y mejoras
                sin necesidad de papel. Regístrate para comenzar a gestionar tus campañas,
                registrar resultados y seguir la evolución de tus ejércitos de manera
                clara y automática.
              </h3>

              <div>
                <Link to="/login" className="btn btn-primary m-2">
                  Login
                </Link>
                <Link to="/register" className="btn btn-secondary m-2">
                  Register
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Burbuja decorativa */}
        <div className="wrapper">
          <div className="bubble"></div>
        </div>
      </div>
    </>
  );
};

export default Home;
