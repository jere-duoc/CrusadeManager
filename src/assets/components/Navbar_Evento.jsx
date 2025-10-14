import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Navbar_Evento() {
  
  return (

    <>
      <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Crusade Manager</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">

              <Nav.Link href="#Evento">Evento</Nav.Link>
              <Nav.Link href="#Jugadores">Jugadores</Nav.Link>
              <Nav.Link href="#Emparejamiento">Emparejamiento</Nav.Link>
              <Nav.Link href="#Placings">Placings</Nav.Link>
            <Nav.Link href="#Perfil de Usuario">Perfil de Usuario</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
