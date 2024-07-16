import { useState, useEffect } from 'react';
import './productDetail.css';
import { Link, useParams } from "react-router-dom";
import { Container, Row, Col, Image, Button, Form, Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getProductById } from "../../../../services/productService";
import Loader from '../../../../components/loader/Loader';
import AddToCartButton from '../../../../components/addToCart/addToCart';

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();



  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await getProductById(id);
        console.log(response);
        if (response && response.errorCode === 200) {
          setProduct(response.content);
        } else {
          console.error('Failed to fetch product details');
        }
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <Loader />;
  }

  return (
    <Container className="product-detail">
      <Row>
        <Col md={6} className="product-images">
          <Image
            src={product.image && product.image.length > 0 ? product.image[0] : "https://via.placeholder.com/300"}
            alt="Product"
            className="main-image"
            fluid
          />
          <div className="thumbnail-images">
            {product.image && product.image.slice(1).map((image, index) => (
              <Image key={index} src={image} alt={`Thumbnail ${index + 1}`} fluid />
            ))}
          </div>
        </Col>
        <Col md={6} className="product-info">
          <h1>{product.title}</h1>
          <div className="rating">
            <Badge bg="success">{product.rating}</Badge> ★★★★★ ({product.orders} orders)
          </div>
          <div className="price">${product.price} /per box</div>
          <p className="description"><strong>Description:</strong> {product.description}</p>
          <div className="details">
            <p><strong>Type:</strong> {product.category.join(', ')}</p>
          </div>
          <div className="options">
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
              <AddToCartButton item={product} className={"add-to-cart"} quantity={quantity} />

            </Link>
          </div>
        </Col>
      </Row>
    </Container >
  );
};

export default ProductDetail;
