import React from "react";
import "../assets/style/Evento.css"; 

export default function Evento() {
  return (
    <div className="evento-bg min-vh-100 d-flex flex-column justify-content-center">
      <div className="container py-5">
        <div className="text-center mb-5">
          <br /><br />
          <h2 className="text-white texto-enmarcado mb-4">
            Torneo Warhammer 40K: Pariah Nexus
          </h2>
          <p className="text-white mb-4">
            La Cruzada del Pariah Nexus sitúa a los ejércitos del Imperio del Hombre frente a una
            amenaza que desafía incluso sus más poderosas armas: un sector de la galaxia envuelto en el
            Nexo Pariah, una vasta región donde la disformidad está apagada y los poderes psíquicos
            quedan anulados. Allí, los Necrones han erigido fortalezas colosales y desplegado su
            tecnología para sofocar cualquier influencia del Inmaterium, volviendo inútiles a los
            psíquicos y dejando aisladas a las fuerzas imperiales. El conflicto surge cuando el Imperio
            intenta recuperar el control de este sector vital, librando una guerra desesperada contra
            los Necrones, en un campo de batalla donde sus mayores ventajas —la fe, los poderes del
            Astronomican y la fuerza de los psíquicos— se ven anuladas, obligándolos a depender solo del
            acero, la estrategia y la resistencia humana frente a la implacable maquinaria
            necrona.
            <br /><br />
            ¡Prepárate para una épica batalla en el universo de Warhammer 40K! Participa en un
            evento estratégico donde la táctica y la astucia determinarán al vencedor.
          </p>
          <img
            src="https://warhammer40kfanatics.com/wp-content/uploads/2024/01/crusade-pariah-nexus-warhammer-40k-hero.png"
            alt="No se pudo obtener la imagen :("
            className="img-fluid rounded-lg shadow-2xl mb-5"
          />
        </div>

        <div className="row justify-content-center">
          <div className="col-12 col-md-6 mb-4">
            <div className="bg-dark bg-opacity-75 rounded-lg shadow-2xl p-4 text-white h-100">
              <h4 className="mb-3 texto-enmarcado">Organizador del Evento</h4>
              <p><strong>Nombre:</strong> Magnus Krieger</p>
              <p><strong>Correo:</strong> m.krieger@gmail.com</p>
              <p><strong>Teléfono:</strong> +56 9 1234 5678</p>
              <p><strong>Redes Sociales:</strong> @MagnusK_Warhammer</p>
            </div>
          </div>

          <div className="col-12 col-md-6 mb-4">
            <div className="bg-dark bg-opacity-75 rounded-lg shadow-2xl p-4 text-white h-100">
              <h4 className="mb-3 texto-enmarcado">Detalles del Evento</h4>
              <p><strong>Cantidad de jugadores:</strong> 16</p>
              <p><strong>Cantidad de rondas:</strong> 5</p>
              <p><strong>Tamaño de roster inicial:</strong> 1000 pts</p>
              <p><strong>Formato de cruzada:</strong> Pariah Nexus</p>
              <p><strong>Descripción:</strong> Cada jugador comenzará con un ejército de 1000 puntos y
                avanzará en una serie de 5 rondas. El objetivo es maximizar la estrategia y
                aprovechar al máximo las reglas de la cruzada “Pariah Nexus”. ¡Prepárate para
                intensas batallas y grandes sorpresas!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
