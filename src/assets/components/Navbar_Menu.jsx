import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Navbar_Menu() {
  
  return (

    <>
      <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Crusade Manager</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">

              <NavDropdown title="Cruzadas" id="basic-nav-dropdown">
                
                <NavDropdown.Item href="#action/3.1">Continuar Cruzada</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Crear Cruzada</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Historial de Cruzadas</NavDropdown.Item>
              
              </NavDropdown>
              
              <Nav.Link href="#Perfil de usuario">Perfil de usuario</Nav.Link>
              <Nav.Link href="#Iniciar Sesión">Iniciar Sesión</Nav.Link>
      
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}


