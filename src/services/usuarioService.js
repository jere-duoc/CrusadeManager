export async function registrarUsuario(nombre, email, pass) {
    const response = await fetch("http://localhost:8080/usuarios", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: nombre,
        email: email,
        avatar: null,  // editar para agregar el avatar
        password: pass,
      }),
    });
  
    if (!response.ok) {
      throw new Error("Error al registrar usuario.");
    }
  
    return await response.json();
}

export async function loginUsuario(email, password) {
  try {
    const res = await fetch("http://localhost:8080/usuarios/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) return null;

    return await res.json();
  } catch (err) {
    console.error("Error al intentar login:", err.message);
    return null;
  }
}