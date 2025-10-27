import { useData } from "../context/DataContext.jsx";

export default function Jugadores() {
  const { jugadores, loadingData } = useData();

  if (loadingData)
    return (
      <div
        className="d-flex justify-content-center align-items-center vh-100"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          width: "100%",
          height: "100vh",
        }}
      >
        <p className="text-white fs-4">Cargando jugadores...</p>
      </div>
    );

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.6)", // Fondo oscuro 0.6
        width: "100%",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <div className="card bg-dark bg-opacity-75 p-4 shadow-lg text-white w-100" style={{ maxWidth: "800px", borderRadius: "20px" }}>
        <h2 className="text-center mb-3">Jugadores en la Cruzada</h2>
        <p className="text-center text-secondary mb-4">
          Lista de participantes, facciones y nivel de poder.
        </p>

        <div className="table-responsive">
          <table className="table table-dark table-hover table-bordered align-middle text-center mb-0">
            <thead className="table-secondary text-dark">
              <tr>
                <th>Nombre</th>
                <th>Facción / Ejército</th>
                <th>Poder</th>
              </tr>
            </thead>
            <tbody>
              {jugadores.map((j, i) => (
                <tr key={i}>
                  <td>{j.nombre}</td>
                  <td>{j.faccion}</td>
                  <td>{j.poder}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
