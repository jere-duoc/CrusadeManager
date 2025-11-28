import { createContext, useContext, useEffect, useState } from "react";

const DataContext = createContext();

export function DataProvider({ children }) {
  // 1. Mantenemos el estado (la memoria RAM de la app)
  const [jugadores, setJugadores] = useState([]);
  const [cruzadas, setCruzadas] = useState([]);
  const [loadingData, setLoadingData] = useState(true);

  // BORRADO: const MOCKABLE_URL = ... (Ya no lo necesitamos)

  useEffect(() => {
    // 2. Intentamos recuperar lo que haya guardado en el navegador
    const localJug = JSON.parse(localStorage.getItem("jugadores"));
    const localCruz = JSON.parse(localStorage.getItem("cruzadas"));

    if (localJug || localCruz) {
      // Si hay algo guardado, lo usamos
      setJugadores(localJug || []);
      setCruzadas(localCruz || []);
    } else {
      // 3. CAMBIO IMPORTANTE: Si no hay datos locales, NO hacemos fetch.
      // Simplemente iniciamos con listas vacías y quitamos el "cargando".
      console.log("Iniciando con datos vacíos (esperando backend real)");
      setJugadores([]);
      setCruzadas([]);
    }
    setLoadingData(false);
  }, []);

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