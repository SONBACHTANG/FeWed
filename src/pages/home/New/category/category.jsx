import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import './category.css';
import { getProductbyCategory } from '../../../../Auth/Services/ProductService';
import Loader from "../../../../components/loader/Loader"
import { useNavigate } from 'react-router-dom';


const Category = ({ categoryId, categoryName }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProductbyCategory([categoryId.toString()], 1, 20);
        if (response && response.errorCode === 200) {
          setProducts(response.content.data);
        } else {
          console.error('Failed to fetch products');
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryId]);

  const getRandomProducts = (products) => {
    let shuffled = products.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 4);
  };


  const handleProductClick = (id) => {
    navigate(`/Product/${id}`);
  };
  const randomProducts = getRandomProducts(products);

  if (loading) {
    return <Loader />;
  }

  if (products.length < 1) {
    return null;
  }

  return (
    <div className="category">
      <h1 className="category-title">{categoryName} Products</h1>
      <div className="category-products">
        {randomProducts.map(product => (
          <Card key={product.id} style={{ width: '18rem', margin: '10px' }}>
            <div className="image-container">
              <Card.Img variant="top" src={product.image[0]} alt={product.name} />
            </div>
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>
                {product.price}
              </Card.Text>
              <Button as={Link} to='/cart' className="card-button">Buy now</Button>
              <Button onClick={() => handleProductClick(product.id)} className="card-button">View more</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
      <Link to='/shop' className="category-button">
        <Button variant="primary">Read more</Button>
      </Link>
    </div>
  );
};

Category.propTypes = {
  categoryId: PropTypes.number.isRequired,
  categoryName: PropTypes.string.isRequired,
};

export default Category;
