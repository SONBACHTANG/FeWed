import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import './filter.css';
import { getAllCategories } from "../../../../Auth/Services/CategoryService";

function Filter({ handleFilter }) {
  const [selectedCat, setSelectedCat] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [selectedMaterials, setSelectedMaterials] = useState('');
  const [selectedCollection, setSelectedCollection] = useState('');
  const [categories, setCategories] = useState([]);
  const [pageSize, setPageSize] = useState(1000);
  const [pageCount, setPageCount] = useState(1);

  useEffect(() => {
    fetchCategories();
  }, [pageCount, pageSize]);

  const fetchCategories = async () => {
    try {
      const response = await getAllCategories(pageCount, pageSize);
      if (response && response.errorCode === 200) {
        setCategories(response.content.data);
      }
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const handleApply = () => {
    const filters = {
      cat: selectedCat,
      price: selectedPrice,
      materials: selectedMaterials,
      collection: selectedCollection,
    };
    handleFilter(filters);
  };

  const handleClear = () => {
    setSelectedCat('');
    setSelectedPrice(0);
    setSelectedMaterials('');
    setSelectedCollection('');
    handleFilter({});
  };

  return (
    <Form className="filter-form">
      <Form.Group controlId="formBrand">
        <Form.Select
          aria-label="Select brand"
          value={selectedCat}
          onChange={(e) => setSelectedCat(e.target.value)}
        >
          <option value="">Select brand</option>
          {
            categories.map((category) => (
              <option key={category.id} value={category.id}>{category.name}</option>
            ))
          }
        </Form.Select>
      </Form.Group>

      <Form.Group controlId="formPrice">
        <Form.Select
          aria-label="Select price range"
          value={selectedPrice}
          onChange={(e) => setSelectedPrice(e.target.value)}
        >
          <option value="">Select price range</option>
          <option value="1">Under $100</option>
          <option value="2">$100 - $500</option>
          <option value="3">Over $500</option>
        </Form.Select>
      </Form.Group>

      <Form.Group controlId="formMaterials">
        <Form.Select
          aria-label="Select materials"
          value={selectedMaterials}
          onChange={(e) => setSelectedMaterials(e.target.value)}
        >
          <option value="">Select materials</option>
          <optgroup label="Gold">
            <option value="gold_1">Gold 1.1</option>
          </optgroup>
          <option value="diamond">Diamond</option>
          <option value="pearl">Pearl</option>
        </Form.Select>
      </Form.Group>

      <Form.Group controlId="formCollection">
        <Form.Select
          aria-label="Select collection"
          value={selectedCollection}
          onChange={(e) => setSelectedCollection(e.target.value)}
        >
          <option value="">Select collection</option>
          <option value="collection_a">coll a</option>
          <option value="collection_b">coll b</option>
        </Form.Select>
      </Form.Group>

      <div className='filter-button'>
        <Button variant="primary" onClick={handleApply}>
          Apply
        </Button>
        <Button variant="secondary" onClick={handleClear}>
          Clear
        </Button>
      </div>
    </Form>
  );
}

export default Filter;
