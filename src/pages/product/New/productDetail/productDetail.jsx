// // src/ProductDetail.js
// import  { useState } from 'react';
// import './productDetail.css';
// import {Link} from "react-router-dom";

// const ProductDetail = () => {
//   const [size, setSize] = useState('Small');
//   const [quantity, setQuantity] = useState(1);

//   return (
//     <div className="product-detail">
//       <div className="product-images">
//         <img src="https://via.placeholder.com/300" alt="Product" className="main-image" />
//         <div className="thumbnail-images">
//           <img src="https://via.placeholder.com/50" alt="# " />
//           <img src="https://via.placeholder.com/50" alt="# " />
//           <img src="https://via.placeholder.com/50" alt="# " />
//           <img src="https://via.placeholder.com/50" alt="# " />
//         </div>
//       </div>
//       <div className="product-info">
//         <h1>Quality Mens Hoodie for Winter, Mens Fashion Casual Hoodie</h1>
//         <div className="rating">
//           <span>4.5</span> ★★★★★ (154 orders)
//         </div>
//         <div className="price">$75.00 /per box</div>
//         <p className="description">
//           Modern look and quality demo item is a streetwear-inspired collection that continues to break away from the
//           conventions of mainstream fashion. Made in Italy, these black and brown clothing low-top shirts for men.
//         </p>
//         <div className="details">
//           <p><strong>Type:</strong> Regular</p>
//           <p><strong>Color:</strong> Brown</p>
//           <p><strong>Material:</strong> Cotton, Jeans</p>
//           <p><strong>Brand:</strong> Reebok</p>
//         </div>
//         <div className="options">
//           <label>
//             Size:
//             <select value={size} onChange={(e) => setSize(e.target.value)}>
//               <option value="Small">Small</option>
//               <option value="Medium">Medium</option>
//               <option value="Large">Large</option>
//             </select>
//           </label>
//           <label>
//             Quantity:
//             <input
//               type="number"
//               min="1"
//               value={quantity}
//               onChange={(e) => setQuantity(e.target.value)}
//             />
//           </label>
//         </div>
//         <div className="actions">
//           <Link to='/checkout' className="buy-now">BUY NOW</Link>
//           <Link to='/cart' className="add-to-cart">ADD TO CART</Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;

import { useState } from 'react';
import './productDetail.css';
import { Link } from "react-router-dom";
import { Container, Row, Col, Image, Button, Form, Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductDetail = () => {
  const [size, setSize] = useState('Small');
  const [quantity, setQuantity] = useState(1);

  return (
    <Container className="product-detail">
      <Row>
        <Col md={6} className="product-images">
          <Image src="https://via.placeholder.com/300" alt="Product" className="main-image" fluid />
          <div className="thumbnail-images">
            <Image src="https://via.placeholder.com/50" alt="#" fluid />
            <Image src="https://via.placeholder.com/50" alt="#" fluid />
            <Image src="https://via.placeholder.com/50" alt="#" fluid />
            <Image src="https://via.placeholder.com/50" alt="#" fluid />
          </div>
        </Col>
        <Col md={6} className="product-info">
          <h1>Quality Mens Hoodie for Winter, Mens Fashion Casual Hoodie</h1>
          <div className="rating">
            <Badge bg="success">4.5</Badge> ★★★★★ (154 orders)
          </div>
          <div className="price">$75.00 /per box</div>
          <p className="description">
            Modern look and quality demo item is a streetwear-inspired collection that continues to break away from the
            conventions of mainstream fashion. Made in Italy, these black and brown clothing low-top shirts for men.
          </p>
          <div className="details">
            <p><strong>Type:</strong> Regular</p>
            <p><strong>Color:</strong> Brown</p>
            <p><strong>Material:</strong> Cotton, Jeans</p>
            <p><strong>Brand:</strong> Reebok</p>
          </div>
          <div className="options">
            <Form.Group controlId="sizeSelect">
              <Form.Label>Size:</Form.Label>
              <Form.Control as="select" value={size} onChange={(e) => setSize(e.target.value)}>
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="quantityInput">
              <Form.Label>Quantity:</Form.Label>
              <Form.Control
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </Form.Group>
          </div>
          <div className="actions">
            <Link to='/checkout'>
              <Button variant="primary" className="buy-now">BUY NOW</Button>
            </Link>
            <Link to='/cart'>
              <Button variant="secondary" className="add-to-cart">ADD TO CART</Button>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;

