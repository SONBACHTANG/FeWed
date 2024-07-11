import { useState } from 'react';
import { Container, Row, Col, Button, Form, Card } from 'react-bootstrap';
import './cart.css';

const Cart = () => {
    const [cart, setCart] = useState([
        { id: 1, name: 'Cotton T-shirt', price: 44, quantity: 1 },
        { id: 2, name: 'Cotton T-shirt', price: 44, quantity: 1 },
        { id: 3, name: 'Cotton T-shirt', price: 44, quantity: 1 },
    ]);

    const handleQuantityChange = (id, delta) => {
        setCart(cart.map(item => 
            item.id === id ? { ...item, quantity: item.quantity + delta } : item
        ));
    };

    const handleRemoveItem = id => {
        setCart(cart.filter(item => item.id !== id));
    };

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <Container className='cart-container'>
            <Row>
                <Col md={8}>
                    <h2>Shopping Cart</h2>
                    {cart.map(item => (
                        <Card key={item.id} className="mb-3">
                            <Card.Body>
                                <Row className="align-items-center">
                                    <Col md={2}>
                                        <img src={`path_to_image/${item.id}.jpg`} alt={item.name} style={{ width: '100%' }} />
                                    </Col>
                                    <Col md={3}>
                                        <h5>{item.name}</h5>
                                    </Col>
                                    <Col md={3}>
                                        <Button variant="outline-secondary" onClick={() => handleQuantityChange(item.id, -1)} disabled={item.quantity <= 1}>-</Button>
                                        <span className="mx-2">{item.quantity}</span>
                                        <Button variant="outline-secondary" onClick={() => handleQuantityChange(item.id, 1)}>+</Button>
                                    </Col>
                                    <Col md={2}>
                                        <span>€ {item.price * item.quantity}</span>
                                    </Col>
                                    <Col md={2}>
                                        <Button variant="outline-danger" onClick={() => handleRemoveItem(item.id)}>x</Button>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    ))}
                    <Button variant="link" className="back-to-shop" onClick={() => window.history.back()}>← Back to shop</Button>
                </Col>
                <Col md={4}>
                    <div className="summary">
                        <h3>Summary</h3>
                        <div className="summary-item">
                            <span>ITEMS {cart.length}</span>
                            <span>€ {calculateTotal()}</span>
                        </div>
                        <div className="summary-item">
                            <span>SHIPPING</span>
                            <Form.Control as="select">
                                <option>Standard-Delivery - €5.00</option>
                            </Form.Control>
                        </div>
                        <div className="summary-item">
                            <span>GIVE CODE</span>
                            <Form.Control type="text" placeholder="Enter your code" />
                        </div>
                        <div className="summary-item total">
                            <span>TOTAL PRICE</span>
                            <span>€ {calculateTotal() + 5}</span>
                        </div>
                        <Button variant="dark" className="w-100">REGISTER</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Cart;
