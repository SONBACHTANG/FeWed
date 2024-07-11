// import { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import './checkout.css';
import { Link } from 'react-router-dom';

const Checkout = () => {
    // const [sameAsShipping, setSameAsShipping] = useState(false);

    return (
        <Container className='checkout-form'>
            <h2>Checkout</h2>
            <Form>
                <Row>
                    <Col md={8}>
                        {/* <h4>Shipping address</h4> */}
                        <Row>
                            <Col md={6}>
                                <Form.Group controlId="firstName">
                                    <Form.Label>First name</Form.Label>
                                    <Form.Control type="text" placeholder="First name" />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="lastName">
                                    <Form.Label>Last name</Form.Label>
                                    <Form.Control type="text" placeholder="Last name" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <Form.Group controlId="firstName">
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control type="text" placeholder="First name" />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="lastName">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="text" placeholder="Last name" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4}>
                                <Form.Label>Zip</Form.Label>
                                <Form.Select aria-label="Default select example">
                                    <option> select menu</option>
                                    <option value="1">zip 1</option>
                                    <option value="2">zip 2</option>
                                </Form.Select>
                            </Col>
                            <Col md={4}>
                                <Form.Group controlId="lastName">
                                    <Form.Label>Add code</Form.Label>
                                    <Form.Select aria-label="Default select example">
                                        <option>select menu</option>
                                        <option value="1">1</option>
                                    </Form.Select> 
                                </Form.Group>
                            </Col>
                            <Col md={4}>
                                <Form.Group controlId="lastName">
                                    <Form.Label>name</Form.Label>
                                    <Form.Select aria-label="Default select example">
                                        <option>select menu</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </Form.Select> 
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group controlId="address">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text" placeholder="Address" />
                        </Form.Group>
                        <Row>
                            <Form>
                                {['checkbox'].map((type) => (
                                    <div key={`inline-${type}`} className="mb-3">
                                    <Form.Check
                                        inline
                                        label="Shipping address is the same as my billing address" 
                                        name="group1"
                                        type={type}
                                        id={`inline-${type}-1`}
                                    />
                                    <Form.Check
                                        inline
                                        label="Save this information for next time"
                                        name="group1"
                                        type={type}
                                        id={`inline-${type}-2`}
                                    />
                                    </div>
                                ))}
                            </Form>
                        </Row>
                        <Form.Group>
                            <Form.Label>Payment</Form.Label>
                            <div>
                                <Form.Check
                                    type="radio"
                                    label="Credit card"
                                    name="paymentMethod"
                                    id="creditCard"
                                    defaultChecked
                                />
                                <Form.Check
                                    type="radio"
                                    label="Debit card"
                                    name="paymentMethod"
                                    id="debitCard"
                                />
                                <Form.Check
                                    type="radio"
                                    label="PayPal"
                                    name="paymentMethod"
                                    id="paypal"
                                />
                            </div>
                        </Form.Group>

                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Body>
                                <Card.Title>The total amount of</Card.Title>
                                <Row>
                                    <Col>Temporary amount</Col>
                                    <Col className="text-right">$53,98</Col>
                                </Row>
                                <Row>
                                    <Col>Shipping</Col>
                                    <Col className="text-right">Gratis</Col>
                                </Row>
                                <hr />
                                <Row>
                                    <Col><strong>The total amount of (including VAT)</strong></Col>
                                    <Col className="text-right"><strong>$53,98</strong></Col>
                                </Row>
                                <Button variant="primary" block>PROCEED TO SHIPPING</Button>
                            </Card.Body>
                        </Card>
                        <Card className="mt-3">
                            <Card.Body>
                                <Card.Title>Apply promo code</Card.Title>
                                <Form.Group controlId="promoCode">
                                    <Form.Control type="text" placeholder="Promo code" />
                                </Form.Group>
                                <Button variant="secondary" as={Link} to='#'>APPLY</Button>
                                <Button variant="secondary" as={Link} to='/'>back to home</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
};

export default Checkout;
