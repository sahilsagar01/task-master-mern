import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import NavDropdown from 'react-bootstrap/NavDropdown'

function TaskBar() {
  return (
    <>
      {['md'].map((expand) => (
        <Navbar key={expand} bg='primary' expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Brand href="#">Task Master</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Task Master
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="#tasks">Tasks</Nav.Link>
                  <NavDropdown
                    title="other apps"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="http://3.26.208.5:3000/">ToDoList</NavDropdown.Item>
                    <NavDropdown.Item href="http://3.26.208.5:3003">
                      Weather app
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="http://3.26.208.5:3001">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default TaskBar;