import { useState } from 'react';
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
import { useSelector } from 'react-redux';

const NavbarHeader = () => {
  const alertClicked = () => {
    alert('You clicked the it !!');
  };
  const Watches = useSelector((store)=>store.allwatch);
  console.log(Watches)
  const [text, setText]  = useState('');

  const onSearch = (searchItem)=>{
      setText(searchItem);
  }
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
                    onChange={(e)=>setText(e.target.value)}
                    placeholder="Find your favorite products"
                    className="me-2"
                    aria-label="Search"
                  />
                  {/* <button onClick={()=>onSearch(text)}>op</button> */}
                  <div className='search-res'>
                      {Watches.filter((e=> { 
                        const searchItem = text.toLowerCase();
                        const fullname = e.name.toLowerCase();
                        return searchItem && fullname.startsWith(searchItem) && fullname!==searchItem ; 
                      })).slice(0,10).map((ele)=> { 
                        return <div key={ele.id} className='res-box'>
                              {ele.name}
                        </div>
                      })}
                  </div>
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
                    onChange={(e)=>{setText(e.target.value)}}
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
            <NavDropdown.Item eventKey="4.1">Tablet Accessories</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">Mobile Accessories</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">Mobile Grips & Stands</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.1">Memory Cards</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">Cables & Cords</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">Chargers & Adapters</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.4">Car Mobile Holders</NavDropdown.Item>
          </NavDropdown>
        </Col>
        <Col>
          <NavDropdown title="TELEVISIONS" id="nav-dropdown" className='drop-menu-text'>
            <NavDropdown.Item eventKey="4.1">Smart TVs</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">32 Inch TVs</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">43 Inch TVs</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.1">55 Inch TVs</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">Android TVs</NavDropdown.Item>

          </NavDropdown>
        </Col>
        <Col>
          <NavDropdown title="AUDIO" id="nav-dropdown" className='drop-menu-text'>
            <NavDropdown.Item eventKey="4.1">True Wireless</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">Bluetooth Neckbands</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">Wired Earphones</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.1">On Ear Headphones</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">Noise Cancelling Headphones</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">Soundbars</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.4">Home Theatre Systems</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">Party speakers</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.4">Multimedia</NavDropdown.Item>
          </NavDropdown>
        </Col>
        <Col>
          <NavDropdown title="HOME APPLIANCES" id="nav-dropdown" className='drop-menu-text'>
            <NavDropdown.Item eventKey="4.1">Split Air Conditioners</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">Window Air Conditioners</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">Smart Air Conditioners</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.1">Energy Efficient Air Conditioners</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">1 ton Air Conditioners</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">1.5 ton Air Conditioners</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.4">5 star Air Conditioners</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">Dishwashers</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.1">Fans</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">Cloth Dryers</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">Geysers</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.4">Room Heaters</NavDropdown.Item>
          </NavDropdown>
        </Col>
        <Col>
          <NavDropdown title="CAMERAS" id="nav-dropdown" className='drop-menu-text'>
            <NavDropdown.Item eventKey="4.1">DSLR Cameras</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">Mirrorless Cameras</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">Point & Shoot Cameras</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.1">ProSumer Cameras</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">Action Cameras</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">Photo Storage Devices</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.4">Pen Drives</NavDropdown.Item>
          </NavDropdown>
        </Col>
        <Col>
          <NavDropdown title="KITCHEN APPLIANCES" id="nav-dropdown" className='drop-menu-text'>
            <NavDropdown.Item eventKey="4.1">Induction Cookers</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">Food Processors</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">Blenders</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.1">Kitchen Hobs & Gas Stoves</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">Kitchen Chimneys</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">Rice Cookers</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.4">Sandwich Makers</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">Popup Toasters</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.4">Coffee Makers & Grinders</NavDropdown.Item>
          </NavDropdown>
        </Col>
        <Col>
          <NavDropdown title="PERSONAL CARE" id="nav-dropdown" className='drop-menu-text'>
            <NavDropdown.Item eventKey="4.1">Shavers & Trimmers</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">Epilators</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">Hair Dryers & Stylers</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.1">Irons</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">Reconnect Disney | Marvel Grooming Collection</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">Hygiene & Personal Care</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.4">Digital Thermometers</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">Massagers</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.4">Misc. Care Devices</NavDropdown.Item>
          </NavDropdown>
        </Col>
        <Col>
          <NavDropdown title="ACCESSORIES" id="nav-dropdown" className='drop-menu-text'>
            <NavDropdown.Item eventKey="4.1">Air Conditioner Stands</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">Tripods & Monopods</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">Selfie Sticks</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.1">Car Mobile Holders</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">Laptop Stands</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">Mobile Grips & Stands</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.4">Screen Guards & Protectors</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">Power Strips & Extension Cords</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.4">Stabilizers</NavDropdown.Item>
          </NavDropdown>
        </Col>
        <Col>
          <NavDropdown title="COMPUTERS" id="nav-dropdown" className='drop-menu-text'>
            <NavDropdown.Item eventKey="4.1">Basic use laptops</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">Student Laptops</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">Thin and light Laptops</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.1">Multi-Tasking Laptops</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">Gaming Laptops</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">Content creator Laptops</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.4">Computer Monitors</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.1">Desktops & All-In-Ones</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">Internet Connectivity Devices</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">Routers</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.1">WiFi Range Extenders</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">Printers & Inks</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">Toners & Ink Cartridges</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.4">Data Storage Devices</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.4">Hard Disks & SSD</NavDropdown.Item>
          </NavDropdown>
        </Col>
      </Row>
  </Container>

    </>
  );
}

export default NavbarHeader;