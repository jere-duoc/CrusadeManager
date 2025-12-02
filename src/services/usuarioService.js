export async function registrarUsuario(nombre, email, pass) {
  const response = await fetch("http://localhost:8080/usuarios", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: nombre,
      email: email,
      avatar: null,
      password: pass,
    }),
  });

  if (!response.ok) {
    // Si el registro falla (400, 500), lanza una excepción.
    throw new Error("Error al registrar usuario.");
  }

  return await response.json();
}

export async function loginUsuario(email, password) {
  // Eliminamos el try/catch para que los errores de red sean manejados por el llamador.
  const res = await fetch("http://localhost:8080/usuarios/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
  });

  // --- LÓGICA DE MANEJO DE ERRORES CORREGIDA ---
  if (!res.ok) {
      // Obtenemos el cuerpo del mensaje de error (ej: "Contraseña incorrecta", "Usuario no existe").
      const errorText = await res.text(); 
      
      // Lanzamos una excepción estructurada que Login.jsx espera (err.response?.data).
      // Esto detiene el flujo de ejecución y activa el 'catch' en Login.jsx.
      throw { 
          response: { 
              data: errorText || `Error de servidor: ${res.status}` 
          }
      };
  }
  // ----------------------------------------------

  // Si la respuesta es 200 OK
  return await res.json();
}