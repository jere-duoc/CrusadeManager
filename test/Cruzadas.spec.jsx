import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import PlacingsPage from "../src/pages/PlacingsPage.jsx";

vi.mock("../src/context/DataContext.jsx", () => ({
  useData: () => ({
    cruzadas: [],
    agregarCruzada: vi.fn(),
  }),
}));

describe("Componente PlacingsPage (Generar Cruzada)", () => {
  it("renderiza correctamente el título o encabezado principal", () => {
    render(
      <BrowserRouter>
        <PlacingsPage />
      </BrowserRouter>
    );

   const titulos = screen.getAllByText(/cruzadas|historia|generar/i);
expect(titulos.length).toBeGreaterThan(0);

  });

  it("muestra un botón para generar una nueva cruzada", () => {
    render(
      <BrowserRouter>
        <PlacingsPage />
      </BrowserRouter>
    );

    const boton = screen.getByRole("button", {
      name: /generar cruzada|crear cruzada|nueva cruzada/i,
    });

    expect(boton).toBeInTheDocument();
    expect(boton).toBeEnabled();
  });

  it("simula el clic en el botón de generar cruzada", () => {
    render(
      <BrowserRouter>
        <PlacingsPage />
      </BrowserRouter>
    );

    const boton = screen.getByRole("button", {
      name: /generar cruzada|crear cruzada|nueva cruzada/i,
    });

    fireEvent.click(boton);

    expect(boton).toBeEnabled();
  });
});
