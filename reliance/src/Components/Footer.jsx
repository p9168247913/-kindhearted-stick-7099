import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {AiFillFacebook} from 'react-icons/ai';
import {BsTwitter} from 'react-icons/bs';
import {TfiYoutube} from 'react-icons/tfi';
import {Link } from 'react-router-dom'
import Playstore from '../assets/google_play_store.jpg';
import Ios from '../assets/ios_app_store_icon.jpg';
import Image from 'react-bootstrap/Image'

const Footer = () => {
  return (
    <div>
      <Container className='footer-section' fluid>
      <Row className='footer-menu'>
            <Col sm={5} lg={3} md={3} className='mt-5 random'>
            <h3>PRODUCT CATEGORIES</h3>
                <ul>
                  <li>Smartphones</li>
                  <li>Laptops</li>
                  <li>DSLR Cameras</li>
                  <li>Televisions</li>
                  <li>Air Conditioners</li>
                  <li>Refrigerators</li>
                  <li>Kitchen Appliances</li>
                  <li>Accessories</li>
                  <li>Personal Care & Grooming</li>
              </ul>
            </Col>

            <Col sm={3} lg={3} md={3} className='mt-5 random'>
            <h3>SITE INFO</h3>
              <ul>
                <li>About Reliance Digital</li>
                <li>resQ Services</li>
                <li>Site Map</li>
                <li>Gift Cards</li>
                <li>Corporate Enquires</li>
                <li>Contact Us</li>
              </ul>
            </Col>

            <Col sm={3} lg={3} md={3} className='mt-5 random'>
            <h3>RESOURCE CENTER</h3>
              <ul>
                <li>Product Reviews</li>
                <li>Buying Guides</li>
                <li>How Tos</li>
                <li>Featured Stories</li>
                <li>Events & Happenings</li>
                <Link to='/register'>
                  <li>User Register</li>
                </Link>
              </ul>
            </Col>

            <Col sm={3} lg={3} md={3} className='mt-5 mb-5 random'>
            <h3>POLICIES</h3>
              <ul>
                <li>Terms of Use</li>
                <li>FAQs</li>
                <li>Cancellation and Return Policy</li>
                <li>Pricing and Payments Policy</li>
                <li>Shipping and Delivery Policy</li>
                <li>Privacy Policy</li>
                <li>E-waste Recycling Policy</li>
                <li>EMI and Additional Cashback T&C</li>
                <li>RelianceOne Loyalty Program T&C</li>
                <li>Caution Notice</li>
              </ul>
            </Col>
          </Row>

          <Row className='social-full-area'>
            <Col>
                <Row className='social-area'>
                    <Col>
                    <h3>FOLLOW US</h3>
                    <div className='social-icons'>
                        <AiFillFacebook className='facebook-ico'/>
                        <BsTwitter className='twitter-ico'/>
                        <TfiYoutube className='tube-ico'/>
                    </div>
                    </Col>
                </Row>
            </Col>

            <Col>
                <Row className='social-area'>
                    <Col>
                    <h3>EXPERIENCE RELIANCE DIGITAL APP ON MOBILE</h3>
                        <div className='social-icons'>
                            <Image src={Playstore} className='apps'/>
                            <Image src={Ios}  className='apps'/>
                        </div>
                    </Col>
                </Row>
            </Col>

          </Row>
      </Container>

    <Container className='bottom-footer' fluid>
        <Row className='disclaimer-sec'>
            <Col>
            <h3 style={{marginBottom:'10px',marginTop:'10px'}}>Disclaimer</h3>
                <p>Product prices, offers and availability are subject to change from time to time. All prices are inclusive of taxes. 
                Product colours & images are only for illustration and they may not exactly match with the actual product. 
                Product specs are subject to change & may vary from actual product. While every care is taken to avoid inaccuracies
                in content, these are provided as is, without warranty of any kind.
                </p>
            </Col>
        </Row>
        <div className='hr-div'></div>
        <Row className='copyright'>
          <p> © 2022 Misscart. All Rights Reserved.</p>
        </Row>
    </Container>

    </div>
  )
}

export default Footer