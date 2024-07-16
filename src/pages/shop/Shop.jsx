import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import Paging from "../../Auth/components/paging/paging.jsx";
import Filter from './New/filter/filter.jsx';
import './shop.css';
import { getAllProducts, getProductbyName, getProductbyCategory } from '../../Auth/Services/ProductService.js';
import Loader from '../../components/loader/Loader.jsx';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(4);
  const [pageCount, setPageCount] = useState(1);
  const [filterParams, setFilterParams] = useState({});
  const { name } = useParams();

  useEffect(() => {
    fetchProducts();
  }, [currentPage, pageSize, filterParams, name]);

  const fetchProducts = async () => {
    try {
      let response;
      if (name) {
        response = await getProductbyName(name, currentPage, pageSize);
      } else {
        response = await getAllProducts(currentPage, pageSize);
        if (filterParams.cat) {
          console.log(filterParams.cat);
          response = await getProductbyCategory([filterParams.cat.toString()], currentPage, pageSize);
        }
      }

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

  const handlePageClick = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const handleFilter = (filters) => {
    setFilterParams(filters);
  };

  const handleClearFilters = () => {
    setFilterParams({});
    setCurrentPage(1);
  };

  useEffect(() => {

  }, [filterParams]);

  if (!products) {
    return <Loader />;
  }

  return (
    <div>
      <Filter handleFilter={handleFilter} handleClearFilters={handleClearFilters} />
      <h1>Product List</h1>
      <div className="shop-products">
        {products.map((product) => (
          <Card key={product.id} style={{ width: '18rem', margin: '10px' }}>
            <Card.Img variant="top" src={product.image[0]} alt={product.name} />
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
