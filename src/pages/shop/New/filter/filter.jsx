import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './filter.css';

function Filter() {
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [selectedMaterials, setSelectedMaterials] = useState('');
  const [selectedCollection, setSelectedCollection] = useState('');

  const handleApply = () => {
    console.log('Filters applied:', {
      brand: selectedBrand,
      price: selectedPrice,
      materials: selectedMaterials,
      collection: selectedCollection,
    });
  };

  const handleClear = () => {
    setSelectedBrand('');
    setSelectedPrice('');
    setSelectedMaterials('');
    setSelectedCollection('');
  };

  return (
    <Form className="filter-form">
      <Form.Group controlId="formBrand">
        <Form.Select
          aria-label="Select brand"
          value={selectedBrand}
          onChange={(e) => setSelectedBrand(e.target.value)}
        >
          <option value="">Select brand</option>
          <option value="brand1">Brand 1</option>
          <option value="brand2">Brand 2</option>
          <option value="brand3">Brand 3</option>
        </Form.Select>
      </Form.Group>

      <Form.Group controlId="formPrice">
        <Form.Select
          aria-label="Select price range"
          value={selectedPrice}
          onChange={(e) => setSelectedPrice(e.target.value)}
        >
          <option value="">Select price range</option>
          <option value="low">Under $100</option>
          <option value="mid">$100 - $500</option>
          <option value="high">Over $500</option>
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
