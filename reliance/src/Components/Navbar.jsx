import '../assets/styles/style.css'
import {FaUserAlt, FaShoppingCart} from 'react-icons/fa'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Misccartlogo from '../assets/Artboard_14.png';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';

const NavbarHeader = () => {
  const alertClicked = () => {
    alert('You clicked the it !!');
  };
  return (
    <>
      {['lg'].map((expand) => (
        <Navbar key={expand} expand={expand} className="nav-back">
          <Container className='nav-main' fluid>
            <Navbar.Brand>
              <Link to='/'>
                  <img src={Misccartlogo} alt='logo'/>
              </Link>
            </Navbar.Brand>

                <Form className="d-flex search-bar1">
                  <Form.Control
                    type="search"
                    placeholder="Find your favorite products"
                    className="me-2"
                    aria-label="Search"
                  />
                </Form>

            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Misccart
                </Offcanvas.Title>
              </Offcanvas.Header>
                <Form className="search-bar2">
                  <Form.Control
                    type="search"
                    placeholder="Find your favorite products"
                    className="me-2"
                    aria-label="Search"
                  />
                </Form>
                <ListGroup defaultActiveKey="#link1" className='sidebar-menus'>
                    <ListGroup.Item action href="#link1">
                        MOBILE & TABLETS
                    </ListGroup.Item>
                    <ListGroup.Item action onClick={alertClicked}>
                        TELEVISIONS
                    </ListGroup.Item>
                    <ListGroup.Item action onClick={alertClicked}>
                        AUDIO
                    </ListGroup.Item>
                    <ListGroup.Item action onClick={alertClicked}>
                        HOME APPLIANCES
                    </ListGroup.Item>
                    <ListGroup.Item action onClick={alertClicked}>
                        CAMERAS
                    </ListGroup.Item>
                    <ListGroup.Item action onClick={alertClicked}>
                        KITCHEN APPLIANCES
                    </ListGroup.Item>
                    <ListGroup.Item action onClick={alertClicked}>
                        PERSONAL CARE
                    </ListGroup.Item>
                    <ListGroup.Item action onClick={alertClicked}>
                        ACCESSORIES
                    </ListGroup.Item>
                    <ListGroup.Item action onClick={alertClicked}>
                        COMPUTERS
                    </ListGroup.Item>
              </ListGroup>
              <Offcanvas.Body>
                {/* <Nav className="justify-content-end flex-grow-1 pe-3"> */}
                <Nav className="justify-content-center pe-3 side-options-nav">
                  <Nav.Link href="#action1">
                    <div className='nav-icons'>
                         Select Your Pin Code
                    </div>
                  </Nav.Link>
                  <Nav.Link href="#action1">
                    <div className='nav-icons'>
                        <FaShoppingCart className='cart-ico'/> Cart
                    </div>
                  </Nav.Link>
                  <Nav.Link href="#action1">
                    <div className='nav-icons'>
                        <FaUserAlt className='user-ico'/> Login
                    </div>
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
  <Container className='navbar-menus' fluid>
      <Row>
        <Col>
          <NavDropdown title="MOBILE & TABLETS" id="nav-dropdown" className='drop-menu-text'>
            <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Col>
        <Col>
          <NavDropdown title="TELEVISIONS" id="nav-dropdown" className='drop-menu-text'>
            <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Col>
        <Col>
          <NavDropdown title="AUDIO" id="nav-dropdown" className='drop-menu-text'>
            <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Col>
        <Col>
          <NavDropdown title="HOME APPLIANCES" id="nav-dropdown" className='drop-menu-text'>
            <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Col>
        <Col>
          <NavDropdown title="CAMERAS" id="nav-dropdown" className='drop-menu-text'>
            <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Col>
        <Col>
          <NavDropdown title="KITCHEN APPLIANCES" id="nav-dropdown" className='drop-menu-text'>
            <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Col>
        <Col>
          <NavDropdown title="PERSONAL CARE" id="nav-dropdown" className='drop-menu-text'>
            <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Col>
        <Col>
          <NavDropdown title="ACCESSORIES" id="nav-dropdown" className='drop-menu-text'>
            <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Col>
        <Col>
          <NavDropdown title="COMPUTERS" id="nav-dropdown" className='drop-menu-text'>
            <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Col>
      </Row>
  </Container>

    </>
  );
}

export default NavbarHeader;