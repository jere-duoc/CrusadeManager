import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import { useData } from "../context/DataContext.jsx";


export default function IndexPage() {
  const { usuario } = useAuth();
  const { cruzadas, jugadores } = useData();

  return (
    <div className="index-bg min-vh-100 d-flex justify-content-center align-items-center text-white">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            <section className="card home-card bg-dark bg-opacity-75 shadow-lg p-4 rounded-4 text-center">
              <h2 className="fw-bold mb-3">Bienvenido, {usuario?.nombre}</h2>
              <p className="text-light mb-4">
                Administra tus cruzadas de Warhammer 40K en modo historia.
                Registra partidas, emparejamientos y posiciones sin usar papel.
              </p>

              {/* Estadísticas rápidas */}
              <div className="row text-center mb-4">
                <div className="col-6 col-md-6">
                  <div className="stat-box p-3 rounded-3 bg-secondary bg-opacity-25">
                    <strong className="d-block display-6">{cruzadas.length}</strong>
                    <span>Cruzadas activas</span>
                  </div>
                </div>
                <div className="col-6 col-md-6">
                  <div className="stat-box p-3 rounded-3 bg-secondary bg-opacity-25">
                    <strong className="d-block display-6">{jugadores.length}</strong>
                    <span>Jugadores registrados</span>
                  </div>
                </div>
              </div>

              {/* Menú de acceso rápido */}
              <div className="row g-3">
                <div className="col-12 col-md-4">
                  <Link
                    to="/emparejamiento"
                    className="menu-card d-block text-decoration-none p-3 rounded-4 bg-dark bg-opacity-50 hover-glow"
                  >
                    <h3 className="fw-bold text-white">⚔️ Emparejamientos</h3>
                    <p>
                      Genera y registra las partidas de la ronda actual.
                    </p>
                  </Link>
                </div>

                <div className="col-12 col-md-4">
                  <Link
                    to="/jugadores"
                    className="menu-card d-block text-decoration-none p-3 rounded-4 bg-dark bg-opacity-50 hover-glow"
                  >
                    <h3 className="fw-bold text-white">👥 Jugadores</h3>
                    <p>
                      Consulta facciones, poder de ejército y estado.
                    </p>
                  </Link>
                </div>

                <div className="col-12 col-md-4">
                  <Link
                    to="/placings"
                    className="menu-card d-block text-decoration-none p-3 rounded-4 bg-dark bg-opacity-50 hover-glow"
                  >
                    <h3 className="fw-bold text-white">🏆 Cruzadas / Ranking</h3>
                    <p>
                      Mira el avance de la campaña y la tabla de posiciones.
                    </p>
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
