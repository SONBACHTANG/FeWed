// import {Stack, Container, Form, Nav, Navbar, NavDropdown} from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './header.css';
// import { Link } from 'react-router-dom';

// function Header() {
//   return (
//     <div className='header'>
//       <Stack direction="horizontal" gap={3} className='support-header'>
//         <div className="p-2">
//           <box-icon name='calendar' type='solid' ></box-icon>
//           9.00 AM - 9.00 PM
//         </div>
//         <div className="p-2">
//           <box-icon name='headphone' ></box-icon>
//           1800 80 80 88
//         </div>
//         <Link className="p-2 ms-auto" to='/cart'>
//           <box-icon name='cart' ></box-icon>
//           My Cart
//         </Link>
//         {/* <div className="vr" /> */}
//         <Link className="p-2" to='/login'>
//           <box-icon name='user-circle' ></box-icon>
//           My Account
//         </Link>
//       </Stack>

//       <Navbar expand="lg" className="bg-body-tertiary">
//         <Container fluid className='container-header'>
//           <Navbar.Brand to="#" className='logo'>

//             <p className='logo-brand'>YGJ</p>
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls="navbarScroll" />
//           <Navbar.Collapse id="navbarScroll">
//             <Nav
//               className="me-auto my-2 my-lg-0"
//               style={{ maxHeight: '100px' }}
//               navbarScroll
//             >
//               <Nav.Link as={Link} to='/' className="custom-link">Home</Nav.Link>
//               <Nav.Link as={Link} to='/shop' className="custom-link">Shop</Nav.Link>
//               <NavDropdown as={Link} title="Category" id="navbarScrollingDropdown" className="custom-link">
//                 <NavDropdown.Item as={Link} to="#" className="custom-link">Ring</NavDropdown.Item>
//                 <NavDropdown.Item as={Link} to="#" className="custom-link">Bracelets</NavDropdown.Item>
//                 <NavDropdown.Item as={Link} to="#" className="custom-link">Necklace</NavDropdown.Item>
//                 <NavDropdown.Item as={Link} to="#" className="custom-link">Earrings</NavDropdown.Item>
//                 {/* <NavDropdown.Divider /> */}
//               </NavDropdown>
//               <Nav.Link as={Link} to='/about' className="custom-link">About Us</Nav.Link>
//               <Nav.Link as={Link} to='/contact' className="custom-link">Contact Us</Nav.Link>
//               <Nav.Link as={Link} to='/blog' className="custom-link">Blog</Nav.Link>
//             </Nav>
//             <Form className="d-flex search-form">
//               <Form.Control
//                 type="search"
//                 placeholder="Search"
//                 className="search-input"
//                 aria-label="Search"
//               />
//               <box-icon name='search' class="search-icon"></box-icon>
//             </Form>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </div>
//   );
// }

// export default Header;

import { Stack, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Logout from '../../pages/Logout/Logout';
import React, { useState, useEffect } from 'react';

function Header() {
  const isLogined = useSelector(state => state.auth.isLoggedIn);
  const [loginStatus, setLoginStatus] = useState(isLogined);
  const navigate = useNavigate();
  const [searchKeyword, setSearchKeyword] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchKeyword) {
      navigate(`/shop/${searchKeyword}`);
    } else {
      navigate(`/shop`);
    }
  };

  useEffect(() => {
    setLoginStatus(isLogined);
  }, [isLogined]);

  return (
    <div className='header'>
      <Navbar expand="lg">
        <Container fluid className='container-header'>
          <Navbar.Brand to="#" className='logo'>
            <p className='logo-brand'>YGJ</p>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link as={Link} to='/' className="custom-link">Home</Nav.Link>
              <Nav.Link as={Link} to='/shop' className="custom-link">Shop</Nav.Link>
              <NavDropdown title="Category" id="navbarScrollingDropdown" className="custom-link">
                <NavDropdown.Item as={Link} to="#" className="custom-link">Ring</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="#" className="custom-link">Bracelets</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="#" className="custom-link">Necklace</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="#" className="custom-link">Earrings</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to='/about' className="custom-link">About Us</Nav.Link>
              <Nav.Link as={Link} to='/contact' className="custom-link">Contact Us</Nav.Link>
              <Nav.Link as={Link} to='/blog' className="custom-link">Blog</Nav.Link>
            </Nav>
            <Form className="d-flex search-form" onSubmit={handleSearch}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="search-input"
                aria-label="Search"
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
              />
              <box-icon name='search' class="search-icon" onClick={handleSearch} style={{ cursor: "pointer" }}></box-icon>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Stack direction="horizontal" className='support-header'>
        <div className="p-2 support-item">
          <box-icon name='calendar' type='solid' ></box-icon>
          <span>9.00 AM - 9.00 PM</span>
        </div>
        <div className="p-2 support-item">
          <box-icon name='headphone' ></box-icon>
          <span>1800 80 80 88</span>
        </div>
        <Link className="p-2 ms-auto support-item" to='/cart'>
          <box-icon name='cart' ></box-icon>
          <span>My Cart</span>
        </Link>
        {loginStatus ? (
          <Logout />
        ) : (
          <Link className="p-2 support-item" to='/login'>
            <box-icon name='user-circle' ></box-icon>
            <span>My Account</span>
          </Link>
        )}
      </Stack>
    </div>
  );
}

export default Header;
