// import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './footer.css';
import 'boxicons';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div id='footer-item'>
      <footer className="footer">
        <Container>
          <Row className="footer-content">
            <Col md={3} className="footer-section">
              <h5 className="title">COMPANY NAME</h5>
              <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </Col>
            <Col md={3} className="footer-section">
              <h5 className="title">ABOUT US</h5>
              <ul className="footer-links">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/shop'>Shop</Link></li>
                <li><Link to='/category'>Category</Link></li>
                <li><Link to='/aboutcontact'>Contact Us</Link></li>
              </ul>
            </Col>
            <Col md={3} className="footer-section">
              <h5 className="title">CONTACT US</h5>
              <ul className="footer-contacts">
                <li>New York, NY 10012, US</li>
                <li>info@example.com</li>
                <li>+ 01 234 567 88</li>
                <li>+ 01 234 567 89</li>
              </ul>
            </Col>
            <Col md={3}>
              <h5 className="title">Get connected with us on social networks:</h5>

              <div className="social-icons">
                <Link to='/shop'>
                  <img src='/assets/facebook.svg'/>
                </Link>
                <Link to='#'>
                    <img src='/assets/instagram.svg'/>
                </Link>
                <Link to='#'>
                    <img src='/assets/youtube.svg'/>
                </Link>
                <Link to='#'>
                    <img src='/assets/email.svg'/>
                </Link>
              </div>
            </Col>
          </Row>
          <Col className="text-center py-3">
            <p>&copy; 2024 Copyright by Team2.T2301E</p>
          </Col>
        </Container>
      </footer>
    </div>
  );
}

export default Footer;
