import { useState, useEffect } from "react";

export default function Emparejamiento() {
  const [rondaActual, setRondaActual] = useState(1);
  const [matches, setMatches] = useState(() => {
    const guardado = localStorage.getItem("matches");
    if (guardado) return JSON.parse(guardado);

    return [
      { mesa: 1, jugadorA: "Jugador 1", jugadorB: "Jugador 2", resultado: "" },
      { mesa: 2, jugadorA: "Jugador 3", jugadorB: "Jugador 4", resultado: "" },
    ];
  });

  useEffect(() => {
    localStorage.setItem("matches", JSON.stringify(matches));
  }, [matches]);

  function actualizarResultado(idx, valor) {
    const copia = [...matches];
    copia[idx].resultado = valor;
    setMatches(copia);
  }

  function handleGuardar() {
    alert("Resultados guardados para la ronda " + rondaActual);
  }

  return (
    <div
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.6)", 
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            <div className="card bg-dark bg-opacity-75 text-white shadow-lg p-4 rounded-4">
              <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-4">
                <div className="text-center text-md-start mb-3 mb-md-0">
                  <h2 className="mb-1">Emparejamientos</h2>
                  <p className="text-muted">
                    Registra resultados de la ronda en curso.
                  </p>
                </div>

                <div className="ronda-box text-center text-md-end">
                  <label className="fw-bold">
                    Ronda:&nbsp;
                    <input
                      type="number"
                      min={1}
                      value={rondaActual}
                      onChange={(e) => setRondaActual(Number(e.target.value))}
                      className="form-control d-inline-block w-auto text-center bg-secondary text-white border-0"
                    />
                  </label>
                </div>
              </div>

              <div className="table-responsive">
                <table className="table table-dark table-hover align-middle text-center mb-4">
                  <thead>
                    <tr>
                      <th>Mesa</th>
                      <th>Jugador A</th>
                      <th>Jugador B</th>
                      <th>Resultado</th>
                    </tr>
                  </thead>
                  <tbody>
                    {matches.map((m, i) => (
                      <tr key={m.mesa}>
                        <td>{m.mesa}</td>
                        <td>{m.jugadorA}</td>
                        <td>{m.jugadorB}</td>
                        <td>
                          <input
                            type="text"
                            value={m.resultado}
                            placeholder="2-1 / 1-1 / etc"
                            onChange={(e) =>
                              actualizarResultado(i, e.target.value)
                            }
                            className="form-control text-center bg-secondary text-white border-0"
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="text-center">
                <button
                  className="btn btn-outline-light btn-lg mt-2"
                  onClick={handleGuardar}
                >
                  Guardar Resultados
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
