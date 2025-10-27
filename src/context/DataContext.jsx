import { createContext, useContext, useEffect, useState } from "react";

const DataContext = createContext();

export function DataProvider({ children }) {
  const [jugadores, setJugadores] = useState([]);
  const [cruzadas, setCruzadas] = useState([]);
  const [loadingData, setLoadingData] = useState(true);

  const MOCKABLE_URL = "https://demo1234567.mockable.io/datos"; 

  useEffect(() => {
    const localJug = JSON.parse(localStorage.getItem("jugadores"));
    const localCruz = JSON.parse(localStorage.getItem("cruzadas"));

    if (localJug && localCruz) {
      setJugadores(localJug);
      setCruzadas(localCruz);
      setLoadingData(false);
    } else {
      fetchDatos();
    }
  }, []);

  async function fetchDatos() {
    try {
      const res = await fetch(MOCKABLE_URL);
      if (!res.ok) throw new Error("No se pudo obtener datos");
      const data = await res.json();

      const jugadoresMock = Array.isArray(data.jugadores)
        ? data.jugadores
        : [];
      const cruzadasMock = Array.isArray(data.cruzadas)
        ? data.cruzadas
        : [];

      setJugadores(jugadoresMock);
      setCruzadas(cruzadasMock);

      localStorage.setItem("jugadores", JSON.stringify(jugadoresMock));
      localStorage.setItem("cruzadas", JSON.stringify(cruzadasMock));
    } catch (err) {
      console.error("Error conectando a Mockable:", err);
    } finally {
      setLoadingData(false);
    }
  }

  function agregarCruzada(nueva) {
    const actualizadas = [...cruzadas, nueva];
    setCruzadas(actualizadas);
    localStorage.setItem("cruzadas", JSON.stringify(actualizadas));
  }

  return (
    <DataContext.Provider
      value={{
        jugadores,
        cruzadas,
        agregarCruzada,
        loadingData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  return useContext(DataContext);
}
