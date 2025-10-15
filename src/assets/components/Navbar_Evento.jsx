import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export default function Navbar_Evento() {
  
  return (

    <>
      <Navbar fixed="top" bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#home" as={Link} to="/">Crusade Manager</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">

              <Nav.Link href="#Evento" as={Link} to="/Evento">Evento</Nav.Link>
              <Nav.Link href="#Jugadores" as={Link} to="/Jugadores">Jugadores</Nav.Link>
              <Nav.Link href="#Emparejamiento" as={Link} to="/Emparejamiento">Emparejamiento</Nav.Link>
              <Nav.Link href="#Placings" as={Link} to="/Placings">Placings</Nav.Link>
            <Nav.Link href="#Perfil de Usuario" as={Link} to="/Perfil_Usuario">Perfil de Usuario</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
