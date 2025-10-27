import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import RegisterPage from "../src/pages/RegisterPage.jsx";

vi.mock("../src/context/AuthContext.jsx", () => ({
  useAuth: () => ({
    registrar: vi.fn(),
  }),
}));

describe("Componente RegisterPage", () => {
  it("renderiza correctamente el título del formulario", () => {
    render(
      <BrowserRouter>
        <RegisterPage />
      </BrowserRouter>
    );

    expect(screen.getByText(/crear cuenta/i)).toBeInTheDocument();
  });

  it("contiene un botón para registrarse", () => {
    render(
      <BrowserRouter>
        <RegisterPage />
      </BrowserRouter>
    );

    const boton = screen.getByRole("button", { name: /registrarme/i });
    expect(boton).toBeInTheDocument();
  });

  it("simula un clic en el botón de registro", () => {
    render(
      <BrowserRouter>
        <RegisterPage />
      </BrowserRouter>
    );

    const boton = screen.getByRole("button", { name: /registrarme/i });
    fireEvent.click(boton);

    expect(boton).toBeEnabled();
  });
});
