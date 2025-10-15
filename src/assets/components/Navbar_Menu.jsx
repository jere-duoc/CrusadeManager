import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

export default function Navbar_Menu() {
  
  return (

    <>
      <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home"as={Link} to="/">Crusade Manager</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">

              <NavDropdown title="Cruzadas" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/Evento">Continuar Cruzada</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Crear_Cruzada">Crear Cruzada</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Historial">Historial de Cruzadas</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link as={Link} to="/Perfil">Perfil de usuario</Nav.Link>
              <Nav.Link as={Link} to="/Login">Iniciar Sesión</Nav.Link>
      
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}


