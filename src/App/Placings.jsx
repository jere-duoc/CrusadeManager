import Container from "react-bootstrap/Container";

export default function Placings() {
  return (
    <div
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.6)", // Fondo oscuro con 0.6 de opacidad
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <Container>
        <br /><br />
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            <div className="card bg-dark bg-opacity-75 p-4 shadow-lg text-white rounded-4">
              <h2 className="text-center text-white mb-4">
                Ranking de Jugadores
              </h2>

              <div className="table-responsive">
                <table className="table table-dark align-middle table-hover mb-0">
                  <tbody>
                    <tr>
                      <td className="col-1 text-center">1</td>
                      <td className="col-11">
                        <div className="d-flex justify-content-between align-items-center p-2 bg-secondary rounded">
                          <span>Marcus Veld</span>
                          <span className="badge bg-dark">Space Marines</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">2</td>
                      <td>
                        <div className="d-flex justify-content-between align-items-center p-2 bg-secondary rounded">
                          <span>Alyra Dorne</span>
                          <span className="badge bg-dark">Astra Militarum</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">3</td>
                      <td>
                        <div className="d-flex justify-content-between align-items-center p-2 bg-secondary rounded">
                          <span>Kairon Thule</span>
                          <span className="badge bg-dark">Tyranids</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">4</td>
                      <td>
                        <div className="d-flex justify-content-between align-items-center p-2 bg-secondary rounded">
                          <span>Selene Voss</span>
                          <span className="badge bg-dark">
                            Eldar Craftworlds
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">5</td>
                      <td>
                        <div className="d-flex justify-content-between align-items-center p-2 bg-secondary rounded">
                          <span>Darius Holt</span>
                          <span className="badge bg-dark">Orks</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">6</td>
                      <td>
                        <div className="d-flex justify-content-between align-items-center p-2 bg-secondary rounded">
                          <span>Isolde Kaine</span>
                          <span className="badge bg-dark">
                            Chaos Space Marines
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">7</td>
                      <td>
                        <div className="d-flex justify-content-between align-items-center p-2 bg-secondary rounded">
                          <span>Lucian Kreel</span>
                          <span className="badge bg-dark">Necrons</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">8</td>
                      <td>
                        <div className="d-flex justify-content-between align-items-center p-2 bg-secondary rounded">
                          <span>Thalia Morven</span>
                          <span className="badge bg-dark">Tau Empire</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">9</td>
                      <td>
                        <div className="d-flex justify-content-between align-items-center p-2 bg-secondary rounded">
                          <span>Severin Drask</span>
                          <span className="badge bg-dark">Dark Eldar</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">10</td>
                      <td>
                        <div className="d-flex justify-content-between align-items-center p-2 bg-secondary rounded">
                          <span>Mira Castell</span>
                          <span className="badge bg-dark">
                            Adepta Sororitas
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">11</td>
                      <td>
                        <div className="d-flex justify-content-between align-items-center p-2 bg-secondary rounded">
                          <span>Orlan Veyl</span>
                          <span className="badge bg-dark">
                            Genestealer Cults
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">12</td>
                      <td>
                        <div className="d-flex justify-content-between align-items-center p-2 bg-secondary rounded">
                          <span>Cassandra Wren</span>
                          <span className="badge bg-dark">Death Guard</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">13</td>
                      <td>
                        <div className="d-flex justify-content-between align-items-center p-2 bg-secondary rounded">
                          <span>Varik Tor</span>
                          <span className="badge bg-dark">
                            Imperial Knights
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">14</td>
                      <td>
                        <div className="d-flex justify-content-between align-items-center p-2 bg-secondary rounded">
                          <span>Elara Quinn</span>
                          <span className="badge bg-dark">Harlequins</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">15</td>
                      <td>
                        <div className="d-flex justify-content-between align-items-center p-2 bg-secondary rounded">
                          <span>Tobias Karr</span>
                          <span className="badge bg-dark">
                            Adeptus Mechanicus
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">16</td>
                      <td>
                        <div className="d-flex justify-content-between align-items-center p-2 bg-secondary rounded">
                          <span>Nyssa Dray</span>
                          <span className="badge bg-dark">Chaos Daemons</span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
