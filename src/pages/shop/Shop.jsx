import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import Paging from "../../Auth/components/paging/paging.jsx"
import Filter from './New/filter/filter.jsx';
import './shop.css';
import { getAllProducts } from '../../Auth/Services/ProductService.js';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(4);
  const [pageCount, setPageCount] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getAllProducts(currentPage, pageSize);
        if (response && response.errorCode === 200) {
          const shuffledProducts = response.content.data.sort(() => 0.5 - Math.random());
          setProducts(shuffledProducts);
          setPageCount(response.content.totalPages);
        } else {
          console.error('Failed to fetch products');
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [currentPage, pageSize]);

  const handlePageClick = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  return (
    <div>
      <Filter />
      <h1>Product List</h1>
      <div className="shop-products">
        {products.map((product) => (
          <Card key={product.id} style={{ width: '18rem', margin: '10px' }}>
            <Card.Img variant="top" src={product.image} alt={product.name} />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>{product.price}</Card.Text>
            </Card.Body>
            <Card.Body>
              <Button as={Link} to="/cart" className="card-button">
                Buy now
              </Button>
              <Button as={Link} to={`/product/${product.id}`} className="card-button">
                View more
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
      {products.length > 0 &&
        <Paging
          pageIndex={currentPage}
          pageSize={pageSize}
          pageCount={pageCount}
          changePage={handlePageClick}
        />
      }
    </div>
  );
};

export default Shop;
